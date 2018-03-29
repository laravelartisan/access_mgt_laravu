<template>
        <main class="main">
            <div class="order-entry container">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            Order Entry
                            <small>(Garments Order Entry)</small>
                        </div>
                        <form action="" method="post" class="form-group" @submit.prevent="orderSubmit">
                        <div class="card-body">
                                <div class="form-group row" v-for="(field,index) in inputFields">
                                    <div class="col-md-3" v-for="(input,order) in field">
                                        <input type="text" v-model="inputFields[index][order]" class="form-control form-control-sm">
                                    </div>
                                    <div class="btn col-md-1" style="cursor: pointer" v-if="index==(inputFields.length -1)" @click="addField(index)"><i class="fa fa-plus"></i> </div>
                                    <div class="btn col-md-1" style="cursor: pointer" v-if="index==(inputFields.length -1) && index > 0" @click="removeField(index)"><i class="fa fa-minus"></i> </div>
                                    <div class="btn col-md-1" style="cursor: pointer"  v-if="index > 0 && index < (inputFields.length -1)" @click="removeField(index)" ><i class="fa fa-minus"></i> </div>
                                </div>

                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-sm btn-primary">Save</button>
                            <button type="submit" class="btn btn-sm btn-primary" @click.prevent="sendSpecialCharacters">spc</button>
                        </div>
                        </form>
                    </div>

                </div>
            </div>
            <div class="show-user container">
                <div class="col-lg-12">
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
                                            {{ index + 1}}
                                        </td>
                                        <td>
                                            {{ setting.marks}}
                                        </td>
                                        <td>
                                            {{setting.name}}
                                        </td>
                                        <td>
                                            {{setting.location}}
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                           <!-- <nav>
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
        data:function(){
            return {
                inputFields:[
                    {
                        marks:'123',
                        name:'logic',
                        location:'dhaka'
                    }
                ],
                list:{
                   settings:[],
                },
            }
        },
        methods:{
            sendSpecialCharacters: function(){
                axios.post('/settings',[
                    {
                        marks: "Raja@Zakaria_+#kk$%PP",
                        name: "Raja@Zakaria_+#kk$%PP",
                        location: "Raja@Zakaria_+#kk$%PP"
                    },
                    {
                        marks: "Raja@Zakaria_+#kk$%PP",
                        name: "Raja@Zakaria_+#kk$%PP",
                        location: "Raja@Zakaria_+#kk$%PP"
                    },
                    {
                        marks: "Raja@Zakaria_+#kk$%PP",
                        name: "Raja@Zakaria_+#kk$%PP",
                        location: "Raja@Zakaria_+#kk$%PP"
                    },
                    {
                        marks: "Raja''@Zakaria_+#kk$%PP",
                        name: "Raja@Zakaria_+#kk$%PP",
                        location: "Raja@Zakaria_+#kk$%PP"
                    },
                    {
                        marks: "Raja@Zakaria_+#kk$%PP",
                        name: "Raja@Zakaria_+#kk$%PP",
                        location: "Raja@Zakaria_+#kk$%PP"
                    },
                    {
                        marks: "Raja@Zakaria_+#kk$%PP",
                        name: "Raja@Zakaria_+#kk$%PP",
                        location: "Raja@Zakaria_+#kk$%PP"
                    },
                    {
                        marks: "Raja@Zakaria_+#kk$%PP",
                        name: "Raja@Zakaria_+#kk$%PP",
                        location: "Raja@Zakaria_+#kk$%PP"
                    },
                    {
                        marks: "Raja@Zakaria_+#kk$%PP",
                        name: "Raja@Zakaria_+#kk$%PP",
                        location: "Raja@Zakaria_+#kk$%PP",
                    }
                ]).then( response => {
                    this.users = response.data.data;
                    console.log(this.users);
                }).catch(function (error) {
                    console.log(error.response.data.error);
                });
            },
            addField: function(index){
               /* for(let i=0; i<=1000;i++){
                    this.inputFields.push({
                        marks:'123'+index+i,
                        name:'logic'+index+i,
                        location:'dhaka'+index+i
                    })
                }*/
                this.inputFields.push({
                    marks:'123'+index,
                    name:'logic'+index,
                    location:'dhaka'+index
                })
            },
            removeField: function(index){
                this.inputFields.splice(index,1);
            },
            orderSubmit: function(){
                axios.post('/settings', this.inputFields).then( response => {
                    console.log(response);
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

//            var spc = encodeURIComponent("Raja@Z;'a&'&&karia_+#kk$%PP");
            axios.get('/settings', {
                params: {
                    spc : "Raja@Z;'a&'&&karia_+#kk$%PP",
                    spc1 : "Raja@Zakaria_+#kk$%PP",
                    spc2 : "Raja@Zakaria_+#kk$%PP",
                    spc3 : "Raja@Zakaria_+#kk$%PP",
                    spc4 : "Raja@Zakaria_+#kk$%PP",
                    spc5 : "Raja@Zakaria_+#kk$%PP",
                    spc6 : "Raja@Zakaria_+#kk$%PP",
                    spc7 : "Raja@Zakaria_+#kk$%PP",
                    spc8 : "Raja@Zakaria_+#kk$%PP",
                    spc9 : "Raja@Zakaria_+#kk$%PP",
                    spc10 : "Raja''@Zakaria_+#kk$%PP",
                    spc11 : "Raja@Zakaria_+#kk$%PP",
                    spc12 : "Raja@Zakaria_+#kk$%PP",
                    spc13 : "Raja@Zakaria_+#kk$%PP",
                    spc14 : "Raja@Zakaria_+#kk$%PP",
                    spc15 : "Raja@Zakaria_+#kk$%PP",
                    spc16 : "Raja@Zakaria_+#kk$%PP",
                    spc17 : "Raja@Zakaria_+#kk$%PP",
                    spc18 : "Raja@Zakaria_+#kk$%PP",
                    spc19 : "Raja@Zakaria_+#kk$%PP",
                    spc20 : "Raja@Zakaria_+#kk$%PP",
                    spc21 : "Raja@Zakaria_+#kk$%PP",
                    spc22 : "Raja@Zakaria_+#kk$%PP",
                    spc23 : "Raja@Zakaria_+#kk$%PP",
                    spc24 : "Raja@Zakaria_+#kk$%PP",
                }
            }).then( response => {
                this.users = response.data.data;
                console.log(this.users);
            })
            .catch(function (error) {
                console.log(error.response.data.error);
            });
        }
    }
</script>