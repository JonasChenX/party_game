<template>
    <div class="text-gray-600 border-y-2 border-slate-300 p-3">
        <div class="container mx-auto flex items-center sm:flex-row flex-col">
            <span class="text-md font-medium px-5 text-gray-700 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <router-link to="/Blog/Bulletin">
                    最新公告
                </router-link>
            </span>
            <span class="text-md font-medium px-5 text-gray-700 inline-flex sm:mt-0 mt-4 justify-center sm:justify-start">
                <router-link to="/Blog/BlogList">
                    文章列表
                </router-link>
            </span>
            <span class="text-md font-medium px-5 text-gray-700 inline-flex sm:mt-0 mt-4 justify-center sm:justify-start">
                <router-link to="/Blog/Question">
                    讀者建議
                </router-link>
            </span>
            <span class="text-md font-medium px-5 text-gray-700 inline-flex sm:mt-0 mt-4 justify-center sm:justify-start">
                <router-link to="/Blog/Info">
                    作者簡介
                </router-link>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name:'BlogHeader',
}
</script>