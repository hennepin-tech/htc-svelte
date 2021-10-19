<script lang=ts context=module>
   import data from './headerData'
</script>
<script lang=ts>
  import { fade, fly } from 'svelte/transition'
  import { backOut } from 'svelte/easing'
  import { innerWidth } from '../stores/innerWidth'
  import Banner from '$lib/Banner.svelte'

  $:({ subNav, mainNav } = data)

  export let props = {
    banner: {
      bannerProps: {
        message: 'Masks Required',
        link: '/'
      },
      display: false
    },

  }

  let subNavShowing = false
  let subNavShowingLabel = 'Students'

  const openSubNav = (label) => {
    subNavShowingLabel = label
    if(!subNavShowing){
      subNavShowing = true
    } else {
      subNavShowing = false
    }
  }

  let dropdownOpen = false
  let dropdownOpenLabel = 'Admissions'

  const openDropdown = (label) => {
    dropdownOpenLabel = label
    if(!dropdownOpen){
      dropdownOpen = true
    } else {
      dropdownOpen = false
    }
  }
</script>

{#if props.banner}
  <Banner props={props.banner.bannerProps}/>
{/if}
<header>
  {#if subNav}
    <nav id="sub__nav">
      <ul>
        {#each subNav as {label, links}}
          <li>
            <button on:click={() => openSubNav(label)}>{label}</button>
            {#if subNavShowing && subNavShowingLabel === label}
              <ul transition:fly={{y: -45, delay: 0, duration: 300, opacity: 100}}>
                {#each links as {path, text}}
                  <a href={path}>{text}</a>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  {/if}  

  <div id="main__nav" style={subNavShowing ? 'margin-top: 40px;' : ''}>
    <img id="main__nav__img" src="https://hennepintech.edu/_files/img/logo-htc.png" alt="Hennepin Technical College logo">
    <nav role="navigation" id="main__nav__nav">
      <ul>
        {#each mainNav as {label, links}}
          <li class="main__nav__item">
            <button class="main__nav__item__button" on:click={() => openDropdown(label)}>{label}</button>
            {#if dropdownOpen && dropdownOpenLabel === label}
              <ul class="main__nav__item__dropdown" transition:fade={{delay: 0, duration: 250, easing: backOut}}>
                {#each links as {path, text}}
                  <li class="main__nav__item__dropdown__item">
                    <a href={path}>{text}</a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  </div>

</header>

<style>
  #sub__nav {
    position: relative;
    background-color: var(--gray-700);
    padding: .3rem;
    width: 100%;
  }

  #sub__nav > ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  #sub__nav li {
    margin: 0;
  }

  #sub__nav button, #sub__nav a {
    background: transparent;
    border: none;
    color: var(--white);
    font-size: .9rem;
    margin: 0;
  }

  #sub__nav button:hover {
    cursor: pointer;
  }

  #sub__nav button:focus {
    text-decoration: underline;
  }

  #sub__nav > ul > li > ul {
    position: absolute; 
    background-color: var(--gray-700);
    bottom: -40px;
    padding: .7rem;
    left: 0;
    border-top: 2px solid var(--white);
    display: flex;
    align-items: center;
    gap: .6rem;
    width: 100%;
    z-index: -1;
  }

  #main__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    min-height: 75px;
    background-color: var(--white);
    padding: 1.2rem 0.8rem;
    transition: margin-top 0.3s ease-in-out 0s;
    box-shadow: var(--bottom-shadow);
  }

  #main__nav__img {
    max-width: 350px;
  }

  #main__nav__nav > ul {
    display: flex;
    /* position: relative; */
    gap: 1rem;
  }

  .main__nav__item {
    margin: 0;
    position: relative;
    
  }

  .main__nav__item__dropdown {
    position: absolute;
    top: 40px;
    right: 0;
    box-shadow: var(--corner-shadow);
    font-size: 1.2rem;
    padding: .8em .4em;
    background-color: var(--white);
    border-radius: var(--radius);
    width: max-content;
  }

  .main__nav__item__button {
    background-color: transparent;
    border: none;
    border-radius: var(--radius);
    font-size: 1.3rem;
    margin: 0;
  }

  .main__nav__item__button:hover {
    cursor: pointer;
    background-color: #006BA712;
  }
  .main__nav__item__button:focus {
    background-color: #006BA712;
  }

</style>