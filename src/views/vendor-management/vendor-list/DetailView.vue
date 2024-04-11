<script setup lang="ts"></script>

<template>
  <div>
    <h1>Detail view</h1>
    <router-link :to="{ name: RouteName.vendor.root }">
      <n-button type="success">Back</n-button>
    </router-link>
    <router-link :to="{ name: RouteName.vendor.detail.child }">
      <n-button type="info">Child</n-button>
    </router-link>
  </div>
</template>
