<template>
  <doughnut-chart
    :chartdata="chartdata"
    v-if="loaded"
  >
  </doughnut-chart>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            loaded: false,
            chartdata: ''
        }
    },
    mounted(){
        axios.get('api/user/genderDemographic')
        .then( resp => {
            this.chartdata = resp.data
            console.log(resp.data)
            this.loaded = true
        })
        .catch(err => {
            console.error(err)
        })
    }
}
</script>

<style>

</style>