
import {Alert} from 'react-native';

class ErrorHandler {
    showErrorMsg(error)
    {
        Alert.alert("خطأ",error.message,[ { text:"حسنا"  } ]);
    }
}

const errorHandler = new ErrorHandler();
export default errorHandler;