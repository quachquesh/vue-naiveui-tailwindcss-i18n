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
    label: $t('auth.profile'),
    icon: render.renderIcon({ icon: 'flowbite:profile-card-outline' }),
    props: {
      onClick: () => {
        notification.info({
          title: $t('auth.profile'),
          content: authStore.profile ? JSON.stringify(authStore.profile) : 'empty',
          meta: 'info',
          duration: 2000,
          keepAliveOnHover: true
        })
      }
    }
  },
  {
    label: $t('auth.logout'),
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
  <NLayoutHeader bordered class="flex items-center justify-between px-6">
    <!-- Left -->
    <div class="flex items-center gap-x-2">
      <NButton
        quaternary
        size="small"
        @click="appStore.sideBarCollapsed = !appStore.sideBarCollapsed"
      >
        <template #icon>
          <Icon icon="eva:menu-2-outline" />
        </template>
      </NButton>

      <BreadcrumbComp />
    </div>
    <!-- Right -->
    <div class="flex items-center gap-x-4">
      <NDropdown :options="appStore.localeOptions" @select="appStore.setLocale">
        <NButton>
          <template #icon>
            <component :is="appStore.localeCurrent?.icon" />
          </template>
          {{ appStore.localeCurrent?.label }}
        </NButton>
      </NDropdown>

      <NDropdown :options="accountOptions">
        <NButton>
          <NAvatar round :size="24" :src="authStore.profile?.avatar ?? 'empty'" class="mr-2">
            <template #placeholder>
              <div class="flex items-center justify-center w-full h-full">
                <Icon icon="mdi:user" height="20px" />
              </div>
            </template>
            <template #fallback>
              <div class="flex items-center justify-center w-full h-full">
                <Icon icon="mdi:user" height="20px" />
              </div>
            </template>
          </NAvatar>
          {{ authStore.profile?.email }}
        </NButton>
      </NDropdown>
    </div>
  </NLayoutHeader>
</template>
