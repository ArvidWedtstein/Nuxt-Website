<template>
   <div id='pain-o-meter'>
        <i style="color: #ff0000" class="fas fa-tired"/>
        <svg class="w-44 mt-3" height="10" viewBox="0 0 180 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="180" height="6" rx="3" fill="#2D2D2D"></rect>
            <rect width="180" height="6" rx="3" fill="url(#paint0_linear)"></rect>
            <rect :x="(painInt / 100) * 180" width="4" height="10" fill="#000000"></rect>
            <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                    <stop stop-color="#e23b3b"></stop>
                    <stop offset="1" stop-color="#21f416"></stop>
                </linearGradient>
            </defs>
        </svg>
        <i class="far fa-grin-hearts"/>
   </div>
</template>

<script>
export default {
   name: 'pain-o-meter',
   transition: 'slide-bottom',
   props: {
       painInt: 0
   }
}
</script>
<style lang="scss">
#pain-o-meter {
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        flex: 1 1 auto;
        align-self: center;
    }
    i {
        flex: 1 1 auto;
        position: relative;
    }
}
</style>