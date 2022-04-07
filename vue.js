const app = Vue.createApp({
  data() {
    return {
      products: [
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-blue-2-600x600.jpg",
          name: "SP A",
          price: 60,
          isCart: false,
        },
        {
          thumb:
            "https://vcdn-sohoa.vnecdn.net/2021/11/11/iPhone-5282-1636615544.jpg",
          name: "SP B",
          price: 150,
          isCart: false,
        },
        {
          thumb:
            "https://hc.com.vn/i/ecommerce/media/GS.006049_FEATURE_70846.jpg",
          name: "SP C",
          price: 300,
          isCart: false,
        },
        {
          thumb:
            "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/Tao-hinh-iPhone-14-Pro-cuc-sac-net-dep-khong-ti-vet-iphone-14-pro-1-1648569111-487-width660height472.jpeg",
          name: "SP D",
          price: 500,
          isCart: false,
        },
        {
          thumb:
            "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/Tao-hinh-iPhone-14-Pro-cuc-sac-net-dep-khong-ti-vet-iphone-14-pro-1-1648569111-487-width660height472.jpeg",
          name: "SP D",
          price: 5040,
          isCart: false,
        },
        {
          thumb:
            "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/Tao-hinh-iPhone-14-Pro-cuc-sac-net-dep-khong-ti-vet-iphone-14-pro-1-1648569111-487-width660height472.jpeg",
          name: "SP D",
          price: 10,
          isCart: false,
        },
        {
          thumb:
            "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/Tao-hinh-iPhone-14-Pro-cuc-sac-net-dep-khong-ti-vet-iphone-14-pro-1-1648569111-487-width660height472.jpeg",
          name: "SP D",
          price: 50,
          isCart: false,
        },
        {
          thumb:
            "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/Tao-hinh-iPhone-14-Pro-cuc-sac-net-dep-khong-ti-vet-iphone-14-pro-1-1648569111-487-width660height472.jpeg",
          name: "SP D",
          price: 900,
          isCart: false,
        },
        {
          thumb:
            "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/Tao-hinh-iPhone-14-Pro-cuc-sac-net-dep-khong-ti-vet-iphone-14-pro-1-1648569111-487-width660height472.jpeg",
          name: "SP D",
          price: 800,
          isCart: false,
        },
        {
          thumb:
            "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/Tao-hinh-iPhone-14-Pro-cuc-sac-net-dep-khong-ti-vet-iphone-14-pro-1-1648569111-487-width660height472.jpeg",
          name: "SP D",
          price: 700,
          isCart: false,
        },
        {
          thumb:
            "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/Tao-hinh-iPhone-14-Pro-cuc-sac-net-dep-khong-ti-vet-iphone-14-pro-1-1648569111-487-width660height472.jpeg",
          name: "SP D",
          price: 200,
          isCart: false,
        },
        {
          thumb:
            "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/Tao-hinh-iPhone-14-Pro-cuc-sac-net-dep-khong-ti-vet-iphone-14-pro-1-1648569111-487-width660height472.jpeg",
          name: "SP D",
          price: 1000,
          isCart: false,
        },
      ],
      userPrice: "",
      isShow: true,
    };
  },
  methods: {
    toggleCart(e, product) {
      product.isCart = !product.isCart;
    },
    onFil() {
      if (userPrice == "") {
        console.log("s");
      }
    },
  },
  computed: {
    productsComputed() {
      if (this.userPrice !== "") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
      console.log(this.products);
      return this.products.filter((product) => product.price < this.userPrice);
    },
  },
});

app.mount("#contact");
