<template>
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="grid grid-cols-4 md:gap-4 mx-10">
            <div class="md:col-span-3 col-span-4">
                <div class="container py-18 my-5 mx-auto border-2">
                    <div class="grid grid-cols-4">
                        <div class="md:col-span-1 col-span-4 g-flex-center flex-col ">
                            <img class="h-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
                        </div>
                        <div class="md:col-span-3 col-span-4 px-5">
                            <h2 class="text-2xl text-left font-medium text-gray-900 title-font my-3">實現部落格功能</h2>
                            <p class="leading-relaxed text-left">套用在Java上實現部落格功能222222222</p>
                            <div class="flex justify-end mt-3">
                                <span class="title-font text-white rounded-full border px-5 py-1 text-sm bg-gray-900 mx-1">Java</span>
                                <span class="title-font text-white rounded-full border px-5 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                            </div>
                            <div class="flex justify-end">
                                <p class="my-2 text-gray-500 text-sm">更新日期 2020-12-31</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container py-18 my-5 mx-auto border-2">
                    <div class="grid grid-cols-4">
                        <div class="md:col-span-1 col-span-4 g-flex-center flex-col ">
                            <img class="h-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
                        </div>
                        <div class="md:col-span-3 col-span-4 px-5">
                            <h2 class="text-2xl text-left font-medium text-gray-900 title-font my-3">實現部落格功能</h2>
                            <p class="leading-relaxed text-left">套用在Java上實現部落格功能222222222</p>
                            <div class="flex justify-end mt-3">
                                <span class="title-font text-white rounded-full border px-5 py-1 text-sm bg-gray-900 mx-1">Java</span>
                                <span class="title-font text-white rounded-full border px-5 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                            </div>
                            <div class="flex justify-end">
                                <p class="my-2 text-gray-500 text-sm">更新日期 2020-12-31</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:col-span-1 col-span-4 order-first md:order-last my-5 px-3">
                <div class="mb-5">
                    <h3 class="mt-3 text-xl font-medium md:text-left border-b-2 border-gray-900">系列文</h3>
                    <p class="md:text-left my-2 tracking-wider">我想要揪人系列 ( 5 )</p>
                    <p class="md:text-left my-2 tracking-wider">基礎功打好系列 ( 10 )</p>
                    <p class="md:text-left my-2 tracking-wider">插件使用系列 ( 8 )</p>
                    <p class="md:text-left my-2 tracking-wider">好工具分享系列 ( 7 )</p>
                </div>
                <div class="mb-5">
                    <h3 class="mt-3 text-xl font-medium md:text-left border-b-2 border-gray-900">標籤</h3>
                    <div class="flex mt-2">
                        <span class="title-font text-white rounded-full border px-3 py-1 text-xs bg-gray-900 mx-1">Java</span>
                        <span class="title-font text-white rounded-full border px-3 py-1 text-xs bg-gray-900 mx-1">MySQL</span>
                        <span class="title-font text-white rounded-full border px-3 py-1 text-xs bg-gray-900 mx-1">Vue</span>
                        <span class="title-font text-white rounded-full border px-3 py-1 text-xs bg-gray-900 mx-1">JS</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'BlogList'
}
</script>