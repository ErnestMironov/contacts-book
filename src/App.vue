<template>
  <Header></Header>
  <router-view v-slot="slotProps">
    <transition name="page" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: { Header },
};
</script>

<style lang="scss"></style>
