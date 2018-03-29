<template id="">
  <div class="sidebar">
      <nav class="sidebar-nav">
          <div></div>
          <ul class="nav">
              <li class="nav-item">
              <li class="nav-item nav-dropdown" disabled="disabled">
                  <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="fa fa-puzzle-piece"></i> RND</div>
                  <ul class="nav-dropdown-items">
                      <li class="nav-item"><router-link :to="{ name: 'users' }" target="_self" class="nav-link" aria-disabled="false"><i class="fa fa-puzzle-piece"></i> Users
                          <span class="badge badge-default"></span></router-link></li>
                      <li class="nav-item"><router-link :to="{ name: 'settings' }" target="_self" class="nav-link" aria-disabled="false"><i class="fa fa-puzzle-piece"></i>Settings
                          <span class="badge badge-default"></span></router-link></li>
                      <li class="nav-item"><router-link :to="{ name: 'orderEntry' }" target="_self" class="nav-link" aria-disabled="false"><i class="fa fa-puzzle-piece"></i> Order
                          <span class="badge badge-default"></span></router-link></li>
                      <li class="nav-item"><router-link :to="{ name: 'scenarioTwo' }" target="_self" class="nav-link" aria-disabled="false"><i class="fa fa-puzzle-piece"></i> ScenarioTwo
                          <span class="badge badge-default"></span></router-link></li>
                      <li class="nav-item"><router-link :to="{ name: 'preCosting' }" target="_self" class="nav-link" aria-disabled="false"><i class="fa fa-puzzle-piece"></i> Pre costing
                          <span class="badge badge-default"></span></router-link></li>
                      <li class="nav-item"><router-link :to="{ name: 'orderMatrix' }" target="_self" class="nav-link" aria-disabled="false"><i class="fa fa-puzzle-piece"></i> Order Matrix
                          <span class="badge badge-default"></span></router-link></li>
                  </ul>
              </li>
              </li>
              <li class="nav-item">
              <li class="nav-item nav-dropdown" disabled="disabled">
                  <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="fa fa-star"></i> Other</div>
                  <ul class="nav-dropdown-items">
                      <li class="nav-item"><router-link :to="{ name: 'menu' }" target="_self" class="nav-link" aria-disabled="false"><i class="fa fa-puzzle-piece"></i> Menu
                          <span class="badge badge-default"></span></router-link></li>
                      <li class="nav-item"><router-link :to="{ name: 'dataBankOne' }" target="_self" class="nav-link" aria-disabled="false"><i class="fa fa-puzzle-piece"></i> Upload Data
                          <span class="badge badge-default"></span></router-link></li>
                      <li class="nav-item"><router-link :to="{ name: 'post' }" target="_self" class="nav-link" aria-disabled="false"><i class="fa fa-puzzle-piece"></i> Post
                          <span class="badge badge-default"></span></router-link></li>
                  </ul>
              </li>
              </li>

          </ul>
          <div></div>
      </nav>
  </div>
</template>


<script type="text/javascript">

  export default {
    methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }

  }
</script>
<style scoped>
  .nav-item{
    cursor: pointer;
  }
</style>
