let apiUrl
const apiUrls = {
production: 'https://mern-book-info-api.herokuapp.com',
  development: 'http://localhost:5000'
}

if (window.location.hostname === 'localhost') {
  // apiUrl = apiUrls.development
 apiUrl = apiUrls.production
} else {
  apiUrl = apiUrls.production
}

export default apiUrl