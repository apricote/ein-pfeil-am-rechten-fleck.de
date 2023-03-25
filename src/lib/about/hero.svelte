<script lang="ts">
  export let name: string;
  export let description: string;
  export let image: string;
  export let mirrored: boolean = false;
</script>

<div
  class={`flex flex-col md:flex-row ${mirrored && "md:flex-row-reverse"} m-8`}
>
  <img src={image} alt={`Grafik vom Charakter ${name}`} class="p-4" />

  <div>
    <h3 class="text-4xl pb-4 font-vinque">{name}</h3>

    <p>
      {description}
    </p>
  </div>
</div>
