<script setup>
const route = useRoute();
useHead({
  title: `CRD - ${route.meta.title}`,
  meta: [{ name: "og:title", content: `CRD - ${route.meta.title}` }],
});
</script>

<template>
  <div>
    <NavbarAuthtop />
    <div class="flex h-full w-full">
      <div style="width: 275px">
        <NavbarAside />
      </div>
      <NuxtPage />
    </div>

    <!-- <FooterTwof /> -->
  </div>
</template>