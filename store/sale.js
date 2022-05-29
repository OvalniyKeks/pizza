import imageSale from '../assets/images/example_sale.png'
import imageSaleOne from '../assets/images/example_sale_1.png'

export const state = () => ({
  sales: [
    {
      id: Date.now() / Math.random(),
      label: '3 средние пиццы <br> от 999 рублей',
      image: imageSale
    },
    {
      id: Date.now() / Math.random(),
      label: 'Кэшбек 10% на <br> самовывоз (доставка)',
      image: imageSaleOne
    },
    {
      id: Date.now() / Math.random(),
      label: '3 средние пиццы <br> от 999 рублей',
      image: imageSale
    },
    {
      id: Date.now() / Math.random(),
      label: 'Кэшбек 10% на <br> самовывоз (доставка)',
      image: imageSaleOne
    },
    {
      id: Date.now() / Math.random(),
      label: '3 средние пиццы <br> от 999 рублей',
      image: imageSale
    },
    {
      id: Date.now() / Math.random(),
      label: 'Кэшбек 10% на <br> самовывоз (доставка)',
      image: imageSaleOne
    },
    {
      id: Date.now() / Math.random(),
      label: '3 средние пиццы <br> от 999 рублей',
      image: imageSale
    },
    {
      id: Date.now() / Math.random(),
      label: 'Кэшбек 10% на <br> самовывоз (доставка)',
      image: imageSaleOne
    },
    {
      id: Date.now() / Math.random(),
      label: '3 средние пиццы <br> от 999 рублей',
      image: imageSale
    },
    {
      id: Date.now() / Math.random(),
      label: 'Кэшбек 10% на <br> самовывоз (доставка)',
      image: imageSaleOne
    },
    {
      id: Date.now() / Math.random(),
      label: '3 средние пиццы <br> от 999 рублей',
      image: imageSale
    },
    {
      id: Date.now() / Math.random(),
      label: 'Кэшбек 10% на <br> самовывоз (доставка)',
      image: imageSaleOne
    },
    {
      id: Date.now() / Math.random(),
      label: '3 средние пиццы <br> от 999 рублей',
      image: imageSale
    },
    {
      id: Date.now() / Math.random(),
      label: 'Кэшбек 10% на <br> самовывоз (доставка)',
      image: imageSaleOne
    },
    
  ]
})

export const mutations = {
  set_sales (state, payload) {
    state.sales = payload
  }
}

export const getters = {
}

export const actions = {}
