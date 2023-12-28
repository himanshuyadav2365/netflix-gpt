

 export const checkValidation=(name,email,password,isSignIn)=>{
    
   const isemailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
   .test(email)
   if(!isemailValid){
       return "Email is Invalid"
   }
   
   if(!isSignIn){
       const isNameValid= /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
        .test(name)
        if(!isNameValid){
            return "Name is Invalid"
        }    
    }
   const ispasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
   .test(password)
   if(!ispasswordValid){
        return "Password is Invalid"
    }
    
    return null

}