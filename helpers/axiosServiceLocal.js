const axios = require("axios").default;
const tunnel = require("tunnel");
const {
  localUrl
} = require("../constants/urls");
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
axiosCookieJarSupport(axios);
const cookiejar = new tough.CookieJar();
const tunnelAgent = tunnel.httpsOverHttp({
  proxy: {
    host: "103.106.219.121",
    port: 8080,
  },
});
axios.defaults.baseURL = localUrl;
// axios.defaults.httpsAgent = tunnelAgent;
axios.defaults.jar = cookiejar;

const AxiosServiceLocal = async (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        return resolve(response);
      }
      return reject(response);
    } catch (error) {
      return reject(error.message);
    }
  });
};
module.exports = AxiosServiceLocal;