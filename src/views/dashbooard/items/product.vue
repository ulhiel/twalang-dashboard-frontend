<template>
    <div class="px-5 text-left">
        <div class="row d-block">
            <div class="subtitle d-flex align-items-center">
                <font-awesome-icon icon="star-of-life" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem"> Ikhtisar Performa Produk</b>
            </div>
            <div class="row my-3">
                <div class="col-md-3">
                    <div class="tcard shadow-sm">
                        <div class="card-body summary-item">
                            <div class="number">
                                {{ summary.activities }}
                            </div>
                            <div class="capt">
                                Jumlah Aktivitas
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="tcard shadow-sm">
                        <div class="card-body summary-item">
                            <div class="number">
                                {{ summary.locations }}
                            </div>
                            <div class="capt">
                                Jumlah Kota Aktif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="tcard shadow-sm">
                        <div class="card-body summary-item">
                            <div class="number">
                                {{ summary.categories }}
                            </div>
                            <div class="capt">
                                Jumlah Kategori
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="tcard shadow-sm">
                        <div class="card-body summary-item">
                            <div class="number">
                                {{ summary.purchases }}
                            </div>
                            <div class="capt">
                                Jumlah Pembelian
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex my-3">
            <div class="col-md-6" style="padding-left:0">
                <div class="subtitle d-flex align-items-center">
                    <font-awesome-icon icon="percentage" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem"> Persentase Penjualan Sukses Berdasarkan Kategori</b>
                </div>
                <p><small><mark>Grafik lokasi penyumbang pembelian berhasil</mark></small></p>
                <div class="tcard shadow-sm">
                    <div class="card-body">
                        <succesful-purchase-bycity></succesful-purchase-bycity>
                    </div>
                </div>
            </div>
            <div class="col-md-6" style="padding-left:0">
                <div class="subtitle d-flex align-items-center">
                    <font-awesome-icon icon="percentage" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem"> Persentase Penjualan Sukses Berdasarkan Kota</b>
                </div>
                <p><small><mark>Grafik kategori penyumbang pembelian berhasil</mark></small></p>
                <div class="tcard shadow-sm">
                    <div class="card-body">
                        <successful-purchase-bycategory></successful-purchase-bycategory>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-block">
            <div class="subtitle d-flex align-items-center">
                <font-awesome-icon icon="compass" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem"> Performa Produk Berdasarkan Kota</b>
            </div>
            <div><small><mark>Diurutkan berdasarkan jumlah pembelian berhasil dari yang tertinggi</mark></small></div>
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="tcard shadow-sm">
                        <div class="card-body overflow-auto py-4" style="max-height:600px">
                            <table class="table text-center">
                                <thead>
                                    <th>No</th>
                                    <th>Kota</th>
                                    <th>Jumlah Aktivitas</th>
                                    <th>Pembelian Berhasil</th>
                                    <th>Persentase Penjualan Sukses</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(loc,index) in locationPerformanceTable" :key="loc.id">
                                        <td>{{ index+1 }}</td>
                                        <td class="text-left">{{ loc.name }}</td>
                                        <td>{{ loc.activitiesCount }}</td>
                                        <td>{{ loc.successfulPurchase }}</td>
                                        <td>{{ loc.successfulRate }} %</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-block">
            <div class="subtitle d-flex align-items-center">
                <font-awesome-icon icon="certificate" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem"> Performa Produk Berdasarkan Kategori</b>
            </div>
            <div><small><mark> Diurutkan berdasarkan jumlah pembelian berhasil dari yang tertinggi</mark></small></div>
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="tcard shadow-sm">
                        <div class="card-body overflow-auto py-4" style="max-height:600px">
                            <table class="table text-center">
                                <thead>
                                    <th>No</th>
                                    <th>Kota</th>
                                    <th>Jumlah Aktivitas</th>
                                    <th>Pembelian Berhasil</th>
                                    <th>Persentase Penjualan Sukses</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(loc,index) in categoryPerformanceTable" :key="loc.id">
                                        <td>{{ index+1 }}</td>
                                        <td class="text-left">{{ loc.name }}</td>
                                        <td>{{ loc.activitiesCount }}</td>
                                        <td>{{ loc.successfulPurchase }}</td>
                                        <td>{{ loc.successfulRate }} %</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-block">
            <div class="subtitle d-flex align-items-center">
                <font-awesome-icon icon="map-marker" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem"> Performa Penjualan Lokasi Spesifik</b>
            </div>
            <div><small><mark> Melihat performa penjualan di suatu kota</mark></small></div>
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="tcard shadow-sm">
                        <div class="card-body overflow-auto py-4" style="max-height:600px">
                            <form>
                                <div class="form-group">
                                    <label for="location">Kota</label>
                                    <select name="location" class="form-control" v-model="selectedLocation">
                                        <option v-for="loc in locations" :key="loc.id" :value="loc.id">{{ loc.name }}</option>
                                    </select>
                                </div>
                            </form>
                            <location-performance :location_id="selectedLocation"></location-performance>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-block">
            <div class="subtitle d-flex align-items-center">
                <font-awesome-icon icon="boxes" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem"> Performa Penjualan Kategori Spesifik</b>
            </div>
            <div><small><mark> Melihat performa penjualan kategori dari kota-kota</mark></small></div>
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="tcard shadow-sm">
                        <div class="card-body overflow-auto py-4" style="max-height:600px">
                            <form>
                                <div class="form-group">
                                    <label for="category">Kategori</label>
                                    <select name="category" class="form-control" v-model="selectedCategory">
                                        <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
                                    </select>
                                </div>
                            </form>
                            <category-performance :category_id="selectedCategory"></category-performance>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row block">
            <div class="col-md-6" style="padding-left:0">
                <div class="subtitle d-flex align-items-center">
                    <font-awesome-icon icon="dollar-sign" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem"> Urutan kota dengan nilai penjualan terbanyak</b>
                </div>
                <p><small><mark>Total nilai pembelian pada setiap kota</mark></small></p>
                <div class="tcard shadow-sm overflow-auto" style="max-height:400px">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <th>No</th>
                                <th>Kota</th>
                                <th>Nilai Penjualan</th>
                            </thead>
                            <tbody>
                                <tr v-for="(loc,index) in locationExpenses" :key="loc.id">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ loc.name }}</td>
                                    <td>{{ loc.expenses | currency}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-6" style="padding-left:0">
                <div class="subtitle d-flex align-items-center">
                    <font-awesome-icon icon="dollar-sign" style="margin-right:1rem;"></font-awesome-icon> <b style="font-size:1.5rem"> Urutan Kategori dengan nilai penjualan terbanyak</b>
                </div>
                <p><small><mark>Total nilai pembelian pada setiap kategori</mark></small></p>
                <div class="tcard shadow-sm overflow-auto" style="max-height:400px">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <th>No</th>
                                <th>Kota</th>
                                <th>Nilai Penjualan</th>
                            </thead>
                            <tbody>
                                <tr v-for="(loc,index) in categoryExpenses" :key="loc.id">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ loc.name }}</td>
                                    <td>{{ loc.expenses | currency}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            summary: {
                activities: '',
                locations: '',
                categories: '',
                purchases: ''
            },
            locationPerformanceTable: '',
            categoryPerformanceTable: '',
            locations: '',
            selectedLocation: 1,
            categories: '',
            selectedCategory: 1,
            locationExpenses: '',
            categoryExpenses: ''
        }
    },
    methods: {
        sortBy(field) {
            return function(a, b) {
                if (a[field] > b[field]) {
                    return -1;
                } else if (a[field] < b[field]) {
                    return 1;
                }
                return 0;
            };
        },
        retrieveSummary(){
            axios.get('/api/product/summary')
            .then(response => {
                this.summary.activities = response.data.activities,
                this.summary.locations = response.data.locations,
                this.summary.categories = response.data.categories,
                this.summary.purchases = response.data.purchases
            })
        },
        retrieveLocationPerformanceTable(){
            axios.get('/api/product/locationPerformanceTable')
            .then( response => {
                response.data.sort(this.sortBy("successfulPurchase"))
                this.locationPerformanceTable = response.data
            })
            .catch( err => {
                console.error(err)
            })
        },
        retrieveCategoryPerformanceTable(){
            axios.get('/api/product/categoryPerformanceTable')
            .then( response => {
                response.data.sort(this.sortBy("successfulPurchase"))
                this.categoryPerformanceTable = response.data
            })
            .catch( err => {
                console.error(err)
            })
        },
        retrieveLocation(){
            axios.get('/api/locations/retrieve')
            .then(response => {
                this.locations = response.data
            })
            .catch(err => {
                console.error(err)
            })
        },
        retrieveCategories(){
            axios.get('/api/category/retrieve')
            .then(response => {
                this.categories = response.data
            })
            .catch(err => {
                console.error(err)
            })
        },
        retrieveLocationExpenses(){
            axios.get('/api/product/locations/expenses')
            .then(response => {
                response.data.sort(this.sortBy("expenses"))
                this.locationExpenses = response.data
            })
            .catch(err => {
                console.error(err)
            })
        },
        retrieveCategoryExpenses(){
            axios.get('/api/product/categories/expenses')
            .then(response => {
                response.data.sort(this.sortBy("expenses"))
                this.categoryExpenses = response.data
            })
            .catch(err => {
                console.error(err)
            })
        }
    },
    mounted(){
        this.retrieveSummary()
        this.retrieveLocationPerformanceTable()
        this.retrieveCategoryPerformanceTable()
        this.retrieveLocation()
        this.retrieveCategories()
        this.retrieveLocationExpenses()
        this.retrieveCategoryExpenses()
    }
}
</script>

<style>

</style>