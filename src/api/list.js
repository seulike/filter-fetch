/**
 * Mocking client-server processing
 */
const listData = [1,2,3,4,5,6,7,8,9,10];

export default {
  getList(param,cb) {
    console.log(param);
    var start = Math.floor(Math.random()*1000);
    var listData = Array(11).join('0').split('').map(function(v,i){return i+start});
    setTimeout(() => cb(listData), 100)
  },
}
