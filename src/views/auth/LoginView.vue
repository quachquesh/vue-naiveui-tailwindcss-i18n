<script setup lang="ts">
/* ----- Import Type ----- */
import type { FormInst, FormRules } from 'naive-ui'

/* ----- Import Variables ----- */

/* ----- Import Components ----- */

/* ----- Global variables ----- */
const router = useRouter()

//#region ----- Element Ref -----
const formRef = ref<FormInst | null>(null)
//#endregion ----- Element Ref -----

//#region ----- Stores -----
const authStore = useAuthStore()
const appStore = useAppStore()
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
const errorMessage = ref('')

const formData = reactive({
  username: '',
  password: ''
})

const rules: FormRules = {
  username: [
    {
      required: true,
      renderMessage: () => t('rules.required', { field: t('auth.username') }),
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      renderMessage: () => t('rules.required', { field: t('auth.password') }),
      trigger: 'blur'
    }
  ]
}
//#endregion ----- Variables -----

//#region ----- Functions -----
async function onSubmit() {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      state.isPending = true
      try {
        await authStore.login(formData)
        appStore.isLoadingWebsite = true
        router.push({
          name: RouteName.index
        })
      } catch (error: any) {
        errorMessage.value = error.response?.data?.message || error.message || 'Đã có lỗi xảy ra'
      }
      state.isPending = false
    }
  })
}
//#endregion ----- Functions -----

//#region ----- Hooks -----
onMounted(() => {
  nextTick(() => {
    appStore.isLoadingWebsite = false
  })
})
//#endregion ----- Hooks -----
</script>

<template>
  <div
    class="bg-gray-200 w-screen h-screen flex justify-center items-center bg-no-repeat bg-cover bg-right-top"
    style="background-image: url('/images/login-background.jpg')"
  >
    <div class="w-[520px] bg-white p-[60px] rounded-tr-[30px] rounded-bl-[30px]">
      <div class="text-center mb-[60px]">
        <n-image src="/images/logo-text.svg" preview-disabled />
      </div>
      <n-form
        ref="formRef"
        label-width="auto"
        label-placement="left"
        require-mark-placement="right-hanging"
        :model="formData"
        :rules="rules"
        @submit.prevent="onSubmit"
      >
        <n-form-item path="username">
          <n-input
            v-model:value="formData.username"
            :placeholder="t('auth.username')"
            size="large"
            @change="errorMessage = ''"
          />
        </n-form-item>
        <n-form-item path="password">
          <n-input
            v-model:value="formData.password"
            :placeholder="t('auth.password')"
            type="password"
            size="large"
            show-password-on="mousedown"
            :input-props="{
              autocomplete: 'on'
            }"
            @change="errorMessage = ''"
          />
        </n-form-item>
        <div v-if="errorMessage" class="text-danger font-medium text-sm mb-2">
          {{ errorMessage }}
        </div>
        <n-button
          class="!mt-4"
          type="primary"
          attr-type="submit"
          :loading="state.isPending"
          :disabled="state.isPending"
          :block="true"
        >
          {{ t('auth.signin') }}
        </n-button>
        <div class="text-end mt-4">
          <n-dropdown :options="appStore.localeOptions" @select="appStore.setLocale">
            <n-button>
              <template #icon>
                <component :is="appStore.localeCurrent?.icon" />
              </template>
              {{ appStore.localeCurrent?.label }}
            </n-button>
          </n-dropdown>
        </div>
      </n-form>
    </div>
  </div>
</template>
