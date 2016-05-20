<?php
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
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

function validaEntrada() {
	$usuario=GetSQLValueString($_POST["usuario"],"text");
	$clave=GetSQLValueString(md5($_POST["clave"]),"text");

	//conectarse al servidor
	//servidor,usuario,clave
	$conexion=mysql_connect("localhost","root","");
	//Seleccionar db
	mysql_select_db("cursopw");
	$validar= sprintf("select usuario, clave from usuarios where usuario=%s and clave=%s limit 1",$usuario,$clave);
	$resultado= mysql_query($validar);

	//validar si trajo registros

	if(mysql_num_rows($resultado)>0) {
		$respuesta=true;
	}

	$salidaJSON= array('respuesta' => $respuesta );
	//Devolvemos el resultado al js
	print json_encode($salidaJSON);
}

function guardarUsuario() {
	$usuario= GetSQLValueString($_POST['txtNombreUsuario'],"text");
	$clave=GetSQLValueString(md5($_POST["txtContraseña"]),"text");
	$tipo= GetSQLValueString($_POST['txtTipoUsuario'],"text");
	$depto= GetSQLValueString($_POST['txtDepartamento'],"long");

	$respuesta=false;
	$conexion=mysql_connect("localhost","root","");
	//Seleccionar db
	mysql_select_db("cursopw");

	$guarda=sprintf("insert into usuarios values(%s,%s,%s,%d)",$usuario,$clave,$tipo,$depto);
	echo $guarda;
	//Ejecutar query
	mysql_query($guarda);
	//cuantos registros fueron afectados
	if(mysql_affected_rows()>0) {
		$respuesta=true;
	}

	$salidaJSON= array('respuesta' => $respuesta );
	print json_encode($salidaJSON);

}

function bajaUsuario() {
	$usuario= GetSQLValueString($_POST['usuario'],"text");
	$respuesta=false;
	$conexion=mysql_connect("localhost","root","");
	//Seleccionar db
	mysql_select_db("cursopw");

	$baja=sprintf("delete from usuarios where usuario=%s limit 1", $usuario);
	//$baja=sprintf("update usuarios set tipousuario='baja' where usuario=%s",$usuario)
	//Ejecutar query
	mysql_query($baja);
	//cuantos registros fueron afectados
	if(mysql_affected_rows()>0) {
		$respuesta=true;
	}
	
	$salidaJSON= array('respuesta' => $respuesta );
	print json_encode($salidaJSON);

}

$accion=$_POST['accion'];
//Menu principal
switch ($accion) {
	case 'validaEntrada':
		validaEntrada();
		break;
	case 'guardarUsuario':
		guardarUsuario();
		break;
	case 'bajaUsuario':
		bajaUsuario();
		break;
	default:
		# code...
		break;
}
?>