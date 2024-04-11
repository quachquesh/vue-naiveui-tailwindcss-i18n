<script setup lang="ts"></script>

<template>
  <div>
    <h1>Detail child view</h1>
    <router-link :to="{ name: RouteName.vendor.detail.root }">
      <n-button type="success">Back</n-button>
    </router-link>
  </div>
</template>
