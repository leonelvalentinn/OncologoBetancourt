<?php
 //Guardamos los datos escritos por el usuario
  $nombre = $_POST['Nombre'];
  $tel = $_POST['Tel'];
  $correo = $_POST['Correo'];
  $problema = $_POST['Duda'];

  if (!empty($nombre) && !empty($tel) && !empty($correo) && !empty($problema)) {
    //Estructura del correo
    $mensaje = "Este mensaje fue enviado por " . $nombre . "\r\n";
    $mensaje .= "Su dirección de correo es: " . $correo . "\r\n";
    $mensaje .= "Su teléfono es: " . $tel . "\r\n";
    $mensaje .= "Solicita información sobre este problema " . $problema . "\r\n";
    $mensaje .= "Mensaje enviado el " .date('d/m/Y', time());

    //destinatario
    $destinatario = 'betancourt@gmail.com';
    $asunto = "Solicito asesoría médica";
    
    //enviar email
    $header = "Email enviado desde Web Dr. Carlos Betancourt";
    $mail = mail($destinatario, $asunto, $mensaje, $header);

    if($mail) {
      header('Location:exito.html');
    }
  }
?>