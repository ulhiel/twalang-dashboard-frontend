<template>
    <div class="px-5 text-left">
        <div class="row d-block">
            <div class="subtitle d-flex align-items-center">
                <font-awesome-icon icon="bullseye" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem">Ringkasan</b>
            </div>
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="tcard shadow-sm">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 summary-item" style="border-right:1px solid #c7c7c7">
                                    <div class="number" style="color:#00568f">
                                        {{ userCount }}
                                    </div>
                                    <div class="capt">
                                        Total Jumlah Pengguna
                                    </div>
                                </div>
                                <div class="col-md-4 summary-item" style="border-right:1px solid #c7c7c7">
                                    <div class="number" style="color:#008f39">
                                        {{ purchaseCount }}
                                    </div>
                                    <div class="capt">
                                        Total Jumlah Pembelian
                                    </div>
                                </div>
                                <div class="col-md-4 summary-item">
                                    <div class="number" style="color:#fac502">
                                        {{ conversionRate }}%
                                    </div>
                                    <div class="capt">
                                        Convertion Rate Bulan Ini
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-6">
                <div class="subtitle d-flex align-items-center">
                    <font-awesome-icon icon="draw-polygon" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem">Demografi User Berdasarkan Jenis Kelamin</b>
                </div>
                <div class="row my-3">
                    <div class="col-md-12">
                        <div class="tcard shadow-sm">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <gender-comparison></gender-comparison>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="subtitle d-flex align-items-center">
                <font-awesome-icon icon="chart-line" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem">Demografi User Berdasarkan Usia</b>
            </div>
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="tcard shadow-sm">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <age-demographicContainer></age-demographicContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="row d-block mt-3">
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            userCount: '',
            purchaseCount: '',
            conversionRate: ''
        }
    },
    methods: {
        retrieveBriefSummary(){
            axios.get('api/marketing/briefSummary')
            .then( response => {
                this.userCount = response.data.userCount,
                this.purchaseCount = response.data.purchaseCount,
                this.conversionRate = response.data.conversionRate
            })
            .catch(err => {
                console.error(err)
            })
        }
    },
    mounted(){
        this.retrieveBriefSummary()
    }
}
</script>

<style>
    .summary-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .summary-item .number {
        font-weight: bold;
        font-size: 3rem;
    }
</style>