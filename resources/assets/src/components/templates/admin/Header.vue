<template>
  <header class="platform-header navbar">
      <!--<a href="/dashboard" class="navbar-brand" aria-disabled="false"></a>-->
      <!--<button type="button" class="navbar-toggler sidebar-toggler d-md-down-none">?</button>-->
      <button type="button" @click="sidebarToggle" class="navbar-toggler sidebar-toggler d-md-down-none">
          <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <ul class="d-md-down-none nav navbar-nav">
          <li class="nav-item px-3">
              <router-link :to="{ name: 'dashboard' }" target="_self" class="nav-link" aria-disabled="false">Dashboard</router-link>
          </li>
          <li class="nav-item px-3">
              <router-link :to="{ name: 'users' }" target="_self" class="nav-link" aria-disabled="false">Users</router-link>
          </li>
          <li class="nav-item px-3">
              <router-link :to="{ name: 'settings' }" target="_self" class="nav-link" aria-disabled="false">Settings</router-link>
          </li>
          <li class="nav-item px-3">
              <router-link :to="{ name: 'orderEntry' }" target="_self" class="nav-link" aria-disabled="false">Order</router-link>
          </li>
          <li class="nav-item px-3">
              <a href="javascript:void(0)" @click="logout" target="_self" class="nav-link" aria-disabled="false" >Logout</a>
          </li>
      </ul>
  </header>
</template>

<script type="text/javascript">
    export default{
        methods: {
          sidebarToggle (e) {
            e.preventDefault()
            document.body.classList.toggle('sidebar-hidden')
          },
          sidebarMinimize (e) {
            e.preventDefault()
            document.body.classList.toggle('sidebar-minimized')
          },
          mobileSidebarToggle (e) {
            e.preventDefault()
            document.body.classList.toggle('sidebar-mobile-show')
          },
          asideToggle (e) {
            e.preventDefault()
            document.body.classList.toggle('aside-menu-hidden')
          },

          logout: function(){
//              auth.signout();
              this.$store.dispatch('login/logoutRequest')
                      .then((response) => {
                  this.$router.push({name: 'login'});
              })
                .catch((error) => {});
          }
        }
    }
</script>
