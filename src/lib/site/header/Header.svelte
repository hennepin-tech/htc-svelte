<script lang=ts>
  import { innerWidth } from '$lib/stores/innerWidth'
  import HeaderDesktop from './parts/HeaderDesktop.svelte';
  import HeaderMobile from './parts/HeaderMobile.svelte';

  export let props = {
    banner: {
      bannerProps: {
        message: 'Masks Required on Campus. Click here for more info!',
        link: 'https://hennepintech.edu/covid_21.html'
      },
      display: true
    },
    data: undefined
  }
</script>

{#if $innerWidth >= 768}
  <HeaderDesktop {props}/>

{:else}
  <HeaderMobile {props}/>
{/if}

<style>

</style>
