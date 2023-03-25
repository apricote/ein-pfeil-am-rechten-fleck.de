<script lang="ts">
  import Hero from "$lib/about/hero.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a class="text-blue-600 underline" href="https://kit.svelte.dev"
    >kit.svelte.dev</a
  > to read the documentation
</p>

<p id="intro">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in gravida
  sem. Fusce tincidunt massa quis mauris posuere dictum. Aenean malesuada odio
  at congue luctus. Quisque rutrum, est at maximus pretium, justo mi fringilla
  augue, vel dictum leo elit id arcu. Nullam lacus turpis, sagittis quis egestas
  a, tincidunt in lectus. Cras porta libero mauris, et condimentum magna
  venenatis id. Integer eu egestas lacus.
</p>

<p id="heroes">
  <Hero
    name="Beyron Ladisla"
    description="Seit 22 Jahren Unteroffizier der Königsgarde und keine Ambitionen aufzusteigen. Beyron fühlt sich eher zum Alkohol hingezogen als zu seinem Beruf."
    image=""
  />
  <Hero
    name="Tam"
    description="Nur wenigen ist Tamriel, genannt Tam, überhaupt bekannt. Fängt sie jedoch an zu sprechen offenbart sich ein kluger Kopf. Als beste Freundin und stete Begleiterin von Beyron ist sie oftmals das gute Gewissen dieser Zweierbeziehung."
    image=""
    mirrored
  />
  <Hero
    name="Blue"
    description="Ein langweiliges Leben führen wie ihre reichen Eltern? Nichts für Blue. Die weite Welt ist ein viel besserer Ort um erwachsen zu werden als ein staubiger Klassenraum."
    image=""
  />
</p>

<p id="listen">
  Cras luctus commodo pharetra. Integer sollicitudin lectus non nibh congue
  egestas. Quisque lobortis, magna vitae consectetur mollis, purus dui
  sollicitudin ligula, vel condimentum nunc justo at tellus. Quisque ut ligula
  laoreet, pellentesque ligula nec, venenatis lacus. Quisque magna nulla, mattis
  ac libero in, suscipit consectetur ex. Donec eget sem sollicitudin, varius
  massa in, sodales neque. Vivamus fermentum tempus nunc, nec ultrices ante
  faucibus nec. Vivamus vel sollicitudin velit.
</p>
