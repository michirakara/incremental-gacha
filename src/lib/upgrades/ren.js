export function RenUpgrade({onClick,cost,isEnabled}){
    console.log(isEnabled);
    if(isEnabled)return <button className="ren-upgrade upgrade-button enabled" onClick={onClick}>ガチャの数を1増やす<br/>{cost}チンポイント</button>
    else return <button className="ren-upgrade upgrade-button disabled" onClick={onClick}>ガチャの数を1増やす<br/>{cost}チンポイント</button>
}

export const renUpgrade = (Var) => {
    if(Var.chinpoint>=Var.renUpgradeCost){
        Var.setRen(Var.ren+1);
        Var.setChinpoint(Var.chinpoint-Var.renUpgradeCost);
        Var.setRenUpgradeCost(Math.max(Var.renUpgradeCost+1,Math.floor(Var.renUpgradeCost*Var.upgradeCostSpeed)));
        localStorage.setItem("ren",(Var.ren+1).toString());
        localStorage.setItem("renUpgradeCost",Math.max(Var.renUpgradeCost+1,Math.floor(Var.renUpgradeCost*Var.upgradeCostSpeed).toString()));
        localStorage.setItem("chinpoint",(Var.chinpoint-Var.renUpgradeCost).toString());
    }
}