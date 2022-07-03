const { default: axios } = require("axios")

const useTokens = function(id, address= "http://localhost:8080/designTokens/api/getTokens") {
    axios({
        method: 'get',
        url: `${address}?id=${id}`,
        responseType: 'stream'
      })
        .then(function (res) {
            const json = toJSON(res?.data?.webTokens);
            const root = document.documentElement;
            Object.entries(json?.children?.[':root']?.attributes).map(([name, value]) => {
              console.log(name, value);
              root.style.setProperty(name, value);
            });
        });
}