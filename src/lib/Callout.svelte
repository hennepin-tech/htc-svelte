<script lang=ts>
  import type { CalloutProps } from '$types/Callout'

  export let props:CalloutProps = {
    image: 'https://hennepintech.edu/_images/home/1-500x500-ONLINE.jpg',
    imageAlt: undefined,
    path: '/',
    title: 'Learn More'
  }

  const goto = (path) => {
    window.location = path
  }
</script>

<button class="callout" on:click={() => goto(props.path)}>
  <a href={props.path}>
    <img class="callout__image" src={props.image} alt={props.imageAlt}>
    <header class="callout__header">
      <h2 class="callout__title">{props.title}</h2>
    </header>
  </a>
</button>

<style>
  .callout {
    width: 300px;
    height: 300px;
    overflow: hidden;
    margin: auto;
    padding: 0;
    border: none;
    border-radius: 5px;
    transition: all 0.1s ease-in-out 0s;
  }

  .callout:hover {
    transform: scale(0.99);
  }

  .callout:focus {
    outline: var(--focus-border);
    outline-offset: 2px;
    transform: scale(0.99);
  }
  .callout:active {
    outline: var(--focus-border);
    outline-offset: 2px;
    transform: scale(0.98);
  }

  .callout > a {
    position: relative;
    text-decoration: none;
  }

  .callout__image {
    height: 100%;
    width: 100%;
  }

  .callout__header {
    position: absolute;
    bottom: 0;
    background-color: rgba(50, 50, 50, 0.9);
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .callout__title {
    font-family: "Open Sans", sans-serif;
    margin: 1rem 1.5rem;
    color: #FFFFFF;
    font-size: 2rem;
  }
</style>