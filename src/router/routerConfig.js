import Menu from '@/pages/Menu'
import Upload from '@/pages/Upload'
import Editor from '@/pages/Editor'
import Animation from '@/pages/Animation'
import Star from '@/pages/Star'
import ironMan from '@/pages/ironMan'
import Shape from '@/pages/Shape'
import Vuex from '@/pages/Vuex'
import VueDND from '@/pages/VueDND'
import Map from '@/pages/Map'
import iTable from '@/pages/iTable'
import stack from '@/pages/stack'
import queue from '@/pages/queue'
import Set from '@/pages/Set'
import myLinkedList from '@/pages/myLinkedList'

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
    path: '/Map',
    name: 'Map',
    component: Map,
    meta: ['Map']
  },
  {
    path: '/iTable',
    name: 'iTable',
    component: iTable,
    meta: ['表格']
  },
  {
    path: '/stack',
    name: 'stack',
    component: stack,
    meta: ['栈']
  },
  {
    path: '/queue',
    name: 'queue',
    component: queue,
    meta: ['队列']
  },
  {
    path: '/myLinkedList',
    name: 'myLinkedList',
    component: myLinkedList,
    meta: ['链表']
  },
  {
    path: '/Set',
    name: 'Set',
    component: Set,
    meta: ['集合']
  }
]
