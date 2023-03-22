import { TitleInterface } from "../types"
import { Title } from "./Title"

interface TitleListProps{
    list: string[],
    // title lisst prevede in ingresso una funzione che riceve in ingresso una stringa e non restituisce nulla
    callback:(value:string)=> void 
}

interface TitleListExtendedProps extends TitleListProps{
    listTitle:string
}


export const TitleList= ({list, callback, listTitle}:TitleListExtendedProps) =>{

    const listMapped = 
    list.map((el)=>{
        return <div onClick={()=> callback(el)}>
        <Title mainTitle={el + "----"}></Title>
        </div>
    })

        return (
            <div>
                <h1>{listTitle}</h1>
            {listMapped}
            </div>
            
        )
}