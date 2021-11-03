<script lang=ts>
  import type { TooltipProps } from '$types/Tooltip'
  import { fade } from 'svelte/transition'
  
  export let props:TooltipProps = {
    content: 'Toast Content!',
    position: 'top'
  }
  
  let visible:boolean = false
</script>

<div class="tooltip">
  {#if visible}
    <p 
      transition:fade
      class={`
        tooltip__content
        tooltip__content--${props.position}
      `}
    >
      {props.content}
    </p>
  {/if}
  <div 
    class="tooltip__element" 
    on:mouseover={() => visible = true} 
    on:focus={() => visible = true}
    on:mouseout={() => visible = false}
    on:blur={() => visible = false}
  >
    <slot/>
  </div>
</div>

<style>
  .tooltip {
    --tooltip-gray: var(--gray-700);
    position: relative;
    width: max-content;
  }
  .tooltip__content {
    width: 175px;
    min-height: 125px;
    position: absolute;
    background-color: var(--tooltip-gray);
    color: var(--white);
    border-radius: var(--radius);
    padding: 10px;
  }

  /* Top */
  .tooltip__content--top {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.2rem;
  }
  .tooltip__content--top:after {
    content: '';
    border-top: 15px solid var(--tooltip-gray);
    border-right: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid transparent;
    top: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  /* Bottom */
  .tooltip__content--bottom {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1.2rem;
  }
  .tooltip__content--bottom:after {
    content: '';
    border-top: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid var(--tooltip-gray);
    border-left: 15px solid transparent;
    bottom: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  /* Left */
  .tooltip__content--left {
    top: -115%;
  left: -40%;
  z-index: 5;
    transform: translateX(-50%);
    margin-top: 1.2rem;
  }
  .tooltip__content--left:after {
    content: '';
    border-top: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid var(--tooltip-gray);
    bottom: 40%;
    left: 108%;
    position: absolute;
    transform: translateX(-50%);
  }

  /* Right */
  .tooltip__content--right {
    top: -115%;
    left: 100%;
    transform: translateX(10%);
    margin-top: 1.2rem;
  }
  .tooltip__content--right:after {
    content: '';
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid var(--tooltip-gray);
    border-left: 15px solid transparent;
    left: -8%;
    bottom: 40%;
    position: absolute;
    transform: translateX(-50%);
  }
</style>