<script lang=ts>
  import type { CardProps } from '$types/Card'

  export let props:CardProps = {
    date: undefined,
    desc: '',
    image: undefined,
    imageAlt: undefined,
    path: '/',
    title: 'Learn More'
  }
</script>

<article class="card">
  <a href="/">
    <img class="card__image" src={props.image} alt={props.imageAlt}> 
    <header class="card__header"><h2 class="card__title">{props.title}</h2> 
      {#if props.date}
        <span class="card__pub-date">{props?.date}</span> 
      {/if}
      <p class="card__description">{props.desc}</p>
    </header>
  </a>
</article>

<style>
  .card {
    width: 350px;
    height: 350px;
    max-width: 350px;
    border-radius: 5px;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.438);
    margin: auto;
  }
  .card > a:hover {
    text-decoration: unset;
  }
  .card:hover .card__title {
    text-decoration: underline;
  }
  .card__image {
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }
  .card__header {
    padding: 0.75rem 1.2rem;
  }
  .card__title {
    font-size: 2rem;
    margin: 0.5rem auto;
  }
  .card__pub-date {
    font-size: 1rem;
  }
  .card__pub-date:hover {
    text-decoration: unset;
  }
  .card__description {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
  .card__description:hover {
    text-decoration: unset;
  }
</style>