<template>
  <div class="base-container d-flex" style="flex-direction:column">
      <top-navbar @toggleSidebar="sidebarVisible = !sidebarVisible"></top-navbar>
      <div class="wrapper d-flex" style="flex-grow:1">
          <left-bar v-if="sidebarVisible"></left-bar>
          <div class="container-fluid py-3" style="background-color:#f0f0f0">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sidebarVisible: true
        }
    }
}
</script>

<style>

</style>