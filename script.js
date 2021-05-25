const app = Vue.createApp({
	data() {
		return {
			products: [
				{name: "Comida", amount: 500},
				{name: "Bebida", amount: 350},
				{name: "Postre", amount: 100}
			],
			product: ""
		}
	},

	methods: {
		addProduct() {
			this.products.push({name: this.product, amount: 50})
			this.product = ""
		}
	},
	computed: {
		total() {
			return this.products.reduce((counter, item) => counter + item.amount, 0)
		}
	}
})
const vm = app.mount('#app')
