<template>
    <div class="platform">
        <logic-header></logic-header>
        <div class="platform-body">
            <logic-sidebar></logic-sidebar>
            <router-view ></router-view>
        </div>
        <logic-footer></logic-footer>
    </div>
</template>


<script>

    export default {
      components:{
        'logic-header': () => import('../components/templates/admin/Header'),
        'logicSidebar': () => import('../components/templates/admin/Sidebar'),
        'logicFooter': () => import('../components/templates/admin/Footer')
      },

      created: function() {
          this.$store.dispatch('role/getRoles');
      }

    }
</script>
