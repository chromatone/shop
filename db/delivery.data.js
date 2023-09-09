import { useItems } from '.';

export default {
  async load() {
    const ways = await useItems('delivery_types',
      {
        filter: {
          status: {
            _eq: 'published'
          },

        },
        fields: [
          '*'
        ]
      })



    return ways
  }
}


