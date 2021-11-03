<script lang=ts>
  import { page } from '$app/stores'
  import { scrollto } from 'svelte-scrollto'
  import { data } from './data';
  import * as animateScroll from "svelte-scrollto";
  import { innerWidth } from '$lib/stores/innerWidth'
  
  animateScroll.setGlobalOptions({
    offset: -100, 
  })
  
  let localWidth  
  $: innerWidth.set(localWidth)
</script>

<svelte:window bind:innerWidth={localWidth}/>

<header id="globalHeader">
  <img src="https://hennepintech.edu/_files/img/logo-htc.png" alt="Hennepin Technical College's Logo">
  <span style="font-size: 1.2rem;">htc-svelte | the Svelte Implementation of HTC's Design System</span>
</header>

<div id="container">
  <aside>
    <ul>
      <li>
        <a class="block__link" href="/">Getting Started</a>
      </li>
      {#each data as parent }
        <li>
          <a class="block__link" href={`/${parent.anchor}`}>{parent.text}</a>
        </li>
        {#if `/${parent.anchor}` === $page.path}
        <li>
          <ul>
            {#each parent.children as {anchor, text}}
              <li>
                <a class="block__link" href={`${parent.anchor}/#${anchor}`} use:scrollto={`#${anchor}`}>
                  {text}
                </a>
              </li>
            {/each}
          </ul>
        </li>
        {/if}
      {/each}
      <li>
        <a class="block__link" href="/globals">Globals</a>
      </li>
      <li>
        <a class="block__link" href="/utils">Utility Classes</a>
      </li>
      {#if $page.path === '/utils'}
      <li>
        <ul>
          <li>
            <a class="block__link" href="/utils/#anchor" use:scrollto={'#icon__button'}>icon__button</a>
          </li>
        </ul>
      </li>
      {/if}
      <li>
        <a class="block__link" href="/icons">Icons</a>
      </li>
      <li>
        <a class="block__link" href="/dev">Contributing</a>
      </li>
      {#if $page.path === '/dev'}
      <li>
        <ul>
          <li>
            <a class="block__link" href="/dev/architecture">Architecture Overview</a>
          </li>
          <li>
            <a class="block__link" href="/dev/local">Local Dev Workflow</a>
          </li>
        </ul>
      </li>
      {/if}
    </ul>
  </aside>
<div>  

<main id="main-content">
  <slot />
</main>

  </div>
</div>

<style global>
  @import '$lib/global.module.css';

  body {
    --sidebar-bg: var(--white);
  }

  hr {
    border: 1px solid black;
    margin-bottom: 15px;
  }

  #globalHeader {
    height: 70px;
    background-color: var(--white);
    box-shadow: var(--bottom-shadow);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 100%;
  }

  #container {
    display: grid;
    grid-template-columns: 300px 3fr;
    grid-template-rows: auto;
    min-height: 100vh;
  }

  main {
    padding: 1rem 4rem;
    width: calc(100vw - 250px - 6rem);
    margin-left: 250px;
    margin-top: 70px;
  }

  :global(pre) {
    margin-bottom: 1.2rem !important;
  }

  aside {
    overflow-y: scroll;
    scrollbar-color: var(--blue) var(--sidebar-bg);
    background-color: var(--sidebar-bg);
    font-size: 1.2rem;
    min-height: calc(100vh - 70px);
    width: 250px;
    box-shadow: 5px 15px 15px #00000036;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  ul {
    list-style: none;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: .4rem;
  }
  
  aside > ul > li {
    font-weight: 700;
    margin-top: 20px;
  }

  aside > ul > li > ul > li {
    font-weight: 300;
  }

  #footer {
    min-height: 100px;
    margin-left: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(100vw - 315px - 4rem);
    padding: 2rem;
    margin-top: 40px;
  }
  #footer a {
    font-size: 1.2rem;
  }

</style>