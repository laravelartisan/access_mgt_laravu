<template>
    <div class="main">
        <div class="container">
            <div class="row menu-management">
                <div class="col-lg-3 new-menu">
                    <div class="card">
                        <div class="card-header">
                            Add new Menu

                        </div>
                        <div action="" method="post" class="form-group" @submit.prevent="userSubmit">
                            <div class="card-body">
                                <div class="form-row">
                                    <div class="col-lg-5">
                                        <label>Module Name:</label></div>
                                    <div class="col-lg-7">
                                        <select class="form-control form-control-sm tax-box">
                                            <option value="" disabled>Select Module</option>
                                            <option value="1">Select 1</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-lg-5">
                                        <label>Menu Name:</label></div>
                                    <div class="col-lg-7">
                                        <input type="text" class="form-control form-control-sm tax-box"></div>
                                </div>
                                <div class="form-row">
                                    <div class="col-lg-5">
                                        <label>Menu Link:</label>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="text" class="form-control form-control-sm tax-box">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-lg-5">
                                        <label>Parent Menu:</label>
                                    </div>
                                    <div class="col-lg-7">
                                        <select class="form-control form-control-sm tax-box">
                                            <option value="" disabled>Select Parent</option>
                                            <option value="1">Select 1</option>
                                        </select>

                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-lg-5">
                                        <label>Sequence:</label>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="text" class="form-control form-control-sm tax-box">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-lg-5">
                                        <label>Status:</label>
                                    </div>
                                    <div class="col-lg-7">
                                        <select class="form-control form-control-sm tax-box">
                                            <option value="" disabled>Select Status</option>
                                            <option value="1">Select 1</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 menu-action">
                    <div class="card">
                        <div class="card-header">
                            <div class="col-lg-10">
                                Add a New Action
                            </div>

                        </div>
                        <div class="card-body">
                            <div class="form-row">
                                <div class="col-lg-2">
                                    <label>Type</label>
                                </div>
                                <div class="col-lg-2">
                                    <label>Label</label>
                                </div>
                                <div class="col-lg-2">
                                    <label>Route</label>
                                </div>
                                <div class="col-lg-2">
                                    <label>Sequence</label>
                                </div>
                                <div class="col-lg-2">
                                    <label>Status</label>
                                </div>
                                <div class="col-lg-1">
                                    <label>Default</label>
                                </div>
                                <div class="col-lg-1">
                                    <label>Action</label>
                                </div>
                            </div>
                            <div class="form-row" v-for="(menuAction,index) in menuActions">
                                <div class="col-2">
                                    <select v-model="menuAction.type" class="form-control form-control-sm">
                                        <option value="" disabled>Type</option>
                                        <option value="1">type one</option>
                                        <option value="2">type two</option>
                                    </select>
                                </div>
                                <div class="col-2">
                                    <input type="text" v-model="menuAction.label" class="form-control form-control-sm">
                                </div>
                                <div class="col-2">
                                    <input type="text" v-model="menuAction.route" class="form-control form-control-sm">
                                </div>
                                <div class="col-2">
                                    <input type="text" v-model="menuAction.sequence" class="form-control form-control-sm">
                                </div>
                                <div class="col-2">
                                    <select v-model="menuAction.status" class="form-control form-control-sm">
                                        <option value="1">Active</option>
                                        <option value="1">Inactive</option>
                                    </select>
                                </div>
                                <div class="col-1">
                                    <input type="radio" v-model="picked" :value="menuAction.default" class="">
                                </div>
                                <div class="col-1">
                                    <span style="cursor: pointer" v-if="index==(menuActions.length -1) && index > 0" @click="removeRow(index)"><i class="fa fa-minus"></i></span>
                                    <span style="cursor: pointer" v-if="index > 0 && index < (menuActions.length -1)" @click="removeRow(index)" ><i class="fa fa-minus"></i> </span>
                                    <span style="cursor: pointer" v-if="index==(menuActions.length -1)" @click="addRow(index)"><i class="fa fa-plus"></i></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
    export default {
        data:function(){
            return{
                picked:0,
                menuActions:[
                    {
                        type:'',
                        label:'',
                        route:'',
                        sequence:'',
                        status:1,
                        default:0,
                    }
                ]
            }
        },
        methods:{
            addRow:function(index){
                this.menuActions.push({
                    type:'',
                    label:'',
                    route:'',
                    sequence:'',
                    status:1,
                    default:index+1,
                })
//                this.menuActions[this.picked].default = true
                console.log(this.menuActions);
            },
            removeRow: function(index){
                this.menuActions.splice(index,1);
            },
        }
    }
</script>