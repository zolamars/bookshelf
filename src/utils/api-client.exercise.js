function client(endpoint, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }
  const apiURL = `${process.env.REACT_APP_API_URL}/${endpoint}`
  return window
    .fetch(apiURL, config)
    .then(async response => 
      {const data = await response.json()
      if(response.ok){
        return data
      }else{
        return Promise.reject(data)
      }}
      )
}

export {client}

/*






























💰 spoiler alert below...



























































const config = {
    method: 'GET',
    ...customConfig,
  }
*/
