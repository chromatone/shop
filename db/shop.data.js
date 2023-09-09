import { downloadCovers } from './downloader';
import { useItems } from '.';

export default {
  async load() {
    const products = await useItems('products',
      {
        filter: {
          status: {
            _eq: 'published'
          },

        },
        fields: [
          '*',
          { category: ['slug'] }
        ]
      })

    const categories = await useItems('categories',
      {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        fields: [
          '*',
          {
            products: ['*',
              { category: ['slug'] }]
          }
        ]
      })

    await downloadCovers(products, 'products')
    await downloadCovers(categories, 'categories')

    return {
      products,
      categories
    }
  }
}


