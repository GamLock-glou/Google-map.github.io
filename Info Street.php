<?php 
	if( !isset($_COOKIE['number']) or trim($_COOKIE['number']) == ''){
		header("Location:index.html");
		exit;
	}

?>

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta name="viewpor" content="width=device-width, inital-scale=1.0">
	<title>Google map</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>
	<div class="drop-down-menu">
		<a href="index.html">Главная страница</a></span>
		<a href="">Настройки</a>
		<a href="">О сайте</a>
	</div>
<!-- // Главное Меню -->


		
	</div>
	<main class="main-content">
		<!-- Главное Меню -->
		
		<div class="about">
			<div id="info"></div>
			<div id="img"></div>
		</div>
		
		</main>
		<div id="name"></div>
		<div id="map"></div>






































	<script src="scripts/script-map.js"></script>
	<script 
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYcTQmNEB6m5xKgL20QYOXHIFawQo7_6g&callback=initMap" async defer>
	</script> 
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
</body>
</html>