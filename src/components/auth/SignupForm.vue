<template>
  <form @submit.prevent="handleSubmit">
    <div class="space-y-5">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <!-- First Name -->
        <FormField label="Primeiro Nome" id="fname" name="fname" type="text" placeholder="Digite seu primeiro nome"
          required v-model="firstName" />
        <!-- Last Name -->
        <FormField label="Sobrenome" id="lname" name="lnzame" type="text" placeholder="Digite seu sobrenome" required
          v-model="lastName" />
      </div>
      <!-- Email -->
      <FormField label="Email" id="email" name="email" type="email" placeholder="Digite seu email" required
        v-model="email" />
      <!-- Password -->
      <PasswordField label="Senha" id="password" name="password" placeholder="Digite sua senha" required
        v-model="password" />
      <!-- Checkbox -->
      <CheckboxField id="checkboxLabelOne" name="agreeToTerms" v-model="agreeToTerms">
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
        <Button type="submit" variant="primary" size="sm" className="w-full" :disabled="isLoading">
          <!-- Spinner -->
          <div v-if="isLoading" class="flex items-center gap-2">
            <Spinners size="sm" color="white" />
            Cadastrando...
          </div>
          <span v-else>
            Cadastrar
          </span>
        </Button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FormField from '@/components/ui/FormField.vue'
import PasswordField from '@/components/ui/PasswordField.vue'
import CheckboxField from '@/components/ui/CheckboxField.vue'
import Button from '@/components/ui/Button.vue'
import Spinners from '@/components/ui/Spinners.vue'
import { registerUser } from '@/services/auth/registerService'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const agreeToTerms = ref(false)
const isLoading = ref(false)

const handleSubmit = async () => {
  try {
    isLoading.value = true
    const response = await registerUser({
      full_name: firstName.value + ' ' + lastName.value,
      email: email.value,
      password: password.value,
    })
    console.log('Usuário cadastrado com sucesso:', response)
    router.push({
      name: 'OrganizationCreate',
      query: {
        user_id: response.user_id
      }
    })
  } catch (error) {
    console.error('Falha no cadastro', error)
  } finally {
    isLoading.value = false
  }
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
