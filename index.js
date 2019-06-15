Vue.component('countdown', {
  data() {
    return {
      releaseDate: new moment('2020-04-16'),
      timeRemaining: null,
      duration: null
    };
  },
  template: `
  <div class="countdown">
    <h3 class="countdown__title">Time to release:</h3>
    <p class="countdown__timer">{{ timeRemaining }}</p>
  </div>
  `,
  created() {
    setInterval(() => {
      const now = new moment().format();
      this.duration = moment.duration(this.releaseDate.diff(now));
      const { months, days, hours, minutes, seconds } = this.duration._data;
      this.timeRemaining = moment(
        `2019-${months}-${days} ${hours}:${minutes}:${seconds}`
      ).format('MM [months] D [days] hh:mm:ss');
    }, 1000);
  }
});

const app = new Vue({
  el: '#app',
  data: {
    stores: []
  },
  async created() {
    // fetch the collectors edition
    res = await fetch('http://localhost:3000');
    json = await res.json();
    this.stores = await json.collectors.pc.retail;
  }
});
