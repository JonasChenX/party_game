<template>
    <BlogHeader/>
    <router-view />
</template>
<script>
import BlogHeader from'@/components/blog-com/BlogHead.vue';
export default {
    name:'BlogView',
    components:{
        BlogHeader
    },
}
</script>