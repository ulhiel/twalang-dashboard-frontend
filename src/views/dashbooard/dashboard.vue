<template>
  <div class="base-container d-flex">
    <dashboard-sidebar></dashboard-sidebar>
    <div class="container-fluid py-3 overflow-auto" style="background-color:#e1e7eb">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>