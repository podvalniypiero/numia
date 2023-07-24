<template>
  <div class="message-form">
    <input type="text" class="input" @keyup.enter="onSubmit" v-model="message" />
    <button class="submit" @click="onSubmit">Отправить</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import { useMessagesStore } from '../store/messages';

const messagesStore = useMessagesStore();
const toast = useToast();

const message = ref('');

const onSubmit = () => {
  message.value = message.value.trim();
  if (message.value.length === 0) {
    toast.error("Сообщение не должно быть пустым!");
  } else {
    messagesStore.insertMessage(message.value);
    toast.success("Сообщение успешно отправлено!");
    message.value = '';
  }
};
</script>

<style scoped>
.message-form {
  display: flex;
  justify-content: space-between;
  box-shadow: 3px 1px 12px 14px rgba(27, 45, 58, 0.2);
  border-radius: 2rem;
 
}
.input {
  width: 100%;
  border-radius: 2rem;
  padding: 2.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  
  
}
.submit {
  padding: 0.5rem;
  background: #f1b464;
  padding: 2rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
}
.submit:hover{
  background: #d5851d;
  color: white
}

@media (max-width: 550px){
.input{
  padding: .8rem;
  width: 100%;
}
.submit {
  padding: .4rem;
  border-radius: 1rem;
  font-weight: 500;
}
}
</style>
