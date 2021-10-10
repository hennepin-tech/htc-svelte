<script lang=ts>
  import type { ButtonProps } from '$types/Button'

  export let props:ButtonProps = {
    text: 'Button',
    behavior: 'button',
    url: '#',
    type: 'primary'
  }
</script>

{#if props.behavior === 'button'}
  <button 
    class={`
      button 
      button--${props.type}
    `}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:focus
  >
    {props.text}
  </button>
{:else if props.behavior === 'link'}
  <a 
    href={props.url}
    class={`
      button 
      button__${props.type}
    `}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:focus
  >
    {props.text}
  </a>
{/if}

<style>
  .button {
    margin: var(--margin);
    padding: 10px 16px;
    border-radius: var(--radius);
    color: var(--white);
    font-family: 'Din', sans-serif;
    font-weight: bold;
    font-size: 23px;
    border: 3px solid transparent;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .button:hover {
    cursor: pointer;
  }

  /* Primary */
  .button--primary {
    background-color: var(--primary-color);
  }
  .button--primary:hover {
    background-color: var(--primary-color-dark);
  }
  .button--primary:focus {
    background-color: var(--primary-color);
    outline: var(--focus-border);
  }
  .button--primary:active {
    background-color: var(--primary-color-dark);
    outline: var(--focus-border);
  }

  /* Secondary */
  .button--secondary {
    background-color: var(--secondary-color);
  }
  .button--secondary:hover {
    background-color: var(--secondary-color-dark);
  }
  .button--secondary:focus {
    background-color: var(--secondary-color);
    outline: var(--focus-border);
  }
  .button--secondary:active {
    background-color: var(--secondary-color-dark);
    outline: var(--focus-border);
  }

  /* Success */
  .button--success {
    background-color: var(--success-color);
  }
  .button--success:hover {
    background-color: var(--success-color-dark);
  }
  .button--success:focus {
    background-color: var(--success-color);
    outline: var(--focus-border);
  }
  .button--success:active {
    background-color: var(--success-color-dark);
    outline: var(--focus-border);
  }

  /* Danger */
  .button--danger {
    background-color: var(--danger-color);
  }
  .button--danger:hover {
    background-color: var(--danger-color-dark);
  }
  .button--danger:focus {
    background-color: var(--danger-color);
    outline: var(--focus-border);
  }
  .button--danger:active {
    background-color: var(--danger-color-dark);
    outline: var(--focus-border);
  }

  /* Disabled */
  .button--disabled {
    background-color: var(--disabled-color);
  }
  
</style>