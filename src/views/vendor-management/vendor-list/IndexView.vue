<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */

/* ----- Import Components ----- */

/* ----- Global variables ----- */

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
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
    <PageHeader title="Vendor List" class="mb-5">
      <n-button type="primary">Create</n-button>
    </PageHeader>

    <PageBlock>
      <router-link :to="{ name: RouteName.vendor.detail.root, params: { id: 1 } }">
        <n-button type="success">Detail</n-button>
      </router-link>
    </PageBlock>
  </div>
</template>
