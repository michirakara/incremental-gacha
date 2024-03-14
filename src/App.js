import React, { useState } from 'react';
import './App.scss';

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

function Prestige({onClick,isEnabled,multiplier}){
    if(isEnabled)return <button className="prestige enabled" onClick={onClick}>コストの増加速度→^{multiplier}<br/>それ以外の進捗をリセット</button>
    else return <button className="prestige disabled" onClick={onClick}>100%100連以上でアンロック</button>
}

function DeleteSave({onClick}){
    return <button className="delete-save" onClick={onClick}>セーブデータを削除する</button>;
}


export default function Game(){
    const [chinpoint,setChinpoint]=useState(0);

    const [upgradeCostSpeed,setUpgradeCostSpeed]=useState(1.1);
    const prestigeMultiplier=0.8;

    const [ren,setRen]=useState(10);
    const [renUpgradeCost,setRenUpgradeCost]=useState(10);

    const [probPercent,setProbPercent]=useState(3);
    const [probUpgradeCost,setProbUpgradeCost]=useState(10);

    const [result,setResult]=useState([]);

    const [prestigeNum,setPrestigeNum]=useState(0);

    React.useEffect(() => {
        // load save from localStorage
        if(localStorage.getItem("chinpoint")!=null){
            setChinpoint(parseInt(localStorage.getItem("chinpoint")));
        }
    
        if(localStorage.getItem("ren")!=null){
            setRen(parseInt(localStorage.getItem("ren")));
        }
        if(localStorage.getItem("renUpgradeCost")!=null){
            setRenUpgradeCost(parseInt(localStorage.getItem("renUpgradeCost")));
        }
    
        if(localStorage.getItem("probPercent")!=null){
            setProbPercent(parseInt(localStorage.getItem("probPercent")));
        }
        if(localStorage.getItem("probUpgradeCost")!=null){
            if(localStorage.getItem("probUpgradeCost")==="Infinity"){
                setProbUpgradeCost(Infinity);
            }else{
                setProbUpgradeCost(parseInt(localStorage.getItem("probUpgradeCost")));
            }
        }
        
        if(localStorage.getItem("prestigeNum")!=null){
            setPrestigeNum(parseInt(localStorage.getItem("prestigeNum")));
        }
        if(localStorage.getItem("upgradeCostSpeed")!=null){
            setPrestigeNum(Number(localStorage.getItem("upgradeCostSpeed")));
        }
    },[]);
    
    // gacha function
    const showResult = () => {
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

        localStorage.setItem("chinpoint",newChinpoint.toString()); 
    }

    const probUpgrade = () => {
        if(chinpoint>=probUpgradeCost){
            setProbPercent(probPercent+1);
            setChinpoint(chinpoint-probUpgradeCost);
            setProbUpgradeCost(Math.max(probUpgradeCost+1,Math.floor(probUpgradeCost*upgradeCostSpeed)));
            localStorage.setItem("probPercent",(probPercent+1).toString());
            localStorage.setItem("probUpgradeCost",Math.max(probUpgradeCost,Math.floor(probUpgradeCost*upgradeCostSpeed).toString()));
            localStorage.setItem("chinpoint",(chinpoint-probUpgradeCost).toString());
            if(probPercent+1===100){
                setProbUpgradeCost(Infinity);
                localStorage.setItem("probUpgradeCost",Infinity.toString());
            }
        }
    }

    const renUpgrade = () => {
        if(chinpoint>=renUpgradeCost){
            setRen(ren+1);
            setChinpoint(chinpoint-renUpgradeCost);
            setRenUpgradeCost(Math.max(renUpgradeCost+1,Math.floor(renUpgradeCost*upgradeCostSpeed)));
            localStorage.setItem("ren",(ren+1).toString());
            localStorage.setItem("renUpgradeCost",Math.max(renUpgradeCost+1,Math.floor(renUpgradeCost*upgradeCostSpeed).toString()));
            localStorage.setItem("chinpoint",(chinpoint-renUpgradeCost).toString());
        }
    }

    const prestige = () => {
        if(probPercent>=100 && ren>=100){
            setRen(10);
            setRenUpgradeCost(10);
            setProbPercent(3);
            setProbUpgradeCost(10);
            setChinpoint(0);

            setPrestigeNum(prestigeNum+1);
            setUpgradeCostSpeed(upgradeCostSpeed**prestigeMultiplier);

            localStorage.setItem("ren","10");
            localStorage.setItem("renUpgradeCost","10");
            localStorage.setItem("probPercent","3");
            localStorage.setItem("probUpgradeCost","10");
            localStorage.setItem("chinpoint","0");
            localStorage.setItem("prestigeNum",(prestigeNum+1).toString());
            localStorage.setItem("upgradeCostSpeed",(upgradeCostSpeed**prestigeMultiplier).toString());
            
        }
    }

    const deleteSave = () => {
        if(window.confirm("本当にデータを削除しますか？\nこれはソフトリセットではありません！")){
            localStorage.clear();
            window.location.reload();
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

            <div className="prestige">
                <Prestige onClick={() => prestige()} isEnabled={probPercent>=100 && ren>=100} multiplier={prestigeMultiplier}/>
            </div>
            
            <div className="options">
                <DeleteSave onClick={() => deleteSave()}/>
            </div>
        </>
    );
}
