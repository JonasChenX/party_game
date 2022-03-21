<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div class="w-50 h-50 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <img src="@/assets/image/jonas.jpeg" class="rounded-full">
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{{this.author}}</h2>
                            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p class="text-base text-left indent-8">{{this.authorContent}}</p>
                        </div>
                    </div>
                    <div class="sm:w-2/3 sm:pl-5 sm:py-5 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 g-flex-center flex-col ">
                        <p class="leading-relaxed text-left text-lg indent-9" v-for="(item,index) in webContent" :key="index">{{item}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'StaffCard',
    data(){
        return{
            author:'JonasChen',
            authorContent:'此網站的作者，活了30年才知道寫程式是那麼有趣，現在才開始彌補不足的知識中',
            webContent:[
                '此網站的特色就是用最快速的方式，決定輸贏，輸的那一方就可以依照當下的環境去決定要幹嘛 ( 當然要做違法的事情請個人自行承擔 )',
                '單純會做這個網站，只是想在聚會的時候，多增加一點樂趣，尤其是想用小遊戲讓別人快速灌酒，快速看到別人失態的畫面，畢竟人類開發程式的動力就是如此的單純XD',
            ]
        }
    }
}
</script>