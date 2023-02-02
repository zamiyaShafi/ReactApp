import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Mainhome from './Mainhome'
import Classes from './classes'
import Arrowfunction from './Arrowfunction'
import Export from './Export'
import Variables from './Variables';
import Text from './Text';
import Array from './Array';
import Destucturing from './Destucturing';
import Spredoperator from './Spredoperator';
import Ternaryoperator from './Ternaryoperator';
import Import from './Import'
import Rfc from './Rfc';
import Rcc from './Rcc';
import Event from './Event';
import Conditional from './Conditional';
import List from './List';
import Form from './Form';
import Simpleclass from './Simpleclass'
import Inheritence from './Inheritence'
import Classstart from './Classstart'
import Desnestedobject from './Desnestedobject'
import Desarray from './Desarray'
import Desobject from './Desobject'
import Sparray from './Sparray'
import Spobject from './Spobject'
import Sparrayobj from './Sparrayobj'
import Props from './Props'
import Usestate from './Usestate'
import Useeffect from './Useeffect'
import Propsdrill from './Propsdrill'
import Usecontext from './Usecontext'
import Registration from './Registration'
import Card from './Card.jsx'
// import ComboBox from './Autocomplete'
import Pracapp from './Pracapp'
import ComboBox from './Autocomplete/Combobox'
import CountrySelect from './Autocomplete/Countryselect'
import Table from './Table'
import Edit from './Edit'
import Grouped from './Autocomplete/Grouped'
import View from './View'
import LocalInsert from './Localstorage/LocalInsert'
import LocalView from './Localstorage/LocalView'
import Localedit from './Localstorage/Localedit'
import BasicButtons from './Button/BasicButton'
import ButtonSizes from './Button/ButtonSize'
import UploadButtons from './Button/UploadButton'
import ComplexButton from './Button/ComplexButton'
import BasicButtonGroup from './ButtonGroup/BasicButtonGroup'
import GroupOrientation from './ButtonGroup/VerticalGroup'
import Checkboxes from './CheckBox/BasicCheckBox'
import ControlledCheckbox from './CheckBox/ControlledCheck'
import IndeterminateCheckbox from './CheckBox/IntermediateCheck'
import LocView from './Localstorage/LocView'







export default function Router() {
  const A=[
    {
        id:1,
        name:"zamiya",
        age:21,
        place:"bajal",
        src:"img/i1.png"
    },
    {
        id:2,
        name:"raseena",
        age:21,
        place:"bajal",
        src:"img/i2.png"
    },
     {
        id:3,
        name:"ishrath",
        age:20,
        place:"kc road",
        src:"img/i3.png"
    },
    {
        id:4,
        name:"zakiya",
        age:20,
        place:"mangalore",
        src:"img/i3.png"
    }
  ]
  return (
    <div>
        <BrowserRouter>
        <Routes>
            
            <Route exact path="/" element={<Mainhome/>}></Route>
            <Route exact path="/classes" element={<Classes/>}></Route>
            <Route exact path="/Arrowfunction" element={<Arrowfunction/>}></Route>
            <Route exact path="/Variables" element={<Variables/>}></Route>
            <Route exact path="/Text" element={<Text/>}></Route>
            <Route exact path="/Array" element={<Array/>}></Route>
            <Route exact path="/Destructuring" element={<Destucturing/>}></Route>
            <Route exact path="/Spredoperator" element={<Spredoperator/>}></Route>
            <Route exact path="/Ternaryoperator" element={<Ternaryoperator/>}></Route>
            <Route exact path="/Import" element={<Import/>}></Route>
            <Route exact path="/Props" element={<Props/>}></Route>
            <Route exact path="/Rfc" element={<Rfc/>}></Route>
            <Route exact path="/Rcc" element={<Rcc/>}></Route>
            <Route exact path="/Event" element={<Event/>}></Route>
            <Route exact path="/Conditional" element={<Conditional/>}></Route>
            <Route exact path="/List" element={<List/>}></Route>
            <Route exact path="/Form" element={<Form/>}></Route>
            <Route exact path="/Simpleclass" element={<Simpleclass/>}></Route>
            <Route exact path="/Inheritence" element={<Inheritence/>}></Route>
            <Route exact path="/Classstart" element={<Classstart/>}></Route>
            <Route exact path="/DesArray" element={<Desarray/>}></Route>
            <Route exact path="/Desobject" element={<Desobject/>}></Route>
            <Route exact path="/Desnestedobject" element={<Desnestedobject/>}></Route>
            <Route exact path="/Sparray" element={<Sparray/>}></Route>
            <Route exact path="/Spobject" element={<Spobject/>}></Route>
            <Route exact path="/Sparrayobj" element={<Sparrayobj/>}></Route>
            <Route exact path="/Export" element={<Export/>}></Route>
            <Route exact path="/Usestate" element={<Usestate/>}></Route>
            <Route exact path="/Useeffect" element={<Useeffect/>}></Route>
            <Route exact path="/Propsdrill" element={<Propsdrill/>}></Route>
            <Route exact path="/Usecontext" element={<Usecontext/>}></Route>
            <Route exact path="/Registration" element={<Registration/>}></Route>
            <Route exact path="/Card" element={<Card/>}></Route>
            {/* <Route exact path="/Autocomplete" element={<ComboBox/>}></Route> */}
            <Route exact path="/Pracapp" element={<Pracapp/>}></Route>
            <Route exact path="/Combobox" element={<ComboBox/>}></Route>
            <Route exact path="/Countryselect" element={<CountrySelect/>}></Route>
            <Route exact path="/Table" element={<Table StudentDetails={A}/>}></Route>
            <Route exact path="/Edit/:id" element={<Edit/>}></Route>
            <Route exact path="/Grouped" element={<Grouped/>}></Route>
            <Route exact path="/View/:id" element={<View StudentDetails={A} />}></Route>
            <Route exact path="/LocalView" element={<LocalView/>}></Route>
            <Route exact path="/LocalInsert" element={<LocalInsert/>}></Route>
            <Route exact path="/Localedit:id" element={<Localedit/>}></Route>
            <Route exact path="/BasicButton" element={<BasicButtons/>}></Route>
            <Route exact path="/ButtonSize" element={<ButtonSizes/>}></Route>
            <Route exact path="/UploadButton" element={<UploadButtons/>}></Route>
            <Route exact path="/ComplexButton" element={<ComplexButton/>}></Route>
            <Route exact path="/BasicButtonGroup" element={<BasicButtonGroup/>}></Route>
            <Route exact path="/VerticalGroup" element={<GroupOrientation/>}></Route>
            <Route exact path="/BasicCheckBox" element={<Checkboxes/>}></Route>
            <Route exact path="/ControlledCheck" element={<ControlledCheckbox/>}></Route>
            <Route exact path="/IntermediateCheck" element={<IndeterminateCheckbox/>}></Route>
            <Route exact path="/LocView/:id" element={<LocView/>}></Route>
            
           
            

            
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}
