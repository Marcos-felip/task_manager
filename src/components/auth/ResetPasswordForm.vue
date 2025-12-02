<template>
  <form @submit.prevent="handleSubmit">
    <div class="space-y-5">
      <FormField label="Email" id="email" name="email" type="email" placeholder="Digite seu email" required
        v-model="email" />
      <div>
        <Button type="submit" variant="primary" size="sm" className="w-full">
          Enviar link de redefinição
        </Button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import FormField from '@/components/ui/FormField.vue'

const email = ref('')

const handleSubmit = () => {
  console.log('Form submitted', {
    email: email.value,
  })
}
</script>
