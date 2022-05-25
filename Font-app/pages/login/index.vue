<script setup>
const route = useRoute()
definePageMeta({
  title: "ເຂົ້າສູ່ລະບົບ",
});
const locales = useLocales();
const authKey = useCookie("autKey");
const signinForm = ref({ username: "", password: "" });
let loading = ref(false);
const signin = () => {
  loading = true;
  // $ApiFetch('/login',{method:'POST'})
  signInUser(signinForm).then((res) => {
    authKey.value = res.token;
    navigator('/')
  });
};
</script>
<template>
  <div>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div
        class="
          flex flex-col
          light:bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div
          class="
            font-medium
            self-center
            text-xl
            sm:text-3xl
            text-gray-800
            dark:text-white
          "
        >
          CRD
        </div>
        <div
          class="
            mt-4
            self-center
            text-xl
            sm:text-sm
            text-gray-800
            dark:text-white
          "
        >
          Enter your credentials to access your account
        </div>

        <div class="mt-10">
          <form @submit.prevent="signin">
            <div class="flex flex-col mb-5">
              <label
                for="email"
                class="mb-1 text-xs tracking-wide dark:text-white"
                >ຊື່ຜູ້ໃຊ້ລະບົບ:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <input
                  id="username"
                  type="text"
                  name="username"
                  v-model="signinForm.username"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    input
                    input-bordered 
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="ປ້ອນ ອີເມວ໌ ຫຼື ເບີໂທ"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="
                  mb-1
                  text-xs
                  sm:text-sm
                  tracking-wide
                  text-gray-600
                  dark:text-white
                "
                >ລະຫັດຜ່ານ:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                      />
                    </svg>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  v-model="signinForm.password"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    input
                    input-bordered 
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="ປ້ອນລະຫັດຜ່ານ"
                />
              </div>
            </div>
            <button
              :class="loading ? 'btn w-full loading' : 'btn w-full'"
              type="submit"
            >
              ເຂົ້າສູ່ລະບົບ
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>