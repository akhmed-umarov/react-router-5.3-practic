import useValidation from "../hooks/useValidation"



const LinkPage = (props)=>{ 

   const input = useValidation('')

   return ( 
      <>
      <h1>{props.text}</h1>
         <input type="text" value={input.value} onChange={input.onChange}/>
         <p>{input.value}</p>
      </>
   )
}


export default LinkPage;