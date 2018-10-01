
class LoginNetwork{

    checkLogin(username,password)
    {
        return new Promise((resolve,reject) => {
            if(!username || !password)
            {
                reject(new Error("اسم المستخدم او كلمة المرور غير موجودة"));
            }
            
            // fetvh the result
            fetch("http://watch2buy.com/rest/user/check/"+username+"/"+password)
            .then((response) => { return response.text(); })
            .then((response) => {return resolve(response)})
            .catch((error) => { return reject(error) });
        });
    }
    
    registerUser(state)
    {
        return new Promise((resolve,reject) => {
            //check fields

            const username = state.username;
            const email = state.email;
            const phone = state.phone;
            const password = state.password;
            const repassword = state.repassword;

            if(!username || !email || !password || !phone || !repassword)
            {
                reject(new Error("الرجاء ادخال جميع البيانات"));
            }
            //check password
            if(password !== repassword)
            {
                reject(new Error("كلمة المرور غير مطابقة"));
            }

            let registerForm = new FormData();
            registerForm.append("first_name",username);
            registerForm.append("password",password);
            registerForm.append("email",email);
            registerForm.append("telephone",phone);

            fetch("http://watch2buy.com/rest/user/register",{body:registerForm})
            .then((response) => { return response.text(); })
            .then((response) => { return resolve(response)} );

        });
    }

}
const loginNetwork = new LoginNetwork();
export default loginNetwork;

