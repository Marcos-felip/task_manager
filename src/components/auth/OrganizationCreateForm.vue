<template>
  <form @submit.prevent="handleSubmit">
    <div class="space-y-5">
      <!-- Organization Name -->
      <FormField label="Nome da Organização" id="orgName" name="orgName" type="text"
        placeholder="Digite o nome da organização" required v-model="organizationName" />
      <!-- Email -->
      <FormField label="Email" id="orgEmail" name="orgEmail" type="email" placeholder="Digite o email da organização"
        required v-model="organizationEmail" />
      <!-- Organization ID -->
      <FormField label="Cpf/Cnpj" id="orgCpfCnpj" name="orgCpfCnpj" type="text"
        placeholder="Digite o Cpf ou Cnpj da organização" required v-model="organizationId" />
      <!-- Button -->
      <div>
        <Button type="submit" variant="primary" size="sm" className="w-full" :disabled="isLoading">
          <!-- Spinner -->
          <div v-if="isLoading" class="flex items-center gap-2">
            <Spinners size="sm" color="white" />
            Criando...
          </div>
          <span v-else>Criar</span>
        </Button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FormField from '@/components/ui/FormField.vue'
import Button from '@/components/ui/Button.vue'
import Spinners from '@/components/ui/Spinners.vue'
import { createOrganization } from '@/services/auth/registerService'

const route = useRoute()
const router = useRouter()

const organizationName = ref('')
const organizationEmail = ref('')
const organizationId = ref('')
const isLoading = ref(false)

const userId = route.query.user_id as string

const handleSubmit = async () => {
  try {
    isLoading.value = true
    const response = await createOrganization({
      name: organizationName.value,
      email: organizationEmail.value,
      organization_id: organizationId.value,
      user_id: userId
    })
    console.log('Organização criada com sucesso:', response)
    router.push({
      name: 'Home',
    })
  } catch (error) {
    console.error('Erro ao criar organização:', error)
  } finally {
    isLoading.value = false
  }
}

defineExpose({
  organizationName,
  organizationEmail,
  organizationId,
  handleSubmit,
})
</script>
