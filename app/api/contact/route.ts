import ContactEmailTemplate from "@/app/emails/contact-template";
import config from "@/config";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the base schema for validation
const baseFormSchema = {
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  interest: z.enum(["general", "sales", "support", "other"]),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
};

// Schema with reCAPTCHA validation
const productionFormSchema = z.object({
  ...baseFormSchema,
  recaptcha: z.string().min(1, "Please complete the reCAPTCHA"),
  _devMode: z.boolean().optional(), // Flag to indicate development mode
});

// Schema without reCAPTCHA validation for development
const developmentFormSchema = z.object({
  ...baseFormSchema,
  recaptcha: z.string().optional(),
  _devMode: z.literal(true), // Must be true to use development schema
});

// Combined schema with discriminated union
const contactFormSchema = z.discriminatedUnion("_devMode", [
  productionFormSchema,
  developmentFormSchema,
]);

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Verify reCAPTCHA if we're not in development mode
    if (!validatedData._devMode) {
      const recaptchaResponse = await verifyRecaptcha(validatedData.recaptcha);
      if (!recaptchaResponse.success) {
        return NextResponse.json(
          { message: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
    } else {
      console.log("Development mode: Skipping reCAPTCHA verification");
    }

    // Format the email content
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      interest,
      subject,
      message,
      _devMode,
    } = validatedData;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Outreachful Contact Form <${config.resendAuthEmail}>`,
      to: `${config.authorizedAdminEmail}`,
      subject: `New Entry: ${subject}`,
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        company: company || "Not Provided",
        interest,
        subject,
        message,
        isDevelopmentMode: _devMode || false,
        companyName: "Outreachful",
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: data?.id,
        developmentMode: validatedData._devMode || false,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Helper function to verify reCAPTCHA
async function verifyRecaptcha(token: string) {
  const secretKey = config.recaptchaSecretKey;

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    }
  );

  return response.json();
}
