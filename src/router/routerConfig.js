import menu from '@/pages/menu'

export default [
  {
    path: '*',
    redirect: menu
  },
  {
    path: '/menu',
    component: menu
  }
]
