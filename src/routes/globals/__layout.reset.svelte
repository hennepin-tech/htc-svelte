<script lang=ts>
  import Header from '$lib/site/header/Header.svelte'
  import Footer from '$lib/site/footer/Footer.svelte'
  import type { HeaderProps } from '$types/Header'
  import type { FooterProps } from '$types/Footer'

  import headerData from '../headerData'
  import footerData from '../footerData'

  const headerProps:HeaderProps = {
    banner: {
      bannerProps: {
        message: 'Masks Required on Campus. Click here for more info!',
        link: '/'
      },
      display: true
    },
    data: headerData
  }

  const footerProps:FooterProps = footerData

  import { innerWidth } from '$lib/stores/innerWidth'
  let localWidth  
  $: innerWidth.set(localWidth)
</script>

<svelte:window bind:innerWidth={localWidth}/>

<Header props={headerProps}/>
  <main>
    <slot/>
  </main>
<Footer props={footerProps}/>

<style>
  main {
    min-height: 100vh;
  }
</style>