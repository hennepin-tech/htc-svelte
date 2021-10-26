<script lang=ts>
  import { fade, fly } from 'svelte/transition'
  import { backOut } from 'svelte/easing'
  import Banner from '$lib/Banner.svelte'
  import Button from '$lib/Button.svelte'
  import Close from '$lib/icons/Close.svelte'
  import Menu from '$lib/icons/Menu.svelte'
  import Person from '$lib/icons/Person.svelte'
  import Search from '$lib/icons/Search.svelte'

  export let props = {
    banner: {
      bannerProps: {
        message: 'Masks Required',
        link: '/'
      },
      display: false
    },
    data: undefined
  }

  $:({ subNav, mainNav } = props.data)
  
  let subNavShowing = false
  let subNavShowingLabel = 'Students'

  let mobileNavOpen = false
  let node

  const openSubNav = (label) => {
    subNavShowingLabel = label
    if(!subNavShowing){
      subNavShowing = true
    } else {
      subNavShowing = false
    }
  }

  const toggleMobileNav = () => { mobileNavOpen = !mobileNavOpen }
</script>

<div style="position:relative;">
{#if props.banner}
  <Banner props={props.banner.bannerProps}/>
{/if}
<header>
  {#if subNav}
    <nav id="sub__nav">
      <ul>
        {#each subNav as {label, links}}
          <li>
            <button
            class="sub__nav__button"
            class:sub__nav__open={subNavShowing && subNavShowingLabel === label}
              on:click={() => openSubNav(label)}
            >{label}</button>
            {#if subNavShowing && subNavShowingLabel === label}
              <ul class="sub__nav__dropdown" transition:fly={{y: -45, delay: 0, duration: 400, opacity: 100}}>
                {#each links as {path, text}}
                  <li>
                    <a href={path}>{text}</a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
      <div class="icon__menu">
        <a href="/" class="icon__button">
          <Person props={{color: '#ffffff', size: 's', stroke: '2'}}/>
        </a>
        <button class="icon__button">
          <Search props={{color: '#ffffff', size: 's', stroke: '2'}}/>
        </button>
        <Button props={{ type: 'primary', text: 'Giving', behavior: 'link', layout: 'inline', size: 'xs', outline: true, url: 'https://hennepintech.edu/giving'}}/>
      </div>
    </nav>
  {/if}  

  <div id="main__nav" style={subNavShowing ? 'margin-top: 40px;' : ''}>
    <img id="main__nav__img" src="https://hennepintech.edu/_files/img/logo-htc.png" alt="Hennepin Technical College logo">
    <button class="icon__button" on:click={toggleMobileNav}>
      <Menu props={{size: 'm', stroke: '2', color: '#000'}}/>
    </button>
    {#if mobileNavOpen}
      <nav role="navigation" id="mobile__main__nav__nav" bind:this={node} transition:fly={{x: node?.offsetWidth, delay: 0, duration: 500, opacity: 100}}>
        <button class="icon__button" on:click={toggleMobileNav}><Close props={{size: 's', stroke: '3', color: '#000'}}/></button>
        <ul>
          {#each mainNav as {label, links}}
            <li class="main__nav__item">
                <h2 class="main__nav__item__title">{label}</h2>
                <ul transition:fade={{delay: 0, duration: 250, easing: backOut}}>
                  {#each links as {path, text}}
                    <li class="main__nav__item__list__item">
                      <a href={path}>{text}</a>
                    </li>
                  {/each}
                </ul>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>

</header>
</div>

<style>
  #sub__nav, #main__nav { padding: 0 1rem; }
  #sub__nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--gray-700);
    padding: .3rem 1rem;
    width: 100%;
  }
  #sub__nav > ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  #sub__nav li { margin: 0; }
  .sub__nav__button { position: relative; }
  .sub__nav__button, #sub__nav a {
    background: transparent;
    border: none;
    color: var(--white);
    font-size: .9rem;
    margin: 0;
  }
  .sub__nav__button:hover { cursor: pointer; }
  .sub__nav__button:focus { text-decoration: underline; }
  .sub__nav__button:before {
    right: calc(50% - 15px);
    border-bottom: 15px solid transparent;
    opacity: 0;
  }
  .sub__nav__button:after {
    top: 76.5%;
    right: calc(50% - 15px);
    border-bottom: 15px solid transparent;
  }
  @keyframes slideDownBefore {
    0% { top: 0px; }
    100% { top: 12px; }
  }
  @keyframes slideDownAfter {
    0% {
      border-top: 4px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 17px solid var(--gray-700);
      border-left: 17px solid transparent;
    }
    100% {
      border-top: 8px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid var(--gray-700);
      border-left: 15px solid transparent;
    }
  }
  .sub__nav__button:before,
  .sub__nav__button:after {
    position: absolute;
    content: "";
    width: 0px;
    height: 0px;
    transition: opacity 0.6s ease 0s;
  }
  .sub__nav__open:before {
    border-top: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid var(--white);
    border-left: 15px solid transparent;
    opacity: 100%;
    top: 12px;
  }
  .sub__nav__open:after {
    animation: slideDownAfter 0.4s linear 0s;
    border-top: 8px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid var(--gray-700);
      border-left: 15px solid transparent;
  }
  .sub__nav__dropdown {
    position: absolute; 
    background-color: var(--gray-700);
    bottom: -40px;
    padding: 0.7rem calc(1rem + 0.4em);
    left: 0;
    border-top: 2px solid var(--white);
    display: flex;
    align-items: center;
    gap: .6rem;
    width: 100%;
    z-index: -1;
  }
  .icon__menu {
    display: flex;
    align-items: center;
    gap: .25rem;
  }
  #mobile__main__nav__nav {
    position: absolute;
    /* right: -100%; */
    right: 0;
    top: 0;
    border: var(--border);
    background-color: var(--white);
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    padding: .5rem;
    z-index: 1001;
  }
  
  #main__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    min-height: 75px;
    background-color: var(--white);
    padding: 1.2rem 1rem;
    transition: margin-top 0.3s ease-in-out 0s;
    box-shadow: var(--bottom-shadow);
  }
  #main__nav .icon__button:focus {
    outline: 2px solid var(--black);
  }
  #main__nav__img {
    width: clamp(225px, 50%, 350px);
  }
  .main__nav__item {
    margin: 0;
    position: relative;
  }
  .main__nav__item__title {
    font-size: 1.8rem;
  }
  .main__nav__item__list__item > a { 
    padding: 5px; 
    font-size: 1.2rem;
  }
  .main__nav__item__list__item > a:hover, .main__nav__item__list__item > a:focus {
    background-color: var(--blue);
    color: var(--white);
    text-decoration: none;
  }
  .main__nav__item__list__item:last-child {
    margin-bottom: 0;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  .main__nav__item__list__item {
    margin-bottom: .5rem;
  }
</style>