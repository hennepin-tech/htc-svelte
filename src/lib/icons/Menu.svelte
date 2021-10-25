<script lang=ts>
  import type { IconProps } from "./iconTypes";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 'xs'}
  <svg xmlns="http://www.w3.org/2000/svg" width="14.015" height="12.015" viewBox="0 0 14.015 12.015">
    <g id="Group_43" data-name="Group 43" transform="translate(13.076 1.169) rotate(90)">
      <line id="Line_1" data-name="Line 1" y1="12" x2="0.088" transform="translate(9.75 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_4" data-name="Line 4" y1="12" x2="0.088" transform="translate(4.794 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x1="0.088" y2="12" transform="translate(-0.162 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 's'}
  <svg xmlns="http://www.w3.org/2000/svg" width="22.013" height="16.194" viewBox="0 0 22.013 16.194">
    <g id="Group_42" data-name="Group 42" transform="translate(21.075 1.168) rotate(90)">
      <line id="Line_1" data-name="Line 1" y1="20" x2="0.126" transform="translate(13.895 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_4" data-name="Line 4" y1="20" x2="0.126" transform="translate(6.866 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x1="0.126" y2="20" transform="translate(-0.162 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="33.018" height="21.935" viewBox="0 0 33.018 21.935">
    <g id="Group_41" data-name="Group 41" transform="translate(31.578 1.671) rotate(90)">
      <line id="Line_1" data-name="Line 1" y1="30" x2="0.183" transform="translate(18.572 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_4" data-name="Line 4" y1="30" x2="0.183" transform="translate(9.205 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x1="0.183" y2="30" transform="translate(-0.162 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="43.018" height="26.541" viewBox="0 0 43.018 26.541">
    <g id="Group_40" data-name="Group 40" transform="translate(41.577 1.671) rotate(90)">
      <line id="Line_1" data-name="Line 1" y1="40" x2="0.238" transform="translate(23.124 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_4" data-name="Line 4" y1="40" x2="0.238" transform="translate(11.481 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
      <line id="Line_3" data-name="Line 3" x1="0.238" y2="40" transform="translate(-0.162 0.068)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}