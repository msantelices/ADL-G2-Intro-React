import './Title.css'

// const Title = (props)=> {
//     return (
//         <div>
//             <h1 className="title">{ props.title }</h1> 
//             <h4>{ props.subtitle }</h4>   
//         </div>
//     )
// }
const Title = ({ title, subtitle })=> {
    return (
        <div>
            <h1 className="title">{ title }</h1> 
            <h4>{ subtitle }</h4>   
        </div>
    )
}

export default Title