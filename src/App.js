import React, { useState } from 'react';
import './App.scss';
import init from './lib/init.js';
import { showResult,GachaButton } from './lib/gacha';
import { renUpgrade,RenUpgrade } from './lib/upgrades/ren.js';
import { probUpgrade, ProbUpgrade } from './lib/upgrades/prob.js';
import { prestige,Prestige } from  './lib/upgrades/prestige.js';
import { DeleteSave,deleteSave } from './lib/settings.js';

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

    const variables={
        chinpoint:chinpoint,setChinpoint:setChinpoint,
        upgradeCostSpeed:upgradeCostSpeed,setUpgradeCostSpeed:setUpgradeCostSpeed,
        prestigeMultiplier:prestigeMultiplier,
        ren:ren,setRen:setRen,
        renUpgradeCost:renUpgradeCost,setRenUpgradeCost:setRenUpgradeCost,
        probPercent:probPercent,setProbPercent:setProbPercent,
        probUpgradeCost:probUpgradeCost,setProbUpgradeCost:setProbUpgradeCost,
        result:result,setResult:setResult,
        prestigeNum:prestigeNum,setPrestigeNum:setPrestigeNum,
    };

    React.useEffect(() => {init(variables)});
    

    return (
        <>
            <div className="point">
                <h1 className="chinpoint">{chinpoint} ポイント</h1>
            </div>
            <div className="button">
                <GachaButton ren={ren} onClick={() => showResult(variables)}/>
            </div>
            <div className="result">
                {result}
            </div>
            <div className="info">
                現在の確率: {probPercent}%<br/>
                現在のガチャ: {ren}連<br/>
                リセット回数: {prestigeNum}回<br/>
            </div>
            <div className="upgrades">
                <ProbUpgrade onClick={() => probUpgrade(variables)} cost={probUpgradeCost} isEnabled={probUpgradeCost<=chinpoint}/>
                <RenUpgrade onClick={() => renUpgrade(variables)} cost={renUpgradeCost} isEnabled={renUpgradeCost<=chinpoint}/>
            </div>

            <div className="prestige">
                <Prestige onClick={() => prestige(variables)} isEnabled={probPercent>=100 && ren>=100} multiplier={prestigeMultiplier}/>
            </div>
            
            <div className="options">
                <DeleteSave onClick={() => deleteSave(variables)}/>
            </div>
        </>
    );
}
