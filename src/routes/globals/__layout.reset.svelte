<script lang=ts>
   import Header from '$lib/site/header/Header.svelte'
   import Footer from '$lib/site/footer/Footer.svelte'
</script>

<Header />
  <slot/>
<Footer />
<style>
  :global(body) {
    min-height: 100vh;
  }
</style>