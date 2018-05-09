<template>
    <main class="main">
        <div class="container logic-one-col-form">
            <div class="row">
                <div class="col-md-12">
                    <!-- form user info -->
                    <div class="card">
                        <div class="card-header">
                            <h4 class="text-center">Role Privileges</h4>
                            <form class="form" role="form" autocomplete="off" @submit.prevent = "submitForm">
                                <div class="card-body">
                                    <div class="form-group row">
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Role</label>
                                            <select class="form-control form-control-sm" v-model="form.roleId">
                                                <option  value="" disabled>Select Role</option>
                                                <option v-for="(role, index) in roles" :value="role.id">
                                                    {{ role.name }}
                                                </option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Module</label>
                                            <select class="form-control form-control-sm" v-model="form.moduleId" @change="getMenusByModule(form.moduleId)" >
                                                <option  value="" disabled>Select Module</option>
                                                <option v-for="(module, index) in modules" :value="module.id">
                                                    {{ module.name }}
                                                </option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Menu</label>
                                            <select class="form-control form-control-sm" v-model="form.menuId" @change="getChildrenMenus(form.menuId)" >
                                                <option  value="" disabled>Select Menu</option>

                                                <option v-for="(menu, index) in menusByModule" :value="menu.id">
                                                    {{ menu.name }}
                                                </option>

                                            </select>
                                        </div>

                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Copy From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Inherit From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>

                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Permission Level</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>
                                                <option value="" >Selective</option>
                                                <option value="" >Full</option>

                                            </select>
                                        </div>
                                    </div>



                                </div>
                                <div class="card-body">
                                    <div class="form-group row">
                                        <template v-for="(children, index) in childrenMenus">
                                            <div class="col-lg-2">
                                                <label class="col-lg-12 col-form-label form-control-label">Children</label>
                                                <select class="form-control form-control-sm"  >
                                                    <option value="" disabled>Select Menu</option>

                                                </select>
                                            </div>
                                        </template>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Copy From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Inherit From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>

                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Permission Level</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>
                                                <option value="" >Selective</option>
                                                <option value="" >Full</option>

                                            </select>
                                        </div>
                                    </div>



                                </div>
                                <div class="card-body">
                                    <div class="form-group row">

                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">View</label>
                                            <select class="form-control form-control-sm">
                                                <option :value="false">Forbidden</option>
                                                <option :value="true">Permitted</option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Insert</label>
                                            <select class="form-control form-control-sm">
                                                <option :value="false">Forbidden</option>
                                                <option :value="true">Permitted</option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Update</label>
                                            <select class="form-control form-control-sm">
                                                <option :value="false">Forbidden</option>
                                                <option :value="true">Permitted</option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Delete</label>
                                            <select class="form-control form-control-sm">
                                                <option :value="false">Forbidden</option>
                                                <option :value="true">Permitted</option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Approve</label>
                                            <select class="form-control form-control-sm">
                                                <option :value="false">Forbidden</option>
                                                <option :value="true">Permitted</option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label"></label>
                                           <button class="btn btn-default">Set Privilege</button>
                                        </div>
                                    </div>



                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-sm btn-default logic-btn-default" > Save</button>

                                    <button type="button" class="btn btn-sm btn-default logic-btn-default" @click="resetForm()">Refresh</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <!-- /form user info -->
                </div>
                <!--/col-->
            </div>
            <!--/row-->
        </div>

    </main>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        computed: {
                ...mapState({
                roles: state => state.roles.list,
                modules: state => state.modules.list,
            }),
        },
        data:function(){
            return{
                form: {
                    roleId: '',
                    moduleId: '',
                    menuId: '',
                },
                menusByModule: [],
                childrenMenus:[],
            }
        },
        methods: {
        ...mapActions({
                getRoles: 'roles/getRoles',
                getModules: 'modules/getModules',
                getStoreMenusByModule: 'menus/getMenusByModule',
                getStoreChildrenMenus: 'menus/getStoreChildrenMenus',
            }),
            getMenusByModule: function(moduleId){
                this.getStoreMenusByModule(moduleId).then(response=>{
                    this.menusByModule = response;
                })
            },
            getChildrenMenus: function(parentMenuId){
                this.getStoreChildrenMenus(parentMenuId).then(response=>{
                    console.log(response);
                    this.childrenMenus.push(response);
                    console.log(this.childrenMenus);
                })
            }
        },

        created: function(){
//            this.$store.dispatch('roles/getRoles');
                this.getRoles();
                this.getModules();
        }
    }

</script>

<style scoped>
    .menu-dropdown{
        width: 14%;
    }
    .menu-dropdown-level{
        width: 100%;
    }
</style>