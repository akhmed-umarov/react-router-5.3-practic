import { useCallback , useState } from "react";


const useValidation = (val)=>{ 
   const [value , setValue] = useState(val)

   const onChange = useCallback((e)=>{ 
   setValue(()=>( 
      e.target.value
   ))
   } , [value])

   return {value, setValue , onChange}
}

export default useValidation;
