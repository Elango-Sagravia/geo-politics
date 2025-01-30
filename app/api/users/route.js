import { query } from "@/lib/db";

// GET API - Fetch users with null zbStatus
export async function GET() {
  try {
    const getUsersQuery = `
      SELECT email, uniqueid 
      FROM users 
      WHERE zbStatus IS NULL;
    `;

    const result = await query(getUsersQuery);

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

// POST API - Update zbStatus and zbSubStatus
// export async function POST(request) {
//   try {
//     const { uniqueid, zbStatus, zbSubStatus } = await request.json();

//     console.log(uniqueid, zbStatus, zbSubStatus);

//     if (!uniqueid || !zbStatus) {
//       return new Response(
//         JSON.stringify({ success: false, message: "Missing required fields" }),
//         { status: 400 }
//       );
//     }

//     const updateUserQuery = `
//       UPDATE users
//       SET zbStatus = $1, zbSubStatus = $2, updated_at = NOW()
//       WHERE uniqueid = $3
//       RETURNING id, email, zbStatus, zbSubStatus;
//     `;

//     const result = await query(updateUserQuery, [
//       zbStatus,
//       zbSubStatus,
//       uniqueid,
//     ]);

//     if (result.rows.length === 0) {
//       return new Response(
//         JSON.stringify({ success: false, message: "User not found" }),
//         { status: 404 }
//       );
//     }

//     return new Response(
//       JSON.stringify({ success: true, user: result.rows[0] }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error updating user:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       { status: 500 }
//     );
//   }
// }
