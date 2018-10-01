import React from 'react';
import {Actions} from 'react-native-router-flux';
import storageHandler from './storageHandler';
import Loginer from '../backend/Loginer';

 class PageSwitcher {
    
      checkLoginStatus()
   {
       //network check valid user name and password 
       // and grab them from memory

       storageHandler.getPasswordAndUsername()
       .then((Values) => {
        
        // email and password 
        const username = Values[0][1];
        const password = Values[1][1];

        //if null go to login page
        if(!username || !password)
        {
             Actions.Login();
        }else{
            
        Loginer.Login(username,password);

        }
     })
     .catch((error) => { Actions.Login(); });

   }
   
}
const pageSwitcher = new PageSwitcher();
export default pageSwitcher;

