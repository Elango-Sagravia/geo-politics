import { query } from "@/lib/db";

export async function GET(request) {
  try {
    // Extract campaign ID from the query parameters
    const campaignId = 286;

    if (!campaignId) {
      return new Response(
        JSON.stringify({ error: "campaign_id is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Convert 10:30 PM IST to UTC (10:30 PM IST = 5:00 PM UTC)
    const openTimeUTC = "18:00:00";

    // SQL to fetch users who opened the specified campaign after 10:30 PM IST
    const sql = `
      SELECT DISTINCT u.id, u.email, u.uniqueid
      FROM users u
      JOIN emails_open eo ON u.id = eo.user_id
      WHERE eo.campaign_id = $1
        AND TO_CHAR(eo.opened_at, 'HH24:MI:SS') > $2
    `;

    // Execute the query
    const result = await query(sql, [campaignId, openTimeUTC]);

    // Return the result as JSON
    return new Response(
      JSON.stringify({
        campaign_id: campaignId,
        users: result.rows, // List of users who opened the campaign
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
