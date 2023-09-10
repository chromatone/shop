import { useItems } from '.';

export default {
  async load() {
    const ways = await useItems('delivery_types')

    return ways
  }
}


