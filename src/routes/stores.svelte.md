<script lang=ts>

</script>

<svelte:head>
  <title>Stores</title>
</svelte:head>

## Stores

Stores are how global state is managed in Svelte and SvelteKit. More info on stores can be found [here](https://svelte.dev/docs#svelte_store).

<hr/>

### innerWidth

  innerWidth is a [writeable store](https://svelte.dev/docs#writable) that holds the windows innnerWidth so it can be referenced throughout your app. 

  #### Usage

  In the global __layout.svelte component, simply import the store, create some local state that is bound to the innerWidth, and write a reactive statement that sets the local state to the store.

  ```html
  <script lang=ts>
    import { innerWidth } from "htc-svelte/stores"
    let localWidth:number  
    $: innerWidth.set(localWidth)
  </script>
            
  <svelte:window bind:innerWidth={localWidth}/>
  ```