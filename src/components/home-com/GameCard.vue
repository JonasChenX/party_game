<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-4">
                <Card :data="item" v-for="(item,index) in data" :key="index"/>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '@/components/global/Card.vue'
export default {
    name:'GameCard',
    components:{
        Card
    },
    data(){
        return{
            data:[
                {
                    type:'聚會',
                    title:'比大小',
                    content:'選擇大or小，在短短的幾秒鐘一決勝負，提醒若搭配飲酒比輸贏，請再三考慮，會很可怕',
                    path:'/Game/HigherNumber',
                    image:'https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_1280.jpg'
                },
                {
                    type:'聚會',
                    title:'人間輪盤',
                    content:'每個人代表著一個代號，若指到那個代號，那恭喜成為那位最有狗屎運的人',
                    path:'/Game/HumanRoulette',
                    image:'https://cdn.pixabay.com/photo/2022/02/13/03/05/grass-7010267_1280.jpg'
                },
                // {
                //     type:'聚會',
                //     title:'密碼解鎖',
                //     content:'心底總會有想要嘗試破解的東西，四個位數，不會有重複的數字，這不是運氣的問題，而要多利用腦袋運轉',
                //     path:'/',
                // },
                {
                    type:'聚會',
                    title:'隨機終極密碼',
                    content:'每個數字代表著一個炸彈的線路，關係到存活的可能，請謹慎思考選擇的號碼',
                    path:'/Game/GuessingNumber',
                    image:'https://cdn.pixabay.com/photo/2022/02/28/04/50/nature-7038455_1280.jpg'
                },
                // {
                //     type:'聚會',
                //     title:'盲人圈叉',
                //     content:'看不到的世界裡，只能摸黑選擇圈跟叉，三次機會若都選中的話，之後也請相信你的第六感',
                //     path:'/',
                // },
            ]
        }
    },
}
</script>