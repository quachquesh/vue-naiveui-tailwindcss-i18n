<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */

/* ----- Import Components ----- */

/* ----- Global variables ----- */

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
const { breadcrumbs } = storeToRefs(useAppStore())
//#endregion ----- Stores -----

//#region ----- State -----
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
  <n-breadcrumb>
    <transition-group name="breadcrumb">
      <n-breadcrumb-item
        v-for="breadcrumb in breadcrumbs"
        :key="breadcrumb.text"
        :clickable="!!breadcrumb.to"
      >
        <router-link v-if="breadcrumb.to" :to="breadcrumb.to">
          {{ t(breadcrumb.text) }}
        </router-link>
        <template v-else>
          {{ t(breadcrumb.text) }}
        </template>
      </n-breadcrumb-item>
    </transition-group>
  </n-breadcrumb>
</template>
