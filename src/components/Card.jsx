/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div className='card'>
      <h1>Nombre: {props.nombre}</h1>
      <h2>Genero: {props.genero}</h2>
      <h2>Edad: {props.edad}</h2>
    </div>
  )
}