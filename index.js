const app = new Vue({
  el: '#app',
  data: {
    stores: [],
  },
  async created() {
    // fetch the collectors edition
    res = await fetch('http://localhost:3000');
    json = await res.json();
    this.stores = await json.collectors.pc.retail;
  },
});

Vue.component('countdown', {
  template: `
    <p>Time to release: </p>
    <p>99h 99m 99s</p>
  `,
});
