<template>
  <div class="message-card">
    <p class="message-card__text">{{ props.message }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["message"]);
</script>

<style scoped>
.message-card {
  background: #ffffff;
  box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  margin: 2rem
}
.message-card__text {
  margin: .5rem;
  flex-wrap: wrap;
}
</style>
