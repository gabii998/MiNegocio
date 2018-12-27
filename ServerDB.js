var sqlite3 = require('sqlite3').verbose();

db = new sqlite3.Database('negocio');
clientes = {};
ventas = {};
productos = {};

clientes.insertar = function (data) {
    db.run("CREATE TABLE IF NOT EXISTS clientes(idCliente INTEGER PRIMARY KEY AUTOINCREMENT,nombre TEXT,deuda REAL)");
    var stmt = db.prepare('INSERT INTO clientes VALUES(?,?,?)');
    stmt.run(null, data.nombre, data.deuda);
    stmt.finalize();
    console.info("Cliente " + data.nombre + " agregado");
}
clientes.obtenerTodos = function (callback) {
    db.all("SELECT * FROM clientes", function (err, rows) {
        if(err){
            console.log(err)
        }else{
            callback(rows)
        }
    })
}

ventas.insertar = function (data) {
    db.run("CREATE TABLE IF NOT EXISTS ventas(idVenta PRIMARY KEY AUTOINCREMENT,formaPago TEXT,monto REAL,cantidadProductos INTEGER)");
    var stmt = db.prepare("INSERT INTO ventas VALUES(?,?,?,?)");
    stmt.run(null, data.formaPago, data.monto, data.cantidadProducto);
    stmt.finalize();
}

productos.insertar = function (data) {

}