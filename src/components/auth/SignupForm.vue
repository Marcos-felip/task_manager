<template>
  <form @submit.prevent="handleSubmit">
    <div class="space-y-5">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <!-- First Name -->
        <FormField
          label="Primeiro Nome"
          id="fname"
          name="fname"
          type="text"
          placeholder="Digite seu primeiro nome"
          required
          v-model="firstName"
        />
        <!-- Last Name -->
        <FormField
          label="Sobrenome"
          id="lname"
          name="lname"
          type="text"
          placeholder="Digite seu sobrenome"
          required
          v-model="lastName"
        />
      </div>
      <!-- Email -->
      <FormField
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="Digite seu email"
        required
        v-model="email"
      />
      <!-- Password -->
      <PasswordField
        label="Senha"
        id="password"
        name="password"
        placeholder="Digite sua senha"
        required
        v-model="password"
      />
      <!-- Checkbox -->
      <CheckboxField
        id="checkboxLabelOne"
        name="agreeToTerms"
        v-model="agreeToTerms"
      >
        <p class="inline-block font-normal text-gray-500 dark:text-gray-400">
          Ao criar uma conta, você concorda com os
          <span class="text-gray-800 dark:text-white/90">
            Termos e Condições,
          </span>
          e nossa
          <span class="text-gray-800 dark:text-white">
            Política de Privacidade
          </span>
        </p>
      </CheckboxField>
      <!-- Button -->
      <div>
        <Button type="submit" variant="primary" size="sm" className="w-full">
          Cadastrar
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

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const agreeToTerms = ref(false)

const handleSubmit = () => {
  // Implement form submission logic here
  console.log('Form submitted', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    agreeToTerms: agreeToTerms.value,
  })
}

defineExpose({
  firstName,
  lastName,
  email,
  password,
  agreeToTerms,
  handleSubmit,
})
</script>
