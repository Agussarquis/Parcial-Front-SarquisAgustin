import { useState } from 'react'
import Card from "./components/Card";
import './App.css'

function App() {

  const [nombre, setNombre] = useState('')
  const [genero, setGenero] = useState('')
  const [edad, setEdad] = useState(0)
  const [error, setError] = useState('')
  
  const onChangeNombre = e => {
    setNombre(e.target.value)
  }

  const onChangeGenero = e => {
    setGenero(e.target.value)
  }

  const onChangeEdad = e => {
    setEdad(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!/^\S/.test(nombre)) {
      setError('El nombre no puede tener espacio en blanco al principio')
    } else if (nombre.length <= 2) {
      setError('El nombre debe tener al menos 3 caracteres')
    } else if (genero.length <= 7) {
        setError('Generos validos: Femenino, Masculino, No especifico')
    } else if (edad <= 18) {
      setError('La persona tiene que ser mayor de edad')
    } else {
      setError('Correcto')
    }
  }

  return (
    <>
   <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='nombre-apellido'>Nombre</label>
        <input
          type='text'
          id='nombre-apellido'
          value={nombre}
          placeholder='Ingrese su nombre y apellido'
          onChange={onChangeNombre}
        />

        <label htmlFor='genero'>Genero</label>
        <input
          type='text'
          id='genero'
          value={genero}
          placeholder='Femenino, Masculino, No especifico'  
          onChange={onChangeGenero}
        />

        <label htmlFor='edad'>Edad</label>
        <input
          type='number'
          id='edad'
          value={edad}
          placeholder='Ingrese su edad'
          onChange={onChangeEdad}
        />
        <button>Enviar data</button>
        {error != 'Correcto' && <p>{error}</p>}
      </form>

      {error === 'Correcto' ? <Card nombre={nombre} genero={genero} edad={edad} /> : undefined}
    </>
  )
}

export default App
