# Utility Classes

The following CSS utility classes are bundled with the 'styles' css module available in the library. Initialize the CSS style sheet in your app's ```__layout.svelte``` file to use these classes (and the rest of the library).

<section id="icon__button">
<h3> .icon__button </h3>

```.icon__button``` should be used when you want a simple icon only button. This class should be applied to a ```<button>``` or ```<a>``` element that wraps an icon component. To see this class in action, visit the <a href="/icons">icons page</a>.

```svelte
<script>
  import { Search } from '@hennepin-tech/htc-svelte'
</script>

<button class="icon__button">
  <Search props={{ color: '#000', size: 's', stroke: '2'}}/>  
</button>
```
</section>

<hr/>

<section id="block__link">
<h3> .block__link </h3>

```.block__link``` adds the distinct hover state, which you can see in the sidebar, to ```<a>``` elements. 

```svelte
<a href="/" class="block__link">Getting Started</a>
```
</section>