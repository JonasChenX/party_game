<template>
     <template v-if="this.onPlayerNum">
        <PalyerNum @close="close" @setPlayerNumList="setPlayerNumList" />
    </template>
    <template v-else>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="container px-5 py-20 mx-auto">
                <div class="relative border-2 border-gray-900 rounded-lg py-24 truncate">
                    <div class="absolute inline-block inset-0" :class="{marquee_top:animate}">
                        <h4 class="text-3xl font-bold tracking-wide py-16 g-flex-center" v-for="(item,index) in this.playerNumList" :key="index">玩家代號 {{item}} 號</h4>
                    </div>
                </div>
            </div>
            <div class="g-flex-center mb-10 ">
                <template v-if="this.isPalying">
                    <div class="btn-circle-black" @click="stop()">
                        請選擇
                    </div>
                </template>
                <template v-else>
                    <div class="btn-circle-black" @click="start()">
                        繼續
                    </div>
                </template>
            </div>
            </div>
        </section>
    </template>
</template>

<script>
import PalyerNum from '@/components/game-com/PalyerNum.vue'
export default {
    name:'HumanRoulette',
    data(){
        return{
            onPlayerNum:true,

            isPalying:true,

            intervalTime:null,
            animate:false,
            playerNumList:[]
        }
    },
    components:{
        PalyerNum
    },
    methods:{
        close(){
            this.onPlayerNum = false
        },
        animateInterval(){
            this.intervalTime = setInterval(() => { //動畫時間設定
                this.animate = true;
                setTimeout(()=>{
                    this.playerNumList.push(this.playerNumList[0]);
                    this.playerNumList.shift();
                    this.animate = false;
                }, 150)
            },100); 
        },
        setPlayerNumList(val){
            this.playerNumList =[]
            for(let i =1; i <= val; i++){
                this.playerNumList.push(i)
            }
            console.log(this.playerNumList);
        },
        stop(){
            if(!this.isPalying) return
            window.clearInterval(this.intervalTime)
            this.isPalying = false
        },
        start(){
            if(this.isPalying) return
            this.isPalying = true
            this.animateInterval()
        },
    },
    mounted(){
        this.setPlayerNumList()
        this.animateInterval()
    },
}
</script>

<style lang="scss" scoped>
.marquee_top {
    animation: slide-top 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes slide-top {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>