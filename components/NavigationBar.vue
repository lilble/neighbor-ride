<template>
  <nav class="p-20 text-slate-400">
    <div class="flex justify-between items-center">
      <div>
        <NuxtLink to="/">홈</NuxtLink>
        <font-awesome-icon icon="magnifying-glass" />
      </div>
      <NuxtLink to="/search-room">검색</NuxtLink>
      <NuxtLink to="/create-room">개설</NuxtLink>
      <NuxtLink to="/">내 방</NuxtLink>
      <NuxtLink to="/">마이</NuxtLink>
    </div>
  </nav>
</template>
