<script setup>
const route = useRoute()
useHead({
  title:`CRD - ${route.meta.title}`,
  meta: [{ name: 'og:title', content: `CRD - ${route.meta.title}` }]
})
</script>

<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>