import logo from "./logo.svg";
import react from "react";
import _ from 'lodash';
import "./App.css";
import "./Style/style.css";
import ListOfAttack from './Components/ListOfAttack'
import React from "react";
import Battle from "./Components/Battle";
import AddArmy from './Components/AddArmy';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [listOfAttack,setattacks] = useState([{}]);
  const [count,setcount] = useState(3)   
  const [PrevArmies, setarmyprev] = useState([{
    name:"pakistan",  
    Id:"1",
    Strategy:"Strongest",
    NoOfPerson:100  
  },{
    name:"Iran",  
    Id:"2",
    Strategy:"Weakest",
    
    NoOfPerson:90
  }])
  const [armies, setarmy] = useState([{
    name:"pakistan",  
    Id:"1",
    Strategy:"Strongest",
    NoOfPerson:100  
  },{
    name:"Iran",  
    Id:"2",
    Strategy:"Weakest",
    NoOfPerson:90
  }])
  const Army = [{
  name:"",  
  Id:"",
  Strategy: '',
  NoOfPerson:0
}]
  const SaveAttacks = (attack)=>{
      setattacks([...listOfAttack,attack]);
      console.log("Atacks By : ", listOfAttack);   
  }

  const AddToArmies = (Armyname,Armyid,NoOfPerson,strategy)=>{
    setarmy([...armies,{
      name : Armyname,
      Id : Armyid,
      Strategy:strategy,
      NoOfPerson : NoOfPerson
    }])
    setarmyprev([...PrevArmies,{
      name : Armyname,
      Id : Armyid,
      Strategy:strategy,
      NoOfPerson : NoOfPerson
    }])
    setcount(count+1);
    console.log("Armies are : ",armies);
    console.log("Count is " , count);
  }
  const changeOnAttack = (attackedindex,armyWhoAttack)=>{
      let copyarmy = []
      copyarmy = _.cloneDeep(armies) 
      copyarmy[attackedindex].NoOfPerson = copyarmy[attackedindex].NoOfPerson *0.5;
      copyarmy[armyWhoAttack].NoOfPerson = copyarmy[armyWhoAttack].NoOfPerson - 1 ;  
      console.log(copyarmy);
      setarmy([...copyarmy]);
  }
  const deleteArmy = (del)=>{
    let copyarmy = []
    copyarmy = _.cloneDeep(armies);
    copyarmy.splice(del,1);
    setarmy([...copyarmy]);
  }
  const reset = ()=>{
    setarmy([...PrevArmies])
  }
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Battle armies = {armies} SaveAttacks = {SaveAttacks} count = {count} attack = {changeOnAttack} delete = {deleteArmy} reset = {reset}/>
          </Route>
          <Route exact path="/addarmy">
            <AddArmy  add = {AddToArmies}/>
          </Route>
          <Route exact path="/listofAttacks">
            <ListOfAttack list = {listOfAttack}/>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
