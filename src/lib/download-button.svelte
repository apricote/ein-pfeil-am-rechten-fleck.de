<script lang="ts">
  export let href: string;
</script>

<a
  class="p-4 m-4 border rounded-md border-red hover:border-yellow-400 hover:bg-yellow-800 transition-colors duration-500 ease-in-out"
  target="_blank"
  {href}
>
  <slot />
</a>
