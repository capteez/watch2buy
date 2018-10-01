class MainNetwork{

    getFeesText()
    {
        return new Promise((resolve,reject) => {
            fetch("http://watch2buy.com/rest/main/instagram")
            .then( (res)=> { return res.json() })
            .then( (res) => { return resolve(res) } )
            .catch( (error) => { return reject(error) } );
        });
    }





}
const mainNetwork = new MainNetwork();
export default mainNetwork;