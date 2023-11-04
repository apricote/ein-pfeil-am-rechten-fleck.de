<script lang="ts" context="module">
  export type ImageMetadata = {
    format: "webp" | "png" | "avif";
    src: string;
  }[];

  export const getPNGSrc = (img: ImageMetadata) => {
    return img.find(({ format }) => format === "png")?.src;
  };

  const mimeType: Record<string, string> = {
    webp: "image/webp",
    png: "image/png",
    avif: "image/avif",
  };
</script>

<script lang="ts">
  export let className: string = "";
  export let alt: string;
  export let img: ImageMetadata;
  export let width: number;
  export let height: number;
  export let loading: "lazy" | undefined = undefined;

  const sources = img.map(({ format, src }) => ({
    format: mimeType[format],
    srcset: src,
  }));
  const pngSrc = getPNGSrc(img);
</script>

<picture class={className}>
  {#each sources as { format, srcset }}
    <source type={format} {srcset} />
  {/each}
  <img src={pngSrc} {width} {height} {alt} class={className} {loading} />
</picture>
