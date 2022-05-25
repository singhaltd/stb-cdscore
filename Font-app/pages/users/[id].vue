<script setup>
// import { validateRef } from "light-vue3-validation";
import { ref, reactive } from "vue";
definePageMeta({
  layout: "auth",
});
const tbHeader = reactive([
  "fullname",
  "email",
  "mobile",
  "restrict",
  "Address Restrict",
  "created_at",
]);
const { data: user } = await useAsyncData("listUsers", () =>
  $fetch("http://10.0.34.37:3333/api/v1/users/laithong")
);
const createUser = async () => {
  await $fetch("http://10.0.34.37:3333/api/v1/auth/create", {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: user,
  });
};
</script>
<template>
  <div>
    <!-- {{user}} -->
    <div class="flex">
      <div class="w-60">
        <div class="w-full card__media">
          <img
            src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg"
            class="h-20 w-full"
          />
        </div>
        <div class="card__media--aside"></div>
        <div class="flex items-center p-4">
          <div class="relative flex flex-col items-center w-full">
            <div
              class="
                h-24
                w-12
                md
                rounded-full
                relative
                avatar
                flex
                items-end
                justify-end
                text-purple-600
                min-w-max
                absolute
                -top-16
                flex
                bg-purple-200
                text-purple-100
                row-start-1 row-end-3
                text-purple-650
                ring-1 ring-white
              "
            >
              <img
                class="h-20 w-20 md rounded-full relative"
                src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                alt=""
              />
              <div class="absolute"></div>
            </div>
            <div
              class="
                flex flex-col
                space-y-1
                justify-center
                items-center
                -mt-12
                w-full
              "
            >
              <span
                class="
                  text-md
                  whitespace-nowrap
                  text-gray-800
                  font-semibold
                  dark:text-white
                "
                >{{ user.data.fullname }}</span
              >
              <!-- <span class="text-md whitespace-nowrap text-gray-600"
                >boussadjra</span
              >
              <p class="text-sm text-gray-500">
                I can't start my day without a coffee cup
              </p> -->

              <!-- <div
                class="
                  py-4
                  flex
                  justify-center
                  items-center
                  w-full
                  divide-x divide-gray-400 divide-solid
                "
              >
                <span class="text-center px-2"
                  ><span class="font-bold text-gray-700">56</span
                  ><span class="text-gray-600"> followers</span></span
                ><span class="text-center px-2"
                  ><span class="font-bold text-gray-700">112</span
                  ><span class="text-gray-600"> following</span></span
                ><span class="text-center px-2"
                  ><span class="font-bold text-gray-700">27</span
                  ><span class="text-gray-600"> repos</span></span
                >
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="content">asdkflsajfk</div>
    </div>
  </div>
</template>


<style>
</style>