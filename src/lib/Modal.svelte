<script lang=ts context=module>
  import { writable } from 'svelte/store';

  export const modalOpen = writable(false);
  export const toggle = (store) => modalOpen.set(!store)
</script>

<script lang=ts>
  import { prevent_default } from 'svelte/internal';
  // TODO: props
  // export let props = {
  //   type: 'simple'
  // }
  
</script>

{#if $modalOpen}
<!-- TODO: conditional rendering by type -->
<div class="modal__overlay" on:click={() => toggle($modalOpen)}>
</div>
<div class="modal" on:click={prevent_default}>
  <header class="modal__header">
    <slot name="heading"/>
    <button 
      class="modal__close" 
      on:click={() => toggle($modalOpen)} 
      tabindex="0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Icon_material-close" data-name="Icon material-close" d="M28.5,9.615,26.385,7.5,18,15.885,9.615,7.5,7.5,9.615,15.885,18,7.5,26.385,9.615,28.5,18,20.115,26.385,28.5,28.5,26.385,20.115,18Z" transform="translate(-6 -6)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>      
    </button>
  </header>
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