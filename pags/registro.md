---
layout: empty
title: Registro
---

<div class='seccion dos first' style="height: 100vh;">
	<div class="container">
		
		<div class="col-md-4 col-md-offset-4">
			<div class="panel">

			<h1 style="text-align:center;">Registro</h1>
			
			<form>
			  <div class="form-group">
			  	<label></label>
			    <input type="text" class="form-control" id="usuario" placeholder="Nombre de usuario">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1"></label>
			    <input type="email" class="form-control" id="email" placeholder="Email">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1"></label>
			    <input type="password" class="form-control" id="pass" placeholder="Contraseña">
			  </div>
			  <div class="form-group">
			    <label for="reppass"></label>
			    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Repite tu Contraseña">
			  </div>

			  <a href="{{ site.baseurl }}/pags/lecc-01" type="submit" class="btn btn-primary" style="margin: 30px 0 10px 0;">Enviar</a>

			</form>

			<p>¿Ya estás registrado? <a href="{{ site.baseurl }}/pags/login">Inicia Sesión.</a></p>

			</div>	
		</div>


	</div> <!-- container -->
</div> <!-- sección -->
