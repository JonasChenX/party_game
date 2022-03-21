<template>
  <TitleCard />
  <GameCard />
  <CrossMyHeart />
  <StaffCard />
</template>

<script>
import TitleCard from '@/components/home-com/TitleCard.vue'
import GameCard from '@/components/home-com/GameCard.vue'
import CrossMyHeart from '@/components/home-com/CrossMyHeart.vue'
import StaffCard from '@/components/home-com/StaffCard.vue'
export default {
  name: 'HomeView',
  components: {
    TitleCard,
    GameCard,
    CrossMyHeart,
    StaffCard
  }
}
</script>
