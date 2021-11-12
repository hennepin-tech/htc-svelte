<script lang=ts>
  import type { IconProps } from "$types/Icon";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 'xs'}
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10.894" viewBox="0 0 13 10.894">
    <path id="Icon_feather-twitter" data-name="Icon feather-twitter" d="M13.5,4.49a5.945,5.945,0,0,1-1.713.835A2.444,2.444,0,0,0,7.5,6.961v.545A5.815,5.815,0,0,1,2.591,5.036S.409,9.945,5.318,12.127A6.349,6.349,0,0,1,1.5,13.217c4.909,2.727,10.909,0,10.909-6.273a2.455,2.455,0,0,0-.044-.453A4.211,4.211,0,0,0,13.5,4.49Z" transform="translate(-1 -3.943)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
  </svg>
{:else if props.size === 's'}
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18.494" viewBox="0 0 22 18.494">
    <path id="Icon_feather-twitter" data-name="Icon feather-twitter" d="M21.5,4.494a9.909,9.909,0,0,1-2.855,1.391A4.073,4.073,0,0,0,11.5,8.612v.909A9.691,9.691,0,0,1,3.318,5.4S-.318,13.585,7.864,17.221A10.582,10.582,0,0,1,1.5,19.039c8.182,4.545,18.182,0,18.182-10.455a4.091,4.091,0,0,0-.073-.755A7.018,7.018,0,0,0,21.5,4.494Z" transform="translate(-0.5 -3.413)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26.73" viewBox="0 0 32 26.73">
    <path id="Icon_feather-twitter" data-name="Icon feather-twitter" d="M31.5,4.5a14.864,14.864,0,0,1-4.282,2.086A6.109,6.109,0,0,0,16.5,10.676V12.04A14.536,14.536,0,0,1,4.227,5.862S-1.227,18.135,11.045,23.59A15.873,15.873,0,0,1,1.5,26.317c12.273,6.818,27.273,0,27.273-15.682A6.136,6.136,0,0,0,28.664,9.5a10.527,10.527,0,0,0,2.836-5Z" transform="translate(-0.5 -3.384)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="34.966" viewBox="0 0 42 34.966">
    <path id="Icon_feather-twitter" data-name="Icon feather-twitter" d="M41.5,4.5a19.818,19.818,0,0,1-5.709,2.782A8.145,8.145,0,0,0,21.5,12.74v1.818A19.382,19.382,0,0,1,5.136,6.321s-7.273,16.364,9.091,23.636A21.164,21.164,0,0,1,1.5,33.594c16.364,9.091,36.364,0,36.364-20.909a8.181,8.181,0,0,0-.145-1.509A14.036,14.036,0,0,0,41.5,4.5Z" transform="translate(-0.5 -3.355)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
  </svg>
{/if}