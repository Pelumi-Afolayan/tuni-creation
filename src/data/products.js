export const products = [
  {
    id: 'aso-oke-bundle',
    name: 'Aso Oke Bundle',
    category: 'aso-oke',
    collection: 'bundle',
    price: 25000,

    // We will replace this with the real product image later.
    image: '',

    description:
      'A bundle of Aso Oke available for traditional and creative pieces.',

    // The customer purchases this product by bundle.
    unit: 'bundle',

    // The minimum quantity a customer can add to the cart.
    minimumQuantity: 1,

    // This product does not currently have an optional add-on.
    addOns: [],
  },

  {
    id: 'aso-oke-plain-complete-set',
    name: 'Plain Groom and Bride Complete Set',
    category: 'aso-oke',
    collection: 'complete-set',
    price: 150000,
    image: '',

    description:
      'A complete plain Aso Oke set prepared for the bride and groom.',

    includes: {
      bride: ['Iro', 'Ipele', 'Gele', 'Buba'],
      groom: ['Agbada', 'Two caps'],
    },

    addOns: [
      {
        id: 'sokoto-and-dansiki',
        name: 'Sokoto and Dansiki',
        price: 50000,
      },
    ],
  },

  {
    id: 'aso-oke-two-tone-complete-set',
    name: 'Two-Tone Groom and Bride Complete Set',
    category: 'aso-oke',
    collection: 'complete-set',
    price: 250000,
    image: '',

    description:
      'A complete two-tone Aso Oke set prepared for the bride and groom.',

    includes: {
      bride: ['Iro', 'Ipele', 'Gele', 'Buba'],
      groom: ['Agbada', 'Two caps'],
    },

    addOns: [
      {
        id: 'sokoto-and-dansiki',
        name: 'Sokoto and Dansiki',
        price: 50000,
      },
    ],
  },

  {
    id: 'aso-oke-vintage-complete-set',
    name: 'Vintage Groom and Bride Complete Set',
    category: 'aso-oke',
    collection: 'complete-set',
    price: 250000,
    image: '',

    description:
      'A complete vintage Aso Oke set prepared for the bride and groom.',

    includes: {
      bride: ['Iro', 'Ipele', 'Gele', 'Buba'],
      groom: ['Agbada', 'Two caps'],
    },

    addOns: [
      {
        id: 'sokoto-and-dansiki',
        name: 'Sokoto and Dansiki',
        price: 50000,
      },
    ],
  },
]