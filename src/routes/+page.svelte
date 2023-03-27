<script lang="ts">
  import Hero from "$lib/hero.svelte";
  import Actor from "$lib/actor.svelte";
  import H2 from "$lib/h2.svelte";
  import H3 from "$lib/h3.svelte";
  import MajorActor from "$lib/major-actor.svelte";
</script>

<p />

<H2>Unsere Helden</H2>

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
  <H2>Hörprobe</H2>
</p>

<H2>Credits</H2>
<H3>Besetzung</H3>

<div class="flex items-center justify-evenly flex-col md:flex-row">
  <MajorActor role="Beyron Ladisla" actor="Nico Gerloff" />
  <MajorActor role="Blue" actor="Lina Schmidt" />
  <MajorActor role="Tam" actor="Vanessa Martens" />
</div>

<table class="table-fixed w-full max-w-8xl my-8">
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

<H3>& weitere Credits</H3>

<div class="flex items-center justify-evenly flex-col md:flex-row">
  <MajorActor role="Drehbuch" actor="Nico Gerloff" />
  <MajorActor role="Produzent" actor="Julian Tölle" />
</div>

<table class="table-fixed w-full max-w-8xl my-8">
  <Actor role="Recherche Soundeffekte" actor="Jay Mendes" />
  <Actor role="Schnitt" actor="Julian Tölle" />
  <Actor role="Website" actor="Julian Tölle" />
</table>
