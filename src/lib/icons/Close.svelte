<script lang=ts>
  import type { IconProps } from "./iconTypes";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 's'}
<svg xmlns="http://www.w3.org/2000/svg" width="22.828" height="22.828" viewBox="0 0 22.828 22.828">
  <title>Close</title>
  <g id="Group_29" data-name="Group 29" transform="translate(21.483 1.283) rotate(90)">
    <line id="Line_1" data-name="Line 1" y1="20" x2="20" transform="translate(0.131 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    <line id="Line_3" data-name="Line 3" x2="20" y2="20" transform="translate(0.131 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
  </g>
</svg>

{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="33.536" height="33.536" viewBox="0 0 33.536 33.536">
    <title>Close</title>
    <g id="Group_30" data-name="Group 30" transform="translate(31.836 1.637) rotate(90)">
      <line id="Line_1" data-name="Line 1" y1="30" x2="30" transform="translate(0.131 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x2="30" y2="30" transform="translate(0.131 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="44.243" height="44.243" viewBox="0 0 44.243 44.243">
    <title>Close</title>
    <g id="Group_31" data-name="Group 31" transform="translate(42.19 1.99) rotate(90)">
      <line id="Line_1" data-name="Line 1" y1="40" x2="40" transform="translate(0.131 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x2="40" y2="40" transform="translate(0.131 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}