<script lang="ts">
  import Hero from "$lib/hero.svelte";
  import Actor from "$lib/actor.svelte";
  import H2 from "$lib/h2.svelte";
  import H3 from "$lib/h3.svelte";
  import MajorActor from "$lib/major-actor.svelte";
  import DownloadButton from "$lib/download-button.svelte";

  import StroborImg from "$lib/images/strobor.png?w=1024";
  import BeyronImg from "$lib/images/beyron.png?w=336";
  import TamImg from "$lib/images/tam.png?w=336";
  import BlueImg from "$lib/images/blue.png?w=336";
  import Image from "$lib/image.svelte";
  import Divider from "$lib/divider.svelte";
</script>

<Image
  img={StroborImg}
  alt={`Sicht auf die Stadt`}
  className="object-cover rounded my-8"
  width={740}
  height={422}
  loading="lazy"
/>

<p class="text-justify">
  In diesem Hörspiel erwartet dich eine Reise in eine mittelalterliche Welt,
  gespickt mit einem Hauch Magie. Verfolge die Abenteuer des Unteroffiziers
  Beyron und des neugierigen Mädchens Blue, deren Schicksale auf unerwartete
  Weise miteinander verknüpft sind. Lass dich mitreißen von einer fesselnden
  Erzählung voller Intrigen und überraschenden Wendungen.
</p>

<Divider />

<H2>Unsere Helden</H2>

<Hero
  name="Beyron Ladisla"
  description="Seit 22 Jahren Unteroffizier der Königsgarde und keine Ambitionen aufzusteigen. Beyron fühlt sich eher zum Alkohol hingezogen als zu seinem Beruf."
  image={BeyronImg}
/>
<Hero
  name="Tam"
  description="Nur wenigen ist Tamriel, genannt Tam, überhaupt bekannt. Fängt sie jedoch an zu sprechen, offenbart sich ein kluger Kopf. Als beste Freundin und stete Begleiterin von Beyron ist sie oftmals das gute Gewissen dieser Zweierbeziehung."
  image={TamImg}
  mirrored
/>
<Hero
  name="Blue"
  description="Ein langweiliges Leben führen wie ihre reichen Eltern? Nichts für Blue. Die weite Welt ist ein viel besserer Ort, um erwachsen zu werden als ein staubiger Klassenraum."
  image={BlueImg}
/>

<Divider />

<H2>Jetzt anhören</H2>

<a class="underline" href="#download">Auf YouTube</a><br />
<a class="underline" href="#download">Zum Herunterladen</a>

<Divider />

<H2>Würdigungen</H2>
<H3>Besetzung</H3>

<div class="flex items-center justify-evenly flex-col md:flex-row">
  <MajorActor role="Beyron Ladisla" actor="Nico Gerloff" />
  <MajorActor role="Blue" actor="Lina Schmidt" />
  <MajorActor role="Tam" actor="Vanessa Martens" />
</div>

<table class="table-fixed w-full max-w-8xl my-8">
  <Actor role="Erzähler" actor="Pascal Spielvogel" />
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

<H3>& weitere</H3>

<div class="flex items-center justify-evenly flex-col md:flex-row">
  <MajorActor role="Drehbuch" actor="Nico Gerloff" />
  <MajorActor role="Produzent" actor="Julian Tölle" />
</div>

<table class="table-fixed w-full max-w-8xl my-8">
  <Actor role="Recherche Soundeffekte" actor="Jay Mendes" />
  <Actor role="Schnitt" actor="Julian Tölle" />
  <Actor role="Website" actor="Julian Tölle" />
</table>

<H3><a href="/attributions" class="underline">Soundeffekte</a></H3>

<Divider />

<H2 id="download" className="target:animate-pulse-once">Herunterladen</H2>

<p class="my-8 flex items-center flex-col justify-center md:flex-row">
  <DownloadButton href="/">Hörspiel (mp3)</DownloadButton>
  <DownloadButton href="/">Hörspiel (FLAC)</DownloadButton>
  <DownloadButton href="/downloads/EinPfeilAmRechtenFleck-Drehbuch.pdf">
    Drehbuch (PDF)
  </DownloadButton>
</p>
