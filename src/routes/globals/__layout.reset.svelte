<script lang=ts>
  import Header from '$lib/site/header/Header.svelte'
  import Footer from '$lib/site/footer/Footer.svelte'

  import { innerWidth } from '$lib/stores/innerWidth'
  let localWidth  
  $: innerWidth.set(localWidth)
</script>

<svelte:window bind:innerWidth={localWidth}/>


<Header />
  <slot/>
<Footer />
<style>
  :global(body) {
    min-height: 100vh;
  }
</style>