import { Form } from "native-base";


class AdsNetwork{

    getAll(offset,num)
    {
        if(!offset)
            offset = 0;

        if(!num )
            num = 30;

        return new Promise((resolve,reject) => 
        {
            fetch("http://watch2buy.com/rest/ads")
            .then((Response) => { return Response.json(); })
            .then((response) => { return resolve(response); })
            .catch((error) => { return reject(error); });
        });
    }

    getOne(id)
    {
        return new Promise((resolve,reject) => 
        {
            fetch("http://watch2buy.com/rest/ads/ad/"+id)
            .then( (response) => { return response.json(); } )
            .then( (response) => { return resolve(response); } )
            .catch( (error) => { return reject(error); } );
        });
    }
    Requests(){
        return new Promise((resolve,reject) => 
        {
            fetch("http://watch2buy.com/rest/ads/req")
            .then((Response) => { return Response.json(); })
            .then((response) => { return resolve(response); })
            .catch((error) => { return reject(error); });
        });
    }
    
    Search(key,city,section){
        return new Promise((resolve,reject) => 
        {
            let data = new FormData();
            data.append("key",key);
            data.append("sec",section);
            data.append("city",city);

            fetch("http://watch2buy.com/rest/ads/search",{body:data,method:"POST"})
            .then( (response) => { return response.json(); } )
            .then( (response) => { return resolve(response); } )
            .catch( (error) => { return reject(error); } );
        });
    }

    getCities(){
        return new Promise((resolve,reject) => 
        {

            fetch("http://watch2buy.com/rest/ads/cities")
            .then( (response) => { return response.json(); } )
            .then( (response) => { return resolve(response); } )
            .catch( (error) => { return reject(error); } );
        });
    }
    getSections(){
        return new Promise((resolve,reject) => 
        {

            fetch("http://watch2buy.com/rest/ads/sections")
            .then( (response) => { return response.json(); } )
            .then( (response) => { return resolve(response); } )
            .catch( (error) => { return reject(error); } );
        });
    }

 
}
const adsNetwork = new AdsNetwork();
export default adsNetwork;

