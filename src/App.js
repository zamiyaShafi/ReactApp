import logo from './logo.svg';
import './App.css';
import './external.css';
import Classes from './classes'
import Functions from './functions'
import  Arrowfunction from "./Arrowfunction";
import Variables from './Variables';
import Text from './Text';
import Array from './Array';
import Destucturing from './Destucturing';
import Spredoperator from './Spredoperator';
import Ternaryoperator from './Ternaryoperator';
import Import from './Import';
import Rfc from './Rfc';
import Rcc from './Rcc';
import Props from './Props';
import Event from './Event';
import Conditional from './Conditional';
import List from './List';
import Form from './Form';
import Anchor from './Anchor';
import Router from './Router';
import Mainhome from './Mainhome'


function App() {
  const styles={
color:"blue",
backgroundColor:"yellow"
  }
  const black={
    color:"black",
    backgroundColor:"aqua"
  }
  function Name(){
    return <h1>hello world welcome to jsx</h1>
  }
  let a="sanam"
  let b="raaz"
  let o={
    name:"rakesh",
    age:24,
    address:"mangalore"
  }
  let array=[1,2,3,4,5]
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload 111.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
<>
{/* <input type="text"></input>

<h1 style={{color:"red",backgroundColor:"blue",marginTop:"100px"}

}>hello</h1>
<h2 style={styles}>good morning</h2>
<h3 style={black}>welcome</h3>
<h4 className='container'>hey </h4>
<h6>heeee</h6>
<Name/>
{a}
<h1>{b}</h1>
<h1>{o.name}</h1>
<h2>{console.log(o)}</h2>
<h1>{array}</h1>
{console.log(array)}
<Classes/>
<input type="text"></input>
<Functions/>
<input type="text"></input>
<Arrowfunction/>
<Variables/>
<Text/>
<Array/>
<Destucturing/>
<Spredoperator/>
<Ternaryoperator/>
<Import/>
<Rfc/>
<Rcc/>
<Props title="properties"/>
<Event/>
<Conditional/>
<List/>
<Form/>
<Anchor/> */}
<div></div>
<Router/>
{/* <Mainhome/> */}
</>
  );
}

export default App;
