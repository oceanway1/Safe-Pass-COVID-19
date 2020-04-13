const axios = require('axios');

const getGlobalCount = (setDeathd, setConfirmedd, setRecoveredd) => {
  axios.get('https://covidapi.info/api/v1/global')
    .then(res => {
      const confirmed = res.data.result.confirmed
      const death = res.data.result.deaths;
      const recovered = res.data.result.recovered
      setTimeout(() => {
        setDeathd(death)
        setConfirmedd(confirmed)
        setRecoveredd(recovered)
      }, 500)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}
module.exports = getGlobalCount