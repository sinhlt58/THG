<?php
// Javascript

?>
<!-- jQuery -->
<script src="lib/jquery-ui-1.11.2/jquery-2.1.3.min.js"></script>

<!-- jQuery UI -->
<script src="<link rel="stylesheet" href="lib/jquery-ui-1.11.2/external/jquery/jquery.js">"></script>
<script src="lib/jquery-ui-1.11.2/jquery-ui.min.js"></script>

<!-- Latest compiled and minified JavaScript -->
<script src="lib/bootstrap/js/bootstrap.min.js"></script>

<!-- Mustache -->
<script src="js/mustache.min.js"></script>

<!-- Menu -->
<script src="config/menu.js"></script>

<!-- New Order -->
<script src="config/new-order.js"></script>

<!-- Order -->
<script src="config/order.js"></script>

<script>
	
	$(document).ready(function(){
		
		$("#console-debug").hide();
		
		$("#btn-debug").click(function(){
			
			$("#console-debug").toggle();
			
		});

	});

</script>
