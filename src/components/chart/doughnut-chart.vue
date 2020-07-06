<script>
import { Doughnut } from 'vue-chartjs'
export default {
    extends: Doughnut,
    props: {
        chartdata: {
            type: Object,
            default: null
        }
    },
    data(){
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.chartdata,this.options)
    }
}
</script>

<style>

</style>