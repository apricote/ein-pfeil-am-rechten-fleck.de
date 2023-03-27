<script>
  import "../app.css";
</script>

<header class="flex justify-center">
  <a href="/">
    <img
      height="300"
      width="300"
      alt="Logo, Illustration von einem Pfeil über einem Herz"
      src="logo.png"
    />
  </a>
</header>

<div class="flex items-center justify-center">
  <div class="max-w-screen-md">
    <p class="font-vinque text-6xl mt-12">
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
