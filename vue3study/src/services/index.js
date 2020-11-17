import axios from "axios";
import qs from "qs";

function getData () {
  return axios({
    url: '/api/calendar/year'
    , method: 'post'
    , data: qs.stringify({
      year: 2020
    })
    , header: {
      'Content-Type': 'application/x-www-form-urlendcoded'
    }
    
  }).then((res) => {
    return res.data;
  })
}

export {
  getData
}
