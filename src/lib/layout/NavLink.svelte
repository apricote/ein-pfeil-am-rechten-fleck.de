<script lang="ts">
  export let href: string;
  export let text: string;
</script>

<li class="block">
  <a
    class="text-amber-500 hover:text-dark-burgundy-100 focus:text-dark-burgundy-100 text-xl focus:outline-none transition"
    {href}
  >
    {text}
  </a>
</li>
