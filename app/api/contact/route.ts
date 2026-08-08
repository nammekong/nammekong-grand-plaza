import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      need,
      message,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Vui lòng nhập họ tên và số điện thoại.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY chưa được cấu hình.");

      return NextResponse.json(
        {
          success: false,
          message: "Hệ thống email chưa được cấu hình.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: "Nam Mekong Grand Plaza <onboarding@resend.dev>",
      to: ["nammekongbinhduong@gmail.com"],
      subject: `Khách hàng đăng ký tư vấn - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Khách hàng đăng ký tư vấn</h2>

          <p><strong>Họ tên:</strong> ${name}</p>
          <p><strong>Số điện thoại:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Không cung cấp"}</p>
          <p><strong>Nhu cầu:</strong> ${need || "Không cung cấp"}</p>
          <p><strong>Nội dung:</strong> ${message || "Không có"}</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);

      return NextResponse.json(
        {
          success: false,
          message: "Không thể gửi email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Đã gửi yêu cầu thành công.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra khi gửi yêu cầu.",
      },
      { status: 500 }
    );
  }
}