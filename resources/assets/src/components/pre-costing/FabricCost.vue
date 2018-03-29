<template>
    <div role="tablist">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion1 variant="info" class="header">Fabric Cost</b-btn>
            </b-card-header>
            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <table class="table table-responsive table-bordered fabric-cost-tbl">
                        <thead>
                        <tr>
                            <th width="130">Gmts Item</th>
                            <th width="100">Body Part</th>
                            <th width="70">Body Part Type</th>
                            <th width="100">Fab Nature</th>
                            <th width="80">Color Type</th>
                            <th width="180">Fabric Description</th>
                            <th width="80">Fabric Source</th>
                            <th width="60">Width /Dia Type</th>
                            <th width="40">GSM/ Weight</th>
                            <th width="120">Color &amp; Size Sensitive</th>
                            <th width="75">Color</th>
                            <th width="80">Consumption Basis</th>
                            <th width="55">Uom</th>
                            <th width="65">Avg. Grey Cons</th>
                            <th width="60">Rate</th>
                            <th width="70">Amount</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tr v-for="(fbcost, index) in fabCosts">
                            <td>
                                <select v-model="fbcost.gmtsItem">
                                    <option value="" disabled>Select</option>
                                    <option v-for="gmtsItem in dropDowns.gmtsItems" :value="gmtsItem">{{ gmtsItem }}</option>
                                </select>
                            </td>
                            <td>
                                <select  v-model="fbcost.bodyPart">
                                    <option value="" disabled>Select</option>
                                    <option v-for="bodyPart in dropDowns.bodyParts" :value="bodyPart">{{ bodyPart }}</option>
                                </select>
                            </td>
                            <td>
                                <select v-model="fbcost.bodyPartType" >
                                    <option value="" disabled>Select</option>
                                    <option v-for="bodyPartType in dropDowns.bodyPartTypes" :value="bodyPartType">{{ bodyPartType }}</option>
                                </select>
                            </td>
                            <td>
                                <select v-model="fbcost.fabNature">
                                    <option value="" disabled>Select</option>
                                    <option value="knit finish fabric">Knit Finish Fabric</option>
                                    <option value="woven fabric">woven Fabric</option>
                                </select>
                            </td>
                            <td>
                                <select v-model="fbcost.colorType">
                                    <option value="" disabled>Select</option>
                                    <option value="1">Solid</option>
                                    <option value="2">Stripe (Y/D)</option>
                                    <option value="3">Cross Over (Y/D)</option>
                                    <option value="4">Check (Y/D)</option>
                                    <option value="5">AOP</option>
                                    <option value="6">Solid (Y/D)</option>
                                    <option value="7">AOP Stripe</option>
                                    <option value="20">Florecent</option>
                                    <option value="25">Reactive</option>
                                    <option value="26">Melange</option>
                                    <option value="27">Marl</option>
                                    <option value="28">Burn Out</option>
                                    <option value="29">Gmts Dyeing</option>
                                    <option value="30">Cross Dyeing</option>
                                    <option value="31">Over Dyed</option>
                                    <option value="32">Space Y/D</option>
                                    <option value="33">Faulty Y/D</option>
                                    <option value="34">Solid Stripe</option>
                                    <option value="35">One Part Dye</option>

                                </select>
                            </td>
                            <td>
                                <input v-model="fbcost.fabricDescription" type="text"  class="form-control form-control-sm">
                            </td>
                            <td>
                                <select v-model="fbcost.fabricSource">
                                    <option value="" disabled>Select</option>
                                    <option value="1">Production</option>
                                    <option value="2">Buyer Supplied</option>
                                    <option value="3">Purchase</option>
                                </select>
                            </td>
                            <td>
                                <select v-model="fbcost.diaType">
                                    <option value="" disabled>Select</option>
                                    <option value="1" selected>Open Width</option>
                                    <option value="2">Tubular</option>
                                    <option value="3">Needle open</option>
                                </select>
                            </td>
                            <td>
                                <input v-model="fbcost.gsm" type="text"  class="form-control form-control-sm">
                            </td>
                            <td>
                                <select v-model="fbcost.colorAndSize">
                                    <option value="" disabled>Select</option>
                                    <option value="1">As per Gmts. Color</option>
                                    <option value="2">Size Sensitive</option>
                                    <option value="3">Contrast Color</option>
                                    <option value="4">Color &amp; Size Sensitive</option>
                                </select>
                            </td>
                            <td>
                                <input v-model="fbcost.color" type="text"  class="form-control form-control-sm">
                            </td>
                            <td>
                                <select v-model="fbcost.consumptionBasis">
                                    <option value="" disabled>Select</option>
                                    <option value="1">Cad Basis</option>
                                    <option value="2">Measurement Basis</option>
                                    <option value="3">Marker Basis</option>
                                </select>
                            </td>
                            <td>
                                <select v-model="fbcost.uom">
                                    <option value="" disabled>Select</option>
                                    <option value="1">Pcs</option>
                                    <option value="12">Kg</option>
                                    <option value="23">Mtr</option>
                                    <option value="27">Yds</option>
                                </select>
                            </td>
                            <td>
                                <input v-model="fbcost.AvgGreyCons" type="text"  class="form-control form-control-sm">
                            </td>
                            <td>
                                <input v-model="fbcost.rate" type="text"  class="form-control form-control-sm">
                            </td>
                            <td>
                                <input v-model="fbcost.amount" type="text"  class="form-control form-control-sm">
                            </td>
                            <td>
                                <span style="cursor: pointer" v-if="index==(fabCosts.length -1)" @click="addRow(index)"><i class="fa fa-plus"></i></span>
                                <span style="cursor: pointer" v-if="index==(fabCosts.length -1) && index > 0" @click="removeRow(index)"><i class="fa fa-minus"></i></span>
                                <span style="cursor: pointer" v-if="index > 0 && index < (fabCosts.length -1)" @click="removeRow(index)" ><i class="fa fa-minus"></i> </span>

                            </td>
                        </tr>
                    </table>
                    <insert-button-group></insert-button-group>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion2 variant="info" class="header">Yarn Cost</b-btn>
            </b-card-header>
            <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <table class="table table-responsive table-bordered">
                        <thead>
                            <tr>
                                <th>Count</th>
                                <th>Comp 1</th>
                                <th>%</th>
                                <th>Color</th>
                                <th>Type</th>
                                <th>Cons Qnty</th>
                                <th>Supplier</th>
                                <th>Rate</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select>
                                        <option>40s</option>
                                        <option>30s/D</option>
                                        <option>39s</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option>cotton</option>
                                        <option>collmax</option>
                                        <option>Convensitional</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text">
                                </td>
                                <td>
                                    <input type="text">
                                </td>
                                <td>
                                    <select>
                                        <option>Carded</option>
                                        <option>Combet</option>
                                        <option>Compact</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text">
                                </td>
                                <td>
                                    <select>
                                        <option>Select</option>
                                        <option>Logic</option>
                                        <option>Asrotex</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text">
                                </td>
                                <td>
                                    <input type="text">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <insert-button-group></insert-button-group>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion3 variant="info" class="header">Conversion Cost</b-btn>
            </b-card-header>
            <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <table class="table table-responsive table-bordered">
                        <thead>
                            <tr>
                                <th>Fabric Description
                                <th>Process	Process Loss
                                <th>Req. Qnty
                                <th>Avg.Req. Qnty (Less Process Loss)
                                    Charge/ Unit
                                    Amount
                                    Status</th>
                            </tr>
                        </thead>
                    </table>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>
<script>

    export default {
        components: {
            'insert-button-group': () => import('../../widgets/buttons/InsertButtons.vue'),
        },
        data:function(){
           return{
               fabCosts:[
                   {
                       gmtsItem:'',
                       bodyPart:'',
                       bodyPartType:'',
                       fabNature:'',
                       colorType:'',
                       fabricDescription:'',
                       fabricSource:'',
                       diaType:'',
                       gsm:'',
                       colorAndSize:'',
                       color:'',
                       consumptionBasis:'',
                       uom:'',
                       AvgGreyCons:'',
                       rate:'',
                       amount:'',

                   },
               ],
               dropDowns:{
                   gmtsItems:['Boys Boxer','Hoodies','T-shirt'],
                   bodyParts:['collar','cuff','hood','sleeve','binding'],
                   bodyPartTypes:['flat knit','bottom','other']
               }
           }
        },
        methods:{
            addRow: function(){
                this.fabCosts.push({
                    gmtsItem:'',
                    bodyPart:'',
                    bodyPartType:'',
                    fabNature:'',
                    colorType:'',
                    fabricDescription:'',
                    fabricSource:'',
                    diaType:'',
                    gsm:'',
                    colorAndSize:'',
                    color:'',
                    consumptionBasis:'',
                    uom:'',
                    AvgGreyCons:'',
                    rate:'',
                    amount:'',
                });
            },

            removeRow: function(index){
                this.fabCosts.splice(index,1);
            },
        },

        created: function(){

        }
    }
</script>
<style scoped lang="scss">
    .header {
        background-color: #343a40;
        border-color: #660000;
    }
    .fabric-cost-tbl{
        th{
            font-size: 9pt;
        }

    }
</style>