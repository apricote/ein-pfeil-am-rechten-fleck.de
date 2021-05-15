import paypal from "@paypal/checkout-server-sdk";

// Creating an environment
const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
const clientSecret = import.meta.env.PAYPAL_CLIENT_SECRET;

const environment =
  import.meta.env.VITE_PAYPAL_ENV === "live"
    ? new paypal.core.LiveEnvironment(clientId, clientSecret)
    : new paypal.core.SandboxEnvironment(clientId, clientSecret);

export const client = new paypal.core.PayPalHttpClient(environment);
