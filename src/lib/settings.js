export function DeleteSave({onClick}){
    return <button className="delete-save" onClick={onClick}>セーブデータを削除する</button>;
}

export const deleteSave = () => {
    if(window.confirm("本当にデータを削除しますか？\nこれはソフトリセットではありません！")){
        localStorage.clear();
        window.location.reload();
    }
}