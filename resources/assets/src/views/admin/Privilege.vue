<template>
    <main class="main">
        <div class="container logic-one-col-form">
            <div class="row">
                <div class="col-md-12">
                    <!-- form user info -->
                    <div class="card">
                        <div class="card-header">
                            <h4 class="text-center">Role Privileges</h4>
                            <form class="form" role="form" autocomplete="off" @submit.prevent = "submitForm">
                                <div class="card-body">
                                    <div class="form-group row">
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Role</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Module</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Module</option>

                                            </select>
                                        </div>

                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Copy From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Inherit From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>

                                        <div class="col-lg-2">
                                            <label class="col-lg-12 col-form-label form-control-label">Permission Level</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>
                                                <option value="" >Selective</option>
                                                <option value="" >Full</option>

                                            </select>
                                        </div>
                                    </div>



                                </div>
                                <div class="card-body">

                                    <div class="form-group row">
                                        <div class="menu-dropdown">
                                            <label class="menu-dropdown-level col-form-label form-control-label">Role</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>
                                        <template ></template>
                                        <div class="menu-dropdown">
                                            <label  class="menu-dropdown-level col-form-label form-control-label">Module</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Module</option>

                                            </select>
                                        </div>

                                        <div class="menu-dropdown">
                                            <label class="menu-dropdown-level col-form-label form-control-label">Copy From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>
                                        <div class="menu-dropdown">
                                            <label class="menu-dropdown-level col-form-label form-control-label">Inherit From</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>

                                            </select>
                                        </div>

                                        <div class="menu-dropdown">
                                            <label class="menu-dropdown-level col-form-label form-control-label">Permission Level</label>
                                            <select class="form-control form-control-sm"  >
                                                <option value="" disabled>Select Role</option>
                                                <option value="" >Selective</option>
                                                <option value="" >Full</option>

                                            </select>
                                        </div>
                                    </div>



                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-sm btn-default logic-btn-default" > Save</button>

                                    <button type="button" class="btn btn-sm btn-default logic-btn-default" @click="resetForm()">Refresh</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <!-- /form user info -->
                </div>
                <!--/col-->
            </div>
            <!--/row-->
        </div>

    </main>
</template>

<script>

    export default {

        data:function(){
            return{
                menus: [
                    {
                        name: 'Knit Garments',
                        id:1,
                        children: [
                            {
                                name: 'Order Tracking',
                                id: 2,
                                children: [
                                    { name: 'Sales Forecast Entry', id:3},
                                    { name: 'Quotation Inquery', id:4 },

                                ]
                            },
                            { name: 'Fabric Booking', id: 5 },
                            { name: 'Trims Booking', id: 6 },
                            { name: 'Service Booking', id: 7 },
                        ],
                    },
                    {
                        name: 'My Tree',
                        id: 8,
                        children: [
                            { name: 'hello', id: 9 },
                            { name: 'wat', id: 10 },
                            {
                                name: 'child folder',
                                id: 11,
                                children: [
                                    {
                                        name: 'child folder',
                                        id: 12,
                                        children: [
                                            { name: 'hello', id: 13 },
                                            { name: 'wat', id: 14 }
                                        ]
                                    },
                                    { name: 'hello', id: 15 },
                                    { name: 'wat', id: 16 },
                                    {
                                        name: 'child folder',
                                        id: 17,
                                        children: [
                                            { name: 'hello', id: 18 },
                                            { name: 'wat', id: 19 }
                                        ]
                                    }
                                ]
                            },
                            { name: 'Logic', id: 20 },
                            { name: 'Platform', id: 21 },
                        ],
                    },
                ]

            }
        },
    }

</script>

<style scoped>
    .menu-dropdown{
        width: 14%;
    }
    .menu-dropdown-level{
        width: 100%;
    }
</style>