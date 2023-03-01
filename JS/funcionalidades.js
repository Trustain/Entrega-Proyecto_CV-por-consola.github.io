//Variables
const foto_perfil=document.getElementById('foto_perfil')
const nombre=document.getElementById('nombre')
const correo=document.getElementById('correo')
const telefono=document.getElementById('telefono')
const celular=document.getElementById('celular')
const direccion1=document.getElementById('direccion1')
const direccion2=document.getElementById('direccion2')
const nacionalidad=document.getElementById('nacionalidad')
const edad=document.getElementById('edad')
const fechaNacimiento=document.getElementById('fechaNacimiento')
const sexo=document.getElementById('sexo')

const barra1=document.getElementById('barra1')

//Funciones
async function generarUsuario() {
    const url = 'https://randomuser.me/api/';
    const usuario = await fetch(url);
    const { results } = await usuario.json();
    const datos = results[0];

    foto_perfil.src= datos.picture.large;
    nombre.textContent = datos.name.first+" "+datos.name.last;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
    celular.textContent = datos.cell;
    direccion1.textContent = datos.location.street.name+" N° "+datos.location.street.number;
    direccion2.textContent = datos.location.city+" - "+datos.location.country;
    nacionalidad.textContent = datos.nat;
    edad.textContent = datos.dob.age;
    fechaNacimiento.textContent = (datos.dob.date).slice(0,10);
    sexo.textContent = datos.gender;
    
    console.log(datos)

    if (datos.gender=='female') {
        const collectionFemale = document.getElementsByClassName('Female')
        const colleccionMale = document.getElementsByClassName('Male')
        for (let i=0; i<colleccionMale.length; i++) {
            colleccionMale[i].style.display='none';
        }
        for (let i=0; i<collectionFemale.length; i++) {
            collectionFemale[i].style.display='block';
        }
        document.getElementById('elemento22').style.background='linear-gradient(to right, #bda2bc, #e3afe1)';/*#bf34ba*/
        document.getElementById('elemento32').style.background='linear-gradient(to right, #bda2bc, #e3afe1)';/*#f0c27b #4b1248 #94018d*/
    } else {
        document.getElementById('elemento22').style.background='linear-gradient(to left, #1973c2, #1266b0)';/*#3939cc #000046 #070791 --#1cb5e0*/
        document.getElementById('elemento32').style.background='linear-gradient(to left, #1973c2, #1266b0)';
    }
}



document.addEventListener('DOMContentLoaded', generarUsuario)