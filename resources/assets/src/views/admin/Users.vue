<template>
        <main class="main">
          <div class="user-create container">
  					<div class="col-lg-12">
  				    <div class="card">
  				        <div class="card-header">
							<!--<h3>
								{{ authenticated }} {{ roles }}
							</h3>-->
  				          User Credentials
  				          <small>(Accounts Information)</small>
  				        </div>
  				        	<form action="" method="post" class="form-group" @submit.prevent="userSubmit">
								<div class="card-body">
									<div class="form-group row required">
									  <div class="col-md-2">
										<label class="control-label" >User ID :</label>
									  </div>
									  <div class="col-md-4" :class="{'input': true, 'has-danger': errors.has('user id') }">
										<input type="text" id="userTextId" name="user id" :class="{'input': true, 'form-control-danger': errors.has('user id') }" variant="primary" v-validate="'required'" class="form-control form-control-sm" placeholder="User text id" v-model="model.userTextId" data-vv-validate-on="none">
										  <b-tooltip show target="userTextId"  v-show="errors.has('user id')">{{ errors.first('user id') }}</b-tooltip>
									  </div>
									  <div class="col-md-2">
										<label for="email" class="control-label">email :</label>
									  </div>
									  <div class="col-md-4" :class="{'input': true, 'has-danger': errors.has('email') }">
										<input type="text" id="email" name="email" :class="{'input': true, 'form-control-danger': errors.has('email') }" variant="primary" v-validate="'required'" class="form-control form-control-sm" placeholder="email@company.com" v-model="model.email" data-vv-validate-on="none">
										  <b-tooltip show target="email"  v-show="errors.has('email')">{{ errors.first('email') }}</b-tooltip>
									  </div>
									</div>
									<div class="form-group row required">
									  <div class="col-md-2">
										<label for="password" class="control-label">Password :</label>
									  </div>
									  <div class="col-md-4" :class="{'input': true, 'has-danger': errors.has('password') }">
										<input type="password" id="password" name="password" :class="{'input': true, 'form-control-danger': errors.has('password') }" variant="primary" v-validate="'required'" class="form-control form-control-sm" v-model="model.password" data-vv-validate-on="none">
										<b-tooltip show target="password"  v-show="errors.has('password')">{{ errors.first('password') }}</b-tooltip>
									  </div>
									  <div class="col-md-2">
										<label for="cpassword" class="control-label">Confirm Password :</label>
									  </div>
									  <div class="col-md-4" :class="{'input': true, 'has-danger': errors.has('confirm password') }">
										<input type="password" id="cpassword" name="confirm password" :class="{'input': true, 'form-control-danger': errors.has('confirm password') }" variant="primary" v-validate="'required|confirmed:password'" class="form-control form-control-sm" v-model="model.cPassword" data-vv-as="password" data-vv-validate-on="none">
									  </div>
										<b-tooltip show target="cpassword"  v-show="errors.has('confirm password')">{{ errors.first('confirm password') }}</b-tooltip>
									</div>
									<div class="form-group row required">
									  <div class="col-md-2">
										<label for="userName" class="control-label">Full User Name :</label>
									  </div>
									  <div class="col-md-4" :class="{'input': true, 'has-danger': errors.has('user name') }">
										<input type="text" id="userName" name="user name" :class="{'input': true, 'form-control-danger': errors.has('user name') }" variant="primary" v-validate="'required'" class="form-control form-control-sm" v-model="model.userName" data-vv-validate-on="none">
										  <b-tooltip show target="userName"  v-show="errors.has('user name')">{{ errors.first('user name') }}</b-tooltip>
									  </div>
									  <div class="col-md-2">
										<label for="designation" class="control-label">Designation :</label>
									  </div>
									  <div class="col-md-4" :class="{'input': true, 'has-danger': errors.has('designation') }">
										<select class="form-control form-control-sm" id="designation" name="designation" variant="primary" :class="{'input': true, 'form-control-danger': errors.has('designation') }" v-validate="'required'" v-model="model.designation" data-vv-validate-on="none">
											<option value="" disabled>Select Designation</option>
											<option value="1">Admin</option>
											<option value="2">Developer</option>
										</select>
										  <b-tooltip show target="designation"  v-show="errors.has('designation')">{{ errors.first('designation') }}</b-tooltip>
									  </div>
									</div>
									<div class="form-group row required">
									  <div class="col-md-2">
										<label for="department" class="control-label">Department :</label>
									  </div>
									  <div class="col-md-4" :class="{'input': true, 'has-danger': errors.has('department') }">
										<select class="form-control form-control-sm" id="department" name="department" :class="{'input': true, 'form-control-danger': errors.has('department') }" variant="primary" v-validate="'required'" v-model="model.department" data-vv-validate-on="none">
											<option value="" disabled>Select Department</option>
											<option value="1">Mkt</option>
											<option value="2">Development</option>
										</select>
										  <b-tooltip show target="department"  v-show="errors.has('department')">{{ errors.first('department') }}</b-tooltip>
									  </div>
									  <div class="col-md-2">
										<label for="userlevel" class="control-label">User Role</label>
									  </div>
									  <div class="col-md-4" :class="{'input': true, 'has-danger': errors.has('user level') }">
										<select class="form-control form-control-sm" variant="primary" id="userlevel" name="user level" :class="{'input': true, 'form-control-danger': errors.has('user level') }" v-validate="'required'" v-model="model.userRole" data-vv-validate-on="none">
											<option value="" disabled>Select Role</option>
											<option value="1">Admin</option>
											<option value="2">Developer</option>
										</select>
										  <b-tooltip show target="userlevel"  v-show="errors.has('user level')">{{ errors.first('user level') }}</b-tooltip>
									  </div>
									</div>
									<div class="form-group row required">
									  <div class="col-md-2">
										<label for="status" class="control-label">Status</label>
									  </div>
									  <div class="col-md-4" :class="{'input': true, 'has-danger': errors.has('status') }">
										  <select class="form-control form-control-sm" id="status" name="status" :class="{'input': true, 'form-control-danger': errors.has('status') }" variant="primary" v-validate="'required'" v-model="model.status" data-vv-validate-on="none">
											  <option value="" disabled>Select Role</option>
											  <option value="1">Active</option>
											  <option value="2">Inactive</option>
										  </select>
										  <b-tooltip show target="status"  v-show="errors.has('status')">{{ errors.first('status') }}</b-tooltip>
									  </div>
									</div>
								</div>
								<insert-button-group :isDisabledBtn="buttons.isDisabled" :model="model" :refreshData="buttons.refresh"></insert-button-group>
  				        	</form>


  			      	</div>
      			</div>
      		</div>
		  <!--<div class="show-user container">
      			<div class="col-lg-12">
      				<div class="card">
  						    <div class="card-header">
  						        <div><i class="fa fa-align-justify"></i> User Information</div>
  						    </div>
  						    <div class="card-block">
  						        <table class="table table-responsive table-bordered table-striped table-sm">
                        <thead>
                            <tr>
                                <th>SL#</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Designation</th>
                                <th>Department</th>
                            </tr>
                            <tr>
                              <th>
                                search
                              </th>
                              <th>
                                <input class="form-control" type="text" v-model="search.userName"
									   @keyup="trackSearchField('userName',search.userName)">
                              </th>
                              <th>
                                <input class="form-control" type="text" v-model="search.email"
									   @keyup="trackSearchField('email',search.email)">
                              </th>
                              <th>
                                <input class="form-control" type="text" v-model="search.designation"
									   @keyup="trackSearchField('designation',search.designation)">
                              </th>
                              <th>
                                <input class="form-control" type="text" v-model="search.department"
									   @keyup="trackSearchField('department',search.department)">
                              </th>
                            </tr>
                        </thead>
                        <tbody>
                          <template v-if="searchKey">
                            <tr  v-for="(user, index) in filteredUser">
                              <td>
                                {{ index + 1}}
                              </td>
                                <td>
                                    {{ user.userName}}
                                </td>
                                <td>
                                    {{user.email}}
                                </td>
                                <td>
									{{user.designation}}
                                </td>
                                <td>
									{{user.department}}
                                </td>
                            </tr>
                          </template>
                          <template v-else>
                            <tr  v-for="(user, index) in users" class="show-user"  @click="editUser(user)">
                              <td>
                                {{ index + 1}}
                              </td>
								<td>
									{{ user.userName}}
								</td>
								<td>
									{{user.email}}
								</td>
								<td>
									{{user.designation}}
								</td>
								<td>
									{{user.department}}
								</td>
                            </tr>
                          </template>
                        </tbody>
  						        </table>
  						       &lt;!&ndash; <nav>
  						            <ul class="pagination">
  						                <li class="page-item"><a href="#" class="page-link">Prev</a></li>
  						                <li class="page-item active"><a href="#" class="page-link">1</a></li>
  						                <li class="page-item"><a href="#" class="page-link">2</a></li>
  						                <li class="page-item"><a href="#" class="page-link">3</a></li>
  						                <li class="page-item"><a href="#" class="page-link">4</a></li>
  						                <li class="page-item"><a href="#" class="page-link">Next</a></li>
  						            </ul>
  						        </nav>&ndash;&gt;
  						    </div>
  						</div>
      			</div>
      		</div>-->
        </main>


</template>

<script>
	import {mapState} from 'vuex';
    export default {
		components: {
			'insert-button-group': () => import('../../widgets/buttons/InsertButtons.vue') ,
		},
        data: function(){
            return {
				buttons:{
					isDisabled: false,
					refresh: {
						conditionalFields:null,
					},
				},
				model:{
					id:'',
					userTextId:'',
					email:'',
					password:'',
					cPassword:'',
					userName:'',
					designation:'',
					department:'',
					userRole:'',
					status:'',
				},
                users:[],
                search:{
				userName:'',
                  email:'',
                  designation:'',
                  department:'',
                },
                searchField:'',
                searchKey:'',
            }
        },
        computed:{
		  ...mapState({
		  	roles: state => state.login.roles,
		  	authenticated: state => state.login.authenticated,
		  }),

          filteredUser: function(){
            if(this.searchKey.length>0){
              var vm = this;
              return vm.users.filter(user =>{
                return user[vm.searchField] !=null &&
                       user[vm.searchField].toLowerCase()
                       .includes(vm.searchKey.toLowerCase());
               });
            }
          }
        },
        methods:{
			userSubmit: function(){
				this.$validator.validateAll().then((isSubmitted)=>
				{
					if (isSubmitted) {
						axios.post('/users', this.model).then( response => {
							this.users.push(response.data.data);
							for(let field in this.model){
								this.model[field] = '';
							}
						}).catch( error => {
							this.serverErrors = error.response.data.errors;
							console.log(this.serverErrors);
						});
						return;
					}
				});
			},
            trackSearchField: function(searchField, searchKey){
            this.searchField = searchField;
            this.searchKey = searchKey;

          },
			editUser:function(user){
				console.log(user);
				this.model = user;
				this.$store.dispatch('getButtonStatus', 1);
			},
        },
        created:  function(){
			axios.get('/users').then( response => {
				this.users = response.data.data;
			})
			.catch(function (error) {
				console.log(error.response.data.error);
			});
        }
    }
</script>
<style lang="scss" scoped>
	.form-group.required .control-label:after {
		content:"*";
		color:red;
	}
	.show-user tr{
		cursor: pointer;
	}
</style>
