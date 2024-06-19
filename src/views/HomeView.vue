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
    <div class="flex items-center gap-x-2">
      <NButton type="default" @click="getMe">Get Me</NButton>
      <NButton type="primary" @click="getMe">Get Me</NButton>
      <NButton type="error" @click="getMe">Get Me</NButton>
      <NButton type="info" @click="getMe">Get Me</NButton>
      <NButton type="success" @click="getMe">Get Me</NButton>
      <NButton type="warning" @click="getMe">Get Me</NButton>
    </div>
    <div class="text-primary text-2xl font-medium text-center mb-5 animate-bounce duration-1000">
      {{ $t('locale') }}
    </div>
    <div
      class="text-primary text-2xl font-medium text-center mb-5 animate-in fade-in zoom-in slide-in-from-left duration-1000"
    >
      {{ $n(1000000.1236, 'currency') }}
    </div>
    <div
      class="text-primary text-2xl font-medium text-center mb-5 animate-in fade-in zoom-in slide-in-from-right duration-1000"
    >
      {{ $d(new Date(), 'dateTime') }}
    </div>
  </div>
</template>
