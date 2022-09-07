// import logo from './logo.svg';
import './App.css';
// import Title from './components/Title/Title.jsx'
// import Content from './components/Content/Content.jsx'
// import Sidebar from './components/Sidebar/Sidebar.jsx'
import Card from './components/Card/Card.jsx'

// function App() {
//   const title = "Hola Mundo!"
//   const subtitle = "Este es un ejemplo"

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Title title={title} subtitle={subtitle}></Title>

//         <main className='main-container'>
//           <Content></Content>
//           <Sidebar></Sidebar>
//         </main>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>    
//     </div>
//   );
// }

const App = ()=> {
  const cards = [
    { img: 'http://placekitten.com/300/300', title: "Gato 1" },
    { img: 'http://placekitten.com/300/300', title: "Gato 2" },
    { img: 'http://placekitten.com/300/300', title: "Gato 6" },
  ]

  return (
    <div className='gallery'>
      <Card content={cards[0]}></Card>
      <Card content={cards[1]}></Card>
      <Card content={cards[2]}></Card>
    </div>
  )
}

export default App;
