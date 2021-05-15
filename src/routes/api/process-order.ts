import type { RequestHandler } from "@sveltejs/kit";

export const post: RequestHandler = async () => {
  console.log(import.meta.env.VITE_PAYPAL_CLIENT_ID);

  return { body: {} };
};
