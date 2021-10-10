<script lang=ts>
  import type { CalloutProps } from '$types/Callout'

  export let props:CalloutProps = {
    image: 'https://hennepintech.edu/_images/home/1-500x500-ONLINE.jpg',
    imageAlt: undefined,
    path: '/',
    title: 'Learn More'
  }
</script>

<article class="callout">
  <a href={props.path}>
    <img class="callout__image" src={props.image} alt={props.imageAlt}>
    <header class="callout__header">
      <h2 class="callout__title">{props.title}</h2>
    </header>
  </a>
</article>

<style>
  .callout {
    width: 300px;
    height: 300px;
    overflow: hidden;
    margin: auto;
    border-radius: 5px;
  }

  .callout > a {
    position: relative;
    text-decoration: none;
  }

  .callout__image {
    height: 100%;
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