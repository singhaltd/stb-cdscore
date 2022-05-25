<script setup>
// import { validateRef } from "light-vue3-validation";
import { ref, reactive } from "vue";
definePageMeta({
  layout: "auth",
  title: "ຈັດການຜູ້ໃຊ້ລະບົບ",
  middleware: ["auth"],
});
const { data: listUsers } = await useLazyAsyncData("listUsers", () =>
  $fetch("/api/users")
);
watch(listUsers, (NewUsers) => {
  console.log(NewUsers);
});

const user = reactive({
  username: ref(""),
  fullname: ref(""),
  password: ref(""),
  cpassword: ref(""),
  email: ref(""),
  mobile: ref(""),
});


</script>
<template>
  <div class="w-full mt-5 px-5">
    <div class="flex justify-between my-3">
      <h4>ຜູ້ໃຊ້ລະບົບ</h4>
      <label for="my-modal" class="btn btn-square btn-sm">+</label>
    </div>
    <ModalSm>
      <template #title> Add New User </template>
      <div class="mt-5">
        <form>
          <input
            type="text"
            v-model="user.fullname"
            name="fullname"
            placeholder="fullname"
            class="input input-sm w-full mb-5"
          />
          <input
            type="text"
            v-model="user.username"
            name="username"
            placeholder="username"
            class="input input-sm w-full mb-5"
          />
          <input
            type="email"
            name="email"
            v-model="user.email"
            placeholder="email"
            class="input input-sm w-full mb-5"
          />
          <input
            type="tel"
            name="mobile"
            v-model="user.mobile"
            placeholder="mobile"
            class="input input-sm w-full mb-5"
          />
          <input
            type="text"
            name="password"
            v-model="user.password"
            placeholder="password"
            class="input input-sm w-full mb-5"
          />
          <input
            type="text"
            name="cpassword"
            placeholder="confirm password"
            class="input input-sm w-full mb-5"
          />
          <button type="button" class="btn" @click="createUser">Save</button>
        </form>
      </div>
    </ModalSm>
    <div class="overflow-x-auto w-full">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th>ຊື່ ແລະ ນາມສະກຸນ</th>
            <th>ສາຂາ</th>
            <th>ເບີໂທ</th>
            <th>ສັງກັດຢູ່ພະແນກ</th>
            <th>ສະຖານະ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ui in listUsers.data.data.data" :key="ui">
            <th>{{ ui.fullname }}</th>
            <td>001</td>
            <td>{{ ui.mobile }}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="btn-group" v-if="listUsers.data.data.meta.total > 1">
      <input
        type="radio"
        name="options"
        data-title="1"
        class="btn"
        v-for="ip in listUsers.data.data.meta"
        :key="ip"
      />
    </div>
  </div>
</template>


<style>
</style>