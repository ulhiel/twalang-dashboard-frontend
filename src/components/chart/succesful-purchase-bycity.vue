<template>
  <age-demographic
    :chartdata="chartdata"
    v-if="loaded"
  >
  </age-demographic>
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
        axios.get('api/product/successfulPurchaseDoughnut')
        .then( resp => {
            this.chartdata = resp.data
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