export function DeleteSave({onClick}){
    return <button className="delete-save" onClick={onClick}>セーブデータを削除する</button>;
}

export const deleteSave = () => {
    if(window.confirm("本当にデータを削除しますか？\nこれはソフトリセットではありません！")){
        localStorage.clear();
        window.location.reload();
    }
}

export function SimpleGachaBorderSetting({Var}){
    return (
    <>
        <input className="simple-gacha-border" type="number" value={Var.simpleGachaBorder} onChange={(event) => {Var.setSimpleGachaBorder(event.target.value);localStorage.setItem("simpleGachaBorder",event.target.value)}} min="0"/>連以上の場合にガチャを軽量化する<br/>
    </>
    );
}