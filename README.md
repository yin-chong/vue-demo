## 栈(stack)
受限的线性表,后进先出(LIFO),仅允许在栈顶进行插入删除操作 <br>
实现栈的两种常见方式：
+ 基于数组
+ 基于链表
栈的常见操作
+ push(data): 添加一个新元素到栈顶位置
+ pop(): 移除栈顶的元素,同时返回被移除的元素
+ peek(): 返回栈顶的元素,不对栈做任何的修改
+ isEmpty(): 判断栈是否为空
+ size(): 返回栈里元素的个数
+ toString(): 将栈结构的内容以字符形式返回
## 队列(queue)
受限的线性表,先进先出(FIFO)。只允许在表的前端(front)进行删除操作,在表的后端(rear)进行插入操作 <br>
常见的两种实现方式:
+ 基于数组
+ 基于链表(性能更高一点)
队列的常见操作
+ enqueue(data): 向队列尾部添加一个或多个新的项
+ dequeue(): 移除队列的第一项,并返回被移除的元素
+ front(): 返回队列中第一个元素,队列不做任何变动
+ isEmpty(): 判读队列是否为空
+ size(): 返回队列包含的元素个数
+ toString(): 将队列中的内容以字符串的形式返回
## 优先级队列(PriorityQueue)
普通的队列插入一个元素,数据被放在后端,需前面所有元素处理完后才会处理该数据 <br>
优先级队列在插入一个元素的时候会考虑该数据的优先级 <br>
优先级队列的常见操作
+ enqueue(data,priority): 向队列尾部添加一个新的项
+ dequeue(): 移除队列的第一项,并返回被移除的元素
+ front(): 返回队列中第一个元素,队列不做任何变动
+ isEmpty(): 判读队列是否为空
+ size(): 返回队列包含的元素个数
+ toString(): 将队列中的内容以字符串的形式返回
## 链表(LinkedList)
链表的每个元素由一个存储元素本身的节点和指向下一个元素的指针组成 <br>
优点
+ 内存空间不是必须连续的,可以充分利用计算机内存
+ 不必在创建时就确定大小,并且大小可以无限制延伸下去
+ 插入删除数据时,时间复杂度可以达到O(1),相对数组效率高很多
缺点
+ 访问任何一个元素都要从头开始访问
+ 无法通过下标直接访问元素
常见的操作
+ append(data) 链表尾部追加数据
+ toString() 元素值拼接
+ insert(position, data) 列表特定位置插入一个新的项
+ update(position, newData) 修改某个位置的元素
+ get(position) 获取某个位置的data
+ indexOf(data) 返回元素在链表中的索引,没有则返回-1
+ removeAt(position) 链表某个位置删除元素
+ remove(data) 链表删除某个元素
## 双向链表(DoublyLinkedList)
一个节点既有向前连接的引用,也有一个向后连接的引用,可以从头遍历到尾,也可以从尾遍历到头 <br>
缺点
+ 每次插入或删除某个节点，要处理4个引用
+ 相比于单向链表，占用内存空间更大
常见的操作
+ append(data): 列表尾部添加一个新的项
+ toString(): 元素值拼接
+ forwardString(): 从后向前遍历的节点字符串形式
+ backwardString(): 从前向后遍历的节点字符串形式
+ insert(position, data): 链表特定位置插入一个新的项
+ get(position): 获取对应位置的元素
+ indexOf(data): 返回元素在列表中的索引，如果没有则返回-1
+ update(position, newData): 修改某个位置的元素
+ removeAt(position): 从链表特定位置移除一项
+ remove(data): 从链表删除一项
+ isEmpty(): 判断是否为空
+ size(): 获取链表长度
+ getHead(): 获取第一个元素
+ getTail(): 获取最后一个元素
## 集合(Set)
无序的不能重复的元素构成，不能通过下标值进行访问 <br>
常见操作
+ add(value): 添加一个新项
+ remove(value): 从集合中移除一个值
+ has(value): 判断集合是否有该值
+ clear(): 清除集合中所有项
+ size(): 集合包含的元素的数量
+ values(): 返回一个包含集合中所有值的数组
+ union(otherSet): 并集
+ intersection(otherSet): 交集
+ difference(otherSet): 差集
+ subset(otherSet): 判断otherSet是否是该集合的子集
## 哈希表()
通常基于数组实现，可以提供快速的插入和删除操作，无论多少数据，插入和删除需要接近O(1)的时间级。 <br>
缺点
+ 哈希表中的数据没有顺序，不能以一种固定的方式比如从大到小来遍历其中的元素
+ 通常情况下，哈希表中的key不允许重复，不能放置相同的key
哈希化: 将大数组转化为数组范围内下标的过程 <br>
哈希函数: 将单词转成大数字，大数字在进行哈希化的代码实现放在一个函数中，这个函数称为哈希函数。 <br>
哈希表: 最终将数据插入到的这个数组，对整个结构的封装，称为哈希表。 <br>
解决冲突
+ 链地址法(拉链法)
+ 开放地址法