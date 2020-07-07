<template>
  <div class="base-container d-flex align-items-center justify-content-center" style="background-color:#045dbd">
      <div class="tcard shadow-sm col-md-3 text-left">
          <div class="card-body">
              <form @submit.prevent="handleLogin(loginData)">
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input type="text" name="email" class="form-control" placeholder="Ketik email di sini" v-model="loginData.email">
                  </div>
                  <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" name="password" class="form-control" placeholder="Ketik Password di Sini" v-model="loginData.password">
                  </div>
                  <div class="form-group">
                      <button type="submit" class="btn btn-dark btn-block">Login</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            loginData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        handleLogin(loginData){
            this.login(loginData)
        }
    }
}
</script>

<style>

</style>