// Environment configuration with validation

const requiredEnvVars = {
  VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  VITE_SITE_URL: import.meta.env.VITE_SITE_URL,
};

const optionalEnvVars = {
  VITE_GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID,
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
};

// Validate required variables in production
const missingVars = Object.entries(requiredEnvVars)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0) {
  const message = `Missing required environment variables: ${missingVars.join(', ')}`;
  
  if (import.meta.env.PROD) {
    console.error(message);
  } else {
    console.warn(message, '\nPlease check your .env file');
  }
}

export const config = {
  emailjs: {
    serviceId: requiredEnvVars.VITE_EMAILJS_SERVICE_ID || '',
    templateId: requiredEnvVars.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: requiredEnvVars.VITE_EMAILJS_PUBLIC_KEY || '',
    isConfigured: !!(
      requiredEnvVars.VITE_EMAILJS_SERVICE_ID &&
      requiredEnvVars.VITE_EMAILJS_TEMPLATE_ID &&
      requiredEnvVars.VITE_EMAILJS_PUBLIC_KEY
    ),
  },
  site: {
    url: requiredEnvVars.VITE_SITE_URL || 'https://coder.com',
  },
  analytics: {
    gaTrackingId: optionalEnvVars.VITE_GA_TRACKING_ID,
  },
  api: {
    baseUrl: optionalEnvVars.VITE_API_BASE_URL,
  },
};

export default config;
