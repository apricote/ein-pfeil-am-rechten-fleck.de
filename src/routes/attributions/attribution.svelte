<script lang="ts">
  export let title: string;
  export let author: string;
  export let source: string;
  export let licenseName: string;
  export let licenseUrl: string;
</script>

"{title}" von {author}<br />
<a href={source}>{source}</a><br />
Lizenz: <a href={licenseUrl}>{licenseName}</a>
