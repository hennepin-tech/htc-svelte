<script lang=ts>
  import type { IconProps } from "./iconTypes";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 's'}
  <svg xmlns="http://www.w3.org/2000/svg" width="22.372" height="22.744" viewBox="0 0 22.372 22.744">
    <title>Arrow Right</title>
    <g id="Group_3" data-name="Group 3" transform="translate(21 1.372) rotate(90)">
      <line id="Line_1" data-name="Line 1" y1="20" transform="translate(10)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_2" data-name="Line 2" x1="10" y1="6" transform="translate(10)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" y1="6" x2="10" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="32.965" height="33.938" viewBox="0 0 32.965 33.938">
    <title>Arrow Right</title>
    <g id="Group_18" data-name="Group 18" transform="translate(1.25 32.223) rotate(-90)">
      <line id="Line_1" data-name="Line 1" y2="30" transform="translate(15.254 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <path id="Path_6" data-name="Path 6" d="M15.254,0,0,9.153" transform="translate(15.254 20.847)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x2="15.254" y2="9.153" transform="translate(0 20.847)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="43.558" height="44.116" viewBox="0 0 43.558 44.116">
    <title>Arrow Right</title>
    <g id="Group_20" data-name="Group 20" transform="translate(1.5 42.058) rotate(-90)">
      <line id="Line_1" data-name="Line 1" y2="40" transform="translate(20 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <path id="Path_6" data-name="Path 6" d="M20,0,0,12" transform="translate(20 28)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x2="20" y2="12" transform="translate(0 28)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}