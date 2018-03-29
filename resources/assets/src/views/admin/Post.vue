<template>
    <main class="main">
        <div class="order-entry container">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        Data Entry
                        <small>(Demo Entry)</small>
                    </div>
                    <form action="" method="post" class="form-group" @submit.prevent="orderSubmit">
                        <div class="card-body">
                            <div class="form-group row" v-for="(field,index) in inputFields">
                                <div class="col-md-3" v-for="(input,order) in field">
                                    <input type="text" v-model="inputFields[index][order]" class="form-control form-control-sm">
                                </div>
                                <div class="btn col-md-1" style="cursor: pointer" v-if="index==(inputFields.length -1)" @click="addField(index)"><i class="fa fa-plus"></i> Add </div>
                                <div class="btn col-md-1" style="cursor: pointer" v-if="index==(inputFields.length -1) && index > 0" @click="removeField(index)"><i class="fa fa-minus"></i> Remove </div>
                                <div class="btn col-md-1" style="cursor: pointer"  v-if="index > 0 && index < (inputFields.length -1)" @click="removeField(index)" ><i class="fa fa-minus"></i>Remove </div>
                            </div>

                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-sm btn-primary">Save</button>
                        </div>
                    </form>
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
                        title:'logic Software',
                        description:'Bangladesh'
                    }
                ],
                list:{
                    settings:[],
                },
            }
        },
        methods:{
            addField:function(index){
                 for(let i=0; i<=400;i++){
                 this.inputFields.push({
                     title:'logic software'+index+i,
                     description:'Bangladesh'+index+i
                 })
                 }
                /*this.inputFields.push({
                    name:'logic software'+index,
                    location:'Bangladesh'+index
                })*/
            },
            removeField:function(index){
                this.inputFields.splice(index,1);
            },
            orderSubmit:function(){
                axios.post('/post', this.inputFields)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error.response)
                });

            }
        },
        /*created: function(){
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
    }
</script>
<style>
    #loading{
        background-color: #63ab97;
        color: white;
        font-size: 32px;
        padding-top: 10vh;
        text-align: center;
        height: 100%;
    }
</style>