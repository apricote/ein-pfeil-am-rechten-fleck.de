<script lang="ts">
  export let priceEur: number;

  function paypalLoaded() {
    paypal
      .Buttons({
        createOrder: (data, actions: any) => {
          return actions.order.create({
            // Payment will be captured in endpoint /api/process-order
            intent: "AUTHORIZE",

            purchase_units: [
              {
                amount: {
                  value: `${priceEur}`,
                },
                description: 'Hörbuch Download "Ein Pfeil am rechten Fleck"',
              },
            ],

            applicationContext: {
              brand_name: "Ein Pfeil am Rechten Fleck",
              shipping_preference: "NO_SHIPPING",
              user_action: "PAY_NOW",
            },
          });
        },
        onApprove: (data) => {
          // Sent order to backend to capture funds, save data to db and send email with download link
          console.log("onApprove", data);
        },
        onError: (data) => {
          // Show error to user
          console.log("onError", data);
        },
        onCancel: (data) => {
          console.log("onCancel", data);
        },
      })
      .render("#paypal-checkout");
  }
</script>

<svelte:head>
  <script
    src={`https://www.paypal.com/sdk/js?currency=EUR&client-id=${
      import.meta.env.VITE_PAYPAL_CLIENT_ID
    }&debug=true`}
    on:load={paypalLoaded}></script>
</svelte:head>

<div id="paypal-checkout" />
