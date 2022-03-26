<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-10">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">請選擇人數</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">請確定好人數，不要忽略邊緣人</p>
            </div>
            <div class="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                <div class="p-2 w-full">
                    <div class="flex p-4 h-full g-flex-center">
                        <select id="countries" class="bg-gray-50 border lg:w-2/4 border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setPlayerNum()" v-model="this.playNum">
                            <option v-for="(item,index) in 10" :key="index" :value="item">{{item}}人</option>
                        </select>
                    </div>
                    <p class="text-red-700">{{this.fontNg}}</p>
                </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="next()">確定</button>
        </div>
    </section>
</template>

<script>
export default {
    name:'PalyerNum',
    data(){
        return{
            playNum:null,
            fontNg:''
        }
    },
    methods:{
        setPlayerNum(){
            this.$store.commit('gameBasic/CREATE_PALYERNUM', this.playNum)
            this.$emit('setPlayerNumList',this.playNum)
        },
        next(){
            if(this.playNum !== null){
                this.$emit('close')
            }else{
                this.fontNg = '請選擇人數'
            }
        }
    },
}
</script>