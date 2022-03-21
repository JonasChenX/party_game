<template>
    <section class="text-gray-600 body-font bg-gradient-to-r from-blue-400 to-blue-500 mt-10">
        <div class="container py-20 mx-auto flex items-center ">
            <div class="flex w-full flex-wrap flex items-center">
                <h1 class="p-4 lg:pl-6 mx-auto sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">挑戰羞恥力的遊戲</h1>
                <div class="p-4 lg:pl-6 lg:w-2/3">
                    <div class="flex border-2 rounded-lg border-white p-8 sm:flex-row flex-col bg-sky-100/10">
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">真心話大冒險</h2>
                            <div class="w-auto h-1 bg-indigo-100/50 rounded mt-2 mb-4"></div>
                            <p class="leading-relaxed text-black">裡面有各種種類的問題題庫，若有太多問題想要問，但又不知道要先問哪一個，我們就會隨機幫你選擇，若題庫沒有你想問的答案，也可以自行增加</p>
                            <div class="g-flex-r mt-5">
                                <div class="mr-2 btn-sky">開始遊戲
                                    <router-link to="/">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>