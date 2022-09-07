import './Card.css'
// import { textoMayus } from '../../funciones/textos.js'

const Card = ({ content })=> {
    const handleClick = (title)=> {
        alert(`Click sobre ${title}`)
    } 

    return (
        <div className='card'>
            <img src={content.img} alt={ content.title }></img>
            <h3>{ content.title }</h3>
            <button onClick={()=> handleClick(content.title)}>Click</button>
        </div>
    )
}

export default Card