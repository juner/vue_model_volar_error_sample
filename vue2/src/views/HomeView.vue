<template>
  <main>
    <TheWelcome :value="value" />
  </main>
</template>
<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
const value = "test!";
</script>