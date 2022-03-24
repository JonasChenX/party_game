<template>
    <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
            <!-- <img class="h-40 rounded w-full object-cover object-center mb-6" src="@/assets/image/nature-7045125_1280.webp" alt="content"> -->
            <img class="h-40 rounded w-full object-cover object-center mb-6" :src="$props.data.image" alt="content">
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{{$props.data.type}}</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{{$props.data.title}}</h2>
            <p class="leading-relaxed text-base">{{$props.data.content}}</p>
            <div class="g-flex-r mt-5">
                <router-link :to="$props.data.path">
                    <div class="mr-2 btn-sky">開始遊戲
                            <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Card',
    props:{
        data:Object,
    },
    setup() {
        
    },
}
</script>