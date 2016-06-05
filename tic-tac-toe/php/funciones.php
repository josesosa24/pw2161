<?php
/*
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysqli_real_escape_string") ? mysqli_real_escape_string($theValue) : mysql_escape_string($theValue);

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
*/
function inicia()
{
	//conectar a al BD
	$conexion = mysqli_connect("mysql.hostinger.mx","u358390284_jlpl","trafalgar");
	//servidor,usuario y clave
	//seleccionar base de datos
	mysqli_select_db($conexion,"u358390284_gato");
	$query = ("select turno from turnos");
	$resultado = mysqli_query($conexion,$query);
	//preguntamos si se trajo un registro
	if(mysqli_num_rows($resultado) > 0 )
	{
		$respuesta = true;
		$queryChecaJugadas = mysqli_query($conexion,"select * from jugadas");
		$getPosition = mysqli_fetch_array($queryChecaJugadas);
		$salidaJson = array('respuesta' => $getPosition );
		//devolvemos el resultado al JS
		print json_encode($salidaJson);
		$queryUpdate = mysqli_query($conexion,"update turnos set turno = 'O'");
	}
	//sino trajo registro insertar a turno una X
	else
	{
		$respuesta = false;
		$queryInsert = mysqli_query($conexion,"insert into turnos values('X')");
		$salidaJson1 = array('respuesta' => $respuesta );
		//devolvemos el resultado al JS
		print json_encode($salidaJson1);

	}
}

function refresh()
{
	//conectar a al BD
	$conexion = mysqli_connect("mysql.hostinger.mx","u358390284_jlpl","trafalgar");//servidor,usuario y clave
	//seleccionar base de datos
	mysqli_select_db($conexion,"u358390284_gato");
	$queryChecaJugadas = mysqli_query($conexion,"select * from jugadas");
	//$getPosition = mysqli_fetch_array($queryChecaJugadas);

	$tabla="";
	if(mysqli_num_rows($queryChecaJugadas) > 0)
		{
			while ($row = mysqli_fetch_array($queryChecaJugadas)) {
				$respuesta = true;
				$tabla[] = array('turno' => $row[0],
							   'renglon' => $row[1],
							   'columna' => $row[2]);
			}
		}	
	$salidaJSON = array('respuesta' => $respuesta, 'tabla' => $tabla );
	print json_encode($salidaJSON); 	 

	//$salidaJson = array('respuesta' => $getPosition );
	//devolvemos el resultado al JS
	//print json_encode($salidaJson);
}

function insertar()
{

	$id    = $_POST["id"];
	$turno = $_POST["turno"];
	
	//conectar a al BD
	$conexion = mysqli_connect("mysql.hostinger.mx","u358390284_jlpl","trafalgar");//servidor,usuario y clave
	//seleccionar base de datos
	mysqli_select_db($conexion,"u358390284_gato");

	$renglon = 0;
	$columna = 0;

	if($id == 'td1'){
		$renglon = 1;
		$columna = 1;
	}
	if($id == 'td2'){
		$renglon = 1;
		$columna = 2;
	}
	if($id == 'td3'){
		$renglon = 1;
		$columna = 3;
	}
	if($id == 'td4'){
		$renglon = 2;
		$columna = 1;
	}
	if($id == 'td5'){
		$renglon = 2;
		$columna = 2;
	}
	if($id == 'td6'){
		$renglon = 2;
		$columna = 3;
	}
	if($id == 'td7'){
		$renglon = 3;
		$columna = 1;
	}
	if($id == 'td8'){
		$renglon = 3;
		$columna = 2;
	}
	if($id == 'td9'){
		$renglon = 3;
		$columna = 3;
	}
	$format =sprintf("insert into jugadas values ('%s',%d,%d)",$turno, $renglon, $columna);
	$queryInsert = mysqli_query($conexion,$format);
	$respuesta=true;
	$salidaJson = array('respuesta' => $respuesta );
	//devolvemos el resultado al JS
	print json_encode($salidaJson);
	
}

$accion = $_POST['accion'];
//Menu principal
switch ($accion) {
	case 'inicia':
		inicia();
		break;
	case 'refresh':
		refresh();
		break;
	case 'insertar':
		insertar();
		break;
	default:
		# code...
		break;
}

 ?>