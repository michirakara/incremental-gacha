export function GachaButton({ren,onClick}){
    return <button className="gacha-button" onClick={onClick}><span className="number">{ren}</span>連下ネタガチャを回す</button>;
}

export const showResult = (Var) => {
    var ret=[];
    var newChinpoint=Var.chinpoint;
    var chinpo=0;
    var hazure=0;
    for(var i=0;i<Var.ren;i++){
        if(Math.random()<Var.probPercent/100.0){
            chinpo++;
            ret.push(<p className={"chinko gacha-result"} key={i}>ちんこ</p>);
            newChinpoint++;
        }else{
            hazure++;
            ret.push(<p className="hazure gacha-result" key={i}>はずれ</p>);
        }
    }
    console.log(newChinpoint);
    Var.setChinpoint(newChinpoint);
    if(Var.simpleGachaBorder<=Var.ren) Var.setResult(
        <>
            <p className="gacha-result" key={0}><span className="chinko">ちんこ</span>x{chinpo}</p>
            <p className="gacha-result" key={1}><span className="hazure">はずれ</span>x{hazure}</p>
        </>
    );
    else Var.setResult(ret);
    console.log(Var.result);

    localStorage.setItem("chinpoint",newChinpoint.toString()); 
}