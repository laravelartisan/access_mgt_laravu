<template>
    <main class="main">
        <div class="container">
            <div class="col-lg-12">
                <div class="card three-column">
                    <div class="card-header">
                        Three Column
                        <small>(3 column form)</small>
                    </div>
                    <form action="" method="post" class="form-group" @submit.prevent="userSubmit">
                        <div class="card-body">
                            <div class="form-row">
                                <div class="col-1">
                                    <label class="control-label required" >User text id:</label>
                                </div>
                                <div class="col-3">
                                    <input type="text" class="form-control form-control-sm tax-box">
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >User name :</label>
                                </div>
                                <div class="col-3">
                                    <input type="text" class="form-control form-control-sm tax-box">
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >Email:</label>
                                </div>
                                <div class="col-3">
                                    <input type="text" class="form-control form-control-sm tax-box">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-1">
                                    <label class="control-label required" >Designation:</label>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm tax-box">
                                        <option value="" disabled>Select Designation</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Developer</option>
                                    </select>
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >Department:</label>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm tax-box">
                                        <option value="" disabled>Select Department</option>
                                        <option value="1">Development</option>
                                        <option value="2">Implement</option>
                                        <option value="3">Mkt</option>
                                    </select>
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >User level:</label>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm tax-box">
                                        <option value="" disabled>Select User level</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Developer</option>
                                        <option value="3">User</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-1">
                                    <label class="control-label required" >Company:</label>
                                </div>
                                <div class="col-3">
                                    <multiselect
                                            v-model="selected"
                                            :options="options"
                                            :multiple="true"
                                            :close-on-select="false"
                                            :limit="2"
                                            @close="selectedValue"
                                            placeholder="Select Unit"
                                            track-by="name"
                                            label="name"
                                            @selectAll="selectAll"
                                            >
                                    </multiselect>
                                </div>
                                <div class="col-1">
                                    <label class="required" >Location:</label>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm tax-box">
                                        <option value="" disabled>Select Department</option>
                                        <option value="1">Development</option>
                                        <option value="2">Implement</option>
                                        <option value="3">Mkt</option>
                                    </select>
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >Buyer:</label>
                                </div>
                                <div class="col-3">
                                    <input type="text" class="form-control form-control-sm tax-box" placeholder="Click for buyer">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-1">
                                    <label class="required" >Store:</label>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm tax-box">
                                        <option value="" disabled>Select Store</option>
                                        <option value="1">Dhaka shop</option>
                                        <option value="2">Bd Shop</option>
                                    </select>
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >Supplier:</label>
                                </div>
                                <div class="col-3">
                                    <input type="text" class="form-control form-control-sm tax-box" placeholder="Click for supplier">
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >Item Category:</label>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm tax-box">
                                        <option value="" disabled>Select category</option>
                                        <option value="1">chiller</option>
                                        <option value="2">comber</option>
                                        <option value="3">cotton</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-1">
                                    <label class="required" >Home graph:</label>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm tax-box">
                                        <option value="" disabled>Select graph</option>
                                        <option value="1">dash board</option>
                                        <option value="2">Graph grp</option>
                                    </select>
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >Baind to ip:</label>
                                </div>
                                <div class="col-3">
                                    <input type="text" class="form-control form-control-sm tax-box" placeholder="Comma Seperate LAN and WAN IP">
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >Data Level Security:</label>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm tax-box">
                                        <option value="1" selected>Limited Access</option>
                                        <option value="2">Access All Data</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-1">
                                    <label class="required" >Password:</label>
                                </div>
                                <div class="col-3">
                                    <input type="password" class="form-control form-control-sm tax-box">
                                </div>
                                <div class="col-1">
                                    <label class="required" >Confirm password:</label>
                                </div>
                                <div class="col-3">
                                    <input type="password" class="form-control form-control-sm tax-box">
                                </div>
                                <div class="col-1">
                                    <label class="control-label" >Expiry Date:</label>
                                </div>
                                <div class="col-3">
                                    <input type="date" class="form-control form-control-sm tax-box">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-1">
                                    <label class="required" >Status:</label>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm tax-box">
                                        <option value="1" selected>Status</option>
                                        <option value="2">In active</option>
                                    </select>
                                </div>
                                <div class="col-1">
                                    <label class="required" >User Image:</label>
                                </div>
                                <div class="col-3">
                                    <label class="upload-btn">Choose a file</label>
                                    <input type="file" class="input-file">

                                </div>
                            </div>

                        </div>
                        <insert-button-group></insert-button-group>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    import {mapState} from 'vuex';
    //    import Multiselect from 'vue-multiselect'
    import Multiselect from '../../widgets/vueMultiselect'
    export default {
        components: {
            'tree': () => import('../../widgets/sidebar/tree'),
            'insert-button-group': () => import('../../widgets/buttons/InsertButtons.vue') ,
            Multiselect,
        },
        computed:{
    ...mapState({
        roles: state => state.login.roles,
        authenticated: state => state.login.authenticated,
    }),
    },
    data:function(){
        return{
            selected: null,
            options: [
                { name: 'Vue.js', language: 'JavaScript' },
                { name: 'Rails', language: 'Ruby' },
                { name: 'Laravel', language: 'PHP' },
                { name: 'Phoenix', language: 'Elixir' }
            ],
        }
    },
    methods:{
        selectedValue:function(){
            /*alert('zakaria');*/
        },
        userSubmit:function(){
            console.log(this.selected);
        },
        selectAll:function(selectedOptions){
            this.selected = selectedOptions;
        }

    },
    }
</script>

