export function Prestige({onClick,isEnabled,multiplier}){
    if(isEnabled)return <button className="prestige enabled" onClick={onClick}>コストの増加速度→^{multiplier}<br/>それ以外の進捗をリセット</button>
    else return <button className="prestige disabled" onClick={onClick}>100%100連以上でアンロック</button>
}

export const prestige = (Var) => {
    if(Var.probPercent>=100 && Var.ren>=100){
        Var.setRen(10);
        Var.setRenUpgradeCost(10);
        Var.setProbPercent(3);
        Var.setProbUpgradeCost(10);
        Var.setChinpoint(0);

        Var.setPrestigeNum(Var.prestigeNum+1);
        Var.setUpgradeCostSpeed(Var.upgradeCostSpeed**Var.prestigeMultiplier);

        localStorage.setItem("ren","10");
        localStorage.setItem("renUpgradeCost","10");
        localStorage.setItem("probPercent","3");
        localStorage.setItem("probUpgradeCost","10");
        localStorage.setItem("chinpoint","0");
        localStorage.setItem("prestigeNum",(Var.prestigeNum+1).toString());
        localStorage.setItem("upgradeCostSpeed",(Var.upgradeCostSpeed**Var.prestigeMultiplier).toString());
        
    }
}