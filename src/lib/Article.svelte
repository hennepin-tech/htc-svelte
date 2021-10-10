<script lang=ts>
   
</script>

<article>
  
</article>

<style>
  .article {
    width: clamp(300px, 70vw, 900px);
    margin: auto;
  }
  .article__header {
    margin-bottom: 1rem;
  }
  
  .article__title {
    margin: 2rem auto .5rem;
  }
  
  .article__meta {
    width: 100%;
    color: var(--gray);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: var(--border);
  }
  
  .article__author, .article__pub-date {
    display: inline-block;
    margin: 0;
    margin-bottom: .5rem;
    font-size: clamp(.8rem, 1rem, 1.1rem);
  }
  
  .article__section--two-column .article__section__inner {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
  .article__section__title {
    font-size: 1.8rem;
    width: max-content;
    padding-bottom: 5px;
    border-bottom: 5px 5px 15px #0000003f;
    margin: 2rem auto 1rem 0;
  }
  .article__section__figure {
    margin: 0;
    height: max-content;
  }
  .article__section__image {
    max-height: 500px;
    max-width: 600px;
    width: clamp(250px, 300px, 400px);
  }
  .article__section__figcaption {
    margin-top: 0.6rem;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 900px) {
    /* Articles */
    .article__meta {
      flex-direction: row;
    }

    .article__section--two-column .article__section__inner {
      flex-direction: row;
      align-items: flex-start;
    }
  }
</style>