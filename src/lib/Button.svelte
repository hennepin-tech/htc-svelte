<script lang=ts>
  import type { ButtonProps } from '$types/Button'

  export let props:ButtonProps = {
    behavior: 'link',
    layout: 'block',
    outline: true,
    size: 'm',
    text: 'Button',
    type: 'primary',
    url: '#',
  }
</script>

{#if props.behavior === 'button'}
  <button 
    class="{`button 
      button--${props.type}
      button--${props.layout}
      button--${props.size}
      ${props.outline === true ? 'button--outline' : ''}
    `}"
    on:click on:mouseover on:mouseenter on:mouseleave on:focus
  >
    {props.text}
  </button>
{:else if props.behavior === 'link'}
  <a 
    href={props.url}
    class={`
      button 
      button--${props.type}
      button--${props.layout}
      button--${props.size}
      ${props.outline === true ? 'button--outline' : ''}
    `}
    tabindex="0"
    on:click on:mouseover on:mouseenter on:mouseleave on:focus
  >
    {props.text}
  </a>
{/if}

<style>
  .button {
    width: max-content;
    border-radius: var(--radius);
    font-family: 'Din', sans-serif;
    font-weight: bold;
    line-height: 1;
    color: var(--white);
    border: 3px solid transparent;
    outline: 2px solid transparent;
    outline-offset: 2px;
    transition: all 0.1s ease-in-out 0s
  }

  .button:hover {
    cursor: pointer;
    text-decoration: none;
  }

  /* Layouts */
  .button--inline { display: inline; }
  .button--block { display: block; }

  /* Sizes */
  .button--xs {
    margin: .25rem;
    padding: 4px 10px;
    font-size: 15px;
    font-weight: 500;
  }
  .button--s {
    margin: .5rem;
    padding: 7px 13px;
    font-size: 19px;
    font-weight: 500;
  }
  .button--m {
    margin: 1rem;
    padding: 10px 16px;
    font-size: 23px;
  }
  .button--l {
    margin: 1.5rem;
    padding: 13px 19px;
    font-size: 27px;
  }

  /* Types */
  /* Primary */
  .button--primary {
    background-color: var(--primary-color);
  }
  .button--primary:hover {
    background-color: var(--primary-color-dark);
    transform: scale(0.99);
  }
  .button--primary:focus {
    background-color: var(--primary-color);
    outline: var(--focus-border);
    transform: scale(0.99);
  }
  .button--primary:active {
    background-color: var(--primary-color-dark);
    outline: var(--focus-border);
    transform: scale(0.98);
  }

    /* Outline */
    .button--primary.button--outline {
      background-color: transparent;
      border: 2px solid var(--primary-color);
    }
    

  /* Secondary */
  .button--secondary {
    background-color: var(--secondary-color);
  }
  .button--secondary:hover {
    background-color: var(--secondary-color-dark);
    transform: scale(0.99);
  }
  .button--secondary:focus {
    background-color: var(--secondary-color);
    outline: var(--focus-border);
    transform: scale(0.99);
  }
  .button--secondary:active {
    background-color: var(--secondary-color-dark);
    outline: var(--focus-border);
    transform: scale(0.98);
  }

    /* Outline */
    .button--secondary.button--outline {
      background-color: transparent;
      border: 2px solid var(--secondary-color);
    }

  /* Success */
  .button--success {
    background-color: var(--success-color);
  }
  .button--success:hover {
    background-color: var(--success-color-dark);
    transform: scale(0.99);
  }
  .button--success:focus {
    background-color: var(--success-color);
    outline: var(--focus-border);
    transform: scale(0.99);
  }
  .button--success:active {
    background-color: var(--success-color-dark);
    outline: var(--focus-border);
    transform: scale(0.98);
  }

    /* Outline */
    .button--success.button--outline {
      background-color: transparent;
      border: 2px solid var(--success-color);
    }

  /* Danger */
  .button--danger {
    background-color: var(--danger-color);
  }
  .button--danger:hover {
    background-color: var(--danger-color-dark);
    transform: scale(0.99);
  }
  .button--danger:focus {
    background-color: var(--danger-color);
    outline: var(--focus-border);
    transform: scale(0.99);
  }
  .button--danger:active {
    background-color: var(--danger-color-dark);
    outline: var(--focus-border);
    transform: scale(0.98);
  }

    /* Outline */
    .button--danger.button--outline {
      background-color: transparent;
      border: 2px solid var(--danger-color);
    }

  /* Disabled */
  .button--disabled {
    background-color: var(--disabled-color);
  }
  

  .button--outline:focus {
      outline: var(--focus-border-white);
    }
</style>