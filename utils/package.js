const axios = require('axios');

exports.fetchMetadata = (package) => {
    axios.get(`https://api.npms.io/v2/package/${package}`).then((response)=>{
        return response.data.collected.metadata;
    });
}