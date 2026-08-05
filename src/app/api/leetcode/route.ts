import { siteConfig } from "@/data/site";

export const dynamic = "force-dynamic";

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";

const PROFILE_QUERY = `query userPublicProfile($username: String!) {
  matchedUser(username: $username) {
    username
    profile {
      realName
      userAvatar
      ranking
    }
    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }
  }
}`;

function difficultyCount(data: { difficulty: string; count: number }[], level: string) {
  return data.find((d) => d.difficulty === level)?.count ?? 0;
}

export async function GET() {
  try {
    const res = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: PROFILE_QUERY,
        variables: { username: siteConfig.leetcodeUsername },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return Response.json(
        { error: "LeetCode API unavailable" },
        { status: 502 }
      );
    }

    const json = await res.json();
    const matchedUser = json.data?.matchedUser;

    if (!matchedUser) {
      return Response.json(
        { error: "LeetCode user not found" },
        { status: 404 }
      );
    }

    const submissions = matchedUser.submitStats?.acSubmissionNum ?? [];

    return Response.json({
      username: matchedUser.username,
      realName: matchedUser.profile?.realName ?? null,
      ranking: matchedUser.profile?.ranking ?? null,
      totalSolved: difficultyCount(submissions, "All"),
      easySolved: difficultyCount(submissions, "Easy"),
      mediumSolved: difficultyCount(submissions, "Medium"),
      hardSolved: difficultyCount(submissions, "Hard"),
    });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to fetch LeetCode" },
      { status: 500 }
    );
  }
}
