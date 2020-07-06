<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
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