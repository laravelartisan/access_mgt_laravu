<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
            <div class="vue-tree">
                <ul>
                    <div v-for="(td, index) in treeData" class="sub-tree">
                        <tree :model="td"></tree>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        components: {
            'tree': () => import('../../../widgets/sidebar/tree'),
        },
        data:function(){
            return{
                treeData:[
                    {
                        name: 'Knit Garments',
                        uri:'menu',
                        children: [
                            {
                                name: 'Order Tracking',
                                children: [
                                    { name: 'Sales Forecast Entry'},
                                    { name: 'Quotation Inquery' },
                                    { name: 'Sample Development' },
                                    { name: 'Price Quotation' },
                                    { name: 'Order Entry' },
                                    { name: 'Color and Size Breakdown' },
                                    { name: 'Order Update Entry' },
                                    { name: 'Pre-Costing' },
                                    { name: 'Job Copy-V2' },
                                    { name: 'Copy Job' },
                                    { name: 'Buyer Quotation Final' },
                                    { name: 'Pre-Costing V2' },
                                    { name: 'Order Entry by Matrix' },
                                    { name: 'Order Import From Excel' },
                                    { name: 'Strip Measurement' },
                                    { name: 'Style Ref. Entry' },
                                    { name: 'Matrix Order Update' },
                                    { name: 'Sample Requisition' },
                                ]
                            },
                            { name: 'Fabric Booking' },
                            { name: 'Trims Booking' },
                            { name: 'Service Booking' },
                        ],
                    },
                    {
                        name: 'My Tree',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' },
                            {
                                name: 'child folder',
                                children: [
                                    {
                                        name: 'child folder',
                                        children: [
                                            { name: 'hello' },
                                            { name: 'wat' }
                                        ]
                                    },
                                    { name: 'hello' },
                                    { name: 'wat' },
                                    {
                                        name: 'child folder',
                                        children: [
                                            { name: 'hello' },
                                            { name: 'wat' }
                                        ]
                                    }
                                ]
                            },
                            { name: 'Logic' },
                            { name: 'Platform' },
                        ],
                    },
                    {
                        name: 'My Tree',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' },
                            {
                                name: 'child folder',
                                children: [
                                    {
                                        name: 'child folder',
                                        children: [
                                            { name: 'hello' },
                                            { name: 'wat' }
                                        ]
                                    },
                                    { name: 'hello' },
                                    { name: 'wat' },
                                    {
                                        name: 'child folder',
                                        children: [
                                            { name: 'hello' },
                                            { name: 'wat' }
                                        ]
                                    }
                                ]
                            },
                            { name: 'Logic' },
                            { name: 'Platform' },
                        ],
                    },
                ]

            }
        },
    }
</script>
<style scoped lang="scss">
   /* .vue-tree {
        font-size: 14px;
        min-height: 20px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    li {
        margin: 0;
        padding: 5px;
        position: relative;
        list-style: none;
    span, i, a {
        line-height: 20px;
        vertical-align: middle;
    }
    a + a {
        margin-left: 5px;
    }
    li i.icon-open-state {
        font-size: 16px;
    }
    }
    ul ul li:hover {
        background: rgba(0, 0, 0, .015)
    }

    li:after, li:before {
        content: '';
        left: -18px;
        position: absolute;
        right: auto
    }

    li:before {
        border-left: 1px solid #999;
        bottom: 50px;
        height: 100%;
        top: -16px;
        width: 1px;
    }

    li:after {
        border-top: 1px solid #999;
        height: 20px;
        top: 17px;
        width: 22px
    }

    li span {
        display: inline-block;
        padding: 3px 5px;
        text-decoration: none;
    }

    ul > li::after, .vue-tree > ul > li:before {
        border: 0
    }

    li:last-child::before {
        height: 34px
    }

    ul {
        padding-left: 0
    }

    ul ul {
        padding-left: 24px;
        padding-top: 10px
    }
    }*/
</style>