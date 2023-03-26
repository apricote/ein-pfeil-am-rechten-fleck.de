<script lang="ts">
  import Hero from "$lib/hero.svelte";
  import Actor from "$lib/actor.svelte";
  import SectionHeading from "$lib/section-heading.svelte"
</script>

<p />

<SectionHeading>Unsere Helden</SectionHeading>

<p>
  <Hero
    name="Beyron Ladisla"
    description="Seit 22 Jahren Unteroffizier der Königsgarde und keine Ambitionen aufzusteigen. Beyron fühlt sich eher zum Alkohol hingezogen als zu seinem Beruf."
    image="/beyron.png"
  />
  <Hero
    name="Tam"
    description="Nur wenigen ist Tamriel, genannt Tam, überhaupt bekannt. Fängt sie jedoch an zu sprechen offenbart sich ein kluger Kopf. Als beste Freundin und stete Begleiterin von Beyron ist sie oftmals das gute Gewissen dieser Zweierbeziehung."
    image="/tam.png"
    mirrored
  />
  <Hero
    name="Blue"
    description="Ein langweiliges Leben führen wie ihre reichen Eltern? Nichts für Blue. Die weite Welt ist ein viel besserer Ort um erwachsen zu werden als ein staubiger Klassenraum."
    image="/blue.png"
  />
</p>


<p>
  <SectionHeading>Hörprobe</SectionHeading>
</p>


<SectionHeading>Besetzung</SectionHeading>

<div class="flex items-center justify-evenly flex-col md:flex-row">
  <div class="text-center text-xl"><div class="font-vinque">Beyron Ladisla</div><div>Nico Gerloff</div></div>
  <div class="text-center text-xl"><div class="font-vinque">Blue</div><div>Lina Schmidt</div></div>
  <div class="text-center text-xl"><div class="font-vinque">Tam</div><div>Vanessa Martens</div></div>
</div>

<div class="flex items-center justify-center">

  <table class="mt-8 text-center table-fixed xl:w-2/3 divide-cocoa-brown-400">
    <Actor role="Erzähler" actor="xxx" />
    <Actor role="Madam Jolie" actor="Josephine Steckenmesser" />
    <Actor role="Bantam" actor="Timon Fuchs" />
    <Actor role="Soldat Gundolf Stock" actor="Marian Falk" />
    <Actor role="Offizier Delgado" actor="Julian Tölle" />
    <Actor role="Die Rechte Hand des Königs" actor="Julian Tölle" />
    <Actor role="Der König" actor="Timon Fuchs" />
    <Actor role="Vorsitzender der Handelsgilde" actor="Nico Gerloff" />
    <Actor role="Bruder Jotus" actor="Marius Freese" />
    <Actor role="Schreiberling" actor="Marius Freese" />
  </table>
</div>

<SectionHeading>Besetzung</SectionHeading>