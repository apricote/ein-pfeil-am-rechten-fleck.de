<script>
  import "../app.css";

  import LogoImg from "$lib/images/logo.png?width=256&format=webp;png&srcset";
</script>

<header class="flex justify-center">
  <a href="/">
    <img
      height="256"
      width="256"
      alt="Logo, Illustration von einem Pfeil über einem Herz"
      srcset={LogoImg}
    />
  </a>
</header>

<div class="flex items-center justify-center">
  <div class="max-w-screen-md">
    <p class="font-vinque text-6xl mt-8">
      Ein <span class="text-[4rem] relative bottom-2">P</span>feil am rechten
      <span class="text-red-500"
        ><span class="text-[4rem] relative bottom-2">F</span>leck</span
      >
    </p>

    <main class="p-4 font-sans">
      <slot />
    </main>
  </div>
</div>
