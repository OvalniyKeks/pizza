<template>
  <div class="main">

    <div class="container">
      <Carousel
        class="m-mb-lg m-mb-md-m"
        :slides-per-page='8'
        :slides-per-page-mobile='3'
      >
        <Category
          v-for="(cat, i) of categories"
          :key="`category-main-page-${i}`"
          :category='cat'
        />
      </Carousel>
    </div>

    <div class="container">
      <Carousel
        class="m-mb-lg"
        :slides-per-page='4'
        :slides-per-page-mobile='1'
      >
        <Sale
          v-for="(sale, i) of sales"
          :key="`sale-main-page-${i}`"
          :sale='sale'
        />
      </Carousel>
    </div>

    <div class="container">
      <CheckAddress />
    </div>

    <div class="container">
      <Section
        v-for="(category, i) of categories"
        :key="`main-categories-section-${i}`"
        :id="category.id"
      >
        <SectionTitle class="m-mb-lg">{{category.label}}</SectionTitle>

        <SectionProducts>
          <Product
            v-for="(product, i) of category.products"
            :key="`main-product-section-${i}`"
            :product='product'
          />
        </SectionProducts>

      </Section>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  // Удалить потом
  async asyncData ({ store }) {
    const images = [
      'https://oran-g.ru/images/com_hikashop/upload/thumbnails/500x500f/apiProducts/b4103df5-e0ef-4071-a5cb-8a32fcd2c694.jpg',
      'https://freepngimg.com/thumb/pizza/46-pizza-png-image.png',
      'https://pngimg.com/uploads/pizza/small/pizza_PNG44046.png'
    ]
    for (let i = 0; i < 8; i++) {
      const obj = {
        id: Date.now() / Math.random(),
        new: Math.floor(Math.random() * (1 - 0 + 1)) + 0,
        top: Math.floor(Math.random() * (1 - 0 + 1)) + 0,
        image: images[Math.floor(Math.random() * (2 - 0 + 2)) + 0],
        label: 'Чикен Сладкий Чили',
        description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус',
        weight: '400 г',
        type: [
          {
            id: 0,
            label: 'Традиционное'
          },
          {
            id: 1,
            label: 'Тонкое'
          }
        ],
        price: [
          {
            id: 0,
            price: 289,
            size: 20
          },
          {
            id: 1,
            price: 380,
            size: 28
          },
          {
            id: 2,
            price: 400,
            size: 33
          },
        ],
        modificators: [
          {
            id: 0,
            icon: 'mocarella',
            label: 'Моцарелла',
            price: 59
          },
          {
            id: 1,
            icon: 'mocarella',
            label: 'Шампиньоны',
            price: 59
          },
          {
            id: 2,
            icon: 'mocarella',
            label: 'Красный лук',
            price: 59
          },
          {
            id: 3,
            icon: 'mocarella',
            label: 'Сладкий перец',
            price: 59
          },
        ]
      }
      store.commit('products/set_products', obj)
    }
  },
  computed: {
    categories () {
      return this.$store.state.products.categories
    },
    sales () {
      return this.$store.state.sale.sales
    }
  }
}
</script>
