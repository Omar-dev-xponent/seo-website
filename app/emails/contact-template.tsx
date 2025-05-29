// @ts-nocheck

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Img,
  Hr,
} from "@react-email/components";

export default function ContactEmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  company = "Not provided",
  interest,
  subject,
  message,
  isDevelopmentMode = false,
  companyName = "Outreachful",
}) {
  return (
    <Html>
      <Head>
        <title>{`${companyName} - Contact Form Submission`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Preview>{`${companyName} - New Contact Form Submission`}</Preview>
      <Tailwind>
        <Body className="m-auto bg-gray-50 font-sans">
          <Container className="mx-auto p-4 max-w-2xl">
            <Section className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <Section className="h-2 bg-gradient-to-r from-[#04A7A2] to-[#05C3BD]" />
              {/* Logo Section */}
              <Section className="pt-6 pb-4 px-8 flex items-center">
                <div className="flex items-center gap-2">
                  <div>
                    <span className="text-xl font-semibold text-slate-900">
                      <span className="text-[#04A7A2] font-bold">O</span>
                      utreachful
                    </span>
                  </div>
                </div>
              </Section>
              {/* Main Content */}
              <Section className="px-8 pt-2 pb-8">
                <Text className="text-xl font-bold text-gray-800 mb-4">
                  New Contact Form Submission
                </Text>

                {isDevelopmentMode && (
                  <Text className="text-sm font-medium px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md mb-6 inline-block">
                    Development Mode Submission
                  </Text>
                )}

                <Text className="text-base leading-6 text-gray-700 mt-6 mb-2 font-semibold">
                  Contact Information:
                </Text>

                <Section className="bg-gray-50 p-4 rounded-lg mb-6">
                  <Text className="text-sm leading-6 text-gray-700 mb-2">
                    <span className="font-semibold">Name:</span> {firstName}{" "}
                    {lastName}
                  </Text>
                  <Text className="text-sm leading-6 text-gray-700 mb-2">
                    <span className="font-semibold">Email:</span> {email}
                  </Text>
                  <Text className="text-sm leading-6 text-gray-700 mb-2">
                    <span className="font-semibold">Phone:</span> {phone}
                  </Text>
                  <Text className="text-sm leading-6 text-gray-700 mb-2">
                    <span className="font-semibold">Company:</span> {company}
                  </Text>
                  <Text className="text-sm leading-6 text-gray-700 mb-2">
                    <span className="font-semibold">Interest:</span>{" "}
                    {interest.charAt(0).toUpperCase() + interest.slice(1)}
                  </Text>
                </Section>

                <Text className="text-base leading-6 text-gray-700 mt-6 mb-2 font-semibold">
                  Subject: {subject}
                </Text>

                <Section className="bg-gray-50 p-4 rounded-lg mt-2">
                  <Text className="text-sm leading-6 text-gray-700 whitespace-pre-wrap">
                    {message}
                  </Text>
                </Section>
              </Section>

              {/* Footer */}
              <Hr className="border-t border-gray-200 my-0" />
              <Section className="px-8 py-6 bg-gray-50 text-center">
                <Text className="text-xs text-gray-500">
                  This is an automated message sent from{" "}
                  <a href="https://www.outreachful.com">Outreachful.com</a>.
                </Text>
                <Text className="text-xs text-gray-500 mt-2">
                  © {new Date().getFullYear()} {companyName}. All rights
                  reserved.
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
