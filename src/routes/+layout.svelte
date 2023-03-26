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
  <div class="w-5/6 md:w-2/3 2xl:w-1/2 bg-yellow-300 rounded-2xl">
    <p class="font-vinque text-yellow-00 text-6xl text-center mt-12">Ein <span class="text-[4rem] relative bottom-2">P</span>feil am rechten <span class="text-red-500"><span class="text-[4rem] relative bottom-2">F</span>leck</span></p>

    <main class="p-4 font-sans">
      <slot />
    </main>

    <footer class=" p-4 bg-yellow-700 rounded-b-2xl text-center">
      <a href="imprint" class="text-cocoa-brown-800">Impressum & Datenschutz</a>
    </footer>
  </div>
</div>
