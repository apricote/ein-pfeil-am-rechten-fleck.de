<script lang="ts">
  export let priceEur: string;

  function paypalLoaded() {
    paypal
      .Buttons({
        createOrder: (data, actions: any) => {
          return actions.order.create({
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
      })
      .render("#paypal-checkout");
  }
</script>

<svelte:head>
  <script
    src="https://www.paypal.com/sdk/js?currency=EUR&client-id=AVcPTp_QKzuaY2IdybCl1br396M2IXmRF6zHb6nTliLrC_WD6QqLfCFJW9YmbGSiPN_OcmpMuuqTI8Rp&debug=true"
    on:load={paypalLoaded}></script>
</svelte:head>

<div id="paypal-checkout" />
