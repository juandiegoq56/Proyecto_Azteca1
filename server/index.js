const express=require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors")
<<<<<<< HEAD
const multer = require("multer");
=======

>>>>>>> 21a2885c690505ef28f21f831b53ab00fe10fa1e
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"password",
    database:"usuarios"

});
/*db.connect((err)=>{
    if(err){console.log(err)
    }else{
        db.query("select* from usuarios;",(err,res)=>{

            if(err){
                console.log(err)
            }else{
                for(var elem of res){
                    console.log(elem)
                }
            }
        }
        
        )
    }

});*/

<<<<<<< HEAD


  

  
app.post("/create",(req,res)=>{

=======
app.post("/create",(req,res)=>{
>>>>>>> 21a2885c690505ef28f21f831b53ab00fe10fa1e
const Nombre=req.body.Nombre;
const Apellido=req.body.Apellido;
const Email=req.body.Email;     
const password=req.body.password;

<<<<<<< HEAD

db.query('INSERT INTO usuarios(Nombre,Apellido,Email,password)VALUES(?,?,?,?,)',[Nombre,Apellido,Email,password],
=======
db.query('INSERT INTO usuarios(Nombre,Email,password)VALUES(?,?,?)',[Nombre,Email,password],
>>>>>>> 21a2885c690505ef28f21f831b53ab00fe10fa1e
(err,result)=>{
    if(err){

        console.log(err)
    }else{
        res.send("Usuario Registrado")
        
    }
}
);
});

app.get("/usuarios",(req,res)=>{
   
    
    db.query('SELECT * FROM usuarios',
    (err,result)=>{
        if(err){
    
            console.log(err)
        }else{
            res.send(result)
        }
    }

    );
    });
/* Consulta para verificar las credenciales de inicio de sesión en la base de datos
    const query = `SELECT * FROM usuarios WHERE nombre = ? AND email = ?`;
    connection.query(query, [nombre, email], (err, results) => {
      connection.end(); // Cerrar la conexión a la base de datos

      if (err) {
        console.error('Error al realizar la consulta: ', err);
        res.status(500).json({ error: 'Error al realizar la consulta' });
        return;
      }

      if (results.length === 1) {
        // Las credenciales son válidas
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        // Las credenciales son inválidas
        res.status(401).json({ error: 'Credenciales de inicio de sesión inválidas' });
      }
    });*/
  
    
app.listen(3001,()=>{
  
    console.log("Corriendo puerto 3001")
})
