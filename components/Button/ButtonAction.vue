<template>
  <Button
    orange
    @click="$emit('click', $event)"
    height='50px'
    width='50px'
  >
    <div class="w-100 h-100 flex align-center justify-center">
      <svg
        width="18"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6875 6.46641 2.60474.709923C2.01145.467386 1.34119.574079.855567.988227.369941 1.40244.166828 2.04066.325555 2.65378L1.57905 7.49621H7.7163c.28241 0 .5114.22554.5114.50378 0 .2782-.22896.50378-.5114.50378H1.57905L.325555 13.3462c-.158727.6131.044352 1.2513.530012 1.6655.486613.415 1.156943.5204 1.749203.2783L16.6875 9.53356c.6412-.26208 1.0395-.84972 1.0395-1.53357 0-.68386-.3983-1.27153-1.0395-1.53358Z"
          fill="#fff"
        />
      </svg>
    </div>
  </Button>
</template>
