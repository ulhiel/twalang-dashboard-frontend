<template>
  <div class="base-container d-flex" style="flex-direction:column">
      <top-navbar></top-navbar>
      <div class="wrapper d-flex" style="flex-grow:1">
          <left-bar></left-bar>
          <div class="container-fluid py-3">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style>

</style>