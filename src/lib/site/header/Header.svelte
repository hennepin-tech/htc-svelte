<script lang=ts context=module>
   import data from './headerData'
</script>
<script lang=ts>
  import { innerWidth } from '$lib/stores/innerWidth'
  import HeaderDesktop from './parts/HeaderDesktop.svelte';
  import HeaderTablet from './parts/HeaderTablet.svelte';
  import HeaderMobile from './parts/HeaderMobile.svelte';

  const headerProps = {
    banner: {
      bannerProps: {
        message: 'Masks Required on Campus. Click here for more info!',
        link: 'https://hennepintech.edu/covid_21.html'
      },
      display: true
    },
    data
  }
</script>

{#if $innerWidth >= 768}
  <HeaderDesktop props={headerProps}/>
{:else if $innerWidth >= 500}
  <HeaderTablet />
{:else}
  <HeaderMobile />
{/if}

<style>

</style>
