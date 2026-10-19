export default {
  orders: [
    {
      _id: 101,
      createdAt: '10/12/2026',
      totalPrice: 120.0,
      user: { name: 'Alex' },
      isShipped: true,
      shippedAt: '10/14/2026'
    },
    {
      _id: 102,
      createdAt: '10/15/2026',
      totalPrice: 65.5,
      user: { name: 'Jordan' },
      isShipped: false,
      shippedAt: null
    },
    {
      _id: 103,
      createdAt: '10/16/2026',
      totalPrice: 210.0,
      user: { name: 'Taylor' },
      isShipped: true,
      shippedAt: '10/17/2026'
    },
    {
      _id: 104,
      createdAt: '10/18/2026',
      totalPrice: 45.0,
      user: { name: 'Morgan' },
      isShipped: false,
      shippedAt: null
    }
  ]
};