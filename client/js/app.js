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
      const { data } = await axios.get('http://localhost:3000/immos');
      this.immos = data;
    },
    async delData(id) {
      await axios.delete(`http://localhost:3000/immos/${id}`);
      this.getData();
    },
    async changeData() {
      await axios.patch(`http://localhost:3000/immos/${this.id}`, { price: Number(this.price) });
      this.getData();
    },
    loadPrice(id, price) {
      this.price = price;
      this.id = id;
    },
  },
};

createApp(myApp).mount('#app');
