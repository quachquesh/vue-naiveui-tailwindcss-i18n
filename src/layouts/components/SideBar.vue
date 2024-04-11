<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */
import { menuOptions } from '@/data/sidebarMenu'

/* ----- Import Components ----- */

/* ----- Global variables ----- */
const route = useRoute()

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
//#endregion ----- Hooks -----
</script>

<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed="appStore.sideBarCollapsed"
    :collapsed-width="64"
    :width="280"
  >
    <div
      class="h-[140px] flex items-center justify-center border-b border-[#ffffff4d] transition-all"
      :class="{
        'h-[60px]': appStore.sideBarCollapsed
      }"
    >
      <transition name="fade" mode="out-in" appear>
        <n-image
          v-if="appStore.sideBarCollapsed"
          src="/images/logo-icon.png"
          preview-disabled
          width="48"
        />
        <n-image v-else src="/images/logo-text-white.svg" preview-disabled />
      </transition>
    </div>
    <n-scrollbar style="height: calc(100% - 140px); padding-top: 8px">
      <n-menu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :default-expand-all="true"
        :value="appStore.getBreadcrumbRoot?.routeName"
      />
    </n-scrollbar>
  </n-layout-sider>
</template>
