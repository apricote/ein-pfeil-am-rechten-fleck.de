<script>
  import "../app.css";
  import NavLink from "$lib/layout/NavLink.svelte";
</script>

<header class="flex justify-center">
  <img
    height="300"
    width="300"
    alt="Logo, Illustration von einem Pfeil über einem Herz"
    src="logo.png"
  />
</header>

<nav class="flex items-center justify-center">
  <ul
    class="p-4 w-2/3 sm:w-1/3 rounded-t-2xl bg-cocoa-brown-200 divide-y divide-cocoa-brown-700 text-center"
  >
    <NavLink href="/#intro" text="Einführung" />
    <NavLink href="/#heroes" text="Unsere Helden" />
    <NavLink href="/#listen" text="Hörprobe" />
    <NavLink href="/credits" text="Besetzung" />
  </ul>
</nav>

<main class="sm:mx-16 xl:mx-72 p-4 rounded-t-2xl bg-cocoa-brown-200 font-sans">
  <slot />
</main>

<footer
  class="sm:mx-16 xl:mx-72 p-4 rounded-b-2xl bg-cocoa-brown-400 text-center"
>
  <a href="imprint" class="text-cocoa-brown-800">Impressum & Datenschutz</a>
</footer>
