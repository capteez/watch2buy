import React from 'react';
import { AsyncStorage } from "react-native"


class StorageHandler {

    getPasswordAndUsername()
    {
        return new Promise((resolve,reject) => { 
            AsyncStorage.multiGet(["@Username","@Password"])
            .then((Values) => { return resolve(Values); })
            .catch(reject);
        });
    }

    setPasswordAndUsername(Username,Password)
    {
        return new Promise((resolve,reject) => {
            AsyncStorage.multiSet(["@Username",Username],["@Password",Password])
            .then(resolve)
            .catch(reject);
        });
    }




}

const storageHandler = new StorageHandler();
export default storageHandler;