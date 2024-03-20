export const init = (Var) => {
    if(localStorage.getItem("chinpoint")!=null){
        Var.setChinpoint(parseInt(localStorage.getItem("chinpoint")));
    }
    
    if(localStorage.getItem("ren")!=null){
        Var.setRen(parseInt(localStorage.getItem("ren")));
    }
    if(localStorage.getItem("renUpgradeCost")!=null){
        Var.setRenUpgradeCost(parseInt(localStorage.getItem("renUpgradeCost")));
    }
    
    if(localStorage.getItem("probPercent")!=null){
        Var.setProbPercent(parseInt(localStorage.getItem("probPercent")));
    }
    if(localStorage.getItem("probUpgradeCost")!=null){
        if(localStorage.getItem("probUpgradeCost")==="Infinity"){
            Var.setProbUpgradeCost(Infinity);
        }else{
            Var.setProbUpgradeCost(parseInt(localStorage.getItem("probUpgradeCost")));
        }
    }
    
    if(localStorage.getItem("prestigeNum")!=null){
        Var.setPrestigeNum(parseInt(localStorage.getItem("prestigeNum")));
    }
    if(localStorage.getItem("upgradeCostSpeed")!=null){
        Var.setUpgradeCostSpeed(Number(localStorage.getItem("upgradeCostSpeed")));
    }

    if(localStorage.getItem("simpleGachaBorder")!=null){
        Var.setSimpleGachaBorder(Number(localStorage.getItem("simpleGachaBorder")));
    }
}
export default init;