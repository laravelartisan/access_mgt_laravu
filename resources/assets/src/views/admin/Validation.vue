<template>
	<main class="main">
          <div id="app" class="container py-5">

    <p>Example showing vue-form usage with Bootstrap styles, validation messages are shown on field touched or form submission</p>

    <vue-form :state="zakaria" @submit.prevent="onSubmit">

      <validate auto-label class="form-group required-field" :class="fieldClassName(zakaria.name)">
        <label>Name</label>
        <input type="text" name="name" class="form-control" required v-model.lazy="model.name">

        <field-messages name="name" show="$touched || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="required">Name is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field" :class="fieldClassName(zakaria.email)">
        <label>Email</label>
        <input type="email" name="email" class="form-control" required v-model.lazy="model.email">

        <field-messages auto-label name="email" show="$touched || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="required">Email is a required field</div>
          <div slot="email">Email is invalid</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field" :class="fieldClassName(zakaria.phone)">
        <label>Phone number (format: xxxx-xxx-xxxx)</label>
        <input type="tel" name="phone" class="form-control" required pattern="^\d{4}-\d{3}-\d{4}$" v-model.lazy="model.phone">

        <field-messages name="phone" show="$touched || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="required">Phone number is a required field</div>
          <div slot="pattern">Phone number is invalid</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field" :class="fieldClassName(zakaria.department)">
        <label>Department</label>

        <select class="form-control" name="department" required v-model.lazy="model.department">
          <option :value="null">Choose...</option>
          <option value="1">AAA</option>
          <option value="2">BBB</option>
          <option value="3">CCC</option>
        </select>

        <field-messages name="department" show="$touched || $dirty || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="required">Department is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group" :class="fieldClassName(zakaria.comments)">
        <label>Comments</label>
        <textarea name="comments" class="form-control" maxlength="50" v-model.lazy="model.comments"></textarea>
        <small class="form-text text-muted">Enter no more than 50 characters.</small>
        <field-messages name="comments" show="$touched || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="maxlength">Comments must be less than 50 characters</div>
        </field-messages>
      </validate>

      <field class="form-group">
        <label>Not validated</label>
        <input type="text" name="notValidated" class="form-control" v-model.lazy="model.notValidated">
      </field>
      
       <validate class="form-check" :class="fieldClassName(zakaria.agree)">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" required name="agree" v-model="model.agree">
          I agree to the terms
        </label>
         <field-messages name="agree" show="$touched || $submitted" class="form-control-feedback">
          <div slot="required">You must agree to the terms</div>
        </field-messages>
      </validate>     

      <div class="py-2 text-center">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </vue-form>

    <pre>{{zakaria}}</pre>

  </div>
	</main>
</template>

<script>
    export default {
    	data: function(){
    		return {
    			zakaria: {},
    			model: {
      			name: '',
      			email: '',
      			phone: '',
      			department: null,
      			comments: '',
      			notValidated: '',
      			agree: false
    			}
    		}
   	},
  methods: {
    fieldClassName: function (field) {
      if(!field) {
        return '';
      }
      if((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger';
      }
    },
    onSubmit: function() {  }  
  
	},
};
</script>
<style type="text/css" scoped>
	.required-field > label::after {
	  content: '*';
	  color: red;
	  margin-left: 0.25rem;
	}
</style>