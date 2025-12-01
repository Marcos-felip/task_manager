<template>
  <form @submit.prevent="handleSubmit">
    <div class="space-y-5">
      <!-- Email -->
      <FormField
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="info@gmail.com"
        required
        v-model="email"
      />
      <!-- Password -->
      <PasswordField
        label="Password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
        v-model="password"
      />
      <!-- Checkbox -->
      <div class="flex items-center justify-between">
        <CheckboxField
          id="keepLoggedIn"
          name="keepLoggedIn"
          v-model="keepLoggedIn"
        >
          Manter-me conectado
        </CheckboxField>
        <router-link to="/reset-password" class="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400">
          Esqueceu sua senha?
        </router-link>
      </div>
      <!-- Button -->
      <div>
        <Button type="submit" variant="primary" size="sm" className="w-full">
          Entrar
        </Button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormField from '@/components/ui/FormField.vue'
import PasswordField from '@/components/ui/PasswordField.vue'
import CheckboxField from '@/components/ui/CheckboxField.vue'
import Button from '@/components/ui/Button.vue'

const email = ref('')
const password = ref('')
const keepLoggedIn = ref(false)

const handleSubmit = () => {
  console.log('Form submitted', {
    email: email.value,
    password: password.value,
    keepLoggedIn: keepLoggedIn.value,
  })
}

defineExpose({
  email,
  password,
  keepLoggedIn,
  handleSubmit,
})
</script>
