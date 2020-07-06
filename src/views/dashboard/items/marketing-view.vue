<template>
  <div class="container-fluid">
    <div class="mb-3 text-left">
      <h3><b>Twalang Marketing Desk</b></h3>
    </div>
    <div class="row my-3">
      <div class="col-md-2">
        <div class="card text-white text-center bg-primary">
          <div class="card-body">
            <p>Jumlah User Aktif</p>
            <h2><b>{{ userCount }}</b></h2>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card">
          <div class="card-body">
            <gender-comparison></gender-comparison>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <age-demographicContainer></age-demographicContainer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      userCount: ''
    }
  },
  mounted(){
    axios.get('api/user/count')
    .then( resp => {
      this.userCount = resp.data
    })
    .catch( err => {
      console.error(err)
    })
  }
}
</script>

<style>

</style>