<template>
    <div>
        <table class="table table-responsive table-bordered table-striped table-sm job-search-form">
            <thead>
            <tr>
                <th>Company</th>
                <th>Buyer</th>
                <th>Job No</th>
                <th>Style Ref</th>
                <th>Internal Ref</th>
                <th>File No</th>
                <th>Order No</th>
                <th>Date Range</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <select v-if="selectCompany && selectCompany.length > 0">
                        <option v-for="company in selectCompany" :value="company.id" selected="selected">
                            {{ company.companyName }}
                        </option>
                    </select>

                    <select v-else v-model="model.company" @change="getBuyer(model.company)">
                        <option value="" disabled>Select Company</option>
                        <option   v-for="company in dropDown.companies" :value="company.id">
                            {{company.companyName}}
                        </option>
                    </select>
                </td>
                <td>
                    {{companyBuyer}}
                    <select v-model="model.buyer">
                        <option value="">Select Buyer</option>
                        <option v-for="buyer in dropDown.buyers" :value="buyer.id">{{ buyer.buyerName }}</option>
                    </select>
                </td>
                <td><input type="text" v-model="model.jobNo"></td>
                <td><input type="text" v-model="model.styleRef"></td>
                <td><input type="text" v-model="model.internalRef"></td>
                <td><input type="text" v-model="model.fileNo"></td>
                <td><input type="text" v-model="model.orderNo"></td>
                <td class="date-picker">
                    <date-picker :date="startTime" :option="option" v-model="model.toDate"></date-picker>
                    <date-picker :date="endTime" :option="option" v-model="model.endDate"></date-picker>
                </td>
                <td><input type="button" value="Show" @click="jobSearch()"></td>
            </tr>
            <tr>
                <td colspan="9" class="year-month">
                    <select v-model="model.year" @change="changeYear">
                        <option value="">Select Year</option>
                        <option v-for="year in dropDown.years" :value="year">{{year}}</option>
                    </select>
                    <span class="monthName" v-for="(month,index) in months">
                        <button  type="button" @click="dateRange(index +1 )" class="btn-color"  :class="{'select-btn-color':isLoading === index+1}">{{ month }}</button>
                    </span>
                </td>
            </tr>
            </tbody>
        </table>
        <table class="table table-responsive table-bordered table-striped job-search-result" v-if="isSearched">
            <thead>
            <tr>
                <th>SL#</th>
                <th>Job No</th>
                <th>Year</th>
                <th>Buyer Name</th>
                <th>Style Ref. No</th>
                <th>Job Qty.</th>
                <th>Repeat #</th>
                <th>PO #</th>
                <th>PO Qty.</th>
                <th  class="date">Shipment Date</th>
                <th>Gmts Nature</th>
                <th>Ref no</th>
                <th>File No</th>
                <th>Lead time</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(job ,index) in dropDown.jobs" @dblclick="populateData(job)">
                <td>{{ index + 1 }}</td>
                <td>{{ job.job_no_prefix_num }}</td>
                <td>{{ job.year }}</td>
                <td>{{ job.buyer_name }}</td>
                <td>{{ job.style_ref_no }}</td>
                <td>{{ job.job_quantity }}</td>
                <td>{{ job.order_repeat_no }}</td>
                <td>{{ job.po_number }}</td>
                <td>{{ job.po_quantity }}</td>
                <td>{{ job.shipment_date }}</td>
                <td>{{ job.garments_nature }}</td>
                <td>{{ job.grouping }}</td>
                <td>{{ job.file_no }}</td>
                <td>{{ job.date_diff }}</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>
<script>

    export default {
        computed:{
            companyBuyer:function(){
                if (this.selectCompany && this.selectCompany.length > 0) {
                    return this.getBuyer(this.selectCompany[0].id);
                }
            },
            isSearched:function(){
                if (this.dropDown.jobs.length > 0) {
                    return true;
                }
                return false;
            }
        },
        props: ['selectCompany'],
        components: {
            'date-picker': () => import('vue-datepicker'),
        },
        data:function(){
            return{
                isLoading: false,
                model:{
                    company:'',
                    buyer:'',
                    jobNo:'',
                    styleRef:'',
                    internalRef:'',
                    fileNo:'',
                    orderNo:'',
                    toDate:'',
                    endDate:'',
                    selectedMonth:'',
                    year:''
                },
                dropDown:{
                    companies:[],
                    buyers:[],
                    jobs:[],
                    years:['2010','2011','2012','2013','2014','2015','2016','2017','2018']
                },
                months:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
                startTime: {
                    time: ''
                },
                endTime: {
                    time: ''
                },
                option: {
                    type: 'day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'DD/MM/YYYY',
                    placeholder: 'DD/MM/YYYY',
                    inputStyle: {
                        'display': 'inline-block',
                        'margin-left': '3px',
                        'width': '120px',
                    },
                    color: {
                        header: '#000',
                        headerText: '#f00'
                    },
                    buttons: {
                        ok: 'Ok',
                        cancel: 'Cancel'
                    },
                    overlayOpacity: 0.5, // 0.5 as default
                    dismissible: true // as true as default
                },
            }
        },
        methods:{
            getBuyer:function(companyId){
                this.model.buyer=''
                axios.get('/buyer/' + companyId)
                        .then( response => {
                            this.dropDown.buyers = response.data.data;
                            console.log(this.dropDown.buyers);
                        })
                        .catch(function (error) {
                            console.log(error.response.data.error);
                        });
            },
            dateRange:function(monthNumber){
                this.model.selectedMonth = monthNumber;
                if (this.model.year == '') {
                    alert("Please select one Year");
                    return false;
                }
                if (this.isLoading === monthNumber) {
                    this.isLoading = false;
                    this.startTime.time ='';
                    this.endTime.time ='';
                    this.model.selectedMonth = '';
                    return false;
                }
                this.isLoading = monthNumber;

                var FirstDay = new Date(this.model.year, monthNumber-1, 1);
                var LastDay = new Date(this.model.year, monthNumber , 0);
                this.startTime.time = moment(FirstDay).format("DD-MM-YYYY");
                this.endTime.time = moment(LastDay).format("DD-MM-YYYY");
            },
            jobSearch:function(){
                if (this.selectCompany && this.selectCompany.length > 0) {
                    this.model.company = this.selectCompany[0].id;
                }
                this.model.toDate = this.startTime.time;
                this.model.endDate = this.endTime.time;
                axios.post('/job-search', this.model).then( response => {
                    this.dropDown.jobs = response.data.data;
                    console.log(this.dropDown.jobs);
                });
            },
            changeYear:function(){
                if (this.model.selectedMonth) {
                    var FirstDay = new Date(this.model.year, this.model.selectedMonth-1, 1);
                    var LastDay = new Date(this.model.year, this.model.selectedMonth , 0);
                    this.startTime.time = moment(FirstDay).format("DD-MM-YYYY");
                    this.endTime.time = moment(LastDay).format("DD-MM-YYYY");
                }
                if (!this.model.year) {
                    this.isLoading = false;
                    this.startTime.time ='';
                    this.endTime.time ='';
                    this.model.selectedMonth = '';
                    return false;
                }
            },
            populateData:function(job, event){
                this.$emit('clicked', 'job')
            }
        },
        created: function(){
            axios.get('/company')
                    .then( response => {
                        this.dropDown.companies = response.data.data;
                        //this.search.menus = this.list.menusList;
                        //console.log(this.dropDown.companies);
                    })
                    .catch(function (error) {
                        console.log(error.response.data.error);
                    });

        }
    }
</script>
<style scoped lang="scss">
    .job-search-form{
        .year-month{
            text-align: center;
            padding-bottom:15px;
        }
        .monthName{
            padding: 2px;
            margin-bottom:10px;
        }
        .date-picker {
            display: flex; /* 2. display flex to the rescue */
            flex-direction: row;
        }
        th input{
            margin: 3px;
        }
        td input{
            width: 90px;
        }
        td select{
            height: 30px;
            width: 120px;
        }
        .btn-color{
            background-color: #cccccc;
        }
        .select-btn-color{
            background-color: #5F5E5E;
        }
    }
    .job-search-result{
        height:300px;
        tbody {
            overflow-y: scroll;
            overflow-x: scroll;
        }
        td{
            cursor: pointer;
            font-size: 9pt;
            font-family: helvetica, arial, sans-serif;
        }

    }


</style>