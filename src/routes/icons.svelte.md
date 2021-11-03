<script lang=ts context=module>
  const glob = import.meta.globEager('../lib/icons/*.svelte')
  const icons = Object.entries(glob).map((e) => ( { path: e[0], component: e[1] } ))
</script>
<script lang=ts>
  import type { IconProps } from '$types/Icon'
  import Toast, { toggleToast, toastOpen } from '$lib/Toast.svelte'

  const iconProps:IconProps = {
    size: 'm',
    color: '#000',
    stroke: '3'
  }

  let toastMessage:string

  const copyIcon = (icon) => { 
    let name = icon.path.replace('../lib/icons/', '').replace(/\.[^/.]+$/, '')
    toastMessage = `Copied the ${name} Icon!`
    navigator.clipboard.writeText(`import { ${name} } from '@hennepin-tech/htc-svelte'`)
    .then(() => {
      toastOpen.set(true)
      setTimeout(() => toastOpen.set(false), 3000)
    })
    .catch(err => console.log(err))
  }
</script>

  # Icons

  <hr/>

  #### Props

  | Prop   | Type                    | Default |
  |--------|-------------------------|---------|
  | color  | string                  | #000000 |
  | size   | string (s, m, l, xl)    | s       |
  | stroke | string (2, 2.5, 3, 3.5) | 2       |

  To copy the import code for an icon, just click on it! 

  <div id="icon-grid">
    {#each icons as i}
      <button class="icon__button" on:click={() => copyIcon(i)}>
        <svelte:component this={i.component.default} props={iconProps}/>
      </button>
    {/each}
  </div>

  <Toast props={{ message: toastMessage, position: 'center', type: 'primary' }}/>

<style>
  #icon-grid {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1.5em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  table thead tr {
    background-color: var(--blue);
    color: #ffffff;
    text-align: left;
  }
  th, td {
    padding: 12px 15px;
  }
  table tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  table tbody tr:nth-of-type(even) {
      background-color: var(--gray-100);
  }
  table tbody tr:last-of-type {
      border-bottom: 2px solid var(--blue);
  }
</style>