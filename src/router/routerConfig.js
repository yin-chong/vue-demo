import Menu from '@/pages/menu'
import Upload from '@/pages/Upload'
import Editor from '@/pages/Editor'
import Animation from '@/pages/Animation'
import ironMan from '@/pages/ironMan'
import Vuex from '@/pages/Vuex'
import VueDND from '@/pages/VueDND'
import stack from '@/pages/stack'
import queue from '@/pages/queue'
import Set from '@/pages/Set'
import myLinkedList from '@/pages/myLinkedList'
import Sass from '@/pages/Sass'
import Loading from '@/pages/Loading'
import Radio from '@/pages/Radio'
import calendar from '@/pages/calendar'
import keep from '@/pages/keep/keep'
import keep1 from '@/pages/keep/keep1'
import myTable from '@/pages/myTable'
import markDown from '@/pages/markDown'
import directive from '@/pages/directive'
import GoJs from '@/pages/GoJs'
import hotPoint from '@/pages/hotPoint'
import tree from '@/pages/tree'

export default [{
    path: '*',
    redirect: 'Menu'
  },
  {
    path: '/Menu',
    component: Menu,
    name: 'Menu',
    meta: {
      index: 0,
      title: 'Vue-Demo',
      keep: true
    }
  },
  {
    path: '/Upload',
    name: 'Upload',
    component: Upload,
    meta: {
      index: 1,
      title: '图片裁剪'
    }
  },
  {
    path: '/Editor',
    name: 'Editor',
    component: Editor,
    meta: {
      index: 1,
      title: '富文本编辑器'
    }
  },
  {
    path: '/Animation',
    name: 'Animation',
    component: Animation,
    meta: {
      index: 1,
      title: 'CSS动画'
    }
  },
  {
    path: '/ironMan',
    name: 'ironMan',
    component: ironMan,
    meta: {
      index: 1,
      title: '钢铁侠'
    }
  },
  {
    path: '/Vuex',
    name: 'Vuex',
    component: Vuex,
    meta: {
      index: 1,
      title: 'Vuex'
    }
  },
  {
    path: '/VueDND',
    name: 'VueDND',
    component: VueDND,
    meta: {
      index: 1,
      title: 'VueDND'
    }
  },
  {
    path: '/stack',
    name: 'stack',
    component: stack,
    meta: {
      index: 1,
      title: '栈'
    }
  },
  {
    path: '/queue',
    name: 'queue',
    component: queue,
    meta: {
      index: 1,
      title: '队列'
    }
  },
  {
    path: '/myLinkedList',
    name: 'myLinkedList',
    component: myLinkedList,
    meta: {
      index: 1,
      title: '链表'
    }
  },
  {
    path: '/Set',
    name: 'Set',
    component: Set,
    meta: {
      index: 1,
      title: '集合'
    }
  },
  {
    path: '/Sass',
    name: 'Sass',
    component: Sass,
    meta: {
      index: 1,
      title: 'Sass'
    }
  },
  {
    path: '/Radio',
    name: 'Radio',
    component: Radio,
    meta: {
      index: 1,
      title: 'Radio'
    }
  },
  {
    path: '/Loading',
    name: 'Loading',
    component: Loading,
    meta: {
      index: 1,
      title: 'Loading'
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: calendar,
    meta: {
      index: 1,
      title: '日历'
    }
  },
  {
    path: '/myTable',
    name: 'myTable',
    component: myTable,
    meta: {
      index: 1,
      title: '自动化表格'
    }
  },
  {
    path: '/markDown',
    name: 'markDown',
    component: markDown,
    meta: {
      index: 1,
      title: 'MarkDown'
    }
  },
  {
    path: '/directive',
    name: 'directive',
    component: directive,
    meta: {
      index: 1,
      title: '指令'
    }
  },
  {
    path: '/GoJs',
    name: 'GoJs',
    component: GoJs,
    meta: {
      index: 1,
      title: 'GoJs'
    }
  },
  {
    path: '/hotPoint',
    name: 'hotPoint',
    component: hotPoint,
    meta: {
      index: 1,
      title: '热点图'
    }
  },
  {
    path: '/tree',
    name: 'tree',
    component: tree,
    meta: {
      index: 1,
      title: '树图'
    }
  },
  {
    path: '/keep',
    name: 'keep',
    component: keep,
    meta: {
      index: 1,
      title: 'keep',
      keep: true
    }
  },
  {
    path: '/keep1',
    name: 'keep1',
    component: keep1,
    meta: {
      index: 2,
      title: 'Loading',
      keep: true
    }
  }
]