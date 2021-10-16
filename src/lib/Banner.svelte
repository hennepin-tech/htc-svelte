<script lang=ts>
  import type { BannerProps } from '$types/Banner'

  export let props:BannerProps = {
    message: 'HTC is closed due to incliment weather - click here for info.',
    link: '#'
   }
</script>

<a class="banner" href={props.link}>
  <span class="banner__message">{props.message}</span>
</a>

<style>
  .banner {
    display: block;
    width: 100%;
    max-height: 50px;
    margin: 0;
    padding: 1.2rem;
    background-color: var(--orange);
  }

  .banner__message {
    display: block;
    color: var(--white);
    font-size: calc(12px + .8vw);
    font-weight: 700;
    text-align: center;
    margin: auto;
  }

  .banner:hover {
    text-decoration: none;
  }

  .banner:hover .banner__message {
    text-decoration: underline;
  }
</style>