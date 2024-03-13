import React, { useState } from 'react'
import './App.css';

function GachaButton({ren,onClick}){
    return <button className="gacha-button" onClick={onClick}><span className="number">{ren}</span>連下ネタガチャを回す</button>;
}

function ProbUpgrade({onClick,cost,isEnabled}){
    console.log(isEnabled);
    if(isEnabled)return <button className="prob-upgrade upgrade-button enabled" onClick={onClick}>確率を+1%する<br/>{cost}チンポイント</button>
    else return <button className="prob-upgrade upgrade-button disabled" onClick={onClick}>確率を+1%する<br/>{cost}チンポイント</button>
}

function RenUpgrade({onClick,cost,isEnabled}){
    console.log(isEnabled);
    if(isEnabled)return <button className="ren-upgrade upgrade-button enabled" onClick={onClick}>ガチャの数を1増やす<br/>{cost}チンポイント</button>
    else return <button className="ren-upgrade upgrade-button disabled" onClick={onClick}>ガチャの数を1増やす<br/>{cost}チンポイント</button>
}



export default function Game(){
    const [chinpoint,setChinpoint]=useState(0);

    const [ren,setRen]=useState(10);
    const [renUpgradeCost,setRenUpgradeCost]=useState(10);

    const [probPercent,setProbPercent]=useState(3);
    const [probUpgradeCost,setProbUpgradeCost]=useState(10);

    const [result,setResult]=useState([]);

    function showResult(){
        var ret=[];
        var newChinpoint=chinpoint;
        for(var i=0;i<ren;i++){
            if(Math.random()<probPercent/100.0){
                ret.push(<p className={"chinko gacha-result"} key={i}>ちんこ</p>);
                newChinpoint++;
            }else{
                ret.push(<p className="hazure gacha-result" key={i}>はずれ</p>);
            }
        }
        console.log(newChinpoint);
        setChinpoint(newChinpoint);
        setResult(ret);
        console.log(result);
        return;
    }

    function probUpgrade(){
        if(chinpoint>=probUpgradeCost){
            setProbPercent(probPercent+1);
            setChinpoint(chinpoint-probUpgradeCost);
            setProbUpgradeCost(Math.floor(probUpgradeCost*1.1));
        }
    }

    function renUpgrade(){
        if(chinpoint>=renUpgradeCost){
            setRen(ren+1);
            setChinpoint(chinpoint-renUpgradeCost);
            setRenUpgradeCost(Math.floor(renUpgradeCost*1.1));
        }
    }
    

    return (
        <>
            <div className="point">
                <h1 className="chinpoint">{chinpoint} ポイント</h1>
            </div>
            <div className="button">
                <GachaButton ren={ren} onClick={() => showResult()}/>
            </div>
            <div className="result">
                {result}
            </div>
            <div className="info">
                現在の確率: {probPercent}%<br/>
                現在のガチャ: {ren}連
            </div>
            <div className="upgrades">
                <ProbUpgrade onClick={() => probUpgrade()} cost={probUpgradeCost} isEnabled={probUpgradeCost<=chinpoint}/>
                <RenUpgrade onClick={() => renUpgrade()} cost={renUpgradeCost} isEnabled={renUpgradeCost<=chinpoint}/>
            </div>
        </>
    );
}
