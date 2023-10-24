let header = `
        <div class="logoContainer">   <img src="logo.webp"></div>
                
        <ul class="nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="noticias.html">Noticias</a></li>
            <li><a href="sobreNosotros.html">Contacto</a></li>
            <li><a href="formularioCuenta.html">Registro</a></li>
        </ul>
        <div class="action">
            <div class="searchBX">
                <a href="#"><i class='bx bx-search-alt-2'></i></a>
                <input type="text" placeholder="Search games">
            </div>
        </div>
`
document.getElementById("idheader").innerHTML = header

let footer = `
    <div class="footers">
    <h4>Nuestros patrocinadores</h4>
    </div>
    <div class="footers">
    <a href="https://www.coca-cola.com.ar/" target="_blank"> <img src="img/coca.png" alt="img" width="130"></a>
    <a href="https://www.nike.com.ar/" target="_blank"> <img src="img/nike.jpg" alt=""  width="150"></a>
    <a href="https://www.instagram.com/amestier/?hl=es-la" target="_blank"><img src="img/amestier.png" alt=""  width="112"></a>            <br><br>
    </div>
    <div class="footers">
    <label for="">Suscribite para recibir las ultimas noticias: </label> <input size="15" type="email" name="mail" required  placeholder="Ingrese su Email"> <input type="submit" value="Susbribirse">
    </div>
    <div class="footers">
    <h3><a href="sobreNosotros.html">Contacto</a></h3>
    </div>
`
document.getElementById("idfooter").innerHTML = footer


