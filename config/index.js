const config = {
  mainAppUrl: process.env.NEXT_PUBLIC_MAIN_APP_URL,
  wpGraphqlEndpoint: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  authorizedAdminEmail: process.env.AUTHORIZED_ADMIN_EMAIL,
  resendAuthEmail: process.env.RESEND_AUTH_EMAIL,
  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
  thriveDeskAssistantId: process.env.NEXT_PUBLIC_THRIVEDESK_ASSISTANT_ID,
};

export default config;
