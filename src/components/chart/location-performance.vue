<template>
    <div>
        <age-demographic
            :chartdata="chartdata"
            v-if="loaded"
        >
        </age-demographic>
        <h1 class="text-center" v-if="!loaded">Retrieveing Data..</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        location_id: {
            type: Number,
            default: 1
        }
    },
    watch:{
        'location_id'(){
            this.loaded = false
            this.retrieveLocationPerformance(this.location_id)
        }
    },
    data(){
        return {
            loaded: false,
            chartdata: ''
        }
    },
    methods: {
        retrieveLocationPerformance(){
            axios.get('api/product/location/' + this.location_id)
            .then( resp => {
                this.chartdata = resp.data
                this.loaded = true
            })
            .catch(err => {
                console.error(err)
            })
        }
    },
    mounted(){
        this.retrieveLocationPerformance(this.location_id)
    }
}
</script>

<style>

</style>