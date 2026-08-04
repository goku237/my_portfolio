import { siteConfig } from "@/data/site";

export const dynamic = "force-dynamic";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  homepage: string | null;
  updated_at: string;
};

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "portfolio",
};

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${siteConfig.githubUsername}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100&sort=updated`,
        { headers, next: { revalidate: 3600 } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return Response.json(
        { error: "GitHub API unavailable" },
        { status: 502 }
      );
    }

    const user = await userRes.json();
    const repos: Repo[] = await reposRes.json();

    const languageCounts: Record<string, number> = {};
    for (const repo of repos) {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] ?? 0) + 1;
      }
    }
    const languages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }));

    const featured = repos
      .filter((r) => !r.fork && (r.stargazers_count > 0 || r.language))
      .slice(0, 6);

    return Response.json({
      user: {
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
        bio: user.bio,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
      },
      languages,
      repos,
      featured,
    });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to fetch GitHub" },
      { status: 500 }
    );
  }
}
