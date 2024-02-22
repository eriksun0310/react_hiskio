import { forwardRef, } from "react";


const CustomInput = forwardRef((props, ref) =>{
    return <input ref={ref} />
})
export default CustomInput



//錯誤用法 (父元件拿不到子元件的input value)
// export default function CustomInput ({ref}) {
//     return <input ref={ref} />
// }
