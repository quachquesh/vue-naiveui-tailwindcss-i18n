<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */

/* ----- Import Components ----- */
import SideBar from './components/SideBar.vue'
import HeaderBar from './components/HeaderBar.vue'

/* ----- Global variables ----- */

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
const appStore = useAppStore()
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
onMounted(() => {
  nextTick(() => {
    appStore.isLoadingWebsite = false
  })
})

onBeforeUnmount(() => {
  appStore.isLoadingWebsite = true
})
//#endregion ----- Hooks -----
</script>

<template>
  <n-layout has-sider class="h-screen">
    <!-- Side bar -->
    <side-bar />

    <n-layout>
      <!-- navbar -->
      <header-bar />

      <n-layout-content
        content-style="padding: 24px 30px;"
        position="absolute"
        :native-scrollbar="false"
      >
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in" appear>
            <component :is="Component" :key="route.name" class="flex-1" />
          </transition>
        </router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>
$header-height: 60px;
.n-layout-header {
  height: $header-height;
}
.n-layout-content {
  top: $header-height !important;
}
</style>
