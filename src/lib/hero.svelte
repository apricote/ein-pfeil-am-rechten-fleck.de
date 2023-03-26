<script lang="ts">
  export let name: string;
  export let description: string;
  export let image: string;
  export let mirrored: boolean = false;
</script>

<div
  class={`flex flex-col md:flex-row ${mirrored && "md:flex-row-reverse"} m-8 items-center`}
>
  <img src={image} alt={`Grafik vom Charakter ${name}`} class="w-48 rounded-full" />

  <div class="p-4 text-center md:text-left {!mirrored && "md:text-right"}">
    <h3 class="text-4xl mb-4 font-vinque">{name}</h3>

    <p>
      {description}
    </p>
  </div>
</div>
