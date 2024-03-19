export function ProbUpgrade({onClick,cost,isEnabled}){
    console.log(isEnabled);
    if(isEnabled)return <button className="prob-upgrade upgrade-button enabled" onClick={onClick}>確率を+1%する<br/>{cost}チンポイント</button>
    else return <button className="prob-upgrade upgrade-button disabled" onClick={onClick}>確率を+1%する<br/>{cost}チンポイント</button>
}

export const probUpgrade = (Var) => {
    if(Var.chinpoint>=Var.probUpgradeCost){
        Var.setProbPercent(Var.probPercent+1);
        Var.setChinpoint(Var.chinpoint-Var.probUpgradeCost);
        Var.setProbUpgradeCost(Math.max(Var.probUpgradeCost+1,Math.floor(Var.probUpgradeCost*Var.upgradeCostSpeed)));
        localStorage.setItem("probPercent",(Var.probPercent+1).toString());
        localStorage.setItem("probUpgradeCost",Math.max(Var.probUpgradeCost,Math.floor(Var.probUpgradeCost*Var.upgradeCostSpeed).toString()));
        localStorage.setItem("chinpoint",(Var.chinpoint-Var.probUpgradeCost).toString());
        if(Var.probPercent+1===100){
            Var.setProbUpgradeCost(Infinity);
            localStorage.setItem("probUpgradeCost",Infinity.toString());
        }
    }
}