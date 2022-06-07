function client(endpoint, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }
  const apiURL = `${process.env.REACT_APP_API_URL}/${endpoint}`
  return window
    .fetch(apiURL, config)
    .then(response => response.json())
}

export {client}

/*






























💰 spoiler alert below...



























































const config = {
    method: 'GET',
    ...customConfig,
  }
*/
