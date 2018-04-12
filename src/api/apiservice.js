/**
 * Mocking client-server processing
 */
import Vue from 'vue';
const kBaseGitHubUrl = 'https://api.github.com';


/** -----demo */
function fetchEmojis(successCallback, errorCallback) {
  Vue.http.get(domainGithub() + '/emojis').then(response => {
    sucResponseHandler(response, successCallback)
  }, response => {
    errResponseHandler(response, errorCallback)
  });
}
/** ----ex */



/** -----basic */
function domain() {
  return '';
}
function domainGithub() {
  return kBaseGitHubUrl;
}
function sucResponseHandler(res,handler) {
  if (handler) {handler(res.body)}
}
function errResponseHandler(res,handler) {
  if (handler) {handler(res)}
}

export default {
    fetchEmojis


}
