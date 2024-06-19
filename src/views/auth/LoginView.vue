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
      renderMessage: () => $t('rules.required', { field: $t('auth.username') }),
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      renderMessage: () => $t('rules.required', { field: $t('auth.password') }),
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
  >
    <div class="w-[520px] bg-white p-[60px] rounded-tr-[30px] rounded-bl-[30px]">
      <div class="mb-10">
        <img class="mx-auto w-36" src="@/assets/images/logo.svg" alt="" />
      </div>
      <NForm
        ref="formRef"
        label-width="auto"
        label-placement="left"
        require-mark-placement="right-hanging"
        :model="formData"
        :rules="rules"
        @submit.prevent="onSubmit"
      >
        <NFormItem path="username">
          <NInput
            v-model:value="formData.username"
            :placeholder="$t('auth.username')"
            size="large"
            @change="errorMessage = ''"
          />
        </NFormItem>
        <NFormItem path="password">
          <NInput
            v-model:value="formData.password"
            :placeholder="$t('auth.password')"
            type="password"
            size="large"
            show-password-on="mousedown"
            :input-props="{
              autocomplete: 'on'
            }"
            @change="errorMessage = ''"
          />
        </NFormItem>
        <div v-if="errorMessage" class="text-danger font-medium text-sm mb-2">
          {{ errorMessage }}
        </div>
        <NButton
          class="!mt-4"
          type="primary"
          attr-type="submit"
          :loading="state.isPending"
          :disabled="state.isPending"
          :block="true"
        >
          {{ $t('auth.signin') }}
        </NButton>
        <div class="text-end mt-4">
          <NDropdown :options="appStore.localeOptions" @select="appStore.setLocale">
            <NButton>
              <template #icon>
                <component :is="appStore.localeCurrent?.icon" />
              </template>
              {{ appStore.localeCurrent?.label }}
            </NButton>
          </NDropdown>
        </div>
      </NForm>
    </div>
  </div>
</template>
