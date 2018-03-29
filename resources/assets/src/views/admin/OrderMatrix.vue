<template>
    <main class="main">
        <div class="order-entry container">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        Order Entry
                        <small>(Matrix)</small>
                    </div>
                        <form action="" method="post" class="form-group order-matrix" @submit.prevent="orderSubmit">
                            <div class="card-body">
                                <div class="form-group row required">
                                    <div class="col-md-1">
                                        <label class="control-label">Company</label>
                                    </div>
                                    <div class="col-md-3 form-group" :class="{'input': true, 'has-danger': errors.has('company') }">
                                        <select id="company" :class="{'input': true, 'form-control-danger': errors.has('company') }" v-validate="'required'" class="form-control form-control-sm" name="company"  v-model="model.company" @change="importRelatedData(model.company)" variant="primary">
                                            <option value="" disabled>Select Company</option>
                                            <option v-for="company in dropDown.companies" :value="company.id">{{company.companyName}}</option>
                                        </select>
                                        <b-tooltip show target="company"  v-show="errors.has('company')">{{ errors.first('company') }}</b-tooltip>
                                    </div>
                                    <div class="col-md-1">
                                        <label>Job No</label>
                                    </div>
                                    <div class="col-md-3">
                                        <input id="jobNumber" type="text" name="Job Number" @dblclick="showModal" class="form-control form-control-sm" placeholder="Job No" v-model="model.jobNumber" readonly>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="location" class="control-label">Location</label>
                                    </div>
                                    <div class="col-md-3 form-group" :class="{'input': true, 'has-danger': errors.has('location') }">
                                        <select name="location" id="location" class="form-control form-control-sm" v-model="model.location" :class="{'input': true, 'form-control-danger': errors.has('location') }" v-validate="'required'" variant="primary">
                                            <option value="" disabled>Select Location</option>
                                            <option v-for="location in dropDown.locations" :value="location.id">{{ location.locationName }}</option>
                                        </select>
                                        <b-tooltip show target="location"  v-show="errors.has('location')">{{ errors.first('location') }}</b-tooltip>
                                    </div>
                                </div>
                                <div class="form-group row required">
                                    <div class="col-md-1">
                                        <label for="buyer" class="control-label">Buyer</label>
                                    </div>
                                    <div class="col-md-3 form-group" :class="{'input': true, 'has-danger': errors.has('buyer') }">
                                        <select name="buyer" id="buyer" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('buyer') }" class="form-control form-control-sm" v-model="model.buyer" @change="getSeason(model.buyer)">
                                            <option value="">Select Buyer</option>
                                            <option v-for="(buyer, index) in dropDown.buyers" :value="buyer.id">
                                                {{ buyer.buyerName }}
                                            </option>
                                        </select>
                                        <b-tooltip show target="buyer"  v-show="errors.has('buyer')">{{ errors.first('buyer') }}</b-tooltip>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="styleRef" class="control-label">Style Ref.</label>
                                    </div>
                                    <div class="col-md-3 form-group" :class="{'input': true, 'has-danger': errors.has('style reference') }">
                                        <input name="style reference" id="styleRef" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('style reference') }" type="text" v-model="model.styleRef" class="form-control form-control-sm" placeholder="Double click for Quotation">
                                        <b-tooltip show target="styleRef"  v-show="errors.has('style reference')">{{ errors.first('style reference') }}</b-tooltip>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="styleDes" title="Style Description">Sty. Des.</label>
                                    </div>
                                    <div class="col-md-3">
                                        <input type="text" id="styleDes" v-model="model.styleDes" class="form-control form-control-sm" placeholder="Style Description">
                                    </div>
                                </div>
                                <div class="form-group row required">
                                    <div class="col-md-1">
                                        <label for="prdDept" class="control-label">Prd. Dpt.</label>
                                    </div>
                                    <div class="logic-custom-md-2 col-md-2" :class="{'input': true, 'has-danger': errors.has('product department') }">
                                        <select name="product department" id="prdDept" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('product department') }" class="form-control form-control-sm" v-model="model.prdDept" @change="getSubDepartment(model.buyer, model.prdDept)">
                                            <option value="" disabled>Select</option>
                                            <option v-for="(prdDepartment,index) in dropDown.prdDept" :value="index">{{prdDepartment}}</option>
                                        </select>
                                        <b-tooltip show target="prdDept"  v-show="errors.has('product department')">{{ errors.first('product department') }}</b-tooltip>
                                    </div>
                                    <div class="logic-custom-md-1 col-md-1">
                                        <input type="text" class="form-control form-control-sm">
                                    </div>
                                    <div class="col-md-1">
                                        <label for="subDept">Sub. Dpt.</label>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control form-control-sm" v-model="model.subDept" id="subDept">
                                            <option value="">Select Sub Department</option>
                                            <option v-for="subDept in dropDown.subDept" :value="subDept.id">{{subDept.subDepartmentName}}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="currency">Currency</label>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control form-control-sm" v-model="model.currency" id="currency">
                                            <option v-for="(currency, index) in dropDown.currency" :value="index + 1">{{ currency }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row required">
                                    <div class="col-md-1">
                                        <label for="season">Season</label>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control form-control-sm" v-model="model.season" id="season">
                                            <option value="">Select season</option>
                                            <option v-for="season in dropDown.seasons" :value="season.id">{{ season.seasonName }}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="region">Region</label>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control form-control-sm" v-model="model.region" id="region">
                                            <option v-for="(region,index) in dropDown.region" :value="index + 1">{{ region }}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="prdCat" class="control-label">Prd. Cat.</label>
                                    </div>
                                    <div class="col-md-3" :class="{'input': true, 'has-danger': errors.has('product category') }">
                                        <select name="product category" id="prdCat" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('product category') }" class="form-control form-control-sm" v-model="model.prdCat">
                                            <option value="">Select Product Category</option>
                                            <option v-for="(prdCat, index) in dropDown.prdCat" :value="index + 1">{{ prdCat }}</option>
                                        </select>
                                        <b-tooltip show target="prdCat"  v-show="errors.has('product category')">{{ errors.first('product department') }}</b-tooltip>
                                    </div>
                                </div>
                                <div class="form-group row required">
                                    <div class="col-md-1">
                                        <label for="teamLeader" class="control-label">Leader</label>
                                    </div>
                                    <div class="col-md-3" :class="{'input': true, 'has-danger': errors.has('team leader') }">
                                        <select name="team leader" id="teamLeader" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('team leader') }" class="form-control form-control-sm" v-model="model.teamLeader" @change="getTeamMember(model.teamLeader)">
                                            <option value="" disabled>Select Leader</option>
                                            <option v-for="teamLeader in dropDown.teamLeaders" :value="teamLeader.id">{{ teamLeader.teamLeaderName }}</option>
                                        </select>
                                        <b-tooltip show target="teamLeader"  v-show="errors.has('team leader')">{{ errors.first('team leader') }}</b-tooltip>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="dealingMerchant" class="control-label">Dea Mer.</label>
                                    </div>
                                    <div class="col-md-3" :class="{'input': true, 'has-danger': errors.has('dealing merchant') }">
                                        <select name="dealing merchant" id="dealingMerchant" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('dealing merchant') }" class="form-control form-control-sm" v-model="model.dealingMerchant">
                                            <option value="" disabled>Select Dealing Merchant</option>
                                            <option v-for=" teamMember in dropDown.dealingMerchants" :value="teamMember.id">{{ teamMember.teamMemberName}} One</option>
                                        </select>
                                        <b-tooltip show target="dealingMerchant"  v-show="errors.has('dealing merchant')">{{ errors.first('dealing merchant') }}</b-tooltip>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="factoryMerchant" class="control-label">Fac Mer.</label>
                                    </div>
                                    <div class="col-md-3" :class="{'input': true, 'has-danger': errors.has('factory merchant') }">
                                        <select name="factory merchant" id="factoryMerchant" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('factory merchant') }" class="form-control form-control-sm" v-model="model.factoryMerchant">
                                            <option value="" disabled>Select Factory Merchant</option>
                                            <option v-for=" teamMember in dropDown.dealingMerchants" :value="teamMember.id">{{ teamMember.teamMemberName}}</option>
                                        </select>
                                        <b-tooltip show target="factoryMerchant"  v-show="errors.has('dealing merchant')">{{ errors.first('factory merchant') }}</b-tooltip>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-1">
                                        <label for="email">Remarks</label>
                                    </div>
                                    <div class="col-md-7">
                                        <textarea class="form-control form-control-sm" v-model="model.remarks"></textarea>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="email">Ship Mode</label>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control form-control-sm" v-model="model.shipMode">
                                            <option v-for="(shipMode, index) in dropDown.shipMode" :value="index + 1">{{ shipMode }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row required">
                                    <div class="col-md-1">
                                        <label for="uom" class="control-label">Uom</label>
                                    </div>
                                    <div class="logic-custom-md-2 col-md-2" :class="{'input': true, 'has-danger': errors.has('order uom') }">
                                        <select name="order uom" id="uom" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('order uom') }" class="form-control form-control-sm" v-model="model.uom" @change="orderUom()">
                                            <option value="1" selected>Pcs</option>
                                            <option value="58">Set</option>
                                        </select>
                                        <b-tooltip show target="uom"  v-show="errors.has('order uom')">{{ errors.first('order uom') }}</b-tooltip>
                                    </div>
                                    <div class="logic-custom-md-1 col-md-1">
                                        <input type="button" @click="orderUom()" class="form-control form-control-sm" value="Item Det.">
                                    </div>
                                    <div class="col-md-1">
                                        <label for="smv" class="control-label">SMV</label>
                                    </div>
                                    <div class="col-md-3" :class="{'input': true, 'has-danger': errors.has('smv') }">
                                        <input name="smv" id="smv" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('smv') }" type="text" v-model="model.smv" class="form-control form-control-sm" placeholder="SMV" readonly>
                                        <b-tooltip show target="smv"  v-show="errors.has('smv')">{{ errors.first('smv') }}</b-tooltip>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="packing" class="control-label">Packing</label>
                                    </div>
                                    <div class="col-md-3" :class="{'input': true, 'has-danger': errors.has('packing') }">
                                        <select name="packing" id="packing" v-validate="'required'" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('packing') }" class="form-control form-control-sm" v-model="model.packing">
                                            <option value="" disabled>Select Packing</option>
                                            <option v-for="(packing,index) in dropDown.packing" :value="index">{{ packing }}</option>
                                        </select>
                                        <b-tooltip show target="packing"  v-show="errors.has('packing')">{{ errors.first('packing') }}</b-tooltip>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-1">
                                        <label for="buyer">Repeat</label>
                                    </div>
                                    <div class="logic-custom-md-2 col-md-2">
                                        <input type="text" v-model="model.repeat" class="form-control form-control-sm" placeholder="Repeat No/Job">
                                    </div>
                                    <div class="logic-custom-md-1 col-md-1">
                                        <input type="checkbox"  class="form-control form-control-sm">
                                    </div>
                                    <div class="col-md-1">
                                        <label for="email">Agent</label>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control form-control-sm" v-model="model.agent">
                                            <option value="">Selecr Agent</option>
                                            <option v-for="agent in dropDown.agents" :value="agent.id">{{ agent.buyerName }}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="email">Client</label>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control form-control-sm" v-model="model.client">
                                            <option value="">Select Client</option>
                                            <option v-for="client in dropDown.clients" :value="client.id">{{ client.buyerName }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-1">
                                        <label for="email">Quality Label</label>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control form-control-sm" v-model="model.qualityLabel">
                                            <option value="">Select Quality label</option>
                                            <option v-for="(qualityLabel,index) in dropDown.qualityLabel" :value="index">{{ qualityLabel }}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-1">
                                        <label for="email">Style Owner</label>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control form-control-sm" v-model="model.styleOwner">
                                            <option value="">Select Style Owner</option>
                                            <option v-for="style in dropDown.companies" :value="style.id">{{ style.companyName }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!--<div class="card-footer">
                                <button type="submit" class="btn btn-sm btn-primary" :class="{ 'disabled': !buttons.isDisabled }">Save</button>
                                <button type="button" class="btn btn-sm btn-primary"  :class="{ 'disabled':buttons.isDisabled }">Update</button>
                                <button type="button" class="btn btn-sm btn-primary" :class="{ 'disabled':buttons.isDisabled }">Delete</button>
                                <button type="button" class="btn btn-sm btn-primary" @click="refresh">Refresh</button>
                            </div>-->
                            <insert-button-group :model="model" :refreshData="buttons.refresh"></insert-button-group>
                        </form>


                </div>
            </div>
        </div>
        <b-modal v-if="model.company" ref="jobSearchModalRef" size="lg" title="Job Search" no-close-on-backdrop no-close-on-esc ok-only>
            <job-search :selectCompany = "selectedCompany"></job-search>
        </b-modal>
    </main>
</template>
<script>
    export default {
        components:{
            'job-search': () => import('../../components/pre-costing/JobSearch.vue'),
            'insert-button-group': () => import('../../widgets/buttons/InsertButtons.vue'),
        },
        computed: {
            selectedCompany: function(){
                return this.dropDown.companies.filter(company => {
                    if(this.model.company){
                        return company.id == this.model.company;
                    }

                });
            },

        },
        data:function(){
            return{
                buttons:{
                    isDisabled: true,
                    refresh: {
                       conditionalFields:[
                            'currency', 'region', 'prdCat', 'shipMode', 'uom', 'smv', 'repeatCk'
                        ],
                    },
                },
                model:{
                    company:'',
                    jobNumber:'',
                    location:'',
                    buyer:'',
                    styleRef:'',
                    styleDes:'',
                    prdDept:'',
                    subDept:'',
                    currency:2,
                    season:'',
                    region:1,
                    prdCat:1,
                    teamLeader:'',
                    dealingMerchant:'',
                    factoryMerchant:'',
                    remarks:'',
                    shipMode:1,
                    uom: 1,
                    smv:5,
                    packing:'',
                    repeatNumber:'',
                    repeatCk:1,
                    agent:'',
                    client:'',
                    qualityLabel:'',
                    styleOwner:'',
                },
                dropDown:{
                    companies:[],
                    locations:[],
                    buyers:[],
                    prdDept:["Mens","Ladies","Teen Age-Girls","Teen Age-Boys","Kids-Boys","Infant","Unisex","Kids-Girls","Baby","Kids","Women"],
                    subDept:[],
                    currency:["Taka","USD","EURO","CHF","SGD","Pound","YEN"],
                    seasons:[],
                    region:["Asia","Africa","Australia","Antarctica","Europe","North America ","South America"],
                    prdCat:["Outwears","Lingerie","Sweater","Socks","Fabric"],
                    teamLeaders:[],
                    dealingMerchants:[],
                    factoryMerchants:[],
                    shipMode:["Sea","Air","Road","Train","Sea/Air","Road/Air"],
                    orderUom:[],
                    packing:["SCSS","ACSS","SCAS","ACAS"],
                    agents:[],
                    clients:[],
                    qualityLabel:["Platinum","Gold","Silver"],
                    styleOwner:[],
                },
            }
        },
        methods:{
            showModal:function(){
                if (!this.ifCompanyExists()) {
                    alert('Please select company first');
                    return false;
                }
                this.$refs.jobSearchModalRef.show()

            },
            importRelatedData:function(companyId){
                this.model.location=''
                this.model.styleOwner = companyId
                axios.get('/location/'+ companyId)
                        .then( response => {
                    this.dropDown.locations = response.data.data;
                })
                .catch(function (error) {
                    console.log(error.response.data.error);
                });
                axios.get('/buyer/'+ companyId)
                        .then( response => {
                    this.dropDown.buyers = response.data.data;
                })
                .catch(function (error) {
                    console.log(error.response.data.error);
                });
                axios.get('/agent/'+ companyId)
                        .then( response => {
                    this.dropDown.agents = response.data.data;
                })
                .catch(function (error) {
                    console.log(error.response.data.error);
                });
                axios.get('/client/'+ companyId)
                        .then( response => {
                    this.dropDown.clients = response.data.data;
                })
                .catch(function (error) {
                    console.log(error.response.data.error);
                });
            },
            getTeamMember:function(teamLeaderId){
                this.model.dealingMerchant = '';
                this.model.factoryMerchant = '';

                axios.get('/team-member/'+ teamLeaderId)
                        .then( response => {
                    this.dropDown.dealingMerchants = response.data.data;
                    //console.log(response.data.data);
                })
                .catch(function (error) {
                    console.log(error.response.data.error);
                });
            },
            getSeason:function(buyerId){
                axios.get('/season/'+ buyerId)
                        .then( response => {
                    this.dropDown.seasons = response.data.data;
                    console.log(response.data.data);
                })
                .catch(function (error) {
                    console.log(error.response.data.error);
                });
            },
            getSubDepartment:function(buyerId,departmentId){
                axios.get('/sub-department/buyer/'+ buyerId + '/department/' +departmentId)
                        .then( response => {
                    this.dropDown.subDept = response.data.data;
                    console.log(this.dropDown.subDept);
                })
                .catch(function (error) {
                    console.log(error.response.data.error);
                });
            },
            orderUom:function(){

            },
            orderSubmit: function(){
                this.$validator.validateAll().then((isSubmitted)=>
                {
                    if (isSubmitted) {
                        axios.post('/order-matrix', this.model).then( response => {
                            this.model.jobNumber = response.data.data.job_no;
                            console.log(response.data.data.job_no);
                        }).catch( error => {
                            this.serverErrors = error.response.data.errors;
                            console.log(this.serverErrors);
                        });
                        return;
                    }
                });


            },
            ifCompanyExists:function(){
                if (this.model.company) {
                    return true;
                }
                return false;
            },


        },
        created:function(){
            axios.get('/company')
                    .then( response => {
                this.dropDown.companies = response.data.data;
                //console.log(this.dropDown.companies);
            })
            .catch(function (error) {
                console.log(error.response.data.error);
            });
            axios.get('/team-leader')
                    .then( response => {
                this.dropDown.teamLeaders = response.data.data;
                //console.log(this.dropDown.teamLeaders);
            })
            .catch(function (error) {
                console.log(error.response.data.error);
            });
        },
    }
</script>
<style lang="scss" scoped>
    .form-group.required .control-label:after {
        content:"*";
        color:red;
    }
    .order-matrix{
        textarea{
            height: 30px;
        }
    }
</style>