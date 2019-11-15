import Menu from '@/pages/Menu'
import Upload from '@/pages/Upload'
import Editor from '@/pages/Editor'

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
  },
  {
    path: '/Editor',
    name: 'Editor',
    component: Editor,
    meta: ['富文本编辑器']
  }
]
