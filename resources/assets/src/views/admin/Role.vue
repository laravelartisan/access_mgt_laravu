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
                                            <option value="1" >Active</option>
                                            <option value="0" >Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-sm btn-default logic-btn-default" > Save</button>
                                <button type="submit" class="btn btn-sm btn-default logic-btn-default" > Update</button>
                                <button type="button" class="btn btn-sm btn-default logic-btn-default" >Delete</button>
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


    </main>
</template>
<script>
    export default {
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
                editableRowId: false,
                listIndex: '',
                dropDown:{
                    roles: [],
                    homePages: [],
                },
                list:{
                   role: '',
                   parentRole: '',
                },

                roles: [],
            }
        },
        methods:{

            getRoles: function(){
                axios.get('/roles').then( response => {
                    this.roles = response.data.data;
                    this.dropdown.roles = response.data.data;
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
                    this.roles.push(response.data.data);
                    for(let field in this.form){
                        this.form[field] = '';
                    }
                }).catch( error => {
                    /*this.serverErrors = error.response.data.errors;
                     console.log(this.serverErrors);*/
                });
            },

            updateRow: function(){
                axios.put('/roles/'+ this.editableRowId, this.form).then( response => {
                    this.roles.splice(this.listIndex, 1, response.data.data );

                }).catch( error => {
                    /*this.serverErrors = error.response.data.errors;
                     console.log(this.serverErrors);*/
                });
            },
            deleteRow: function(user, index){
                this.editableRowId = user.id;
                this.listIndex = index;
                axios.delete('/users/'+ this.editableRowId).then( response => {
                    this.roles.splice(this.listIndex, 1);

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
                this.editableRowId = false;
            },

        },
        created: function(){
            this.getRoles();
        }
    }
</script>
<style>
    .global{
        width: 952px;
    }
</style>