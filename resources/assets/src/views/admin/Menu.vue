<template>
    <main class="main">
        <div class="container logic-one-col-form">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- form user info -->
                    <div class="card">
                        <div class="card-header">
                            <h4>Menu Management</h4>

                        </div>
                        <form class="form" role="form" autocomplete="off" @submit.prevent = "submitForm">
                            <div class="card-body">
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Module Name</label>
                                    <div class="col-lg-9">
                                        <select class="form-control form-control-sm" v-model="form.module" @change="getMenusByModule(form.module)">
                                            <option value="" disabled>Select Module</option>
                                            <option v-for="module in modules" :value="module.id">
                                                {{ module.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Menu Name</label>

                                    <div class="col-lg-9">
                                        <input class="form-control form-control-sm" type="text" v-model="form.menuName">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Root Menu</label>

                                    <div class="col-lg-9">
                                        <select class="form-control form-control-sm" v-model="form.parentMenu">
                                            <option value="" disabled>Select Menu</option>
                                            <option value="0">Root Menu</option>
                                            <option v-for="menu in dropDown.menus" :value="menu.id">
                                                {{ menu.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Client Route</label>

                                    <div class="col-lg-9">
                                        <input class="form-control form-control-sm" type="text" v-model="form.route">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Status</label>
                                    <div class="col-lg-9">
                                        <select class="form-control form-control-sm" v-model="form.status">
                                            <option value="" disabled>Select</option>
                                            <option value="0">Active</option>
                                            <option value="1">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button v-if="!isEditable" type="submit" class="btn btn-sm btn-default logic-btn-default" > Save</button>
                                <button v-else type="submit" class="btn btn-sm btn-default logic-btn-default" > Update</button>
                                <button type="button" class="btn btn-sm btn-default logic-btn-default" @click="resetForm()">Refresh</button>
                            </div>
                        </form>
                    </div>
                    <!-- /form user info -->
                </div>
                <!--/col-->
            </div>
            <!--/row-->
        </div>
        <!--/container-->

        <div class="show-user container">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4><i class="fa fa-align-justify"></i> Menu List</h4>
                    </div>
                    <div class="card-block">
                        <table class="table table-responsive table-bordered table-striped table-sm">
                            <thead>
                            <tr>
                                <th>SL#</th>
                                <th>Menu</th>
                                <th>Module</th>
                                <th>Parent Menu</th>
                                <th>Route</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr  v-for="(menu, index) in list" class="show-user" @click="editRow(menu, index)">
                                <td>
                                    {{ index + 1}}
                                </td>
                                <td>
                                    {{ menu.name}}
                                </td>
                                <td>
                                    {{menu.module}}
                                </td>
                                <td>
                                    {{menu.parentMenu}}
                                </td>
                                <td>
                                    {{menu.route}}
                                </td>
                                <td>
                                    {{menu.status}}
                                </td>
                                <td>
                                    <a class="btn" @click="editRow(menu, index)">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a class="btn" @click="deleteRow(menu, index)">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                        <!--  <nav>
                              <ul class="pagination">
                                  <li class="page-item"><a href="#" class="page-link">Prev</a></li>
                                  <li class="page-item active"><a href="#" class="page-link">1</a></li>
                                  <li class="page-item"><a href="#" class="page-link">2</a></li>
                                  <li class="page-item"><a href="#" class="page-link">3</a></li>
                                  <li class="page-item"><a href="#" class="page-link">4</a></li>
                                  <li class="page-item"><a href="#" class="page-link">Next</a></li>
                              </ul>
                          </nav>-->
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>

    import {mapState} from 'vuex';

    export default {

        computed: mapState({
            modules: state => state.modules.list,

            isEditable: function(){
                return this.editableRowId > 0;
            }
        }),
        data: function(){
            return {
               form: {
                   module: '',
                   menuName: '',
                   parentMenu: '',
                   route: '',
                   status: '',
               },
                editableRowId: 0,
                listIndex: '',
                dropDown:{
                    menus: [],
                },
                list:[
                ],
            }
        },
        methods:{

            getMenusByModule: function(moduleId){
                axios.get('/menus-by-module/'+moduleId).then( response => {
                    this.dropDown.menus = response.data.data;
                })
                        .catch(function (error) {
//                    console.log(error.response.data.error);
                        });
            },

            getList: function(){
                axios.get('/menus').then( response => {
                    this.list = response.data.data;
                })
                .catch(function (error) {
//                    console.log(error.response.data.error);
                });
            },
            submitForm: function(){
                console.log(this.form);
                this.editableRowId == false? this.insertNewRow(): this.updateRow();

            },

            insertNewRow: function(){
                axios.post('/menus', this.form).then( response => {
                    let newRow = response.data.data;
                    this.list.push(newRow);
                    this.dropDown.menus.push({
                        id: newRow.id,
                        name: newRow.name
                    });
                    this.resetForm();
                }).catch( error => {
                    /*this.serverErrors = error.response.data.errors;
                     console.log(this.serverErrors);*/
                });
            },

            updateRow: function(){
                axios.put('/roles/'+ this.editableRowId, this.form).then( response => {
                    this.list.splice(this.listIndex, 1, response.data.data );

                }).catch( error => {
                    /*this.serverErrors = error.response.data.errors;
                     console.log(this.serverErrors);*/
                });
            },
            deleteRow: function(role, index){
                this.editableRowId = 0;
                this.listIndex = index;
                axios.delete('/users/'+ role.id).then( response => {
                    this.roles.splice(this.listIndex, 1);
                    this.resetForm();
                }).catch( error => {
                    /*this.serverErrors = error.response.data.errors;
                     console.log(this.serverErrors);*/
                });
            },
            editRow: function(role, index){
                this.form = role;
                this.editableRowId = role.id;
                this.listIndex = index;
            },

            resetForm: function(){
                for(let field in this.form){
                    this.form[field] = '';
                }
                this.editableRowId = 0;
            },

        },
        created: function(){
            this.getList();
            this.$store.dispatch('modules/getModules');
        }
    }
</script>
<style>
    .global{
        width: 952px;
    }
</style>