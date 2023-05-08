import { ProductHttpService } from "./services/product-http.service";

(async () => {

  try {
    const productService = new ProductHttpService()

    console.log('---'.repeat(10))
    console.log('getAll')
    const products = await productService.getAll();
    console.log(products.length)
    console.log(products.map(product => product.price));

    const productId = products[0].id;
    console.log('---'.repeat(10))
    console.log('update')
    await productService.update(productId, {
      price: 10000,
      title: 'new title',
      description: 'new description'
    })

    console.log('---'.repeat(10))
    console.log('findOne')
    const product = await productService.findOne(productId);
    console.log(product);

  }catch(err:any) {
    console.error(err.response.data);
  }

})()
