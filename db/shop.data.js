import { downloadCovers } from './downloader';
import { useItems } from '.';

export default {
  async load() {
    const products = await useItems('products',
      {
        sort: ['sort'],
        fields: [
          '*',
          {
            category: ['slug', 'title', 'products'],
            reviews: ['*']
          }
        ]
      })

    const categories = await useItems('categories',
      {
        sort: ['sort'],
        fields: [
          '*',
          {
            products: ['*',
              {
                category: ['slug', 'title', 'products']
              }]
          }
        ]
      })

    await downloadCovers(products, 'products')
    await downloadCovers(categories, 'categories')


    const delivery_types = await useItems('delivery_types')

    const docs = await useItems('docs')

    return {
      products,
      categories,
      delivery_types,
      docs
    }
  }
}


