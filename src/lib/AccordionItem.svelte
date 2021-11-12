<script lang=ts>
  import { getContext, onMount } from "svelte"
  import { slide } from 'svelte/transition'
  import { quadInOut } from 'svelte/easing'
  import PortableText from '@portabletext/svelte'
  import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes'

  export let id:string = "item" + Math.random().toString(36)
  export let title:string = ''
  export let content:PortableTextBlocks = undefined
  export let expanded:boolean = false
  export let disabled:boolean = false
  export let ref:any = null
  export let index:number

  let unsubscribe = undefined
  
  const ctx:any = getContext("Accordion")

  onMount(() => {
    return () => {
      if (ctx) ctx.remove({ id })
      if (unsubscribe) unsubscribe()
    };
  });

  $: button_id = `button-${id}`
  $: if (ctx) {
    ctx.add({ id, expanded })
    unsubscribe = ctx.items.subscribe((value) => {
      expanded = value[id]
    })
  }
</script>

<li 
  class="accordion__item" 
  style={index === 0 ? `border-top: 2px solid var(--text-color)` : ''}
  data-accordion-item 
  {...$$restProps}
>
  <button
    class="accordion__item__button"
    class:accordion__item__button--expanded={expanded}
    bind:this={ref}
    type="button"
    aria-expanded={expanded}
    aria-controls={id}
    aria-disabled={disabled}
    {disabled}
    id={button_id}
    
    on:click
    on:click={() => {
      if (ctx) {
        ctx.toggle({ id, expanded: !expanded });
        if (expanded && ref && ref.getBoundingClientRect().top < 0) {
          ref.scrollIntoView();
        }
      }
    }}>
    <div class="accordion__item__title" class:accordion__item--expanded={expanded}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" style={expanded ? 'transform: rotate(90deg)translateY(-10px);' : ''}>
        <path id={`Polygon_${index}`} data-name={`Polygon ${index}`} d="M12.5,0,25,22H0Z"  fill="{expanded ? '#006BA7' : '#f26522'}"/>
      </svg>
      <h2>{title}</h2>
    </div>
  </button>
  {#if expanded}
    <div class="accordion__item__content" transition:slide="{{delay: 0, duration: 600, easing: quadInOut }}" role="region" {id} aria-labelledby={button_id} hidden={!expanded}>
      <PortableText blocks={content}/>
    </div>
  {/if}
</li>

<style>
  svg path {
    transform: translate(22px) rotate(90deg);
  }
  .accordion__item {
    margin-bottom: 0;
    min-width: 300px;
    max-width: 600px; 
    border-bottom: 2px solid var(--text-color);
    transition: all .3s ease-in-out .02s;
  } 
  .accordion__item__button {
    background-color: transparent;
    border: none;
    width: 100%;
    text-align: left;
    position: relative;
    margin-bottom: 0;
    border-radius: 0;
    transition: outline .1s ease-in-out 0s;
  }
  .accordion__item__button:focus {
    /* outline: 2px solid var(--black); */
    /* background-color: var(--gray-100); */
  }
  .accordion__item__button--expanded:focus {
    /* outline: none; */
    background-color: transparent;
  }
  .accordion__item__button:focus svg {
    transform: translateX(5px);
  }
  .accordion__item__title {
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .accordion__item__title h2{
    margin:  2rem auto 1.2rem 50px;
    font-size: 2rem;
  }
  .accordion__item__title svg {
    transition: transform .3s ease-in-out .02s
  }
  .accordion__item__content {
    margin-left: 60px;
    margin-top: 30px;
    padding-bottom: 1.2rem;
  }
</style>