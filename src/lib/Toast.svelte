<script lang=ts context=module>
  import { writable } from 'svelte/store'

  export const toastOpen = writable(false);
  export const toggleToast = (store) => toastOpen.set(!store)
</script>
<script lang=ts>
  import type { toastProps } from '$types/Toast'
  import { fade } from 'svelte/transition'
  import Close from '$lib/icons/Close.svelte'

  export let props:toastProps = {
    message: 'A Sample Message',
    position: 'right',
    type: 'primary'
  }
</script>

{#if $toastOpen}
  <div 
    transition:fade
    class={`
      toast
      toast--${props.type}
      toast--${props.position}
    `}>
    <div class="toast__message">
      <p>{props.message}</p>
    </div>
    <button class="toast__close" on:click={() => toggleToast($toastOpen)}>
      <Close props={{size: 'xs', stroke: '2.5', color: '#FFF'}}/>
    </button>
  </div>
{/if}

<style>
  .toast {
    --toast-spacing: 25px;
    width: 225px;
    height: 138px;
    display: grid;
    grid-template-columns: 1fr 35px;
    grid-template-rows: auto;
    position: absolute;
    bottom: var(--toast-spacing);
    z-index: 1000;
    padding: .5rem;
    border-radius: var(--radius);
    box-shadow: var(--corner-shadow);
    color: var(--white);
    font-family: 'Din', sans-serif;
    font-weight: 500;
  }

  .toast__close {
    background: none;
    border: none;
    align-self: start;
    justify-self: end;
  }

  .toast__close:hover {
    cursor: pointer;
  }

  /* svg margin override */
  :global(.toast__close svg) {
    margin: 0;
  }

  .toast__message {
    padding: 0.4em;
  }

  .toast--left { left: var(--toast-spacing); }
  .toast--center {
    left: 50%;
    transform: translateX(-50%);
  }
  .toast--right { right: var(--toast-spacing); }

  .toast--primary { background-color: var(--primary-color); }
  .toast--secondary { background-color: var(--secondary-color); }
  .toast--success { background-color: var(--success-color); }
  .toast--danger { background-color: var(--danger-color); }

</style>