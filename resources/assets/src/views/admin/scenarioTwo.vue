<template>
    <main class="main">
        <div>
            <input v-b-modal.modal1 type="text" name="value">

            <!-- Modal Component -->
            <!--<b-modal id="modal1" title="Bootstrap-Vue">
                <div class="card">
                    <div class="card-header">
                        <div><i class="fa fa-align-justify"></i>Information</div>
                    </div>
                    <div class="card-block">
                        <table class="table table-responsive table-bordered table-striped table-sm">
                            <thead>
                            <tr>
                                <th>SL#</th>
                                <th>Number</th>
                                <th>Company</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template>
                                <tr v-for="(setting, index) in list.settings">
                                    <td>
                                        &lt;!&ndash;<input type="text"  :value="index+1">&ndash;&gt;
                                        {{ index+1 }}
                                    </td>
                                    <td>
                                        &lt;!&ndash;<input type="text" v-model="setting.marks">&ndash;&gt;
                                        {{ setting.marks }}
                                    </td>
                                    <td>
                                        &lt;!&ndash; <input type="text" v-model="setting.name" >&ndash;&gt;
                                        {{setting.name  }}
                                    </td>
                                    <td>
                                        &lt;!&ndash;<input type="text" v-model="setting.location" >&ndash;&gt;
                                        {{setting.location }}
                                    </td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </b-modal>-->
          <!--  <div class="card">
                <div class="card-header">
                    <div><i class="fa fa-align-justify"></i>Information</div>
                </div>
                <div class="card-block">
                    <table class="table table-responsive table-bordered table-striped table-sm">
                        <thead>
                        <tr>
                            <th>SL#</th>
                            <th>Number</th>
                            <th>Company</th>
                            <th>Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template>
                            <tr v-for="(setting, index) in list.settings">
                                <td>
                                    &lt;!&ndash;<input type="text"  :value="index+1">&ndash;&gt;
                                    {{ index+1 }}
                                </td>
                                <td>
                                    &lt;!&ndash;<input type="text" v-model="setting.marks">&ndash;&gt;
                                    {{ setting.marks }}
                                </td>
                                <td>
                                   &lt;!&ndash; <input type="text" v-model="setting.name" >&ndash;&gt;
                                   {{setting.name  }}
                                </td>
                                <td>
                                    &lt;!&ndash;<input type="text" v-model="setting.location" >&ndash;&gt;
                                    {{setting.location }}
                                </td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </div>
            </div>-->
            <b-modal id="modal1" title="input and dropdown data">
                <div class="card">
                    <div class="card-header">
                        <div><i class="fa fa-align-justify"></i>Information</div>
                    </div>
                    <div class="card-block">
                        <table class="table table-responsive table-bordered table-striped table-sm">
                            <thead>
                            <tr>
                                <th>Post</th>
                                <th>Customer</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template>
                                <tr v-for="(setting, index) in list.settings">
                                    <td>
                                        <select class="form-control" v-model="model.post">
                                            <option value="" disabled>Select post</option>
                                            <option v-for="post in dropDown.posts" :value="post.id">
                                                {{ post.title }}
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" v-model="model.customer">
                                            <option value="" disabled>Select customer</option>
                                            <option v-for="customer in dropDown.customers" :value="customer.id">
                                                {{ customer.name }}
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" v-model="setting.location" >
                                    </td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </b-modal>
        </div>
    </main>
</template>
<script>
    export default {
        data:function(){
            return{
                list:{
                    settings:[
                        {
                            id:'',
                            marks:'',
                            name:'',
                            location:''
                        }
                    ],
                },
                dropDown:{
                    posts:[],
                    customers:[],
                },
                model:{
                    post:{

                    },
                    customer:''
                }
            }
        },
        methods:{
            /*getSetting:function(){
                axios.get('/settings')
                        .then( response => {
                    this.list.settings = response.data.data;
                    //this.search.menus = this.list.menusList;
                    console.log(this.list.settings);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }*/
            getPost:function(){
                axios.get('/post').then(response =>{
                    this.dropDown.posts = response.data.data;
                })
                .catch(error => {
                    console.log(error.response)
                });
            },
            getCustomer:function(){
                axios.get('/customer').then(response => {
                    this.dropDown.customers = response.data.data;
                })
                .catch(error => {
                    console.log(error.response)
                });
            }

        },
        created: function(){
            axios.get('/settings')
                    .then( response => {
                this.list.settings = response.data.data;
                //this.search.menus = this.list.menusList;
                console.log(this.list.settings);
            })
            .catch(function (error) {
                console.log(error);
            });
            axios.get('/post').then(response =>{
                this.dropDown.posts = response.data.data;
                console.log(this.dropDown.posts);
            })
            .catch(error => {
                console.log(error.response)
            });
            axios.get('/customer').then(response => {
                this.dropDown.customers = response.data.data;
                console.log(this.dropDown.customers);
            })
            .catch(error => {
                console.log(error.response)
            });
        }

    }
</script>