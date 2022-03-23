<template>
    <template v-if="this.onPlayerNum">
        <PalyerNum @close="close" />
    </template>
    <template v-else>
        <section class="text-gray-600 body-font" :key="this.$store.getters.getUpdateResetCount">
            <div class="container px-5 py-10 mx-auto">
                 <div class="flex flex-wrap py-10 -m-2">
                    <div class="p-2 w-full truncate">
                        <div id="player" class="h-full flex items-center border-gray-400 border-2 p-4 rounded-lg">
                            <i class="fa-solid fa-circle-user w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"></i>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">代號<span class="text-3xl mx-1">{{useCurrentPlayNum}}</span>號</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5  gap-4">
                    <div class="cursor-default" v-for="(item,index) in 10" :key="index" @click.once="checkNum">
                        <div id="num" class="border-2 border-gray-200 hover:bg-gray-100 cursor-pointer px-4 py-6 rounded-lg title-font font-medium text-3xl text-gray-900" :data-name="0">{{item}}</div>
                    </div>
                </div>
            </div>
        </section>
    </template>
</template>

<script>
import PalyerNum from '@/components/game-com/PalyerNum.vue'
export default {
    name:'GuessingNumber',
    data(){
        return{
            onPlayerNum:true,
        }
    },
    components:{
        PalyerNum
    },
    computed:{
        useCurrentPlayNum(){
            return (this.$store.getters.getCurrentPlayerNum % this.$store.getters.getPlayerNum) +1
        }
    },
    methods:{
        close(){
            this.onPlayerNum = false
            this.$store.commit('gameBasic/CREATE_ISPALYING', true)
        },
        checkNum(e){
            if(this.$store.getters.getIsBingo) return
            if(this.$store.getters.getBingoNum !== Number(e.target.innerHTML)){
                this.setCurrentPlayNum()
                e.target.classList.add('animate-pass-animation')
                e.target.classList.remove('cursor-pointer')
                
            }else{
                this.$store.commit('guessingNumber/UPDATE_ISBINGO', true)
                e.target.classList.add('bg-red-400')
                e.target.classList.add('border-red-800')
                e.target.classList.add('hover:bg-red-400')
                e.target.classList.add('animate-bingo-animation')
                let playerDom = window.document.querySelector('#player')
                playerDom.classList.remove('border-gray-400')
                playerDom.classList.add('border-red-600')
            }
        },
        setCurrentPlayNum(){
            let currentPlayerNum = this.$store.getters.getCurrentPlayerNum +  1
            this.$store.commit('gameBasic/CREATE_CURRENTPLAYER', currentPlayerNum)
        },
    },
    mounted(){
        let numDom = window.document.querySelectorAll('#num')
        numDom.forEach((item)=>{
            if(this.num === Number(item.innerHTML)){
                item.setAttribute('data-name','1')
            }
        })
    },
}
</script>