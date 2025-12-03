<template>
  <AdminLayout>
    <Breadcrumb :pageTitle="currentPageTitle" />
    <div class="space-y-5 sm:space-y-6">
      <Card title="Usuários do Sistema">
        <Table />
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-change="handlePageChange" />
      </Card>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
import Card from "../../components/common/Card.vue";
import Table from "../../components/common/Table.vue";
import Pagination from "../../components/common/Pagination.vue";

const currentPageTitle = ref("Usuários do Sistema");
const currentPage = ref(1);
const totalPages = ref(10);

const handlePageChange = (page: number) => {
  currentPage.value = page;
  console.log(`Navegando para a página ${page}`);
};
</script>
