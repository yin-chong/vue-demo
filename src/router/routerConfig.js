import Menu from '@/pages/Menu'
import Upload from '@/pages/Upload'
import Editor from '@/pages/Editor'
import Animation from '@/pages/Animation'
import Star from '@/pages/Star'
import ironMan from '@/pages/ironMan'
import Shape from '@/pages/Shape'
import Vuex from '@/pages/Vuex'
import VueDND from '@/pages/VueDND'
import Reckon from '@/pages/BF/Reckon'
import Result from '@/pages/BF/Result'

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
  },
  {
    path: '/Animation',
    name: 'Animation',
    component: Animation,
    meta: ['CSS动画']
  },
  {
    path: '/Star',
    name: 'Star',
    component: Star,
    meta: ['星空']
  },
  {
    path: '/ironMan',
    name: 'ironMan',
    component: ironMan,
    meta: ['钢铁侠']
  },
  {
    path: '/Shape',
    name: 'Shape',
    component: Shape,
    meta: ['CSS绘制形状']
  },
  {
    path: '/Vuex',
    name: 'Vuex',
    component: Vuex,
    meta: ['Vuex']
  },
  {
    path: '/VueDND',
    name: 'VueDND',
    component: VueDND,
    meta: ['VueDND']
  },
  {
    path: '/Reckon',
    name: 'Reckon',
    component: Reckon,
    meta: ['保费计算']
  },
  {
    path: '/Result',
    name: 'Result',
    component: Result,
    meta: ['保费计算结果']
  }
]
