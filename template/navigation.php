<nav class="navbar navbar-default" role="navigation">
		<!--
		<?php if($debug == 1) { ?>
			<button id="btn-debug" class="btn btn-default"><i class="fa fa-bug"></i></button>
		<?php } ?>
		-->
		<!-- Phien ban nguoi dung - khong co debug -->
		<div class="container">
			
			<ul class="nav navbar-nav">
				<?php nav_main($dbc, $path); ?>

				<!--<li><a href="#">FAQ</a></li>
				<li><a href="#">Contact</a></li>-->
			</ul>
			<div class="pull-right">
					
				
				<ul class="nav navbar-nav ">
					<li class="dropdown">
						
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> <?php echo $user['fullname']; ?> <span class="caret"></span></a>
						
						<ul class="dropdown-menu" role="menu">
							<li><a href="logout.php">Logout</a></li>
						</ul>
						
					</li>
					
				</ul>
			</div>
			<!-- Log out button here -->
		</div>
		<!-- End of container -->
	
</nav><!-- END Main nav-->