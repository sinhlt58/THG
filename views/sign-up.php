<!--
	* Code dang ky them tai khoan moi.
	* By: HaiTrieu
-->
<div class = "row">
	<div class="col-md-4 col-md-offset-4">
		<div class = "panel panel-default">
			<div class = "panel-heading">
				<strong class = "panel-title"><center>CREAT NEW ACCOUNT</center></strong>	
			</div>
			<div class = "panel-body">	
				<form action = "<?php echo NAME_DOMAIN; ?>/sign-up" method = "POST" role = "form">
	 		 		<div class="form-group">
	    				<label for="signup_email">Email address</label>
	    				<input type="email" class="form-control" id="signup_mail" name = "signup_email" placeholder="Example: email@gmail.com">
	  				</div>
	  				<div class="form-group">
	    				<label for="signup_password">Password</label>
	    				<input type="password" class="form-control" id="signup_password" name = "signup_password" placeholder="**********">
	  				</div>
	  				<div class="form-group">
	    				<label for="signup_retype_password">Retype password</label>
	    				<input type="password" class="form-control" id="signup_retye_password" name = "signup_retye_password" placeholder="**********">
	  				</div>
	  				<div class="form-group">
	    				<label for="first_name">Your first name</label>
	    				<input type="text" class="form-control" id="first_name" name = "first_name" placeholder="Example: John">
	  				</div>
	  				<div class="form-group">
	    				<label for="last_name">Your last name</label>
	    				<input type="text" class="form-control" id="last_name" name = "last_name" placeholder="Example: Michael">
	  				</div>
	  				<?php 
	  					if ($checkSignUp == 'wrongPassword') {
	  						echo '<strong><font color = "red">Incorrect retyped password!</font></strong></br>';
	  					}
						else if (($checkSignUp == 'notFullFilled') && ($_POST['signup_email'] != '')) {
	  						echo '<strong><font color = "red">You must complete your sign-up form!</font></strong></br>';
	  					}
						else if ($checkSignUp == 'invalidEmail') {
							echo '<strong><font color = "red">That email already exists!</font></strong></br>';
						} 
	  				?>
  					<button type="submit" class="btn btn-default">Submit</button>
				</form>
			</div>
		</div>
	</div>
</div>