<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = isset($_POST["name"]) ? trim($_POST["name"]) : "";
    $institucion = isset($_POST["institution"]) ? trim($_POST["institution"]) : "";
    $correo = isset($_POST["email"]) ? trim($_POST["email"]) : "";
    $mensajeUsuario = isset($_POST["message"]) ? trim($_POST["message"]) : "";
    $intereses = isset($_POST["interests"]) && is_array($_POST["interests"])
        ? implode(", ", $_POST["interests"])
        : "Ninguno";
    $esEstudiante = isset($_POST["student"]) ? "Si" : "No";
    $reserva = isset($_POST["booking"]) ? trim($_POST["booking"]) : "";

    if ($nombre === "" || $correo === "" || $mensajeUsuario === "") {
        echo "Faltan campos obligatorios del formulario.";
        exit;
    }

    $correoLimpio = filter_var($correo, FILTER_SANITIZE_EMAIL);

    if (!filter_var($correoLimpio, FILTER_VALIDATE_EMAIL)) {
        echo "El correo electronico no es valido.";
        exit;
    }

    $correoSeguroCabecera = str_replace(array("\r", "\n"), "", $correoLimpio);

    $mensaje = "Mensaje de contacto\n\n";
    $mensaje .= "Nombre: $nombre\n";
    $mensaje .= "Institución: $institucion\n";
    $mensaje .= "Correo: $correoLimpio\n";
    $mensaje .= "Estudiante: $esEstudiante\n";
    $mensaje .= "Reserva: " . ($reserva !== "" ? $reserva : "No definida") . "\n";
    $mensaje .= "Intereses: $intereses\n";
    $mensaje .= "\nMensaje:\n$mensajeUsuario\n";

    $destinatario = "hi@nicotron.cl";
    $asunto = "Nuevo mensaje de tu portafolio";
    $cabeceras = "From: noreply@nicotron.cl\r\n";
    $cabeceras .= "Reply-To: " . $correoSeguroCabecera . "\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($destinatario, $asunto, $mensaje, $cabeceras)) {
        header("Location: te_escrito_pronto.html");
        exit;
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
} else {
    header("Location: contacto.html");
    exit;
}
?>