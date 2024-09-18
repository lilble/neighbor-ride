<template>
  <nav class="p-20 text-slate-400">
    <div class="flex justify-between items-center">
      <div class="flex">
        <font-awesome-icon :icon="['fas', 'house']" />
        <NuxtLink to="/">홈</NuxtLink>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <NuxtLink to="/search-room">검색</NuxtLink>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'plus']" />
        <NuxtLink to="/create-room">개설</NuxtLink>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'list']" />
        <NuxtLink to="/">내 방</NuxtLink>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'user']" />
        <NuxtLink to="/">마이</NuxtLink>
      </div>
    </div>
  </nav>
</template>
