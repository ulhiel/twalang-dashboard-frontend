<template>
    <div>
        <age-demographic
            :chartdata="chartdata"
            v-if="loaded"
        >
        </age-demographic>
        <div class="text-center" v-if="!loaded">Loading Data..</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            loaded: false,
            chartdata: '',
        }
    },
    mounted(){
        axios.get('/api/user/ageDemographic')
        .then(resp => {
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