<template>
        <main class="main">
          <div class="order-entry container">
  					<div class="col-lg-12">
  				    <div class="card">
  				        <div class="card-header">
  				          Order Entry
  				          <small>(Garments Order Entry)</small>
  				        </div>
  				        <div class="card-body">
  				        	<form action="" method="post" class="form-group">
  				            	<div class="form-group row">
    				              <div class="col-md-1">
    				                <label for="jobId">Job No</label>
    				              </div>
    				              <div class="col-md-3">
    				                <input type="text" class="form-control form-control-sm" placeholder="Job No">
    				              </div>
    				              <div class="col-md-1">
    				                <label for="company">Company</label>
    				              </div>
    				              <div class="col-md-3">
    				                <select class="form-control form-control-sm">
                                      <option>Selecr Company</option>
                                      <option>Logic One</option>
                                      <option>Logic Two</option>
                                    </select>
    				              </div>
                          <div class="col-md-1">
                            <label for="email">Location</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                              <option>Selecr Location</option>
                              <option>Logic One</option>
                              <option>Logic Two</option>
                            </select>
                          </div>
  				              </div>
                        <div class="form-group row">
                          <div class="col-md-1">
                            <label for="buyer">Buyer</label>
                          </div>
                          <div class="col-md-3">
                            <input type="text" class="form-control form-control-sm" placeholder="Double click for Quotation">
                          </div>
                          <div class="col-md-1">
                            <label for="email">Style Ref.</label>
                          </div>
                          <div class="col-md-3">
                            <input type="text" class="form-control form-control-sm" placeholder="Double click for Quotation">
                          </div>
                          <div class="col-md-1">
                            <label for="email" title="Style Description">Sty. Des.</label>
                          </div>
                          <div class="col-md-3">
                            <input type="text" class="form-control form-control-sm" placeholder="Style Description">
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-md-1">
                            <label for="buyer">Prd. Dpt.</label>
                          </div>
                          <div class="logic-custom-md-2 col-md-2">
                            <select class="form-control form-control-sm">
                            <option>Select</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                          <div class="logic-custom-md-1 col-md-1">
                            <input type="text" class="form-control form-control-sm">
                          </div>
                          <div class="col-md-1">
                            <label for="email">Sub. Dpt.</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                          <div class="col-md-1">
                            <label for="email">Currency</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-md-1">
                            <label for="buyer">Repeat</label>
                          </div>
                          <div class="logic-custom-md-2 col-md-2">
                            <input type="text" class="form-control form-control-sm" placeholder="Repeat No/Job">
                          </div>
                          <div class="logic-custom-md-1 col-md-1">
                            <input type="text" class="form-control form-control-sm" placeholder="Browse Job">
                          </div>
                          <div class="col-md-1">
                            <label for="email">Region</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select Region</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                          <div class="col-md-1">
                            <label for="email">Prd. Cat.</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select Product Category</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-md-1">
                            <label for="buyer">Leader</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select Leader</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                          <div class="col-md-1">
                            <label for="email">Dea Mer.</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select Dealing Merchant</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                          <div class="col-md-1">
                            <label for="email">Fac Mer.</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select Factory Merchant</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-md-1">
                            <label for="buyer">BH Mer</label>
                          </div>
                          <div class="col-md-3">
                            <input type="text" class="form-control form-control-sm" placeholder="BH Merchant">
                          </div>
                          <div class="col-md-1">
                            <label for="email">Remarks</label>
                          </div>
                          <div class="col-md-3">
                            <input type="text" class="form-control form-control-sm" placeholder="Remarks">
                          </div>
                          <div class="col-md-1">
                            <label for="email">Mode</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select Ship Mode</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-md-1">
                            <label for="buyer">Uom</label>
                          </div>
                          <div class="logic-custom-md-2 col-md-2">
                            <select class="form-control form-control-sm">
                            <option>Selecr Order Uom</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                          <div class="logic-custom-md-1 col-md-1">
                            <input type="button" class="form-control form-control-sm" value="Item Det.">
                          </div>
                          <div class="col-md-1">
                            <label for="email">SMV</label>
                          </div>
                          <div class="col-md-3">
                            <input type="text" class="form-control form-control-sm" placeholder="SMV">
                          </div>
                          <div class="col-md-1">
                            <label for="email">Packing</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select Packing</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-md-1">
                            <label for="buyer">Season</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Selecr Order Uom</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                          <div class="col-md-1">
                            <label for="email">Agent</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Selecr Order Uom</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                          <div class="col-md-1">
                            <label for="email">Client</label>
                          </div>
                          <div class="col-md-3">
                            <select class="form-control form-control-sm">
                            <option>Select Client</option>
                            <option>Logic One</option>
                            <option>Logic Two</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-md-1">
                            <label for="buyer">Images</label>
                          </div>
                          <div class="col-md-3">
                            <input type="file" class="form-control form-control-sm">
                          </div>
                          <div class="col-md-1">
                            <label for="email">File</label>
                          </div>
                          <div class="col-md-3">
                            <input type="file" class="form-control form-control-sm">
                          </div>
                          <div class="col-md-1">
                          </div>
                          <div class="col-md-3">
                            <button type="submit" class="btn btn-sm btn-primary">Internal Referance</button>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-md-1">
                            <label for="buyer">Copy From</label>
                          </div>
                          <div class="col-md-3">
                            <input type="text" class="form-control form-control-sm">
                          </div>                          
                        </div>
  				            
  				        	</form>
  				        </div>
  				        <div class="card-footer">
  				          <button type="submit" class="btn btn-sm btn-primary">Save</button>
  				          <button type="button" class="btn btn-sm btn-primary">Update</button>
  				          <button type="button" class="btn btn-sm btn-primary">Delete</button>
  				          <button type="button" class="btn btn-sm btn-primary">Refresh</button>
  				        </div>
  			      	</div>
      			</div>
      		</div>
        </main>
</template>

<script>
    export default {        
    }
</script>
