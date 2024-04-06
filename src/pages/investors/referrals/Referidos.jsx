import { Investor } from '../../../components/Invesor';
import  "./reeferidos.css";
import LEYENDA from "./LEYENDA.png";
import { useEffect, useState } from 'react';
import axios from 'axios';
const Referidos = () => {
  
const [clase ,setclase]=useState("mm")

const [sabersimodificar, setsabersimodificar]=useState(true)

const [correo, setcorreo] = useState("");
const [tratamiento, settratamiento] = useState("");
const [numero, setnumero] = useState("");
const [datos, setdatos]=useState([])
useEffect(() => {
    
        const ide = localStorage.getItem("id")

        
        const usuarios = [
            { numero: "1234567890", correo: "correo1@example.com", nombre: "Nombre1" },
            { numero: "2345678901", correo: "correo2@example.com", nombre: "Nombre2" },
            { numero: "3456789012", correo: "correo3@example.com", nombre: "Nombre3" },
            { numero: "4567890123", correo: "correo4@example.com", nombre: "Nombre4" },
            { numero: "5678901234", correo: "correo5@example.com", nombre: "Nombre5" },
            { numero: "6789012345", correo: "correo6@example.com", nombre: "Nombre6" },
            { numero: "7890123456", correo: "correo7@example.com", nombre: "Nombre7" },
            { numero: "8901234567", correo: "correo8@example.com", nombre: "Nombre8" },
            { numero: "9012345678", correo: "correo9@example.com", nombre: "Nombre9" },
            { numero: "0123456789", correo: "correo10@example.com", nombre: "Nombre10" }
        ];
        
         
                setdatos(usuarios)
               
        
          
},[])





      const  enviarbd =  async () => {
        try {
            
             await axios.post("http://localhost:4200/agregardatos", enviar)
             console.log(obj);
            
      }catch{
        console.log("datos no enviados" );
      };
    }

const [id, setid]=useState("")


const handleEliminar =  async (evento, clienteId) => {
   
   evento.preventDefault();
   const obj= {id:clienteId}
   try {
   if(window.confirm("estas seguro de borrar")){
    await axios.post("http://localhost:4200/eliminardatos", obj)
    console.log(obj);
   }
   }catch{
    console.log("mal ahi padrino");
   }
}


const [enviar, setenviar]=useState({
    numeroo:"",
    correoo:"",
    tratamientoo:"",
    id:""
})
const modificar =  (e, id)=>{
    e.preventDefault()
    
    if(sabersimodificar==true){
    e.target.className ="boton-none"
   
  
    e.currentTarget.parentNode.parentNode.classList.remove("mm") 
    e.currentTarget.parentNode.parentNode.classList.add("ml") 
    e.currentTarget.parentNode.classList.remove("contenedorbotones")
    e.currentTarget.parentNode.classList.add("contenedorbotones2")
    console.log(sabersimodificar);
    
   setnumero(id.numero)
   settratamiento(id.tratamiento)
   setcorreo(id.correo)
   setid(id.id_personal)
setsabersimodificar(!sabersimodificar)
}else{
    alert("solo puedes modificar uno ala vez, refresca la pagina para modificar otro usuario")

}

   
}

const handlemodificar = (e) => {
    e.preventDefault();

   
    const { name, value } = e.target;

    
    if (name === "correo") {
        setcorreo(value);
    }
   
    else if (name === "numero") {
        setnumero(value);
    }
  
    else if (name === "tratamiento") {
        settratamiento(value);
    }
};



  const as = async()=>{
    
    const obj={correo,tratamiento,numero,id}
    console.log(obj);
    fetch("http://localhost:4200/modificardatos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj) 
          })
           
    
}

    return ( 
        

        <>
        



        <Investor>
           
           <center>  <h1 className='h1'>clientes </h1> </center>
           <center> 
           <div className="padre-1" > 
        
           {datos.map((e, index)=>(

           
                        <div  className="contenedor-1" name="contenedor" key={index}>
                             <div > 
                        <center>
                        
                        <h1 className='h1contenedor'>{e.cliente}</h1> </center>
                         <div className="mm"> 
                      
    <div className='mm2' >
        <p className="p-referido">correo: {e.correo}</p> 
        <p className='p-referido'>numero: {e.numero}</p>
        <p className='p-referido'>tratamiento: brackets</p>
    </div>
    
    <div className='mm1'> 
    <p>introduce nuevo correo</p>
    <input type="text" onChange={handlemodificar} value={correo}  name='correo' />
    <p>numero</p>
    <input type="text"  value={numero} onChange={handlemodificar} name='numero' />
    <p>tratamiento</p>
    <input type="text"   onChange={handlemodificar} value={tratamiento} name='tratamiento' />
    </div>


<div className="contenedorbotones"> 
                        <a href=""  className='action'   onClick={(event) => modificar(event, e)} >modificar</a>
                        <button  className='o' onClick={as}   >Enviar</button>
                          <button className='botoneliminar' onClick={(evento) => handleEliminar(evento, e.id_personal)}>Eliminar</button>
                          
                        </div>
</div>
                        
                        
                        
                        </div>
                     
                        </div>
                        
                        
                        
                    ))}
                   

       

        </div>
        
      
       

        <div className="contenedor-abajo">

        </div>
        </center>
        <div className="above">
            <div className="abovehijo1">
                <h1 className='abovehijoh1'>leyenda</h1>
                <ul className='ul'>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    

                </ul>



            </div>
            <div className="abovehijo2">
                <img src={LEYENDA} alt=""  className='imagen'/>
            </div>
        </div>
        
        </Investor>
        
        </>
     );
}
 
export default Referidos;