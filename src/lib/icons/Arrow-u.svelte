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
    <g id="Group_33" data-name="Group 33" transform="translate(1.372 1.372)">
      <line id="Line_1" data-name="Line 1" y1="12" transform="translate(6)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_2" data-name="Line 2" x1="5.996" y1="3.598" transform="translate(6.004)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" y1="3.598" x2="5.996" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 's'}
  <svg xmlns="http://www.w3.org/2000/svg" width="22.744" height="22.372" viewBox="0 0 22.744 22.372">
    <title>Arrow Up</title>
    <g id="Group_2" data-name="Group 2" transform="translate(1.372 1.372)">
      <line id="Line_1" data-name="Line 1" y1="20" transform="translate(10)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_2" data-name="Line 2" x1="10" y1="6" transform="translate(10)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" y1="6" x2="10" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="33.938" height="32.965" viewBox="0 0 33.938 32.965">
    <title>Arrow Up</title>
    <g id="Group_14" data-name="Group 14" transform="translate(1.715 1.715)">
      <line id="Line_1" data-name="Line 1" y1="30" transform="translate(15.254)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <path id="Path_6" data-name="Path 6" d="M15.254,9.153,0,0" transform="translate(15.254 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" y1="9.153" x2="15.254" transform="translate(0 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="44.117" height="43.558" viewBox="0 0 44.117 43.558">
    <title>Arrow Up</title>
    <g id="Group_16" data-name="Group 16" transform="translate(2.058 2.058)">
      <line id="Line_1" data-name="Line 1" y1="40" transform="translate(20)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <path id="Path_6" data-name="Path 6" d="M20,12,0,0" transform="translate(20 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" y1="12" x2="20" transform="translate(0 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}