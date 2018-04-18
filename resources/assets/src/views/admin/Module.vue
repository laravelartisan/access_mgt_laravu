<template>
    <main class="main">
        <div class="container logic-one-col-form">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- form user info -->
                    <div style="color:white" class="btn btn-success" v-if="message.success">
                        {{ message.success }}
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4>Roles Master Settings</h4>

                        </div>
                        <form class="form" role="form" autocomplete="off" @submit.prevent = "submitForm">
                            <div class="card-body">

                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Role Name</label>

                                    <div class="col-lg-9">
                                        <input class="form-control form-control-sm" type="text" v-model="form.name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Parent Role</label>
                                    <div class="col-lg-9">
                                        <select class="form-control form-control-sm" v-model="form.parentRole" @change="">
                                            <option value="" disabled>Select Parent Role</option>
                                            <option value="0">Parent</option>
                                            <option v-for="role in dropDown.roles" :value="role.id">
                                                {{ role.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>


                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Home Page</label>

                                    <div class="col-lg-9">
                                        <select class="form-control form-control-sm" v-model="form.homePage">
                                            <option value="" disabled>Select Home Page</option>
                                            <option value="1" > Home Page 1</option>
                                            <option value="2" > Home Page 2</option>
                                            <!--<option v-for="homePage in dropDown.homePages" :value="homePage.id">
                                                {{ homePage.name }}
                                            </option>-->
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Status</label>
                                    <div class="col-lg-9">
                                        <select class="form-control form-control-sm" v-model="form.status">
                                            <option value="" disabled>Select</option>
                                            <option :value="true" >Active</option>
                                            <option :value="false" >Inactive</option>
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
                        <h4><i class="fa fa-align-justify"></i> Role List</h4>
                    </div>
                    <div class="card-block">
                        <table class="table table-responsive table-bordered table-striped table-sm">
                            <thead>
                            <tr>
                                <th>SL#</th>
                                <th>Role</th>
                                <th>Parent Role</th>
                                <th>Home Page</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr  v-for="(role, index) in list" class="show-user">
                                <td>
                                    {{ index + 1}}
                                </td>
                                <td>
                                    {{ role.name}}
                                </td>
                                <td>
                                    {{role.parentRole}}
                                </td>
                                <td>
                                    {{role.homePage}}
                                </td>
                                <td>
                                    {{role.status}}
                                </td>
                                <td>
                                    <a class="btn" @click="editRow(role, index)">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a class="btn" @click="deleteRow(role, index)">
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
    export default {

        computed: {
            isEditable: function(){
                return this.editableRowId > 0;
            }
        },
        data: function(){
            return {
                message: {
                    success: '',
                    failure: ''
                },
                form: {
                    name: '',
                    parentRole: '',
                    homePage: '',
                    status: '',
                },
                editableRowId: 0,
                listIndex: '',
                dropDown:{
                    roles: [],
                    homePages: [],
                },
                list:[
                ],
            }
        },
        methods:{

            getList: function(){
                axios.get('/roles').then( response => {
                    this.list = response.data.data;
                    this.list.forEach(role=> {
                        this.dropDown.roles.push({
                            id: role.id,
                            name: role.name
                        });
                    });

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
                axios.post('/roles', this.form).then( response => {
                    let newRole = response.data.data;
                    this.list.push(newRole);
                    this.dropDown.roles.push({
                        id: newRole.id,
                        name: newRole.name
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
        }
    }
</script>
<style>
    .global{
        width: 952px;
    }
</style>