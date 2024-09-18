<template>
  <nav class="fixed w-full h-14 bottom-0 text-slate-400 text-sm font-light">
    <div class="flex justify-between items-center">
      <NuxtLink
        to="/home"
        class="flex flex-col items-center w-1/5 h-full mt-2.5"
        exact-active-class="text-cyan-500"
      >
        <font-awesome-icon :icon="['fas', 'house']" />
        <span class="mt-1">홈</span>
      </NuxtLink>
      <NuxtLink
        to="/search"
        class="flex flex-col items-center w-1/5 h-full mt-2.5"
        exact-active-class="text-cyan-500"
      >
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <span class="mt-1">검색</span>
      </NuxtLink>
      <NuxtLink
        to="/addroom"
        class="flex flex-col items-center w-1/5 h-full mt-2.5"
        exact-active-class="text-cyan-500"
      >
        <font-awesome-icon :icon="['fas', 'plus']" />
        <span class="mt-1">개설</span>
      </NuxtLink>
      <NuxtLink
        to="/myroom"
        class="flex flex-col items-center w-1/5 h-full mt-2.5"
        exact-active-class="text-cyan-500"
      >
        <font-awesome-icon :icon="['fas', 'list']" />
        <span class="mt-1">내 방</span>
      </NuxtLink>
      <NuxtLink
        to="/mypage"
        class="flex flex-col items-center w-1/5 h-full mt-2.5"
        exact-active-class="text-cyan-500"
      >
        <font-awesome-icon :icon="['fas', 'user']" />
        <span class="mt-1">마이</span>
      </NuxtLink>
    </div>
  </nav>
</template>
