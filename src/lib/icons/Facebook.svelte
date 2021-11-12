<script lang=ts>
  import type { IconProps } from "$types/Icon";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 'xs'}
  <svg xmlns="http://www.w3.org/2000/svg" width="8.7" height="15" viewBox="0 0 8.7 15">
    <path id="Icon_feather-facebook" data-name="Icon feather-facebook" d="M18.2,3H16.1a3.5,3.5,0,0,0-3.5,3.5V8.6H10.5v2.8h2.1V17h2.8V11.4h2.1l.7-2.8H15.4V6.5a.7.7,0,0,1,.7-.7h2.1Z" transform="translate(-10 -2.5)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
  </svg>
{:else if props.size === 's'}
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22">
    <path id="Icon_feather-facebook" data-name="Icon feather-facebook" d="M21.5,3h-3a5,5,0,0,0-5,5v3h-3v4h3v8h4V15h3l1-4h-4V8a1,1,0,0,1,1-1h3Z" transform="translate(-9.5 -2)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="18.5" height="32" viewBox="0 0 18.5 32">
    <path id="Icon_feather-facebook" data-name="Icon feather-facebook" d="M27,3H22.5A7.5,7.5,0,0,0,15,10.5V15H10.5v6H15V33h6V21h4.5L27,15H21V10.5A1.5,1.5,0,0,1,22.5,9H27Z" transform="translate(-9.5 -2)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="42" viewBox="0 0 24 42">
    <path id="Icon_feather-facebook" data-name="Icon feather-facebook" d="M32.5,3h-6a10,10,0,0,0-10,10v6h-6v8h6V43h8V27h6l2-8h-8V13a2,2,0,0,1,2-2h6Z" transform="translate(-9.5 -2)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
  </svg>
{/if}