const { createApp } = Vue;

const myApp = {
  data() {
    return {
      immos: undefined,
      price: '',
      id: '',
    };
  },
  methods: {
    async getData() {
      const { data } = await axios.get('/immos');
      this.immos = data;
    },
    async delData(id) {
      await axios.delete(`/immos/${id}`);
      this.getData();
    },
    async changeData() {
      await axios.patch(`/immos/${this.id}`, { price: Number(this.price) });
      this.getData();
    },
    loadPrice(id, price) {
      this.price = price;
      this.id = id;
    },
  },
};

createApp(myApp).mount('#app');
