<template>
    <AdminLayout>
        <Breadcrumb :pageTitle="currentPageTitle" />
        <div class="space-y-5 sm:space-y-6"></div>
    </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
const currentPageTitle = ref("Painel");
</script>
