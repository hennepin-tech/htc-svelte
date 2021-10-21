<script lang=ts>
  import type { IconProps } from "./iconTypes";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 'xs'}
  <svg xmlns="http://www.w3.org/2000/svg" width="15.265" height="15.265" viewBox="0 0 15.265 15.265">
    <g id="Group_39" data-name="Group 39" transform="translate(-227 -95)">
      <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(227 95)" fill="none" stroke={props.color} stroke-width={props.stroke}>
        <ellipse cx="6.274" cy="6.458" rx="6.274" ry="6.458" stroke="none"/>
        <ellipse cx="6.274" cy="6.458" rx="5.274" ry="5.458" fill="none"/>
      </g>
      <path id="Path_1" data-name="Path 1" d="M231.21,154.7l3.234,3.22" transform="translate(6.407 -49.07)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 's'}
  <svg xmlns="http://www.w3.org/2000/svg" width="21.414" height="21.414" viewBox="0 0 21.414 21.414">
    <title>Search</title>
    <g id="Group_7" data-name="Group 7" transform="translate(-227 -95)">
      <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(227 95)" fill="none" stroke={props.color} stroke-width={props.stroke}>
        <ellipse cx="9.06" cy="9.325" rx="9.06" ry="9.325" stroke="none"/>
        <ellipse cx="9.06" cy="9.325" rx="8.06" ry="8.325" fill="none"/>
      </g>
      <path id="Path_1" data-name="Path 1" d="M231.21,154.7l4.669,4.65" transform="translate(11.12 -44.35)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="31.768" height="31.768" viewBox="0 0 31.768 31.768">
    <title>Search</title>
    <g id="Group_21" data-name="Group 21" transform="translate(-227 -95)">
      <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(227 95)" fill="none" stroke={props.color} stroke-width={props.stroke}>
        <ellipse cx="13.587" cy="13.985" rx="13.587" ry="13.985" stroke="none"/>
        <ellipse cx="13.587" cy="13.985" rx="12.337" ry="12.735" fill="none"/>
      </g>
      <path id="Path_1" data-name="Path 1" d="M231.21,154.7l7.019,6.99" transform="translate(18.771 -36.69)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="42.121" height="42.121" viewBox="0 0 42.121 42.121">
    <title>Search</title>
    <g id="Group_22" data-name="Group 22" transform="translate(-227 -95)">
      <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(227 95)" fill="none" stroke={props.color} stroke-width={props.stroke}>
        <ellipse cx="18.139" cy="18.663" rx="18.139" ry="18.663" stroke="none"/>
        <ellipse cx="18.139" cy="18.663" rx="16.639" ry="17.163" fill="none"/>
      </g>
      <path id="Path_1" data-name="Path 1" d="M231.21,154.7l9.247,9.208" transform="translate(26.543 -28.909)" fill="none" stroke={props.color} stroke-linecap="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}