<script>
  import "../app.css";
  import Image, { getPNGSrc } from "$lib/image.svelte";
  import Divider from "$lib/divider.svelte";

  import LogoImg from "$lib/images/logo.png?w=512";
</script>

<svelte:head>
  <link as="font" rel="preload" href="/vinque.ttf" />
  <title>Ein Pfeil am rechten Fleck</title>
  <meta
    name="description"
    content="In diesem Hörspiel erwartet dich eine Reise in eine mittelalterliche Welt, gespickt mit einem Hauch Magie. Verfolge die Abenteuer des Unteroffiziers Beyron und des neugierigen Mädchens Blue, deren Schicksale auf unerwartete Weise miteinander verknüpft sind. Lass dich mitreißen von einer fesselnden Erzählung voller Intrigen und überraschenden Wendungen."
  />
  <meta name="og:locale" content="de_DE" />
  <meta name="og:type" content="website" />
  <meta name="og:title" content="Hörbuch: Ein Pfeil am rechten Fleck" />
  <meta
    name="og:description"
    content="In diesem Hörspiel erwartet dich eine Reise in eine mittelalterliche Welt, gespickt mit einem Hauch Magie."
  />
  <meta name="og:image" content={getPNGSrc(LogoImg)} />
  <meta name="og:image:width" content="512" />
  <meta name="og:image:height" content="512" />
  <meta
    name="og:image:alt"
    content="Logo, Illustration von einem Pfeil über einem Herz"
  />
</svelte:head>

<header class="flex justify-center">
  <a href="/">
    <Image
      height={256}
      width={256}
      alt="Logo, Illustration von einem Pfeil über einem Herz"
      img={LogoImg}
    />
  </a>
</header>

<div class="flex items-center justify-center">
  <div class="max-w-screen-md">
    <h1 class="font-vinque text-6xl mt-4">
      Ein <span class="text-[4rem] relative bottom-2">P</span>feil am rechten
      <span class="text-red"
        ><span class="text-[4rem] relative bottom-2">F</span>leck</span
      >
    </h1>

    <main class="p-4 font-sans">
      <slot />
    </main>
    <Divider />
    <footer class="font-vinque text-lg p-8">
      <a href="/impressum" class="underline">Impressum & Datenschutz</a><br />
      <a
        href="https://github.com/apricote/ein-pfeil-am-rechten-fleck.de"
        class="underline">Source Code</a
      >
    </footer>
  </div>
</div>
