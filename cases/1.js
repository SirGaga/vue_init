const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《Unix编程艺术》',
				date: '2008-10',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 128.00,
				count: 1
			},
		]
	},
	computed: {
		totalPrice(){
			
			// let totalPrice = 0.00;
			// for in
			// for(let i in this.books) {
			// 	totalPrice = totalPrice + (this.books[i].price * this.books[i].count);
			// }
			// return totalPrice; 

			// for of
			// for(let book of this.books){
			// 	totalPrice = totalPrice + (book.price * book.count);
			// }
			// return totalPrice; 
			return this.books.reduce((e1,e2) =>e1+(e2.price*e2.count),0)
		}
	},
	methods: {
		decrement(index) {
			this.books[index].count>=1?this.books[index].count --:0;
		},
		increment(index) {
			this.books[index].count ++;
		},
		removeHandler(index){
			this.books.splice(index,1);
		}
	},
	filters: {
		showPrice(price){
			return '￥' + price.toFixed(2); 
		}
	}
})