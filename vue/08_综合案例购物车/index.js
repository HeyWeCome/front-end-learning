Vue.createApp({
  template: "#my-app",
  data() {
    return {
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
          name: '《UNIX编程艺术》',
          date: '2006-2',
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
    }
  },
  computed: {
    totalPrice() {
      let finalPrice = 0;
      for (let book of this.books) {
        finalPrice += book.count * book.price;
      }
      return finalPrice;
    },
    // Vue3不支持过滤器了，推荐两种做法：使用计算属性；使用全局的方法
    // 给书籍价格添加标记
    filterBooks() {
      return this.books.map(item => {
        // 需要先复制一份，不然同时指向一个地址，会导致无法计算出价格
        const newItem = Object.assign({}, item);
        newItem.price = '¥' + item.price;
        return newItem;
      })
    }
  },
  methods: {
    // 增加书籍数量
    increment(index) {
      this.books[index].count++;
    },
    // 减少书籍数量
    decrement(index) {
      this.books[index].count--;
    },
    // 删除制定书籍
    removeBook(index) {
      this.books.splice(index, 1);
    },
    // 格式化数据，加上¥
    formatPrice(price) {
      return "¥"+price;
    }
  }
}).mount('#app');