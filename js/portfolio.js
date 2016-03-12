Vue.config.debug = true;

new Vue({
  el: '#app',

  data: {
    portfolio: []
  },

  ready: function() {
    $.getJSON('portfolio.json', function(response) {
      this.portfolio = response;
    }.bind(this));
  }
});
