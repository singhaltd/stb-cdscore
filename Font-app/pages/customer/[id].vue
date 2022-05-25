<template>
  <div class="w-full mt-5">
    <div class="flex">
      <div class="flex-auto">
        <ProfileCustomer :data="customer.data" />
      </div>
      <div class="flex-auto w-1/4">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <tbody>
              <tr>
                <th>ສາຂາ:</th>
                <td></td>
              </tr>
              <tr>
                <th>ຈຳນວນເງີນຂໍກູ້:</th>
                <td>{{ customer.data.finance }}</td>
              </tr>
              <tr>
                <th>ສະກຸນເງີນ:</th>
                <td>{{ customer.data.ccy }}</td>
              </tr>
              <tr>
                <th>ຈັດເກດຄວາມສ່ຽງລູກຄ້າ:</th>
                <td></td>
              </tr>
              <tr>
                <th>ຄຳເຫັນການອະນຸມັດ/ປະຕິເສດ:</th>
                <td></td>
              </tr>
              <tr>
                <th>ອັດຕາດອກເບ້ຍຕໍ່ປີ:</th>
                <td></td>
              </tr>
              <tr>
                <th>ໄລຍະເວລາກູ້:</th>
                <td>
                  {{ customer.data.period }} {{ customer.data.period_type }}
                </td>
              </tr>
              <tr>
                <th>ເປົ້າໝາຍການນຳໃຊ້ເງິນກູ້:</th>
                <td>{{ customer.data.perpose }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <TabGroup>
      <TabList class="tabs">
        <Tab v-slot="{ selected }" v-for="ap in colApproach.data" :key="ap">
          <div
            :class="[
              selected
                ? 'tab tab-md tab-lifted gap-2 tab-active'
                : 'tab tab-md tab-lifted gap-2',
            ]"
          >
            {{ ap.title }}
            <div class="badge">0%</div>
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="cp in colApproach.data" :key="cp">
          <div class="overflow-x-auto">
            <table class="table table-compact w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>ຫົວຂໍ້</th>
                  <th>ຄະແນນ (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(it, i) in colApproach.data[i].approch" :key="it">
                  <th>{{ i + 1 }}</th>
                  <td>{{ it.title }}</td>
                  <td>0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="2">ລວມ</th>
                  <th>0</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const route = useRoute();
definePageMeta({
  layout: "auth",
});
const { data: customer } = await useAsyncData("customer", () =>
  $fetch(`http://10.0.34.37:3333/api/v1/crd/customer/${route.params.id}`)
);
const { data: colApproach } = await useAsyncData("colApproach", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/gradparams")
);
</script>

<style>
</style>