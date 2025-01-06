import { useItems } from "../../../db"

export default {
  async paths() {

    const docs = await useItems('docs', {
      fields: [
        '*',
      ]
    })

    return docs.map(doc => {
      let content = doc.content
      delete doc.content
      return {
        params: {
          ...doc
        },
        content
      }
    })
  }
}