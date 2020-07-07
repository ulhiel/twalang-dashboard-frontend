<template>
  <div class="sidebar d-flex justify-content-between" style="flex-direction:column">
      <div class="brand my-3">
          Twalang
      </div>
      <ul>
          <router-link to="/dashbooard/">
            <li>
                <font-awesome-icon icon="poll"></font-awesome-icon>
                Marketing Desk
            </li>
          </router-link>
          <router-link to="/dashbooard/product">
            <li>
                <font-awesome-icon icon="lightbulb"></font-awesome-icon>
                Product Development
            </li>
          </router-link>
      </ul>
      <div class="logout">
          <button class="btn btn-dark btn-block" style="border-radius:2rem" @click="handleLogout">
              <font-awesome-icon icon="user-secret" />
              Logout
          </button>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions([
            'logout'
        ]),
        handleLogout(){
            this.logout()
        }
    }
}
</script>

<style>
    .sidebar {
        width: 300px;
        height: 100vh;

        background-color: #045dbd;
        padding: 1rem;
    }

    .sidebar .brand {
        color: #FFFFFF;
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .sidebar ul {
        list-style: none;
        margin: 0;
        padding: 0;

        text-align: left;
    }

    .sidebar ul a {
        text-decoration: none;
        color: #FFFFFF;
    }

    .sidebar ul a li {
        padding: 1rem;
        border-radius: 2rem;
        display: flex;
        justify-content: space-between;
        text-align: left;
    }
</style>