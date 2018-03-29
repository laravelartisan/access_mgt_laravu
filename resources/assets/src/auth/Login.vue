<template>
    <div class="container" style="margin-top: 150px;">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card-group">
                    <div class="card p-4">
                        <div class="card-body">
                            <h1>Login</h1>
                            <p class="text-muted">Sign In to your account</p>
                            <form @submit.prevent="signin">
                                <div class="input-group mb-3">

                                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                        <input  v-model.lazy="model.email" name="email" type="email"  v-validate="'required|email'"
                                               :class="{'input-danger': errors.has('email')}"     class="form-control" placeholder="User Email">
                                </div>
                                <div>
                                        <span v-show="errors.has('email')" class="text-danger">
                                        <i v-show="errors.has('email')" class="text-danger fa fa-warning"></i>
                                        {{ errors.first('email') }}
                                    </span>
                                </div>

                                <div class="input-group mb-4">
                                    <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                    <input  v-model.lazy="model.password" name="password" type="password" v-validate="'required'"
                                           :class="{'input-danger': errors.has('password')}"      class="form-control" placeholder="Password">
                                </div>
                                <div>
                                    <span v-show="errors.has('password')" class="text-danger">
                                        <i v-show="errors.has('password')" class="text-danger fa fa-warning"></i>
                                        {{ errors.first('password') }}
                                    </span>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <button type="submit" class="btn btn-primary px-4 logic-login" :disabled="disabled">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card text-white py-5 d-md-down-none" style="width:44%;">
                        <div class="card-body text-center">
                            <div>
                                <img style="margin-top: 63px;" class="card-img" src="images/Platfrom.png"
                                     alt="Platform">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex';

    export default {

        computed: mapState({
            errors: state => state.login.errors
        }),
        data: function () {
            return {
                model: {
                    email: null,
                    password: null,
                },
                disabled: false,
                isEmailTaken: false,
                serverErrors: null

            }
        },
        created: function () {
            this.$store.dispatch('login/clearLoginErrors');
        },

        methods: {
            signin: function () {
                this.$validator.validateAll().then((isSubmitted)=>
                {
                    if (isSubmitted) {
                        this.disabled = true;
                        const loginData = {
                            email: this.model.email,
                            password: this.model.password
                        };

                        this.$store.dispatch('login/loginRequest', loginData)
                                .then((response) => {
                            alert('admin');
                                    this.$router.push({name: 'admin'});
                                    setTimeout(function(){
                                        this.disabled = false;
                                    }, 2000);
                                })
                                .catch((error) => {
                                    alert('Sorry!!! ' + this.$store.state.notification.error);
                                    this.disabled = false;
                                    console.log();
                                });
                        return;
                    }
                });

            }
        }
    }
</script>

