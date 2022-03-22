<template>
    <GameHeader />
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component"/>
        </keep-alive>
    </router-view>
</template>
<script>
import GameHeader from '@/components/game-com/GameHeader.vue'
export default {
    name:'GameView',
    components:{
        GameHeader
    }
}
</script>