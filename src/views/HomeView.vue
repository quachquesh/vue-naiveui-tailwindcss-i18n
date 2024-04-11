<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */

/* ----- Import Components ----- */

/* ----- Global variables ----- */

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
const { getMe } = useAuthStore()
//#endregion ----- Stores -----

//#region ----- State -----
const state = reactive({
  isFetching: true,
  isPending: false,
  isError404: false
})
//#endregion ----- State -----

//#region ----- Composables -----
//#endregion ----- Composables -----

//#region ----- Variables -----
//#endregion ----- Variables -----

//#region ----- Functions -----
//#endregion ----- Functions -----

//#region ----- Hooks -----
//#endregion ----- Hooks -----
</script>

<template>
  <div>
    <n-button type="primary" @click="getMe">Get Me</n-button>
    <div class="text-primary text-2xl font-medium text-center mb-5">{{ t('locale') }}</div>
    <div class="text-primary text-2xl font-medium text-center mb-5">
      {{ n(1000000.1236, 'currency') }}
    </div>
    <div class="text-primary text-2xl font-medium text-center mb-5">
      {{ d(new Date(), 'dateTime') }}
    </div>
  </div>
</template>
