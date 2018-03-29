<template>
    <div class="card-footer">
        <button type="submit" v-if="isDisabled" class="btn btn-sm btn-default logic-btn-disabled" :class="{'disabled': isDisabled}" disabled> Save</button>
        <button v-else type="submit" class="btn btn-sm btn-default logic-btn-default" :class="{'disabled': isDisabled}">Save</button>
        <button type="button" class="btn btn-sm btn-default logic-btn-disabled" :class="{'disabled': !isDisabled}">Update</button>
        <button type="submit" class="btn btn-sm btn-default logic-btn-disabled" :class="{'disabled': !isDisabled}">Delete</button>
        <button type="button" class="btn btn-sm btn-default logic-btn-default" @click = "refresh($event)">Refresh</button>

    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        props:[
            'model',
            'refreshData',
        ],
        computed:{
        ...mapState({
            isDisabled: state => state.button.isDisabled,
        }),
        },
        data:function(){
            return{
            }
        },

        methods: {
            refresh:function(event){
                event.stopPropagation();
                var condition = true;
                for(let field in this.model){
                    if (this.refreshData.conditionalFields && this.refreshData.conditionalFields.length) {
                        this.refreshData.conditionalFields.forEach(noRefreshField => {
                            condition &= (field !== noRefreshField)
                        });
                    }
                    if (condition) {
                        //this.$store.dispatch('getButtonStatus');
                        console.log(this.model[field]);
                        this.model[field] = '';

                    }
                }
                return false;
            }
        }
    }
</script>
<style scoped>

</style>