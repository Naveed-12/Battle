import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
export default function Battle(props) {

const [records, setrecords] = useState({});

  const DisplayArmiesData = (armies) => {
    let displayItem = [];
    props.armies.forEach((army) => {
      displayItem.push(
        <div className="army">
          <h2>{army.name}</h2>
          <p>Number Of Units : {army.NoOfPerson}</p>
          <p>Strategy : {army.Strategy}</p>
        </div>
      );
    });
    return displayItem;
  };
  const findStrongest = () => {
    let strong = 0;
    let strongindex = 0;
    props.armies.forEach((army, index) => {
      if (strong < army.NoOfPerson) {
        strong = army.NoOfPerson;
        strongindex = index;
      }
    });
    return strongindex;
  };
  const findWeakest = () => {
    let weak = props.armies[0].NoOfPerson;   // Finding Weakest NoOfUnits
    let weakindex = 0;
    props.armies.forEach((army, index) => {
      if (weak > army.NoOfPerson) {
        weak = army.NoOfPerson;
        weakindex = index;
      }
    });
    console.log(weak , "All are : ", props.armies);
    return weakindex;
  };
  const findIndexOf0UnitsToDeleteArmy = ()=>{
    let indexs = []    
    props.armies.forEach((Army,index)=>{
            if(Army.NoOfPerson < 1){
                indexs.push(index);
            }
        })
        indexs.forEach(index=>{
            props.delete(index);
        })
  }
  const StartGame = () => {
    let i = 1;
    let attackRandom;
    let strongindex;
    let weakestindex;
    let attackON;
    console.log(   props.armies.length , " Count is ",props.count,"Armies Are : ",props.armies);
      attackRandom = Math.floor(Math.random() * props.armies.length);
      if(props.armies.length > 1){
    //   props.armies.forEach((army, index) => {
        if (props.armies[attackRandom].Strategy === "Strongest") {
          if (strongindex !== attackRandom) {
            strongindex = findStrongest();
            props.attack(strongindex, attackRandom);
            attackON = strongindex;

          }
        }
        if (props.armies[attackRandom].Strategy === "Weakest") {
          if (weakestindex !== attackRandom) {
            weakestindex = findWeakest();
            props.attack(weakestindex, attackRandom);
            attackON = weakestindex;

          }
        }
        if(props.armies[attackRandom].Strategy === 'Random'){
            let random = Math.floor(Math.random() * props.armies.length);
            if(random !==  attackRandom){
                props.attack(random, attackRandom);
                attackON = random;
            }
        }
        if(props.armies.length === 1){
            i = 0;  // break point
        }
        setrecords(props.armies[attackRandom]);
        console.log("Records : ",records);
        props.SaveAttacks(records);
        findIndexOf0UnitsToDeleteArmy();
    //   });
    }
  };
  return (
    <React.Fragment>
      <div className="title">Battle Game</div>
      <div className="battle">
        {props && props.count && props.count <= 5 && (
          <Link to="/addarmy">
            <button className="btn btn-primary m-4">Add Army</button>
          </Link>
        )}
      </div>
      <div className="armies">{DisplayArmiesData(props.armies)}</div>
      <div className="App">
      <Link to  = "/listofAttacks"><button className="btn btn-warning list">List of Attacks</button></Link>
        <button className="btn btn-success start" onClick={() => StartGame()}>
          Attack
        </button>
        <button className="btn btn-danger reset" onClick={() => props.reset()}>
          Reset
        </button>
      </div>
    </React.Fragment>
  );
}
