<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Formulario</title>
</head>
<body>
<!-- Form formulario  action =la RUta URL (backend) method= GET/POST -->
<!-- action= data-show.html-->
<form action="#" method="POST">

    <!-- campo de texto los laber coon for=descriptivo -->
    <label for="nombre">Nombre:</label>
    <!---Caja en blanco name=que va a conetener esa caja - size=cantidad largo de la caja- - maxlength maximo de caracteres - required: Requerir que se complete ese campo -->
    <input type="text" id="nombre" name="nombre" size="30" maxlength="50" required>
   

<br>

    <!-- Email Input --> 
    <label for="correo">Correo Electrónico:</label>
    <!--  Tengo size espacio de la caja en blanca -  Maxlenth 50 caracteres requiere que completes el campo de mail -->
    <input type="email" id="correo" name="correo" size="30" maxlength="50" value="Correo electronico" required>
    <br>

    <!-- Password Input -->
    <label for="contrasena">Contraseña:</label>
 <!-- Puedo minlength 6 caracteres y value= esa caja en blanco pide contraseña  y tambien lo requiero como requisito para enviar el formulario -->
    <input type="password" id="contrasena" name="contrasena" size="20" minlength="6" value="Contraseña" required>
    <br><br>

    <!-- Date Input -->
    <label for="fechaNacimiento">Fecha de Nacimiento:</label>
    <input type="date" id="fechaNacimiento" name="fechaNacimiento" required>
    <br><br>
    <!-- Checkbox Input -->
    <!-- Cajitas marcar o desmarca-->
    <label>Preferencias:</label>
    <div>
        <!-- Checkbox  Guardar su id y value a que valor corresponde-->
        <input type="checkbox" id="html" name="preferencias" value="HTML">
        <label for="html">HTML</label>
    </div>
    <div>
        <input type="checkbox" id="css" name="preferencias" value="CSS">
        <label for="css">CSS</label>
    </div>
    <div>
        <input type="checkbox" id="javascript" name="preferencias" value="JavaScript">
        <label for="javascript">JavaScript</label>
    </div>
    <br><br>

    <!-- Radio Input -->
    <label for="genero">Género:</label>
    <div>
        <!-- Radio Punto de marcado unico -->
        <input type="radio" id="hombre" name="genero" value="Hombre" required>
        <label for="hombre">Hombre</label>
    </div>
    <div>
        <input type="radio" id="mujer" name="genero" value="Mujer" required>
        <label for="mujer">Mujer</label>
    </div>
    <div>
        <input type="radio" id="binario" name="genero" value="Binario" required>
        <label for="binario">Binario</label>
    </div>
    <br>
    <!-- Range Input -->
    <label for="nivel">Nivel de Experiencia (1-10):</label>
    <input type="range" id="nivel" name="nivel" min="1" max="10" value="5" required>
    <br>

    <!-- Image Input -->
    <label for="imagen">Imagen:</label>
    <input type="image" id="imagen" name="imagen" src="../Clase-N3/images/compromiso.png" alt="Imagen" width="50" height="50">
<br>
    <!-- Color Input -->
    <label for="color">Color Favorito:</label>
    <input type="color" id="color" name="color">
    <br>
    <!-- URL Input -->
    <label for="paginaWeb">Página Web:</label>
    <input type="url" id="paginaWeb" name="paginaWeb" value="">
<br>
    <!-- File Input -->
    <label for="archivo">Subir Archivo:</label>
    <input type="file" id="archivo" name="archivo">
<br>
    <!-- Fieldset and Select -->
    <fieldset>
        <legend>Turno:</legend>
        <label for="turno">Selecciona tu turno:</label>
        <select id="turno" name="turno" required>
            <option value="" disabled selected hidden>Elige un turno</option>
            <option value="manana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
        </select>
    </fieldset>

    <!-- Comments Textarea -->
    <label for="comentarios">Comentarios:</label>
    <textarea id="comentarios" name="comentarios" rows="4" placeholder="Escribe tus comentarios aquí..."></textarea>
    <br>
    <!-- Submit Button  Enviar la info del formulario -->

    <button type="submit">Enviar</button>

    <!-- Reset Button  limpiar el formulario-->
    <button type="reset">Limpiar</button> 
</form>

</body>
</html>