<script lang=ts>
   import type { FooterProps } from '$types/Footer'
   
   export let props:FooterProps = {
      name: 'Footer'
   }
</script>

<footer>
   {props.name}
</footer>

<style>

</style>