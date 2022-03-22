<template>
  <div class="p-4 w-full container mx-auto">
    <div class="w-full flex items-center justify-between">
      <router-link class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/">
        PartyGame
      </router-link>
      <div class="flex w-1/2 justify-end content-center">
        <router-link class="inline-block text-gray-500 no-underline hover:text-gray-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
         to="/"
        >
          <i class="fa-brands fa-instagram fill-current h-6 md:h-8"></i>
        </router-link>
        <a
          class="inline-block text-blue-300 no-underline hover:text-sky-600 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
          href="#"
        >
          <i class="fa-brands fa-facebook fill-current h-6 md:h-8"></i>
        </a>
      </div>
    </div>
  </div>
</template>