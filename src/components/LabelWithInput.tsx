import { Label, LabelProps } from "./Label"
interface LabelWithInputProps extends LabelProps{
    inputName: string
}


export const LabelWithInput = ({labelValue, inputName}:LabelWithInputProps) => {
    return(
    <>
     <Label
    labelValue={labelValue}
    ></Label>
    <input type="text" name={inputName}/>
    </>
    )
}