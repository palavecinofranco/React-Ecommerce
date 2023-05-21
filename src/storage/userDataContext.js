import { createContext, useContext, useState } from "react";

export const userDataContext = createContext()

function UserDataProvider (props) {
    
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
      });
    function saveData(data){
        setUserData(data);
    }

    return(
        <userDataContext.Provider value={{saveData, userData}}>
            {props.children}
        </userDataContext.Provider>
    )
}

export function useUserDataContext(){
    return useContext(userDataContext);
}

export { UserDataProvider };