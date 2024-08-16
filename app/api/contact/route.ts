import SendEmail from "@/lib/transporter";
import { NextRequest, NextResponse } from "next/server";

interface contactType {
  from: string;
  subject: string;
  text: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data: contactType = await req.json();

  const response = await SendEmail(data);

  if (response.status === 200) {
    return Response.json({
      message: "done",
      status: 200,
    });
  } else {
    return Response.json({
      message: "not sended",
      status: 500,
    });
  }
}
