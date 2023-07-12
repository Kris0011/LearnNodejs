const axios = require('axios').default ;

const connectToUrl = (url) => {
    const req  = axios.get(url);
    console.log(req);

    req.then ( resp => {
        console.log("FulFiilled")
        console.log(resp.data);
    })

    .catch(err =>{
        console.log("Rejected")
    })
}