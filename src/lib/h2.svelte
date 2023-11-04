<script lang="ts">
  export let id: string = "";
  export let className: string = "";
</script>

<h2 class="text-4xl font-vinque my-8 {className}" {id}><slot /></h2>
