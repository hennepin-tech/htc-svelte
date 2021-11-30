<script lang=ts>
  
</script>

<svelte:head>
  <title>Getting Started</title>
</svelte:head>

## Getting Started

<hr/>

To install the library, run this in the root of your Svelte project...

```shell
npm install --save @hennepin-tech/htc-svelte
```

Then initialize the global ```innerWidth``` store, and add the global style sheet in your app's ```__layout.svelte``` file...

```svelte
<!-- __layout.svelte -->
<script>
  import '@hennepin-tech/htc-svelte/base.css'
  import { innerWidth } from '@hennepin-tech/htc-svelte'

  let localWidth
  $: innerWidth.set(localWidth)
</script>

<svelte:window bind:innerWidth={localWidth}/>

<!-- your layout here -->

<style></style>
```

Then use a component!

```svelte
<script>
  import Button from '@hennepin-tech/htc-svelte'
  // or 
  // import { Button } from '@hennepin-tech/htc-svelte

  const props = {
    behavior: 'button',
    layout: 'block',
    outline: false,
    size: 'm',
    text: 'Learn More',
    type: 'primary',
  }

  const handleClick = () => alert('You clicked the button!');
</script>

<Button {props} on:click={handleClick}/>
```
