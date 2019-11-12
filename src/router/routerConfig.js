import Menu from '@/pages/Menu'
import cropper from '@/pages/Cropper'

export default [
  {
    path: '*',
    redirect: 'Menu'
  },
  {
    path: '/Menu',
    component: Menu
  },
  {
    path: '/cropper',
    name: 'cropper',
    component: cropper,
    meta: ['图片裁剪']
  }
]
