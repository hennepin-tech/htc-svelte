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
    <g id="Group_4" data-name="Group 4" transform="translate(121.234 -124.128) rotate(90)">
      <line id="Line_1" data-name="Line 1" y2="20" transform="translate(135.5 99.862)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_2" data-name="Line 2" x1="10" y2="6" transform="translate(135.5 113.862)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x2="10" y2="6" transform="translate(125.5 113.862)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="32.965" height="33.938" viewBox="0 0 32.965 33.938">
    <g id="Group_17" data-name="Group 17" transform="translate(1.715 32.223) rotate(-90)">
      <line id="Line_1" data-name="Line 1" y1="30" transform="translate(15.254)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <path id="Path_6" data-name="Path 6" d="M15.254,9.153,0,0" transform="translate(15.254 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" y1="9.153" x2="15.254" transform="translate(0 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="43.558" height="44.116" viewBox="0 0 43.558 44.116">
    <g id="Group_19" data-name="Group 19" transform="translate(2.058 42.058) rotate(-90)">
      <line id="Line_1" data-name="Line 1" y1="40" transform="translate(20)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <path id="Path_6" data-name="Path 6" d="M20,12,0,0" transform="translate(20 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" y1="12" x2="20" transform="translate(0 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}