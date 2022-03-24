<template>
    <template v-if="this.onReady">
        <section class="text-gray-600 body-font">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mt-4">可自行增加問答內容</h1>
            <div class="container px-5 py-20 mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="grid-cols-1 md:order-last">
                        <div class="relative flex-grow w-full">
                            <label for="question" class="leading-7 text-sm flex text-gray-600">輸入問題</label>
                            <div class="flex">
                                <input type="text" id="question" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mr-2 leading-8 transition-colors duration-200 ease-in-out" v-model.trim="this.question" @keyup.enter="addQuestionItem()">
                                <button class="text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg active:scale-95 flex-initial w-20" @click="addQuestionItem()">項目</button>
                            </div>
                        </div>
                        <div class="relative flex-grow w-full">
                            <label for="add-question-db" class="leading-7 text-sm flex text-gray-600">新增資料庫</label>
                            <div class="flex">
                                <input type="text" id="add-question-db" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mr-2 leading-8 transition-colors duration-200 ease-in-out" v-model.trim="this.questionDBTitle" @keyup.enter="createQuestionDB()">
                                <button class="text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg active:scale-95 flex-initial w-20" @click="createQuestionDB()">新增</button>
                            </div>
                        </div>
                        <div class="relative flex-grow w-full mt-3">
                            <div class="leading-7 text-sm flex text-gray-600">選擇問題資料庫</div>
                            <div class="grid grid-cols-2 lg:grid-cols-3  gap-4">
                                <label :for="'db-'+item" class="border-2 border-gray-200 hover:bg-gray-100 cursor-pointer px-4 py-6 rounded-lg title-font font-medium text-3xl text-gray-900" :class="{'bg-sky-300 hover:bg-sky-400': this.checkedDB.indexOf(item) !== -1}" v-for="(item,index) in this.useDBTitle" :key="index" @click.self="this.checkedItem(item)">
                                    <input :id="'db-'+item" type="checkbox" :value="item" hidden v-model="this.checkedDB">
                                    {{item}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="h-12 flex border-b border-gray-200 py-2">
                            <span class="my-auto text-gray-500 mr-14">編號</span>
                            <span class="my-auto text-gray-500">內容</span>
                            <span class="my-auto text-white bg-sky-700 ml-auto mr-5 border-gray-900 border px-3 font-bold rounded-full">{{this.checked}}</span>
                        </div>
                        <template v-if="this.checked !=='' && this.questionDB[this.checked].length >0">
                            <div class="max-h-12 flex border-b border-gray-200 py-2 hover:bg-gray-300/50 pt-3" v-for="(item,index) in this.questionDB[this.checked]" :key="index">
                                <span class="text-gray-500 mr-16 ml-2">{{index+1}}</span>
                                <span class="text-gray-900">{{item.content}}</span>
                                <span class="text-gray-900 ml-auto mr-5 hover:scale-110 hover:text-red-600" @click="deleteInput(this.questionDB[this.checked],index)">
                                    <i class="fa-solid fa-delete-left text-xl"></i>
                                </span>
                            </div>
                        </template>
                        <template v-else>
                            <p class="text-gray-900 mt-5">尚未增加內容</p>
                        </template>
                    </div>
                </div>
            </div>
            <div class="g-flex-center mb-10 ">
                <div class="text-white bg-gray-700 border-0 py-2 px-7 focus:outline-none hover:bg-gray-800 rounded text-lg active:scale-95 cursor-pointer" @click="createPlayQuestionDB()">
                    開始遊戲
                </div>
            </div>
        </section>
    </template>
    <template v-else>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-20 mx-auto">
                <div class="relative border-2 border-gray-900 rounded-lg py-24 truncate">
                    <div class="absolute inline-block truncate inset-0" :class="{marquee_top:animate}">
                        <h4 class="text-3xl font-bold tracking-wide py-16 g-flex-center" v-for="(item,index) in this.playQuestionDB" :key="index">{{item.content}}</h4>
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
        </section>
    </template>
</template>
<script>
export default {
    name:'AddQuestion',
    computed:{
        useDBTitle(){
            return Object.keys(this.questionDB)
        },
    },
    data(){
        return{
            question:'',
            checkedDB:[],
            checked:'',
            questionDBTitle:'',
            playQuestionDB:[],

            onReady:true,

            isPalying:true,
            animate:false,
            time:null,

            questionDB:{
                love:[
                    {
                        type:'',
                        content:'妳好'
                    },
                    {
                        type:'',
                        content:'不錯'
                    },
                    {
                        type:'',
                        content:'可以'
                    },
                    {
                        type:'',
                        content:'很好'
                    },
                    {
                        type:'',
                        content:'謝謝'
                    },
                ],
                friends:[
                    {
                        type:'',
                        content:'aaa'
                    },
                    {
                        type:'',
                        content:'bbbb'
                    },
                ],
                family:[
                    {
                        type:'',
                        content:'a1'
                    },
                    {
                        type:'',
                        content:'a2'
                    },
                ],
            }
        }
    },
    methods:{
        addQuestionItem(){
            if(this.question ==='') return
            let obj ={
                type:'',
                content:this.question
            }
            this.questionDB[this.checked].push(obj)
            this.question = ''
        },
        checkedItem(item){
            this.checked = item
        },
        deleteInput(arr,index){
          arr.splice(index,1)
        },
        createQuestionDB(){
            if(this.questionDBTitle ==='') return
            this.questionDB[this.questionDBTitle] = []
            this.questionDBTitle = ''
        },
        createPlayQuestionDB(){
            if(this.checkedDB.length < 1) return
            this.checkedDB.forEach((item)=>{
                this.questionDB[item].forEach((i)=>{
                    this.playQuestionDB.push(i)
                })
            })
            this.onReady = false
        },
        stop(){
            if(!this.isPalying) return
            window.clearInterval(this.time)
            this.isPalying = false
        },
        start(){
            if(this.isPalying) return
            this.isPalying = true
            this.animateInterval()
        },
        animateInterval(){
            this.time = setInterval(() => { //動畫時間設定
                this.animate = true;
                setTimeout(()=>{
                    this.playQuestionDB.push(this.playQuestionDB[0]);
                    this.playQuestionDB.shift();
                    this.animate = false;
                }, 150)
            },100); 
        }
    },
    mounted(){
        this.checked = this.useDBTitle[this.useDBTitle.length-1]
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