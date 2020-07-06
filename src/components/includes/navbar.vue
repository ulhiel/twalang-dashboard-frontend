<template>
  <div class="top-navbar d-flex justify-content-center align-items-center">
      <div class="container-fluid d-flex">
          <button class="btn text-white btn-sm mx-3" @click="handdleToggle">&#9776;</button>
          <div class="brand">
              Twalang Administrator
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        handdleToggle(){
            this.$emit('toggleSidebar')
        }
    }
}
</script>

<style lang="scss" scoped>
    .top-navbar{
        width: 100%;
        height: 55px;

        background-color: #1d66db;
    }

    .brand {
        color: #FFFFFF;
        font-weight: bold;
        font-size: 1.5rem;
    }
</style>
