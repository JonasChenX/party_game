<template>
    <section class="text-gray-600 body-font overflow-hidden mt-8">
        <div class="grid grid-cols-4 md:gap-4 mx-10">
            <div class="md:col-span-2 md:col-start-1 col-span-4 border-2 mb-8 rounded-lg border-gray-900">
                <div class="flex py-5">
                    <div class="w-1/2 border-r-2 border-gray-900">
                        <h3 class="text-left ml-5 font-medium">總文章數</h3>
                        <h1 class="text-4xl py-14">333</h1>
                    </div>
                    <div class="w-1/2">
                        <h3 class="text-left ml-5 font-medium">系列數</h3>
                        <h1 class="text-4xl py-14">333</h1>
                    </div>

                </div>
            </div>
            <div class="col-span-4 mb-8">
                <h3 class="text-left text-xl font-medium tracking-wide">最新文章</h3>
                <div class="overflow-auto">
                    <table class="table-fixed w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr class="border-b-2 border-gray-400">
                                <th class="px-4 py-3 title-font w-36 tracking-wider font-medium text-gray-900 text-sm ">日期</th>
                                <th class="px-4 py-3 title-font w-72 tracking-wider font-medium text-gray-900 text-sm ">標題</th>
                                <th class="px-4 py-3 title-font w-36 tracking-wider font-medium text-gray-900 text-sm ">系列</th>
                                <th class="px-4 py-3 title-font w-36 tracking-wider font-medium text-gray-900 text-sm ">標籤</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="px-4 py-3">2022-01-23</td>
                                <td class="px-4 py-3">如何實作部落格</td>
                                <td class="px-4 py-3">實作系列</td>
                                <td class="px-4 py-3 text-lg text-gray-900 flex flex-wrap">
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="px-4 py-3">2022-01-23</td>
                                <td class="px-4 py-3">如何實作部落格</td>
                                <td class="px-4 py-3">實作系列</td>
                                <td class="px-4 py-3 text-lg text-gray-900 flex flex-wrap">
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="px-4 py-3">2022-01-23</td>
                                <td class="px-4 py-3">如何實作部落格</td>
                                <td class="px-4 py-3">實作系列</td>
                                <td class="px-4 py-3 text-lg text-gray-900 flex flex-wrap">
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="px-4 py-3">2022-01-23</td>
                                <td class="px-4 py-3">如何實作部落格</td>
                                <td class="px-4 py-3">實作系列</td>
                                <td class="px-4 py-3 text-lg text-gray-900 flex flex-wrap">
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="px-4 py-3">2022-01-23</td>
                                <td class="px-4 py-3">如何實作部落格</td>
                                <td class="px-4 py-3">實作系列</td>
                                <td class="px-4 py-3 text-lg text-gray-900 flex flex-wrap">
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                    <span class="title-font text-white rounded-full border px-3 py-1 text-sm bg-gray-900 mx-1">SQL</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
export default {
    name:'Bulletin',
}
</script>