<template>
  <nav class="p-20 text-slate-400">
    <div class="flex justify-between items-center">
      <div class="flex">
        <NuxtLink to="/">홈</NuxtLink>
        <!-- <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> -->
        <font-awesome-icon icon="fa-solid fa-user-secret" />
      </div>
      <div>
        <NuxtLink to="/search-room">검색</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/create-room">개설</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/">내 방</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/">마이</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
