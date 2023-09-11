import { downloadCovers } from './downloader';
import { useItems } from '.';

export default {
  async load() {
    const products = await useItems('products',
      {
        sort: ['sort'],
        fields: [
          '*',
          { category: ['slug'] }
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
                _sort: ['sort'],
                category: ['slug']
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


