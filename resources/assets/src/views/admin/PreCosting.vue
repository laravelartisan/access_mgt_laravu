<template>
    <main class="main">
        <div class="logic-form row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        Pre-Costing
                        <small>V2</small>
                    </div>
                        <form action="" method="post" class="form-group">
                            <div class="card-body">
                                <div class="form-group row">
                                <div class="col-md-1">
                                    <label for="jobId">Job No</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" v-b-modal.jobSearch class="form-control form-control-sm" placeholder="Job No">
                                </div>
                                <div class="col-md-1">
                                    <label for="company">Company</label>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control form-control-sm">
                                        <option>Selecr Company</option>
                                        <option>Logic One</option>
                                        <option>Logic Two</option>
                                    </select>
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Quotation ID</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Style Ref</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                                <div class="form-group row">
                                <div class="col-md-1">
                                    <label for="buyer">Style Des.</label>
                                </div>
                                <div class="col-md-2">
                                    <textarea class="form-control form-control-sm"></textarea>
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Internal Ref</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Buyer</label>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control form-control-sm">
                                        <option>Select</option>
                                        <option>Logic One</option>
                                        <option>Logic Two</option>
                                    </select>
                                </div>
                                <div class="col-md-1">
                                    <label for="email" title="Style Description">Prd. Dept.</label>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control form-control-sm">
                                        <option>Select</option>
                                        <option>Logic One</option>
                                        <option>Logic Two</option>
                                    </select>
                                </div>
                            </div>
                                <div class="form-group row">
                                <div class="col-md-1">
                                    <label for="Currency">Currency</label>
                                </div>
                                <div class="logic-custom-md-1 col-md-1">
                                    <select class="form-control form-control-sm">
                                        <option>Select</option>
                                        <option>Logic One</option>
                                        <option>Logic Two</option>
                                    </select>
                                </div>
                                <div class="logic-custom-md-11 col-md-1">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="Agent">Agent</label>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control form-control-sm">
                                        <option>Select</option>
                                        <option>Logic One</option>
                                        <option>Logic Two</option>
                                    </select>
                                </div>
                                <div class="col-md-1">
                                    <label for="job qty">Job Qty.</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="job qty">Order UOM</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                                <div class="form-group row">
                                <div class="col-md-1">
                                    <label for="buyer">Costing Date</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Incoterm</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Incoterm Place</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Machine/Line</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                                <div class="form-group row">
                                <div class="col-md-1">
                                    <label for="buyer">Prod/Line/Hr</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Costing Per</label>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control form-control-sm">
                                        <option>Select Costing &percnt;</option>
                                        <option>Logic One</option>
                                        <option>Logic Two</option>
                                    </select>
                                </div>
                                <div class="col-md-1">
                                    <label for="Region">Region</label>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control form-control-sm">
                                        <option>Select Region</option>
                                        <option>Logic One</option>
                                        <option>Logic Two</option>
                                    </select>
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Approved</label>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control form-control-sm">
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>
                                <div class="form-group row">
                                <div class="col-md-1">
                                    <label for="buyer">Sew. SMV</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Sew Eff %</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Cut. SMV</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Cut Eff %</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                                <div class="form-group row">
                                <div class="col-md-1">
                                    <label for="buyer">Remarks</label>
                                </div>
                                <div class="col-md-2">
                                    <textarea class="form-control form-control-sm"></textarea>
                                </div>
                                <div class="col-md-1">
                                    <label for="buyer">File no</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Images</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="file" class="form-control form-control-sm">
                                </div>
                                <div class="col-md-1">
                                    <label for="email"></label>
                                </div>
                                <div class="col-md-2">
                                    <input type="button" value="Pre Costing Copy">
                                </div>
                            </div>
                                <div class="form-group row">
                                <div class="col-md-1">
                                    <label for="Ready To Approved">Ready To Approved</label>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control form-control-sm">
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Budget Minuite</label>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control form-control-sm">
                                        <option>Selecr Budget Minuite</option>
                                        <option>Logic One</option>
                                        <option>Logic Two</option>
                                    </select>
                                </div>
                                <div class="col-md-1">
                                    <label for="email">Copy From</label>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                            </div>
                            <insert-button-group></insert-button-group>
                        </form>


                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <pre-costing></pre-costing>
            </div>
            <div class="col-md-9">
                <fabric-cost v-if="fabricBudget"></fabric-cost>
            </div>
        </div>
        <b-modal id="jobSearch" size="lg" title="Job Search" no-close-on-backdrop no-close-on-esc ok-only>
            <job-search></job-search>
        </b-modal>
    </main>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        components: {
            'pre-costing': () => import('../../components/pre-costing/CostComponents'),
            'insert-button-group': () => import('../../widgets/buttons/InsertButtons.vue'),
            'fabric-cost': () => import('../../components/pre-costing/FabricCost.vue'),
            'job-search': () => import('../../components/pre-costing/JobSearch.vue')
        },
        computed:{
                ...mapState({
                    fabricBudget: state => state.precosting.fabricBudget,
                }),

        },

    }
</script>
<style scoped lang="scss">
    .modal-content{
        min-height: 450px;
    }
</style>