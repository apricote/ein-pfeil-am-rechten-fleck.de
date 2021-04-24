<script lang="ts">
  export let name: string;
  export let features: string[];
  export let price: string;
  export let selected: boolean;
</script>

<div
  class="{selected
    ? 'bg-gray-100'
    : 'bg-gray-500'} flex flex-wrap items-start justify-start transition duration-500 ease-in-out border-2 border-gray-600 rounded-lg"
>
  <div class="w-full md:w-3/4">
    <div class="relative flex flex-col h-full p-8">
      <h2
        class="mb-4 {selected
          ? 'font-extrabold'
          : 'font-semibold'} transition-all tracking-widest text-gray-800 uppercase"
      >
        {name}
      </h2>
      <ul class="list-disc list-inside">
        {#each features as feature}
          <li class="mb-2 text-lg font-normal tracking-wide flex-shrink-0 h-5 text-gray-800">
            {feature}
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="w-full md:w-1/4 lg:ml-auto transition ease-in-out duration-1000">
    <div class="relative flex flex-col h-full p-8">
      <h1 class="mx-auto text-3xl leading-none">
        {price}
      </h1>
      <p
        class="{selected
          ? ''
          : 'invisible'} transition-all ease-in-out text-gray-500 duration-1000 mx-auto mt-6 text-xs"
      >
        Aktuell ausgewählt
      </p>
    </div>
  </div>
</div>
