# Actions

[Svelte Actions](https://svelte.dev/docs#use_action) are functions that are called when an element is created.


<section id="inView">
<h3> inView </h3>

```inView``` is an action that detects if an element is in the viewport or not. Use the ```on:enter``` & ```on:exit``` event directives to trigger a callback function when the element enters the viewport and when it exits.

```svelte
<script>
  import { inView } from '@hennepin-tech/htc-svelte'

  let content = ''
</script>

<div 
  use:inView
  on:enter={() => content = 'this thing is in the viewport!'}
  on:exit={() => content = 'this things is no longer in the viewport :('}
>
  <p>{content}</p>
</div>
```
</section>

<hr/>



