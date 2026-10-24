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

    // ADIRE SETS

  {
    id: 'adire-brocade',
    name: 'Brocade Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 35250,
    image: '/images/adire-brocade.jpg',
    description:
      'A Brocade Adire set sold as one complete fabric package.',
    setSize: '4 yards + 20 inches',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-denim',
    name: 'Denim Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 30000,
    image: '/images/adire-denim.jpg',
    description:
      'A Denim Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-funtua',
    name: 'Funtua Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 35250,
    image: '',
    description:
      'A Funtua Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-plain-cotton',
    name: 'Plain Cotton Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 40625,
    image: '',
    description:
      'A Plain Cotton Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-linen',
    name: 'Linen Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 45000,
    image: '/images/adire-linen.jpg',
    description:
      'A Linen Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-soft-cotton',
    name: 'Soft Cotton Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 40625,
    image: '',
    description:
      'A Soft Cotton Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-cotton-silk',
    name: 'Cotton Silk Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 70500,
    image: '',
    description:
      'A Cotton Silk Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-chiffon',
    name: 'Chiffon Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 64125,
    image: '',
    description:
      'A Chiffon Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-crepe',
    name: 'Crepe Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 52000,
    image: '',
    description:
      'A Crepe Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-organza',
    name: 'Organza Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 52000,
    image: '',
    description:
      'An Organza Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  {
    id: 'adire-lycra',
    name: 'Lycra Adire Set',
    category: 'adire',
    collection: 'adire-set',
    price: 45000,
    image: '',
    description:
      'A Lycra Adire set sold in a fixed five-yard package.',
    setSize: '5 yards',
    unit: 'set',
    addOns: [],
  },

  // ADIRE READY-MADE ITEMS

  {
    id: 'adire-tshirt',
    name: 'Adire T-shirt',
    category: 'adire',
    collection: 'ready-made',
    price: 20000,
    image: '/images/adire-tshirt.jpg',
    description:
      'A ready-made T-shirt featuring an Adire design.',
    setSize: '1 piece',
    unit: 'piece',
    addOns: [],
  },

  {
    id: 'adire-scarf',
    name: 'Adire Scarf',
    category: 'adire',
    collection: 'accessory',
    price: 15000,
    image: '/images/adire-scarf.jpg',
    description:
      'A versatile scarf featuring an Adire design.',
    setSize: '1 piece',
    unit: 'piece',
    addOns: [],
  },

]