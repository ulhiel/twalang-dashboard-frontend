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
        category_id: {
            type: Number,
            default: 1
        }
    },
    watch:{
        'category_id'(){
            this.loaded = false
            this.retrieveCategoryPerformance(this.category_id)
        }
    },
    data(){
        return {
            loaded: false,
            chartdata: ''
        }
    },
    methods: {
        retrieveCategoryPerformance(){
            axios.get('api/product/category/' + this.category_id)
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
        this.retrieveCategoryPerformance(this.category_id)
    }
}
</script>

<style>

</style>