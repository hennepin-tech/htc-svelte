<script lang=ts>
  import type { IconProps } from "./iconTypes";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 'xs'}
  <svg xmlns="http://www.w3.org/2000/svg" width="14.744" height="14.372" viewBox="0 0 14.744 14.372">
    <g id="Group_32" data-name="Group 32" transform="translate(1.372 1)">
      <line id="Line_1" data-name="Line 1" y2="12" transform="translate(6 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_2" data-name="Line 2" x1="5.996" y2="3.598" transform="translate(6.004 8.402)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x2="5.996" y2="3.598" transform="translate(0 8.402)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 's'}
  <svg xmlns="http://www.w3.org/2000/svg" width="22.744" height="22.372" viewBox="0 0 22.744 22.372">
    <title>Arrow Down</title>
    <g id="Group_1" data-name="Group 1" transform="translate(-124.128 -98.862)">
      <line id="Line_1" data-name="Line 1" y2="20" transform="translate(135.5 99.862)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_2" data-name="Line 2" x1="10" y2="6" transform="translate(135.5 113.862)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x2="10" y2="6" transform="translate(125.5 113.862)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="33.938" height="32.965" viewBox="0 0 33.938 32.965">
    <title>Arrow Down</title>
    <g id="Group_13" data-name="Group 13" transform="translate(-123.531 -98.612)">
      <line id="Line_1" data-name="Line 1" y2="30" transform="translate(140.5 99.862)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <path id="Path_6" data-name="Path 6" d="M15.254,0,0,9.153" transform="translate(140.5 120.709)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x2="15.254" y2="9.153" transform="translate(125.246 120.709)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="44.117" height="43.558" viewBox="0 0 44.117 43.558">
    <title>Arrow Down</title>
    <g id="Group_15" data-name="Group 15" transform="translate(-123.188 -98.362)">
      <line id="Line_1" data-name="Line 1" y2="40" transform="translate(145.246 99.862)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <path id="Path_6" data-name="Path 6" d="M20,0,0,12" transform="translate(145.246 127.861)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x2="20" y2="12" transform="translate(125.246 127.861)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}