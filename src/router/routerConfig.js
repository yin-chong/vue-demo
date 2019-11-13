import Menu from '@/pages/Menu'
import Upload from '@/pages/Upload'

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
    path: '/Upload',
    name: 'Upload',
    component: Upload,
    meta: ['图片上传']
  }
]
