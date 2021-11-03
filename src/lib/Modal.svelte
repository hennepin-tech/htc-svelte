<script lang=ts context=module>
  import Close from '$lib/icons/Close.svelte'
  import { writable } from 'svelte/store';

  export const modalOpen = writable(false);
  export const toggleModal = (store) => modalOpen.set(!store)
</script>

<script lang=ts>
  import { prevent_default } from 'svelte/internal';
  import type { ModalProps } from '$types/Modal'
  import { onMount } from 'svelte'
  
  export let props:ModalProps = {
    onMount: false,
    type: 'simple',
    theme: 'black'
  }

  onMount(() => {
    if(props.onMount){
      modalOpen.set(true)
    } else { return }
  })
  // onMount(() => props.onMount ? modalOpen.set(true) : null)
</script>

{#if $modalOpen}
  <!-- TODO: conditional rendering by type -->
  <div class="modal__overlay" on:click={() => toggleModal($modalOpen)}>
  </div>
  <div class="modal" on:click={prevent_default}>

    {#if props.type === 'header'}
      <header class="modal__header">
        <slot name="heading"/>
        <button 
          class="modal__close" 
          on:click={() => toggleModal($modalOpen)} 
          tabindex="0"
        >
          <Close props={{size: 's', stroke: '3.5', color: '#ffffff'}}/>
        </button>
      </header>
    {/if}

    {#if props.type === 'simple'}
      <button 
        class="modal__close" 
        on:click={() => toggleModal($modalOpen)} 
        tabindex="0"
      >
        <Close props={{size: 's', stroke: '3.5', color: '#ffffff'}}/>
      </button>
    {/if}
    
    <slot name="content"/>
  </div>
{/if}

<slot name="trigger"/>


<!-- TODO: refine styles -->
<style>
  .modal__overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.555);
    z-index: 2;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    color: var(--white);
    background-color: var(--blue);
    width: 500px;
    max-width: calc(100vw - 4rem);
    height: 300px;
    max-height: calc(100vh - 4rem);
    padding: 1.2rem;
    text-align: left;
    border-radius: var(--radius);
  }
  .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  :global(.modal__header h2) {
    margin: .8rem 0 1.2rem 0;
  }

  .modal__close {
    background-color: transparent;
    border: none;
    transition: transform 0.1s ease-in-out 0s;
  }

  .modal__close:hover {
    background-color: transparent;
    transform: scale(0.97);
    cursor: pointer;
  }
</style>