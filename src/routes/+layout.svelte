<script>
  import "../app.css";
  import Image from "$lib/image.svelte";

  import LogoImg from "$lib/images/logo.png?w=512";
</script>

<svelte:head>
  <title>Ein Pfeil am rechten Fleck</title>
  <meta name="description" content="TODO" />
  <link as="font" rel="preload" href="/vinque.ttf" />
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
    <footer class="font-vinque text-lg border-t-[1px] p-8">
      <a href="/impressum" class="underline">Impressum & Datenschutz</a><br />
      <a
        href="https://github.com/apricote/ein-pfeil-am-rechten-fleck.de"
        class="underline">Source Code</a
      >
    </footer>
  </div>
</div>
