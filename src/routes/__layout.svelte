<script lang=ts>
  import { page } from '$app/stores'
  import { scrollto } from 'svelte-scrollto'
  import Button from '$lib/Button.svelte'
  import { data } from './data';
  import * as animateScroll from "svelte-scrollto";
  import { innerWidth } from '$lib/stores/innerWidth'
  
  animateScroll.setGlobalOptions({
    offset: -30, 
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
        <a href="/">Getting Started</a>
      </li>
      <hr/>
      {#each data as parent }
        <li>
          <a href={`/${parent.anchor}`}>{parent.text}</a>
        </li>
        {#if `/${parent.anchor}` === $page.path}
        <li>
          <ul>
            {#each parent.children as {anchor, text}}
              <li>
                <a href={`${parent.anchor}/#${anchor}`} use:scrollto={`#${anchor}`}>
                  {text}
                </a>
              </li>
            {/each}
          </ul>
        </li>
        {/if}
        <hr/>
      {/each}
      <li>
        <a href="/globals">Globals</a>
      </li>
      <hr/>
      <li>
        <a href="/dev">Contributing</a>
      </li>
      {#if $page.path === '/dev'}
      <li>
        <ul>
          <li>
            <a href="/dev/architecture">Architecture Overview</a>
          </li>
          <li>
            <a href="/dev/local">Local Dev Workflow</a>
          </li>
        </ul>
      </li>
      {/if}
      <hr/>
    </ul>
  </aside>
<div>  

<main id="main-content">
  <slot />
</main>

<footer id="footer">
      <Button props = {{
        behavior: 'link',
        layout: 'block',
        outline: false,
        size: 'm',
        text: 'Github',
        type: 'primary',
        url: 'https://github.com/hennepin-tech'
      }} />
      <Button props = {{
        behavior: 'link',
        layout: 'block',
        outline: false,
        size: 'm',
        text: 'Repo',
        type: 'primary',
        url: 'https://github.com/hennepin-tech/htc-svelte'
      }} />
      <Button props = {{
        behavior: 'link',
        layout: 'block',
        outline: false,
        size: 'm',
        text: 'Website',
        type: 'primary',
        url: 'https://hennepintech.edu'
      }} />
    </footer>
  </div>
</div>

<style global>
  @import '$lib/global.module.css';

  body {
    --sidebar-bg: var(--grey-100);
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
  }

  main {
    padding: 1rem 2rem;
    width: calc(100vw - 300px - 6rem);
    margin-left: 300px;
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
    width: 300px;
    box-shadow: 5px 0 15px #00000036;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
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
    border-top: 2px solid var(--black);
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