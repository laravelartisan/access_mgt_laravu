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
                                            <select class="form-control form-control-sm" v-model="form.roleId"  >
                                                <option  value="" disabled>Select Role</option>
                                                <option v-for="(role, index) in roles" :value="role.id">
                                                    {{ role.name }}
                                                </option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Module</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Module</option>

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
                                        <div class="menu-dropdown">
                                            <label class="menu-dropdown-level col-form-label form-control-label">Role</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>
                                        <template ></template>
                                        <div class="menu-dropdown">
                                            <label  class="menu-dropdown-level col-form-label form-control-label">Module</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Module</option>

                                            </select>
                                        </div>

                                        <div class="menu-dropdown">
                                            <label class="menu-dropdown-level col-form-label form-control-label">Copy From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>
                                        <div class="menu-dropdown">
                                            <label class="menu-dropdown-level col-form-label form-control-label">Inherit From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>

                                        <div class="menu-dropdown">
                                            <label class="menu-dropdown-level col-form-label form-control-label">Permission Level</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>
                                                <option value="" >Selective</option>
                                                <option value="" >Full</option>

                                            </select>
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
    import {mapState} from 'vuex';
    export default {
        computed: mapState({
            roles: state => state.roles.list,
        }),
        data:function(){
            return{
                form: {
                    roleId: ''
                },

            }
        },

        created: function(){
            this.$store.dispatch('roles/getRoles');
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