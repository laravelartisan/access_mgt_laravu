<template>
        <main class="main">
          <div class="user-create container">
  					<div class="col-lg-12">
  				    <div class="card">
  				        <div class="card-header">
  				          <h4>Accounts Information</h4>
  				        </div>
  				        	<form action="" method="post" class="form-group" @submit.prevent="submitUser">
								<div class="card-body">
									<div class="form-group row required">
									  <div class="col-md-2">
										<label for="user-code" class="control-label" >User Code:</label>
									  </div>
									  <div class="col-md-4">
										<input type="text" id="user-code" class="form-control form-control-sm" placeholder="User code" v-model="form.userCode">
									  </div>
									  <div class="col-md-2">
										<label for="username" class="control-label">Username:</label>
									  </div>
									  <div class="col-md-4">
										<input type="text" id="username" class="form-control form-control-sm" placeholder="Username" v-model="form.userName">
									  </div>
									</div>
									<div class="form-group row required">
										<div class="col-md-2">
											<label for="first-name" class="control-label" >First Name :</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="first-name" name="user_code" class="form-control form-control-sm" placeholder="First Name" v-model="form.firstName">
										</div>
										<div class="col-md-2">
											<label for="last-name" class="control-label">Last Name :</label>
										</div>
										<div class="col-md-4" >
                                            <input type="text" id="last-name" name="last_name" class="form-control form-control-sm" placeholder="Last Name" v-model="form.lastName">
										</div>
									</div>
                                    <div class="form-group row required">
                                        <div class="col-md-2">
                                            <label for="email" class="control-label" >Email :</label>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" id="email" name="email" class="form-control form-control-sm" placeholder="email" v-model="form.email">
                                        </div>
                                        <div class="col-md-2">
                                            <label for="role" class="control-label">Role:</label>
                                        </div>
                                        <div class="col-md-4" >
                                            <select name="role" id="role" class="form-control form-control-sm" v-model="form.role">
                                                <option value="" disabled>Select</option>
                                                <option value="1">Admin</option>
                                                <option value="2">Heade of Markting</option>
                                            </select>
                                        </div>
                                    </div>
									<div v-if="!editableUserId" class="form-group row required">
									  <div class="col-md-2">
										<label for="password" class="control-label">Password :</label>
									  </div>
									  <div class="col-md-4">
										<input type="password" id="password"  class="form-control form-control-sm" v-model="form.password">
									  </div>
									  <div class="col-md-2">
										<label for="cpassword" class="control-label">Confirm Password :</label>
									  </div>
									  <div class="col-md-4">
										<input type="password" id="cpassword" class="form-control form-control-sm" v-model="form.cPassword" data-vv-as="password">
									  </div>
									</div>
									<div class="form-group row required">
									  <div class="col-md-2">
										<label for="status" class="control-label">Status</label>
									  </div>
									  <div class="col-md-4">
										  <select class="form-control form-control-sm" id="status" name="status" v-model="form.status">
											  <option value="" disabled>Select</option>
											  <option :value= "true" >Active</option>
											  <option :value= "false" >Inactive</option>
										  </select>
									  </div>
									</div>
								</div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-sm btn-default logic-btn-default" > Save</button>
                                    <button type="submit" class="btn btn-sm btn-default logic-btn-default" > Update</button>
                                    <button type="button" class="btn btn-sm btn-default logic-btn-default" >Delete</button>
                                    <button type="button" class="btn btn-sm btn-default logic-btn-default" @click="resetForm()">Refresh</button>

                                </div>
  				        	</form>


  			      	</div>
      			</div>
      		</div>
		  <div class="show-user container">
      			<div class="col-lg-12">
      				<div class="card">
  						    <div class="card-header">
  						        <h4><i class="fa fa-align-justify"></i> Users List</h4>
  						    </div>
  						    <div class="card-block">
  						        <table class="table table-responsive table-bordered table-striped table-sm">
                        <thead>
                            <tr>
                                <th>SL#</th>
                                <th>User Code</th>
                                <th>Username</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="(user, index) in users" class="show-user">
                              <td>
                                {{ index + 1}}
                              </td>
								<td>
									{{ user.userCode}}
								</td>
								<td>
									{{user.userName}}
								</td>
								<td>
									{{user.fullName}}
								</td>
								<td>
									{{user.email}}
								</td>
								<td>
									{{user.roleName || 'N/A'}}
								</td>
								<td>
									<a class="btn" @click="editUser(user, index)">
										<i class="fa fa-edit"></i>
									</a>
									<a class="btn" @click="deleteUser(user, index)">
										<i class="fa fa-trash"></i>
									</a>
								</td>
                            </tr>

                        </tbody>
  						        </table>
  						      <!--  <nav>
  						            <ul class="pagination">
  						                <li class="page-item"><a href="#" class="page-link">Prev</a></li>
  						                <li class="page-item active"><a href="#" class="page-link">1</a></li>
  						                <li class="page-item"><a href="#" class="page-link">2</a></li>
  						                <li class="page-item"><a href="#" class="page-link">3</a></li>
  						                <li class="page-item"><a href="#" class="page-link">4</a></li>
  						                <li class="page-item"><a href="#" class="page-link">Next</a></li>
  						            </ul>
  						        </nav>-->
  						    </div>
  						</div>
      			</div>
      		</div>
        </main>


</template>

<script>
	import {mapState} from 'vuex';
    export default {
		/*components: {
			'insert-button-group': () => import('../../widgets/buttons/InsertButtons.vue') ,
		},*/
        data: function(){
            return {
				form:{
					userCode:'',
					userName:'',
					firstName:'',
					lastName:'',
					email:'',
					password:'',
					cPassword:'',
					role: '',
					status:'',
				},
				editableUserId: false,
                list:{
                    userCode: '',
                    userName: '',
                    fullName: '',
                    email: '',
                    role: '',
                    status: '',
                },
                users:[],
                userListIndex: '',
            }
        },

        methods:{
			submitUser: function(){

				this.editableUserId == false? this.saveNewUser(): this.updateUser();

            },

			saveNewUser: function(){
				axios.post('/users', this.form).then( response => {
					this.users.push(response.data.data);
					for(let field in this.form){
						this.form[field] = '';
					}
				}).catch( error => {
					/*this.serverErrors = error.response.data.errors;
					 console.log(this.serverErrors);*/
				});
			},

			updateUser: function(){
				axios.put('/users/'+ this.editableUserId, this.form).then( response => {
					this.users.splice(this.userListIndex, 1, response.data.data );

				}).catch( error => {
					/*this.serverErrors = error.response.data.errors;
					 console.log(this.serverErrors);*/
				});
			},
            deleteUser: function(user, index){
                this.editableUserId = user.id;
                this.userListIndex = index;
                axios.delete('/users/'+ this.editableUserId).then( response => {
                    this.users.splice(this.userListIndex, 1);

                }).catch( error => {
                    /*this.serverErrors = error.response.data.errors;
                     console.log(this.serverErrors);*/
                });
            },
			editUser: function(user, index){
				this.form = user;
				this.editableUserId = user.id;
                this.userListIndex = index;
			},

			resetForm: function(){
				for(let field in this.form){
					this.form[field] = '';
				}
				this.editableUserId = false;
			}
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
