<script>
  import "../app.postcss";
  import NavLink from "$lib/layout/NavLink.svelte";
</script>

<header class="flex justify-center pt-4">
  <img height="150" width="300" />
</header>

<nav>
  <ul class="m-4 text-center justify-center">
    <NavLink href="/#intro" text="Einführung" />
    <NavLink href="/#heroes" text="Unsere Helden" />
    <NavLink href="/#listen" text="Hörprobe" />
    <NavLink href="/buy" text="Shop" />
  </ul>
</nav>

<main class="bg-amber-200 max-w-md">
  <slot />
</main>

<footer>
  <a href="imprint">Impressum & Datenschutz</a>
</footer>
