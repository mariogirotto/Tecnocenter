var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = decodeURI(parts[1][1]) // muestra el nombre decodificado en el campo de texto
document.getElementById("txtPrecio").value = parts[2][1]
document.getElementById("txtStock").value = parts[3][1]
document.getElementById("txtCategoria").value = decodeURI(parts[4][1])
document.getElementById("txtFoto").value = parts[5][1]
 
function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let s = parseInt(document.getElementById("txtStock").value)
    let o = "img/"+document.getElementById("txtFoto").value.substring(11)
    let u = document.getElementById("txtCategoria").value

    let producto = {
        nombre: n,
        precio: p,
        stock: s,
        foto: o,
        categoria: u
    }
    let url = "http://localhost:5000/productos/"+id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
