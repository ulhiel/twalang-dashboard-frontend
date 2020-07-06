<template>
  <div class="left-bar px-2">
      <ul>
        <router-link to="/dashboard">
            <li>Main Dashboard</li>
        </router-link>
        
        <router-link to="/dashboard/marketing">
            <li>Marketing Desk</li>
        </router-link>
        <router-link to="/dashboard/product">
            <li>Product Board</li>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .left-bar {
        height: 100%;
        width: 250px;

        background-color: #115ad1;
    }

    .left-bar ul {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .left-bar ul a {
        text-decoration: none;
    }

    .left-bar ul a li {
        color: #FFFFFF;
        margin: 0.5rem 0.25rem 0.5rem 0.25rem;
        padding: 0.5rem;
        border-radius: 5px;
    }

    .left-bar ul a:hover li {
        background-color: #0749b3;
    }

    .router-link-exact-active li {
        background-color: #0749b3;
        font-weight: 600;
    }

</style>