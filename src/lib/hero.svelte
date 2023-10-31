<script lang="ts">
  import type { ImageMetadata } from "$lib/image.svelte";
  import Image from "$lib/image.svelte";

  export let name: string;
  export let description: string;
  export let image: ImageMetadata;
  export let mirrored: boolean = false;
</script>

<div
  class={`flex flex-col md:flex-row ${
    mirrored && "md:flex-row-reverse"
  } m-8 my-12 items-center`}
>
  <Image
    img={image}
    alt={`Grafik des Charakters "${name}"`}
    className="w-48 max-w-fit rounded-full object-cover"
    width={168}
    height={168}
    loading="lazy"
  />

  <div class="p-4 md:text-left {!mirrored && 'md:text-right'}">
    <h3 class="text-4xl mb-4 font-vinque">{name}</h3>

    <p>
      {description}
    </p>
  </div>
</div>
