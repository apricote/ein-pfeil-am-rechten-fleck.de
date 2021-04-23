<script lang="ts">
  export let href: string;
  export let text: string;
</script>

<li class="block w-1/2 bg-amber-800">
  <a
    class="text-gray-300 hover:text-amber-200 focus:text-amber-200 focus:outline-none transition"
    alt=""
    {href}
  >
    {text}
  </a>
</li>
