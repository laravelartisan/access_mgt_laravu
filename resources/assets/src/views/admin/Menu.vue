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
                            Menu Management
                            <small>(Menu Creation)</small>
                        </div>
                        <form class="form" role="form" autocomplete="off" @submit.prevent = "createMenu">
                            <div class="card-body">
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Module Name</label>
                                    <div class="col-lg-9">
                                        <select class="form-control form-control-sm" v-model="model.module" @change="getMenus()">
                                            <option value="" disabled>Select Module</option>
                                            <option v-for="module in dropDown.modules" :value="module.moduleId">
                                                {{ module.moduleName }}
                                            </option>
                                    </select>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Menu Name</label>

                                    <div class="col-lg-9">
                                        <input class="form-control form-control-sm" type="text" v-model="model.name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Root Menu</label>

                                    <div class="col-lg-9">
                                        <select class="form-control form-control-sm" v-model="model.menu">
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
                                        <input class="form-control form-control-sm" type="text" v-model="model.route">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Position</label>

                                    <div class="col-lg-9">
                                        <input class="form-control form-control-sm" type="text" v-model="model.position">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Status</label>
                                    <div class="col-lg-9">
                                        <input type="radio" name="options" autocomplete="off" value="1" v-model="model.status"> Active
                                        <input type="radio" name="options" autocomplete="off" value="0" v-model="model.status"> Inactive
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button v-if="buttons.btnExists" type="submit" class="btn btn-sm btn-primary logic-login">Save</button>
                                <button type="button" class="btn btn-sm btn-primary logic-login">Update</button>
                                <button type="button" class="btn btn-sm btn-primary logic-login">Delete</button>
                                <button type="reset" class="btn btn-sm btn-primary logic-login" >Refresh</button>
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
                        <div><i class="fa fa-align-justify"></i> Menu Information</div>
                    </div>
                    <div class="card-block">
                        <table class="table table-responsive table-bordered table-striped table-sm">
                            <thead>
                            <tr>
                                <th>Search Option</th>
                                <th>
                                    <select class="form-control" v-model="search.searchType" @change="clearFields">
                                        <option value="global">Global</option>
                                        <option value="individual">Individual</option>
                                        <option value="multiField">Multi field</option>
                                    </select>
                                </th>
                                <th>
                                    <select class="form-control" v-model="search.searchMatchType" @change="clearFields">
                                        <option value="partial">Partial</option>
                                        <option value="exact">Exact</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <th>SL#</th>
                                <th>Name</th>
                                <th>Module</th>
                                <th>Root Menu</th>
                                <th>Route</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <th>&nbsp;</th>
                                <template v-if="search.searchType == 'individual'">
                                    <th>
                                        <input class="form-control" type="text" v-model="search.column.name"
                                               @keyup="trackSearchField('name', search.column.name)" @blur="clearFields">
                                    </th>
                                    <th>
                                        <select class="form-control" v-model="search.column.moduleName"
                                                @change="trackSearchField('moduleName',search.column.moduleName, 'module')"
                                                @blur="clearFields">
                                            <option value="">All Data</option>
                                            <option v-for="module in dropDown.modules" :value="module.moduleName">
                                                {{ module.moduleName }}
                                            </option>
                                        </select>
                                    </th>
                                    <th>
                                        <input class="form-control" type="text" v-model="search.column.parentMenu"
                                               @keyup="trackSearchField('parentMenu',search.column.parentMenu)" @blur="clearFields">
                                    </th>
                                    <th>
                                        <input class="form-control" type="text" v-model="search.column.route"
                                               @keyup="trackSearchField('route',search.column.route)" @blur="clearFields">
                                    </th>
                                    <th>
                                        <select class="form-control" v-model="search.column.status"
                                                @change="trackSearchField('status',search.column.status)" @blur="clearFields">
                                            <option value="">All Data</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">In active</option>
                                        </select>
                                    </th>
                                </template>
                                <template v-if="search.searchType == 'multiField'">
                                    <th>
                                        <input class="form-control" type="text" v-model="search.column.name">
                                    </th>
                                    <th>
                                        <select class="form-control" v-model="search.column.moduleName">
                                        <option value="">All Data</option>
                                        <option v-for="module in dropDown.modules" :value="module.moduleName">
                                            {{ module.moduleName }}
                                        </option>
                                    </select>
                                    </th>
                                    <th>
                                        <input class="form-control" type="text" v-model="search.column.parentMenu">
                                    </th>
                                    <th>
                                        <input class="form-control" type="text" v-model="search.column.route">
                                    </th>
                                    <th>
                                        <select class="form-control" v-model="search.column.status">
                                            <option value="">All Data</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">In active</option>
                                        </select>
                                    </th>
                                </template>
                                <template v-if="search.searchType == 'global'">
                                    <th colspan="6"><input class="form-control global" type="text" v-model="search.global"></th>
                                </template>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-if="isSearched">
                                <tr v-for="(menu, index) in multipleSelectFilter">
                                    <td>
                                        {{ index + 1}}
                                    </td>
                                    <td>
                                        {{ menu.name}}
                                    </td>
                                    <td>
                                        {{menu.module.data.moduleName}}
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
                                </tr>
                            </template>
                            <template v-else>
                                <tr v-for="(menu, index) in list.menus">
                                    <td>
                                        {{ index + 1}}
                                    </td>
                                    <td>
                                        {{ menu.name}}
                                    </td>
                                    <td>
                                        {{menu.module.data.moduleName}}
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
        data: function(){
            return {
                message:{
                    success:null,
                },
                buttons:{
                    btnExists: true
                },
                model:{
                    name:'',
                    route:'',
                    position:'',
                    status:1,
                    module:'',
                    menu:'',
                },
                dropDown:{
                    modules: [],
                    menus: [],
                },
                list:{
                    menus:[],
                },
                search:{
                    column:{
                        name:'',
                        moduleName:'',
                        parentMenu:'',
                        route:'',
                        status:'',
                    },
                    relation: '',
                    searchType:'multiField',
                    global:'',
                    searchField:'name',
                    searchKey: '',
                    searchMatchType:'partial'

                },
            }
        },
        methods:{
            createMenu:function(){
                this.buttons.btnExists = false;
                axios.post('/menus?include=module',this.model)
                        .then( response => {
                    this.message.success = 'Successfully Saved.';

                    setTimeout(()=>{
                        this.message.success = null;
                        this.buttons.btnExists = true;
                        for(let key in this.model){

                            this.model[key] = "";
                        }
                        this.dropDown.menus.push(response.data.data);
                        this.list.menus.push(response.data.data);
                    }, 3000);

                    console.log(response.data.data);
                })
            },
            getMenus: function(){
                axios.get('/menus/'+this.model.module)
                        .then( response => {
                    this.dropDown.menus = response.data.data;
                    console.log(response.data.data);
                })
            },
            trackSearchField: function(searchField, searchKey, relation){
                this.search.relation = relation;
                this.search.searchField = searchField;
                this.search.searchKey = searchKey;

            },
            clearFields:function(){
                if (this.search.searchType == 'individual' || this.search.searchType == 'multiField') {
                    this.search.global=''
                    for(let i in this.search.column){
                        this.search.column[i]=''
                    }
                }
                if (this.search.searchType == 'global') {
                    for(let i in this.search.column){
                        this.search.column[i]=''
                    }
                }


            }
        },
        computed:{
            multipleSelectFilter:function() {
                if (this.list.menus) {
                    var vm=this;
                    if (this.search.searchMatchType == 'partial') {
                        return this.list.menus.filter( menu =>{
                            if (this.search.searchType == 'individual') {

                                if( vm.search.relation){
                                    var comparableDataFromApi = menu[vm.search.relation]['data'][vm.search.searchField];
                                }else{
                                    var comparableDataFromApi = menu[vm.search.searchField];
                                }
                                if(comparableDataFromApi){
                                    return comparableDataFromApi.toLowerCase().includes(vm.search.searchKey.toLowerCase());
                                }
                            }
                            if (this.search.searchType == 'multiField') {
                                return menu.name.toLowerCase().includes(this.search.column.name.toLowerCase()) &&
                                        menu.module.data.moduleName.toLowerCase().includes(this.search.column.moduleName.toLowerCase()) &&
                                        menu.parentMenu.toLowerCase().includes(this.search.column.parentMenu.toLowerCase()) &&
                                        menu.route.toLowerCase().includes(this.search.column.route.toLowerCase()) &&
                                        menu.status.toLowerCase().includes(this.search.column.status.toLowerCase())
                            }
                            if (this.search.searchType == 'global') {
                                return menu.name.toLowerCase().includes(this.search.global.toLowerCase()) ||
                                        menu.module.data.moduleName.toLowerCase().includes(this.search.global.toLowerCase()) ||
                                        menu.parentMenu.toLowerCase().includes(this.search.global.toLowerCase()) ||
                                        menu.route.toLowerCase().includes(this.search.global.toLowerCase()) ||
                                        menu.status.toLowerCase().includes(this.search.global.toLowerCase())
                            }
                        });
                    }
                    if (this.search.searchMatchType == 'exact') {
                        return this.list.menus.filter( menu =>{
                            if (this.search.searchType == 'individual') {
                                if( vm.search.relation){
                                    var comparableDataFromApi = menu[vm.search.relation]['data'][vm.search.searchField];
                                }else{
                                    var comparableDataFromApi = menu[vm.search.searchField];
                                }
                                if(comparableDataFromApi){
                                    return comparableDataFromApi.toLowerCase()==(vm.search.searchKey.toLowerCase());
                                }
                            }
                            if (this.search.searchType == 'multiField') {
                                var result=true;
                                if (this.search.column.name) {
                                    result &= (menu.name.toLowerCase() == this.search.column.name.toLowerCase());
                                    console.log('name '+result);
                                }
                                if (this.search.column.moduleName) {
                                    result &= (menu.module.data.moduleName.toLowerCase()==this.search.column.moduleName.toLowerCase());
                                    console.log('module '+result);
                                }
                                if (this.search.column.parentMenu) {
                                    result &= (menu.parentMenu.toLowerCase()==this.search.column.parentMenu.toLowerCase());
                                    console.log('parentMenu '+result);
                                }
                                if (this.search.column.route) {
                                    result &= (menu.route.toLowerCase()==this.search.column.route.toLowerCase());
                                    console.log('route '+result);
                                }
                                if (this.search.column.status) {
                                    result &= (menu.status.toLowerCase()==this.search.column.status.toLowerCase());
                                    console.log('status '+result);
                                }
                                console.log('final '+result);
                                return result;


                            }
                            if (this.search.searchType == 'global') {
                                return menu.name.toLowerCase()==(this.search.global.toLowerCase()) ||
                                        menu.module.data.moduleName.toLowerCase()==(this.search.global.toLowerCase()) ||
                                        menu.parentMenu.toLowerCase()==(this.search.global.toLowerCase()) ||
                                        menu.route.toLowerCase()==(this.search.global.toLowerCase()) ||
                                        menu.status.toLowerCase()==(this.search.global.toLowerCase())
                            }
                        });
                    }

                    }

            },

            isSearched: function(){
                if(this.search.global ){
                    return true;
                }
                for(let i in this.search.column){
                    if(this.search.column[i] ){
                        return true;
                    }
                }
                return false;
            }
        },
        created: function(){
            axios.get('/modules')
                    .then( response => {
                this.dropDown.modules = response.data.data;
                console.log(this.modules);
            }),
            axios.get('/menus?include=module')
                    .then( response => {
                this.list.menus = response.data.data;
                //this.search.menus = this.list.menusList;
                console.log(this.menus);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
</script>
<style>
    .global{
        width: 952px;
    }
</style>