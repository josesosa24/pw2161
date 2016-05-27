<?php
	function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") {
	  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
	  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);
	  switch ($theType) {
	    case "text":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;    
	    case "long":
	    case "int":
	      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
	      break;
	    case "double":
	      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
	      break;
	    case "date":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;
	    case "defined":
	      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
	      break;
	  }
	  return $theValue;
	}

	function AltaAlmacen() {
		$clave = GetSQLValueString($_POST["txtIdAlmacen"],"long");
		$nombre  = GetSQLValueString($_POST["txtNombre"],"text");
		$direccion1  = GetSQLValueString($_POST["txtDireccion1"],"text");   
		$direccion2  = GetSQLValueString($_POST["txtDireccion2"],"text");
		$codigopostal  = GetSQLValueString($_POST["txtCp"],"text");
		$localidad  = GetSQLValueString($_POST["txtLocalidad"],"text");
		$provincia  = GetSQLValueString($_POST["txtProvincia"],"text");
	

		$respuesta = false;
		//Conecto al servidor de BD
		//Servidor, usuario, clave
		$conexion = mysql_connect("localhost","root","");
		//Seleccionar la BD
		mysql_select_db("examen");
		$guarda = sprintf("insert into almacenes values(%d,%s,%s,%s,%s,%s,%s)",$clave,$nombre,$direccion1,$direccion2,$codigopostal,$localidad,$provincia);
		// Ejecutamos la consulta
		mysql_query($guarda);
		//Cuantos registros fueron afectados
		if(mysql_affected_rows() > 0)
		{
			$respuesta = true;
		}
		$salidaJSON = array('respuesta' => $respuesta);
		print json_encode($salidaJSON);
	}

	function consultas() {

	$respuesta=false;
	$conexion=mysql_connect("localhost","root","");
	//Seleccionar db
	mysql_select_db("examen");

	$consulta="select * from almacenes order by idAlmacen";
	//$baja=sprintf("update usuarios set tipousuario='baja' where usuario=%s",$usuario)
	//Ejecutar query
	$resultado=mysql_query($consulta);

	$tabla="";
	if(mysql_num_rows($resultado)>0) {

		$respuesta=true;
		$tabla.="<tr>";
		$tabla.="<th>Clave Almacen</th>";
		$tabla.="<th>Nombre</th>";
		$tabla.="<th>Direccion 1</th>";
		$tabla.="<th>Direccion 2</th>";
		$tabla.="<th>Codigo Postal</th>";
		$tabla.="<th>Localidad</th>";
		$tabla.="<th>Provincia</th>";
		$tabla.="</tr>";

		while($registro=mysql_fetch_array($resultado)) {

			$tabla.="<tr>";
			$tabla.="<td>".$registro["idAlmacen"]."</td>";
			$tabla.="<td>".$registro["Nombre"]."</td>";
			$tabla.="<td>".$registro["Direccion_1"]."</td>";
			$tabla.="<td>".$registro["Direccion_2"]."</td>";
			$tabla.="<td>".$registro["CP"]."</td>";
			$tabla.="<td>".$registro["Localidad"]."</td>";
			$tabla.="<td>".$registro["Provincia"]."</td>";
			$tabla.="</tr>";
		}
	}
	$salidaJSON= array('respuesta' => $respuesta, 'tabla' => $tabla);
	print json_encode($salidaJSON);
}
	$accion = $_POST["accion"];
//Menú principal
switch ($accion) {
	case 'AltaAlmacen':
		AltaAlmacen();
		break;
	case 'consultas':
		consultas();
		break;
	default:
		# code...
		break;
}

?>