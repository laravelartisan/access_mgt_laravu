<template>
    <div v-if="hasChildren" class="menu-dropdown">
        <label  class="menu-dropdown-level col-form-label form-control-label">Sub Menu</label>
        <select class="form-control form-control-sm"  >
            <option value="" disabled>Select Module</option>
            <option v-for="(menuChild, index) in menu.children" :value="menuChild.id" disabled>{{ menuChild.name }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'privilege',

        computed: {

            hasChildren: function(){
                return this.menu.children && this.menu.children.length
            }
        },

        data: function() {
            return{
                menuId: '',
                menu:
                {
                        name: 'Knit Garments',
                        id:1,
                        children: [
                            {
                                name: 'Order Tracking',
                                children: [
                                    { name: 'Sales Forecast Entry1', id: 5},
                                    { name: 'Sales Forecast Entry2', id: 6},
                                    { name: 'Sales Forecast Entry3', id: 7},

                                ]
                            },
                            { name: 'Fabric Booking', id: 2 },
                            { name: 'Trims Booking', id: 3 },
                            { name: 'Service Booking', id: 4 },
                        ],
                    },

            }
        }
    }
</script>