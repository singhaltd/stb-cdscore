<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const selectedTab = ref(0);
definePageMeta({
  layout: "auth",
  title:'Params ຄຳຖາມ'
});

const { data: custType } = await useAsyncData("custType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/cust_type")
);

const { data: loanType } = await useAsyncData("loanType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/loan_type")
);

const { data: collateralType } = await useAsyncData("collateralType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/collateral_type")
);

function changeTab(index) {
  selectedTab.value = index;
}
</script>
<template>
  <div class="mt-4 w-full px-8">
    <TabGroup>
      <TabList class="tabs mt-5">
        <Tab v-slot="{ selected }">
          <div
            :class="[
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]"
          >
            ປະເພດລູກຄ້າ
          </div>
        </Tab>
        <Tab v-slot="{ selected }">
          <div
            :class="[
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]"
          >
            ປະເພດເງິນກູ້
          </div>
        </Tab>
        <Tab v-slot="{ selected }">
          <div
            :class="[
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]"
          >
            ປະເພດຫຼັກຊັບຄ້ຳປະກັນ
          </div>
        </Tab>
      </TabList>
      <TabPanels class="mt-5">
        <TabPanel>
          <div class="overflow-x-auto w-full">
            <table class="table table-compact w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>ຫົວຂໍ້</th>
                  <th>ຄຳອະທິບາຍ</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="ct in custType.data" :key="ct">
                  <th></th>
                  <td>{{ ct.name }}</td>
                  <td>{{ ct.description }}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div class="overflow-x-auto w-full">
            <table class="table table-compact w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>ຫົວຂໍ້</th>
                  <th>ຄຳອະທິບາຍ</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="ct in loanType.data" :key="ct">
                  <th></th>
                  <td>{{ ct.name }}</td>
                  <td>{{ ct.description }}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
        <!-- <TabPanel>
          <div class="overflow-x-auto w-full">
            <table class="table table-compact w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>ຫົວຂໍ້</th>
                  <th>ຄຳອະທິບາຍ</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="ct in collateralType.data" :key="ct">
                  <th></th>
                  <td>{{ ct.name }}</td>
                  <td>{{ ct.description }}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel> -->
      </TabPanels>
    </TabGroup>
  </div>
</template>