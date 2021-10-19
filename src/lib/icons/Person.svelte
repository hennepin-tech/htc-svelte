<script lang=ts>
  import type { IconProps } from "./iconTypes";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 's'}
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
  <g id="Group_5" data-name="Group 5" transform="translate(-226.5 -95)">
    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(231 95)" fill="none" stroke={props.color} stroke-width={props.stroke}>
      <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
      <circle cx="6.5" cy="6.5" r="5.5" fill="none"/>
    </g>
    <path id="Path_2" data-name="Path 2" d="M227.149,108.308v-4.752h20v4.752" transform="translate(0.351 6.692)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
  </g>
</svg>

{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="32.5" height="31.25" viewBox="0 0 32.5 31.25">
    <g id="Group_23" data-name="Group 23" transform="translate(-226.25 -95)">
      <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(233 95)" fill="none" stroke={props.color} stroke-width={props.stroke}>
        <ellipse cx="9.837" cy="9.587" rx="9.837" ry="9.587" stroke="none"/>
        <ellipse cx="9.837" cy="9.587" rx="8.587" ry="8.337" fill="none"/>
      </g>
      <path id="Path_2" data-name="Path 2" d="M227.149,110.565v-7.009h30v7.009" transform="translate(0.351 14.435)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="41.5" viewBox="0 0 43 41.5">
    <g id="Group_24" data-name="Group 24" transform="translate(-226 -95)">
      <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(234.833 95)" fill="none" stroke={props.color} stroke-width={props.stroke}>
        <ellipse cx="13.117" cy="12.783" rx="13.117" ry="12.783" stroke="none"/>
        <ellipse cx="13.117" cy="12.783" rx="11.617" ry="11.283" fill="none"/>
      </g>
      <path id="Path_2" data-name="Path 2" d="M227.149,112.9v-9.345h40V112.9" transform="translate(0.351 22.098)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}