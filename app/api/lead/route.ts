import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mobile } = body;

    if (!name || !mobile) {
      return NextResponse.json(
        { error: "Name and mobile number are required" },
        { status: 400 }
      );
    }

    // Call the Neodove CRM integration endpoint
    const crmUrl = "https://9f718039-3c47-451b-8af0-4cc71d93d488.neodove.com/integration/custom/9f33eef3-be03-42f8-a6eb-8ff3c67c7409/leads";

    const response = await fetch(crmUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        mobile: Number(mobile),
        email: "info@neodove.com",
        detail: "Popup Form Lead",
        detail2: "Stamina 69 Lead"
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("CRM Response Error Code:", response.status, errorText);
      return NextResponse.json(
        { error: `CRM returned status code ${response.status}` },
        { status: response.status }
      );
    }

    let responseData = {};
    try {
      responseData = await response.json();
    } catch {
      // Endpoint might return non-JSON or success string
      responseData = { message: "Lead submitted successfully" };
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error: any) {
    console.error("Lead API Route Error Details:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
