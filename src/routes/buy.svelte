<script lang="ts">
  import PayPalCheckout from "$lib/buy/PayPalCheckout.svelte";
  import Plan from "$lib/buy/Plan.svelte";

  let priceEur = 10;
  const minPrice = 1;
</script>

<Plan
  name="Standard"
  features={["Hörbuch als mp3 (192kbps)"]}
  price="ab 1€"
  selected={priceEur >= 1 && priceEur < 15}
/>
<Plan
  name="Premium"
  features={["Hörbuch als mp3 (192kbps)", "Hörbuch als flac", "Drehbuch als PDF"]}
  price="ab 15€"
  selected={priceEur >= 15}
/>

<div class="flex flex-row h-10 rounded-lg relative bg-transparent mt-1">
  <label for="audiobook-price" class="text-gray-700 text-sm font-semibold"
    >Wähle deinen Preis (€):</label
  >
  <input
    name="audiobook-price"
    type="number"
    bind:value={priceEur}
    min={minPrice}
    id="foo"
    class="outline-none focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 rounded"
  />
</div>

<PayPalCheckout {priceEur} />
