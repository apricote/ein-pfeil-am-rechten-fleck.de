/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace paypal {
  interface Button {
    render(selector: string): void;
  }

  interface ButtonOptions {
    createOrder: (data: unknown, actions: unknown) => unknown;
    onApprove: (data: unknown, actions: unknown) => unknown;
    onCancel: (data: unknown) => unknown;
    onError: (data: unknown) => unknown;
  }

  function Buttons(options: ButtonOptions): Button;
}
