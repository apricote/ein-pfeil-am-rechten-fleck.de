<script lang="ts">
  export let href: string;
</script>

<a class="p-4 m-4 underline text-lg" target="_blank" {href}>
  <slot />
</a>
