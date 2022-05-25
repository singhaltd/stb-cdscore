<script setup>
// import { validateRef } from "light-vue3-validation";
import { ref, reactive } from "vue";
definePageMeta({
  layout: "auth",
});
const user = reactive({
  username: ref(""),
  fullname: ref(""),
  password: ref(""),
  cpassword: ref(""),
  email: ref(""),
  mobile: ref(""),
});
const tbHeader = reactive([
  "ຊື່ ແລະ ນາມສະກຸນ",
  "email",
  "mobile",
  "ວິສາຫະກິດ",
  "ປະເພດ",
  "ວັນທີເດືອນປີ",
  "ຈຸດປະສົງ",
]);
const { pending, data: customers } = await useAsyncData("customers", () =>
  $fetch("http://10.0.34.37:3333/api/v1/customer")
);
</script>
<template>
  <div class="w-full mt-5 px-5">
    <div class="flex justify-between my-3">
      <h4>ລູກຄ້າ</h4>
      <label for="my-modal" >+</label>
      <NuxtLink to="/customer/form?t=create" class="btn btn-square btn-sm">+</NuxtLink>
    </div>
    <TableCustomer :footer="false" :column="tbHeader" :items="customers.data" />
  </div>
</template>


<style>
</style>