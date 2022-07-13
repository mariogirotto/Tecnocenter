var headCodeBlock = '<meta charset="UTF-8">'+
                    '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
                    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
                    '<title>Tecnocenter</title>'+
                    '<link rel="shortcut icon" href="./Imagenes/icono.png" type="image/x-icon">'+
                    '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">'+
                    '<link rel="stylesheet" href="./css/main.css">'+
                    '<script src="https://kit.fontawesome.com/3a6a7a1eda.js" crossorigin="anonymous"></script>'+
                    '<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>'+
                    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>'+
                    '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>'+
                    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>';

document.querySelector("head").innerHTML = headCodeBlock                    

var headerCodeBlock = '<nav class="box">'+
                        '<a href="./index.html"><button type="button" class="btn btn-primary">Home</button></a>'+
                        '<a href="./indexadmin.html"><button type="button" class="btn btn-primary">Productos</button></a>'+
                        '<a href="./contacto.html"><button type="button" class="btn btn-primary">Contacto</button></a>'+
                        '<a href="./sucursales.html"><button type="button" class="btn btn-primary">Sucursales</button></a>'+
                        '</nav>'+
                        '<h1 class="title">Tecnocenter</h1>';

var footerCodeBlock = '<nav>'+
                        '<a class="socials" href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook-square fa-2x"></i></a>&emsp;'+
                        '<a class="socials" href="https://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter-square fa-2x"></i></a>&emsp;'+
                        '<a class="socials" href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram-square fa-2x"></i></a>'+
                        '</nav>'+
                        '<p>Derechos reservados 2022</p>';

// Inserting the code block to wrapper element

document.querySelector("header").innerHTML = headerCodeBlock
document.querySelector("footer").innerHTML = footerCodeBlock