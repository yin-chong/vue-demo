// 栈
export class Stack {
  // 栈中的属性
  constructor (items) {
    this.items = []
  }
  // 元素入栈
  push (el) {
    this.items.push(el)
  }
  // 移除栈顶元素，返回被移除的元素
  pop () {
    return this.items.pop()
  }
  // 返回栈顶的元素，不对栈做任何的修改
  peek () {
    return this.items[this.items.length - 1]
  }
  // 判断栈是否为空
  isEmpty () {
    return this.items.length === 0
  }
  // 返回栈里元素的个数
  size () {
    return this.items.length
  }
  // 将栈结构的内容以字符形式返回
  toString () {
    return this.items.join('')
  }
}

// 队列
export class Queue {
  constructor (items) {
    this.items = []
  }
  // 添加元素
  enqueue (el) {
    this.items.push(el)
  }
  // 移除队列的首项，并返回被移除的元素
  dequeue () {
    return this.items.shift()
  }
  // 返回第一个元素，不操作队列
  front () {
    return this.items[0]
  }
  // 判断是否为空
  isEmpty () {
    return this.items.length === 0
  }
  // 返回元素个数
  size () {
    return this.items.length
  }
  // 队列中的内容转成字符串形式
  toString () {
    return this.items.join('')
  }
}

// 优先级队列
class QueueElement {
  constructor (element, priority) {
    [this.element, this.priority] = [element, priority]
  }
}
export class PriorityQueue {
  constructor (items) {
    this.items = []
  }
  // 判断是否为空
  isEmpty () {
    return this.items.length === 0
  }
  // 长度
  size () {
    return this.items.length
  }
  // 插入
  enqueue (element, priority) {
    let queueElement = new QueueElement(element, priority)
    // 如果数组为空
    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < this.size(); i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = !added
          break
        }
      }
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
  // 删除
  dequeue () {
    return this.items.shift()
  }
  // 返回第一个元素，不操作队列
  front () {
    return this.items[0]
  }
  // 队列中的内容转成字符串形式
  toString () {
    let s = ''
    this.items.forEach(el => {
      s += el.element
    })
    // return this.items.join('')
    return s
  }
}

// 链表
class Node {
  constructor (data, next) {
    [this.data, this.next] = [data, null]
  }
}
export class LinkedList {
  constructor (head, length) {
    [this.head, this.length] = [null, 0]
  }

  append (data) {
    let newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length += 1
  }

  toString () {
    let [listString, current] = ['', this.head]
    while (current) {
      listString += current.data
      current = current.next
    }
    return listString
  }

  insert (position, data) {
    //  position为负或者超出长度 返回false
    if (position < 0 || position > this.length) return false
    let newNode = new Node(data)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let [current, index, previous] = [this.head, 0, null]
      while (index++ < position) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode

      this.length += 1
      return true
    }
  }

  get (position) {
    if (position < 0 || position >= this.length) return null
    let [current, index] = [this.head, 0]
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  indexOf (data) {
    let [current, index] = [this.head, 0]
    while (current) {
      if (current.data === data) {
        return index
      } else {
        current = current.next
        index += 1
      }
    }
    return -1
  }

  update (position, newData) {
    if (position < 0 || position >= this.length) return false
    let [current, index] = [this.head, 0]
    while (index++ < position) {
      current = current.next
    }
    current.data = newData
    return true
  }

  removeAt (position) {
    if (position < 0 || position >= this.length) return null
    let [current, index, previous] = [this.head, 0, null]
    if (position === 0) {
      this.head = this.head.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length -= 1
    return current.data
  }

  remove (data) {
    let position = this.indexOf(data)
    return this.removeAt(position)
  }

  isEmpty () {
    return this.length === 0
  }

  size () {
    return this.length
  }
}

// 双向链表
class DoublyNode {
  constructor (data, prev, next) {
    [this.data, this.prev, this.next] = [data, null, null]
  }
}
export class DoublyLinkedList {
  constructor (head, tail, length) {
    [this.head, this.tail, this.length] = [null, null, 0]
  }

  append (data) {
    let newNode = new DoublyNode(data)
    if (this.length === 0) {
      [this.head, this.tail] = [newNode, newNode]
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
  }

  backwardString () {
    let [current, resultString] = [this.head, '']
    while (current) {
      resultString += current.data
      current = current.next
    }
    return resultString
  }

  forwardString () {
    let [current, resultString] = [this.tail, '']
    while (current) {
      resultString += current.data
      current = current.prev
    }
    return resultString
  }

  toString () {
    return this.backwardString()
  }

  insert (position, data) {
    if (position < 0 || position > this.length) return false
    let newNode = new DoublyNode(data)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position === 0) {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      } else if (position === this.length) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        let [current, index] = [this.head, 0]
        while (index++ < position) {
          current = current.next
        }
        newNode.prev = current.prev
        newNode.next = current
        current.prev.next = newNode
        current.prev = newNode
      }
    }
    this.length += 1
    return true
  }

  get (position) {
    if (position < 0 || position >= this.length) return null
    let index, current
    // 双向链表从前或从后遍历都可以
    if (this.length / 2 > position) {
      [index, current] = [0, this.head]
      while (index++ < position) {
        current = current.next
      }
    } else {
      index = this.length - 1
      current = this.tail
      while (index-- > position) {
        current = current.prev
      }
    }
    return current.data
  }

  indexOf (data) {
    let [current, index] = [this.head, 0]
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index += 1
    }
    return -1
  }

  update (position, newData) {
    if (position < 0 || position >= this.length) return false
    let current, index
    if (this.length / 2 > position) {
      [current, index] = [this.head, 0]
      while (index++ < position) {
        current = current.next
      }
      current.data = newData
    } else {
      [current, index] = [this.tail, this.length - 1]
      while (index-- > position) {
        current = current.prev
      }
      current.data = newData
    }
    return true
  }

  removeAt (position) {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      if (position === 0) {
        current.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        current = this.tail
        current.prev.next = null
        this.tail = current.prev
      } else {
        let index
        if (this.length / 2 > position) {
          index = 0
          while (index++ < position) {
            current = current.next
          }
        } else {
          [index, current] = [this.length - 1, this.tail]
          while (index-- > position) {
            current = current.prev
          }
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    this.length -= 1
    return current.data
  }

  remove (data) {
    let position = this.indexOf(data)
    return this.removeAt(position)
  }

  isEmpty () {
    return this.length === 0
  }

  size () {
    return this.length
  }

  getHead () {
    if (this.length === 0) return null
    return this.head.data
  }

  getTail () {
    if (this.length === 0) return null
    return this.tail.data
  }
}

// 集合
export class Set {
  constructor (items) {
    this.items = {}
  }

  add (value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }

  has (value) {
    return this.items.hasOwnProperty(value)
    // return value in this.items
  }

  remove (value) {
    if (!this.has(value)) return false
    delete this.items[value]
    return true
  }

  clear () {
    this.items = {}
  }

  size () {
    return Object.keys(this.items).length
  }

  values () {
    return Object.keys(this.items)
  }

  union (otherSet) {
    let unionSet = new Set()
    this.values().forEach(el => {
      unionSet.add(el)
    })
    otherSet.values().forEach(el => {
      unionSet.add(el)
    })
    return unionSet
  }

  intersection (otherSet) {
    let interSection = new Set()
    otherSet.values().forEach(el => {
      if (this.has(el)) interSection.add(el)
    })
    return interSection
  }

  difference (otherSet) {
    let diffSet = new Set()
    this.values().forEach(el => {
      if (!otherSet.has(el)) diffSet.add(el)
    })
    return diffSet
  }

  subSet (oteherSet) {
    try {
      oteherSet.values().forEach(el => {
        console.log(el)
        if (!this.has(el)) throw new Error('End')
      })
    } catch (e) {
      if (e.message === 'End') return false
    }
    return true
  }
}
