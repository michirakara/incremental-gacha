export function GachaButton({ren,onClick}){
    return <button className="gacha-button" onClick={onClick}><span className="number">{ren}</span>連下ネタガチャを回す</button>;
}

export const showResult = (Var) => {
    var ret=[];
    var newChinpoint=Var.chinpoint;
    for(var i=0;i<Var.ren;i++){
        if(Math.random()<Var.probPercent/100.0){
            ret.push(<p className={"chinko gacha-result"} key={i}>ちんこ</p>);
            newChinpoint++;
        }else{
            ret.push(<p className="hazure gacha-result" key={i}>はずれ</p>);
        }
    }
    console.log(newChinpoint);
    Var.setChinpoint(newChinpoint);
    Var.setResult(ret);
    console.log(Var.result);

    localStorage.setItem("chinpoint",newChinpoint.toString()); 
}