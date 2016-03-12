// Vue.config.debug = true;

Vue.component('Avatar', {
  template: '#avatar-template',

  data: function () {
    return {
      avatar_sequence: getRandomInt(1, 8),
      avatarImage: ''
    }
  },

  ready: function () {
    this.avatarImage = 'avatar/' + this.avatar_sequence + '.jpg';
  },

  methods: {
    changeAvatar: function () {
      this.avatar_sequence += 1;

      if (this.avatar_sequence > 8) {
        this.avatar_sequence = 1;
      }

      this.avatarImage = 'avatar/' + this.avatar_sequence + '.jpg';
    }
  }
});

Vue.component('Portfolio', {
  template: '#portfolio-template',

  props: ['item'],

  data: function () {
    return {
      showModal: false
    }
  },

  ready: function () {

  },

  methods: {
    openModal: function () {
      this.showModal = true;
      //this.$root.$set('modal-open', false);
    },

    closeModal: function () {
      this.showModal = false;
      //this.$root.$set('modal-open', true);
    }
  }

});

new Vue({
  el: '#app',

  data: {
    portfolio: [],
    //'modal-open': false // for modal dialog
  },

  ready: function () {
    $.getJSON('portfolio.json', function (response) {
      this.portfolio = response;
    }.bind(this));
  }

});


