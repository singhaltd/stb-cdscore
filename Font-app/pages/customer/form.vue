<script setup>
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { ref, reactive } from "vue";
definePageMeta({
  layout: "auth",
});
// var stepIndex = ref(0)
const tbHeader = reactive([
  "ຊື່ ແລະ ນາມສະກຸນ",
  "email",
  "mobile",
  "ວິສາຫະກິດ",
  "ປະເພດ",
  "ວັນທີເດືອນປີ",
]);
const loanCust = reactive({
  firstname: ref(""),
  lastname: ref(""),
  sex: ref("M"),
  cust_type: ref(""),
  loan_type: ref(""),
  questions: ref(""),
  finance: ref(0),
  ccy: ref("LAK"),
  cycle: ref(0),
  cycle_type: ref("Y"),
  exp: ref("N"),
  perpose: ref(""),
});

const XData = reactive({ test: ref("") });
var getLoan = ref({ data: Object });
const selected = ref("M");
const { pending, data: CutType } = await useAsyncData("CustType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/custype/loantype")
);
const { data: Collateral } = await useAsyncData("Collateral", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/collateral_type")
);

watchEffect(() => {
  if (loanCust.cust_type) {
    getLoanType(loanCust.cust_type);
  }
  if (loanCust.cust_type && loanCust.loan_type) {
    getQuestion("asdf");
  }
  if (loanCust.exp.value) {
    getLoanType("sfad");
  }
});

const getLoanType = (str) => {
  const dt = CutType.value.data.filter((i) => i.id == str);
  getLoan.value = dt[0].loans;
};

const getQuestion = async (str) => {
  //customer_type?id=1&lid=1
  try {
    const resQuetions = await $fetch(
      `http://10.0.34.37:3333/api/v1/crd/questions/${loanCust.cust_type}/${loanCust.loan_type}/${loanCust.exp}`
    );
    loanCust.questions = resQuetions.data;
  } catch (e) {}
};

const stepIndex = ref(0);
const CreateCustomer = () => {
  createCustomer(loanCust).then((res) => {
    stepIndex.value++;
  });
};
</script>
<template>
  <div class="w-8/12 mx-auto mt-5">
    <TabGroup :selectedIndex="stepIndex">
      <TabList class="steps">
        <Tab class="step step-primary">ຂໍ້ມູນລູກຄ້າ</Tab>
        <Tab :class="`step ${stepIndex > 0 ? 'step-primary' : ''}`"
          >ຫຼັກຊັບຄ້ຳປະກັນ {{ stepIndex }}</Tab
        >
        <Tab :class="`step ${stepIndex > 1 ? 'step-primary' : ''}`"
          >ປະເພດລູກຄ້າ ແລະ ສິນເຊື່ອ</Tab
        >
        <Tab :class="`step ${stepIndex > 2 ? 'step-primary' : ''}`">Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div class="w-full p-16">
            <form>
              <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium dark:text-gray-300"
                    >ຊື່ແທ້</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    v-model="loanCust.firstname"
                    class="
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                    "
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                    >ນາມສະກຸນ</label
                  >
                  <input
                    type="text"
                    id="last_name"
                    v-model="loanCust.lastname"
                    class="
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                    "
                    required
                  />
                </div>
                <div>
                  <label
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                    >ເພດ</label
                  >
                  <div class="flex">
                    <div class="flex">
                      <input
                        type="radio"
                        name="sex"
                        v-model="loanCust.sex"
                        class="radio"
                        value="M"
                        id="sexm"
                      />
                      <label class="pl-4" for="sexm">ຊາຍ</label>
                    </div>
                    <div class="flex pl-5">
                      <input
                        type="radio"
                        name="sex"
                        v-model="loanCust.sex"
                        class="radio"
                        id="sexf"
                        value="F"
                      />
                      <label class="pl-4" for="sexf">ຍິງ</label>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="company"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                    >ຊື່ວິສາຫະກິດ</label
                  >
                  <input
                    type="text"
                    id="company"
                    v-model="loanCust.company"
                    class="
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                    "
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                    >ເບີໂທ</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    v-model="loanCust.mobile"
                    class="
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                    "
                    placeholder="020-XXXX-XXXX"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                    >ອີເມວ໌</label
                  >
                  <input
                    type="email"
                    id="email"
                    v-model="loanCust.email"
                    class="
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                    "
                    placeholder="stb@stbanklaos.com"
                  />
                </div>
                <div>
                  <label
                    for="financeAm"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                    >ວົງເງິນສະເໜີກູ້</label
                  >
                  <div class="relative">
                    <input
                      type="number"
                      id="financeAm"
                      v-model="loanCust.finance"
                      class="
                        bg-gray-50
                        border border-gray-300
                        text-gray-900 text-sm
                        rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                        block
                        text-right
                        w-full
                        pt-2.5
                        pb-2.5
                        pr-20
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                      "
                      required
                    />
                    <select
                      v-model="loanCust.ccy"
                      class="
                        absolute
                        right-0
                        top-0
                        mr-1
                        select select-ghost select-sm
                        mt-1
                      "
                    >
                      <option value="LAK">LAK</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    for="cycle"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                    >ໄລຍະເວລາ
                  </label>
                  <div class="relative">
                    <input
                      type="number"
                      id="cycle"
                      v-model="loanCust.cycle"
                      class="
                        bg-gray-50
                        border border-gray-300
                        text-gray-900 text-sm
                        rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                        block
                        w-full
                        text-right
                        pt-2.5
                        pb-2.5
                        pr-20
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                      "
                      required
                    />
                    <select
                      v-model="loanCust.cycle_type"
                      class="
                        absolute
                        right-0
                        top-0
                        mr-1
                        select select-ghost select-sm
                        mt-1
                        text-center
                      "
                    >
                      <option value="Y">ປີ</option>
                      <option value="M">ເດືອນ</option>
                      <option value="D">ວັນ</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="perpose"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-gray-300
                  "
                  >ເປົ້າໝາຍສະເໜີກູ້</label
                >
                <textarea
                  id="perpose"
                  v-model="loanCust.perpose"
                  class="
                    textarea textarea-bordered
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  required
                ></textarea>
              </div>
              <button type="button" class="btn mt-8" @click="CreateCustomer">
                ບັນທຶກ ແລະ ຕໍ່ໄປ
              </button>
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <div class="grid gap-6 mb-6 lg:grid-cols-2 p-16">
            <div class="w-full">
              <label
                for="last_name"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-gray-300
                "
                >ປະເພດຫຼັກຊັບຄ້ຳປະກັນ</label
              >
              <select
                class="select select-bordered w-full"
                v-model="loanCust.cust_type"
              >
                <option disabled selected>ເລືອກປະເພດລູກຄ້າ</option>
                <option v-for="ci in Collateral.data" :key="ci" :value="ci.id">
                  {{ ci.name }}
                </option>
              </select>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div class="grid gap-6 lg:grid-cols-2 px-5 py-5">
            <div class="w-full">
              <div>
                <label
                  for="last_name"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-gray-300
                  "
                  >ປະເພດລູກຄ້າ</label
                >
                <select
                  class="select select-bordered w-full"
                  v-model="loanCust.cust_type"
                >
                  <option disabled selected>ເລືອກປະເພດລູກຄ້າ</option>
                  <option v-for="ci in CutType.data" :key="ci" :value="ci.id">
                    {{ ci.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="w-full">
              <div>
                <label
                  for="last_name"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-gray-300
                  "
                  >ປະເພດສິນເຊື່ອ</label
                >
                <select
                  class="select select-bordered w-full"
                  v-model="loanCust.loan_type"
                >
                  <option disabled selected>ເລືອກປະເພດສິນເຊື່ອ</option>
                  <option v-for="ci in getLoan" :key="ci" :value="ci.id">
                    {{ ci.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="w-full px-5 mb-8">
            <label
              for="last_name"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >ເຄີຍກູ້ມາກ່ອນ ຫຼື ມີກູ້ໃນປະຈຸບັນ</label
            >
            <div class="flex">
              <div class="flex">
                <input
                  type="radio"
                  id="expY"
                  v-model="loanCust.exp"
                  value="Y"
                  name="exp_yn"
                  class="radio"
                />
                <label class="pl-4" for="expY">ເຄີຍກູ້ມາກ່ອນ</label>
              </div>
              <div class="flex ml-10">
                <input
                  type="radio"
                  id="expN"
                  v-model="loanCust.exp"
                  value="N"
                  name="exp_yn"
                  class="radio"
                />
                <label class="pl-4" for="expN">ບໍ່ເຄີຍກູ້ມາກ່ອນ</label>
              </div>
            </div>
          </div>
          <div class="w-full px-5">
            <TabGroup>
              <TabList class="tabs">
                <Tab
                  v-slot="{ selected }"
                  v-for="qi in loanCust.questions"
                  :key="qi"
                >
                  <div
                    :class="[
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]"
                  >
                    {{ qi.title }}
                    <div class="badge">0%</div>
                  </div>
                </Tab>
              </TabList>
              <TabPanels class="mt-6">
                <TabPanel v-for="cp in loanCust.questions" :key="cp">
                  <ol type="number">
                    <li v-for="it in cp.qeustions" :key="it">
                      <h1>{{ it.title }}</h1>
                      <template v-if="it.input_type == 'radio'">
                        <div
                          class="form-control"
                          v-for="asi in it.answers"
                          :key="asi"
                        >
                          <label class="label cursor-pointer">
                            <input
                              type="radio"
                              v-model="it.weight"
                              :value="asi.weight"
                              class="radio checked:bg-red-500"
                            />
                            <span class="label-text">{{ asi.title }}</span>
                          </label>
                        </div>
                      </template>
                    </li>
                  </ol>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </TabPanel>
        <TabPanel>
          
          <div class="overflow-x-auto">
            <table class="table table-compact w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>ຄຳຖາມ</th>
                  <th class="text-right">ຄະແນນ</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="cp in loanCust.questions">
                  <tr>
                    <th></th>
                    <th colspan="2">{{cp.title}}</th>
                  </tr>
                  <tr v-for="(qi,xi) in cp.qeustions" :key="qi">
                    <th>{{xi+1}}</th>
                    <td>{{qi.title}}</td>
                    <td class="text-right">0 %</td>
                  </tr>
                </template>
                  
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="2" class="text-right">ລວມ</th>
                  <th class="text-right">0 %</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>