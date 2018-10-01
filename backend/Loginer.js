
import {Actions} from 'react-native-router-flux';
import loginNetwork from "../network/loginNetwork";
import errorHandler from './errorHandler';
import storageHandler from './storageHandler';

class loginer {

    Login(username,password)
    {
        //check login info
        loginNetwork.checkLogin(username,password)
        .then((response) => { 
            //if data are vaild
            if(response === "true"){
                storageHandler.setPasswordAndUsername(username,password)
                .then(() => { Actions.Home(); })
                .catch(errorHandler.showErrorMsg);
            }
            else{
                Actions.Login({error:new error("اسم المستخدم او كلمة المرور خطا")}); 
            }
         })
         //anything wrong go back to login
         .catch((error) => {  Actions.Login(); } );
    }

    Register(state)
    {
        loginNetwork.registerUser(state)
        .then((response) => { 
            //if data are vaild
            if(response === "true"){
                storageHandler.setPasswordAndUsername(state.username,state.usernamepassword)
                .then(() => { Actions.Home(); })
                .catch(errorHandler.showErrorMsg);
                
            }
            else{
                Actions.Register({error:new error("اسم المستخدم او كلمة المرور خطا")}); 
            }
         })
         //anything wrong go back to login
         .catch((error) => {  Actions.Register(); } );
    }

}

const Loginer = new loginer();
export default  Loginer;