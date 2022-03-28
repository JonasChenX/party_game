<template>
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-col text-center w-full mb-8">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">給予建議</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">小弟我資歷不深，理解某些技術可能誤會了什麼，大大好心的話若有看到錯誤是否能跟我說一聲，相信大大接下來的日子會有好運降臨的～！</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 md:w-1/2 w-full">
                        <div class="flex flex-col">
                            <label for="name" class="leading-7 text-sm mr-auto text-gray-600">姓名</label>
                            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-600 focus:bg-white focus:ring-2 focus:ring-sky-800/30 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        </div>
                    </div>
                    <div class="p-2 md:w-1/2 w-full">
                        <div class="flex flex-col">
                            <label for="email" class="leading-7 text-sm mr-auto text-gray-600">信箱</label>
                            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-600 focus:bg-white focus:ring-2 focus:ring-sky-800/30 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <div class="flex flex-col">
                            <label for="message" class="leading-7 text-sm mr-auto text-gray-600">內容</label>
                            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-600 focus:bg-white focus:ring-2 focus:ring-sky-800/30 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <button class="flex mx-auto text-white bg-sky-700 border-0 py-2 px-8 focus:outline-none hover:bg-sky-800 rounded text-lg active:scale-95 font-medium">送出</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'ContactMe',
}
</script>