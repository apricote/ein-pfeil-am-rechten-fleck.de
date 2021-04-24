/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace paypal {
  interface Button {
    render(selector: string): void;
  }

  function Buttons(options: { createOrder: (data: unknown, actions: unknown) => unknown }): Button;
}
