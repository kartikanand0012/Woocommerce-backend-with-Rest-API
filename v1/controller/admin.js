const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const moment = require("moment");

const wooCommerce = new WooCommerceRestApi({
  url: process.env.URL,
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.SECRET,
  version: "wc/v3",
  queryStringAuth: true,
});

module.exports = {
  order: async (req, res) => {
    try {
      const after = req.query.after;
      const before = req.query.before;
      const orderData = await wooCommerce.get(
        `orders?orderby=date&order=asc&after=${after}T00:00:00Z&before=${before}T23:59:59Z&page=${req.query.page}`,
        {
          per_page: 5, // 5 products per page
        }
      );
      console.log(orderData.data);
      res.send(orderData.data).status(200);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  allProducts: async (req, res) => {
    try {
      const listAllProducts = await wooCommerce.get(
        `products?orderby=title&order=asc&page=${req.query.page}`,
        {
          per_page: 2, // 5 products per page
        }
      );
      console.log(listAllProducts.data);
      res.send(listAllProducts.data).status(200);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
