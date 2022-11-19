export const exeerciseOptions  = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0c36b36c5amsh5515c0504d5f472p170927jsn05eca5c4d327',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};




export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json();

  return data;  
}