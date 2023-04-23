import React, { useState , useEffect} from "react";
const AuthContext=  React.createContext({
    isLoggedIn:false,
    onlogout: () =>{},
    onLogin: (email , password) => {}

});
export const AuthContextProvider = props =>{
    useEffect(()=>{
        const storeUserInformation = localStorage.getItem('loggedIn')
        if(storeUserInformation ==='1') {
          setIsLoggedIn(true)
        }
      }, [])
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const logoutHandler = () =>{
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn')

    };
    const loginhandler = () =>{
        setIsLoggedIn(true);
        localStorage.setItem('loggedIn' , '1');

    }
        return (
            <AuthContext.Provider value={{isLoggedIn: isLoggedIn , onlogout: logoutHandler ,onLogin : loginhandler }}>
            
            {props.children}
        
            </AuthContext.Provider>
        )
     
}
export default AuthContext;
