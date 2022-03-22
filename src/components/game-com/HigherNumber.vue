<template>
    <template v-if="this.onPlayerNum">
        <PalyerNum @close="close" />
    </template>
    <template v-else>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full truncate" v-for="(item,index) in this.$store.getters.getPlayerNum" :key="index">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <i class="fa-solid fa-circle-user w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"></i>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">代號<span class="text-3xl mx-1">{{item}}</span>號</h2>
                            </div>
                            <div class="flex-grow border-l-4 border-sky-700">
                                <h2 class="text-gray-900 text-6xl title-font font-medium animate-answer-animation" v-if="this.$store.getters.getHigherNumberList[index]">{{this.$store.getters.getHigherNumberList[index]}}</h2>
                                <h2 class="text-gray-900 text-6xl title-font font-medium" v-else>??</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-flex-center mb-10 ">
                <div class="btn-circle-black" @click="setRandomInt()">
                    點擊
                </div>
            </div>
        </section>
    </template>
</template>

<script>
import {generateRandomInt} from '@/script/Util.js'
import PalyerNum from '@/components/game-com/PalyerNum.vue'
export default {
    name:'HigherNumber',
    data(){
        return{
            onPlayerNum:true,
        }
    },
    components:{
        PalyerNum
    },
    methods:{
        close(){
            this.onPlayerNum = false
            this.$store.commit('gameBasic/CREATE_ISPALYING', true)
        },
        setRandomInt(){
            let reandomInt = generateRandomInt(1,100)
            if(this.$store.getters.getHigherNumberList.length < this.$store.getters.getPlayerNum){
                this.$store.commit('higherNumber/ADD_HIGHERNUMBER',reandomInt)
            }
        }
    },
    beforeUnmount(){
        this.$store.commit('higherNumber/RESET_HIGHERNUMBER')

        this.$store.commit('gameBasic/RESET_PALYERNUM')

        this.$store.commit('gameBasic/RESET_ISPALYING')
    }

}
</script>