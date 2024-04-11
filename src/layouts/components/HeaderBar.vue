<script setup lang="ts">
/* ----- Import Type ----- */
import type { DropdownMixedOption } from 'naive-ui/es/dropdown/src/interface'

/* ----- Import Variables ----- */

/* ----- Import Components ----- */
import { Icon } from '@iconify/vue'
import BreadcrumbComp from './header-bar/BreadcrumbComp.vue'

/* ----- Global variables ----- */

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
const authStore = useAuthStore()
const appStore = useAppStore()
//#endregion ----- Stores -----

//#region ----- State -----
//#endregion ----- State -----

//#region ----- Composables -----
const render = useRender()
const notification = useNotification()
//#endregion ----- Composables -----

//#region ----- Variables -----
const accountOptions = computed<DropdownMixedOption[]>(() => [
  {
    label: t('auth.profile'),
    icon: render.renderIcon({ icon: 'flowbite:profile-card-outline' }),
    props: {
      onClick: () => {
        notification.info({
          title: t('auth.profile'),
          content: JSON.stringify(authStore.profile?.profile) ?? 'empty',
          meta: 'info',
          duration: 2000,
          keepAliveOnHover: true
        })
      }
    }
  },
  {
    label: t('auth.logout'),
    icon: render.renderIcon({ icon: 'material-symbols:logout' }),
    props: {
      onClick: () => {
        authStore.logout()
      }
    }
  }
])
//#endregion ----- Variables -----

//#region ----- Functions -----
//#endregion ----- Functions -----

//#region ----- Hooks -----
//#endregion ----- Hooks -----
</script>

<template>
  <n-layout-header bordered class="flex items-center justify-between px-6">
    <!-- Left -->
    <div class="flex items-center gap-x-2">
      <n-button
        quaternary
        size="small"
        @click="appStore.sideBarCollapsed = !appStore.sideBarCollapsed"
      >
        <template #icon>
          <Icon icon="eva:menu-2-outline" />
        </template>
      </n-button>

      <breadcrumb-comp />
    </div>
    <!-- Right -->
    <div class="flex items-center gap-x-4">
      <n-dropdown :options="appStore.localeOptions" @select="appStore.setLocale">
        <n-button>
          <template #icon>
            <component :is="appStore.localeCurrent?.icon" />
          </template>
          {{ appStore.localeCurrent?.label }}
        </n-button>
      </n-dropdown>

      <n-dropdown :options="accountOptions">
        <n-button>
          <n-avatar
            round
            :size="24"
            :src="authStore.profile?.profile.avatar ?? 'empty'"
            class="mr-2"
          >
            <template #placeholder>
              <div class="flex items-center justify-center w-full h-full">
                <icon icon="mdi:user" height="20px" />
              </div>
            </template>
            <template #fallback>
              <div class="flex items-center justify-center w-full h-full">
                <icon icon="mdi:user" height="20px" />
              </div>
            </template>
          </n-avatar>
          {{ authStore.profile?.profile.fullname }}
        </n-button>
      </n-dropdown>
    </div>
  </n-layout-header>
</template>
