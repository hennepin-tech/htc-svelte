<script lang=ts>
  import { sidebar } from './sidebar';
  import { innerWidth } from '$lib/stores/innerWidth'
  let localWidth  
  $: innerWidth.set(localWidth)
</script>

<svelte:window bind:innerWidth={localWidth}/>

<div id="container">
  <aside>
    <ul>
      <li>
        <a href="/">Home</a>
        <hr/>
      </li>
      {#each sidebar as {anchor, children, text} }
        <li>
          <a href={`/#${anchor}`}>{text}</a>
        </li>
        <li>
          <ul>
            {#each children as {anchor, text}}
              <li>
                <a href={`/#${anchor}`}>{text}</a>
              </li>
            {/each}
          </ul>
        </li>
        <hr/>
      {/each}
    </ul>
  </aside>
  <main id="main-content">
    <slot />
  </main>
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

  #container {
    display: grid;
    grid-template-columns: 300px 3fr;
    grid-template-rows: auto;
  }

  main {
    padding: 1rem 2rem;
    width: calc(100vw - 300px - 4rem);
    margin-left: 300px;
  }

  aside {
    overflow-y: scroll;
    scrollbar-color: red var(--sidebar-bg);
    background-color: var(--sidebar-bg);
    font-size: 1.2rem;
    height: 100vh;
    width: 300px;
    box-shadow: 5px 0 15px #00000036;
    position: fixed;
    top: 0;
    left: 0;
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
  }

  aside > ul > li > ul > li {
    font-weight: 300;
  }

</style>