<template>
    <table class="table table-bordered table-sm cost-components-tbl">
        <thead>
        <tr>
            <th>Cost Components</th>
            <th>Budgeted Cost</th>
            <th> % To Q.price </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Fabric Cost</td>
            <td><input type="number" readonly="" value="5050" @click="showFabricCost(true)" /></td>
            <td><input type="text"/></td>
        </tr>
        <tr>
            <td>Trims Cost</td>
            <td><input type="text" @click="showFabricCost(false)" /></td>
            <td><input type="text" /></td>
        </tr>
        <tr>
            <td>Embel. Cost</td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
        </tr>
        <tr>
            <td>Gmts.Wash</td>
            <td><input type="text" /></td>
            <td><input type="text"/></td>
        </tr>
        <tr>
            <td>Comml. Cost</td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
        </tr>
        <tr>
            <td>Lab Test</td>
            <td><input type="text"/></td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>Inspection </td>
            <td><input type="text"/></td>
            <td><input type="text"  /></td>
        </tr>
        <tr>
            <td>CM Cost</td>
            <td><input type="text"/></td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>Freight</td>
            <td><input type="text"/></td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>Currier Cost</td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
        </tr>
        <tr>
            <td>Certificate Cost </td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
        </tr>
        <tr>
            <td>Operating Expenses</td>
            <td><input type="text"/></td>
            <td><input type="text" ></td>
        </tr>
        <tr>
            <td>Commission</td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
        </tr>
        <tr>
            <td>Depc. & Amort.</td>
            <td><input type="text"/></td>
            <td><input type="text" ></td>
        </tr>
        <tr>
            <td>Total Cost</td>
            <td><input type="text"> </td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>Price/Dzn</td>
            <td><input type="text" /></td>
            <td><input type="text"  /></td>
        </tr>
        <tr>
            <td> Margin/Dzn</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
        </tr>
        <tr>
            <td>Price/Pcs</td>
            <td><input type="text" /></td>
            <td><input type="text"  /></td>
        </tr>
        <tr>
            <td>Final Cost/Pcs</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
        </tr>
        <tr>
            <td>Margin/pcs</td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        methods:{
            showFabricCost:function(param){
                if(param){
                    this.$store.dispatch('precosting/getFabricBudgetStatus', param);
                }else{
                    this.$store.dispatch('precosting/getFabricBudgetStatus', param);
                }
            }
        }
    }
</script>
<style lang="scss">
    .main{
        padding-left: 3px;
    }
    .cost-components-tbl{
            font-size: 9pt;
        tbody input ,td{
            width: 70px;
        }
        thead th{
            text-align:center;
        }
    }
</style>