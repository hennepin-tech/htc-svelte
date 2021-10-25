<script lang=ts>
  import Header from '$lib/site/header/Header.svelte'
  import Footer from '$lib/site/footer/Footer.svelte'
  import type { HeaderData, HeaderProps } from '$types/Header'

  import data from '../headerData'

  const headerData:HeaderProps = {
    banner: {
      bannerProps: {
        message: 'Masks Required on Campus. Click here for more info!',
        link: '/'
      },
      display: true
    },
    data: data
  }

  import { innerWidth } from '$lib/stores/innerWidth'
  let localWidth  
  $: innerWidth.set(localWidth)
</script>

<svelte:window bind:innerWidth={localWidth}/>


<Header props={headerData}/>
  <main>
    <slot/>
  </main>
<Footer />
<style>
  :global(body) {
    min-height: 100vh;
  }
</style>