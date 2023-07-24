<template>
  <div class="app">
    <div class="main-container">
      <MessagesContainer />
      <MessageForm />
    </div>
  </div>
</template>

<script setup>
import MessageForm from './components/MessageForm.vue';
import MessagesContainer from './components/MessagesContainer.vue';
</script>

<style scoped>
.app {
  width: 100%;
  padding: 6rem;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  background: white;
}
.main-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
