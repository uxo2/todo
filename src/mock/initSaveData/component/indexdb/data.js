import Mock from "mockjs-async"

export const links = [
  { name: '世界之妖，带你走进妖怪的世界', link: 'https://www.cbaigui.com/' },
  { name: '雪花之美，领略另一种风域', link: 'http://www.snowcrystals.com/guide/guide.html' },
  { name: 'CSS绚丽，创造五彩斑斓的黑', link: 'https://codepen.io/' },
  { name: 'Vue技术内幕，走进源码世界', link: 'http://caibaojian.com/vue-design/art/' },
  { name: '知乎之前端饭碗，日常学习平台', link: 'https://www.zhihu.com/collection/286882025' },
  { name: 'js拖动，有趣拖动库', link: 'https://github.com/Jexordexan/vue-slicksort' },
  { name: 'vuedraggable，大型拖动库', link: 'https://github.com/SortableJS/Vue.Draggable' },
  { name: '数据库基础， 扫盲', link: 'https://wujun234.github.io/2018/12/18/07' },
  { name: '煎蛋-最新有趣头条，无聊去处', link: 'http://jandan.net/' },
  { name: '紫云飞博客，日常膜拜大佬', link: 'https://www.cnblogs.com/ziyunfei/' },
  { name: 'postimage，免费图片托管工具', link: 'https://postimages.org/' },
  { name: 'cssgradient 渐变颜色选取工具', link: 'https://cssgradient.io/' },
  { name: 'DWB - 简单理解的文章', link: 'https://davidwalsh.name/' },
  { name: 'David Walsh 博客', link: 'https://davidwalsh.name/' },
  { name: 'stylint，css样式校验工具', link: 'https://stylelint.io/' },
  { name: '掘金 - 文章浏览网站', link: 'https://juejin.im/' },
  { name: 'webpack 源码分析', link: 'https://webpack.wuhaolin.cn/' },
  { name: 'codepen - 引力', link: 'https://codepen.io/akm2/pen/rHIsa' },
  { name: 'CSS灵感', link: 'https://chokcoco.github.io/CSS-Inspiration' },
  { name: 'axios源码分析', link: 'https://github.com/ronffy/axios-tutorial' },
  { name: 'vode canvas', link: 'http://voidcanvas.com/?s=' },
  { name: 'leetCode', link: 'https://leetcode-cn.com/' },
  { name: '牛客网', link: 'https://www.nowcoder.com/' },
  { name: '看目录就行', link: 'https://devopen.club/course/chromedevtools' },
  { name: 'survivejs 文章浏览', link: 'https://survivejs.com/react/introduction/' },
  { name: '材料设计，UI和前端首选的样式', link: 'https://www.mdui.org/design/patterns/data-formats.html#data-formats-date-time' },
  { name: 'markyun博客', link: 'https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions' },
  { name: 'lifesinger博客', link: 'https://github.com/lifesinger/blog' },
  { name: 'techfoco博客', link: 'https://techfoco.com/' },
  { name: '大前端面试题', link: 'http://bigerfe.com/' },
  { name: 'FE-Interview博客', link: 'https://blog.poetries.top/FE-Interview-Questions/docs/base.html' },
  { name: 'Advanced博客', link: 'https://github.com/Advanced-Frontend/Daily-Interview-Question/issues' },
  { name: 'mqyqingfeng博客', link: 'https://github.com/mqyqingfeng/Blog/issues' },
  { name: 'ly2011博客', link: 'https://github.com/ly2011/blog/issues' },
  { name: 'yygmind博客', link: 'https://github.com/yygmind/blog/issues' },
  { name: '算法网', link: 'http://ddrv.cn/' },
  { name: 'react学习', link: 'https://github.com/reactnativecn/react-native-guide' },
  { name: '人人FED', link: 'https://www.rrfed.com/' },
  { name: '码农头条', link: 'http://hao.caibaojian.com.cn/' }
]

export const tags = [
  { name: '大块文章', id: Mock.mock('@guid'), color: '#598ed4', icon: '' },
  { name: '探索未知', id: Mock.mock('@guid'), color: '#598ed4', icon: '' },
  { name: '工作上班', id: Mock.mock('@guid'), color: '#5243aa', icon: '' },
  { name: '随记乐趣', id: Mock.mock('@guid'), color: '#ffab00', icon: '' },
  { name: '思考意义', id: Mock.mock('@guid'), color: '#598ed4', icon: '' },
  { name: '情感心事', id: Mock.mock('@guid'), color: '#598ed4', icon: '' },
  { name: '其他模块', id: Mock.mock('@guid'), color: '#598ed4', icon: '' }
]
export const issueTypeList = [
  {
    id: Mock.mock('@guid'),
    icon: 'icon-shujuzhongjian',
    color: '#0065ff',
    label: '工作',
    moreIcon: ['icon-gongzuo', 'icon-code', 'icon-all-fill', 'icon-all', 'icon-auto', 'icon-raw', 'icon-discounts-fill', 'icon-tuishui']
  },
  {
    id: Mock.mock('@guid'),
    icon: 'icon-shenghuo',
    color: '#E6A23C',
    label: '生活',
    moreIcon: ['icon-process', 'icon-waihuishuju', 'icon-read2', 'icon-pic-fill', 'icon-landtransportation']
  }
]

export const progressStateList = [
  {
    name: "未开始",
    link: "not-start",
    id: Mock.mock('@guid')
  },
  {
    name: "处理中",
    link: "doing",
    id: Mock.mock('@guid')
  },
  {
    name: "已完成",
    link: "finish",
    id: Mock.mock('@guid')
  },
  {
    name: "关闭",
    link: "close",
    id: Mock.mock('@guid')
  }
]

export const sprints = [
  {
    title: '针对个人体型和身体素质合理筛选健身运动、指导视频并设计一套长期的基础健身计划方案',
    urgencyLevel: 5, // 紧急度
    issueDesc: Mock.mock('@cparagraph(10, 20)'), // 描述
    issueType: 'life', // 类型
    issueRemark: Mock.mock('@cparagraph(10, 20)'), // 备注
    createTime: Mock.mock('@date("yyyy/MM/dd")'), // 创建时间
    updateTime: Mock.mock('@date("yyyy/MM/dd")'), // 最近更新
    tag: tags[6], // 模块
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid') // 唯一id
  },
  {
    title: '#文章 | 正则表达式的常用校验',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[5],
    moduleState: progressStateList[1],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#文章 | 函数柯里化',
    urgencyLevel: 4,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'worK',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[5],
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#文章 | 节流和防抖',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'worK',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[5],
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#随记 | 购买腾讯云服务器并搭建完成',
    urgencyLevel: 6,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[5],
    moduleState: progressStateList[2],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#随记 | 购买.com域名并进行备案',
    urgencyLevel: 5,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[5],
    moduleState: progressStateList[2],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#文章 | HTTP状态码',
    urgencyLevel: 2,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[5],
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#文章 | popoer.js源码分析',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[5],
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#code | 构建新项目',
    urgencyLevel: 1,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[5],
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: 'GIT FLS如何管理二进制大文件',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '根据国内外养殖业的行情设计一套在线查询网站',
    urgencyLevel: 4,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '准备素描工具和bilibili选取学习教程',
    urgencyLevel: 4,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '新建项目animals | 搜集各类有趣生物信息',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '选购100本学习书籍， 存入管理器项目中',
    urgencyLevel: 5,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '新建项目 | 搜集心理学、哲学',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '新建项目 | 收集世界范围有趣新闻娱乐',
    urgencyLevel: 6,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#开源项目 | npm | 编写一个npm包并发布',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#大块文章 | #JS 类型转换和如何防错',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: progressStateList[0],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#大块文章 | #CSS 电池充电',
    urgencyLevel: 6,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#大块文章 | #Nodejs 爬虫实现和防爬',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'work',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: progressStateList[1],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#大块文章 | #Git git基本操作和常用插件及其配置',
    urgencyLevel: 5,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: progressStateList[1],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#大块文章 | #babel babel编译class的过程和技巧展示',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#日常学习 | 写作 | JS异步操作 | 发展历程、区别以及优缺点',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: progressStateList[1],
    type: 'active',
    id: Mock.mock('@guid')
  },
  {
    title: '#日常学习 | 写作 | CSS常用函数',
    urgencyLevel: 4,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#日常学习 | 写作 | JS内存泄露',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#鬼怪项目 | 初始一项鬼怪项目(收集世界范围内的鬼怪)',
    urgencyLevel: 6,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[2],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#清理记录 | 注销常用网站App内的隐私敏感信息, 删除无用App',
    urgencyLevel: 1,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#写作 | 设计2020年下半年度的计划书',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#写作 | 撰写一篇文章恐怖小说',
    urgencyLevel: 1,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#设计 | 设计未来十年内的工作时间线',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#工作 | 发布一个todo项目关联的UI组件库todo-components',
    urgencyLevel: 3,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#新建项目 | 开始制作小游戏',
    urgencyLevel: 1,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  },
  {
    title: '#写作 | 坚持日记',
    urgencyLevel: 2,
    issueDesc: Mock.mock('@cparagraph(3, 10)'),
    issueType: 'life',
    issueRemark: Mock.mock('@cparagraph(3, 10)'),
    createTime: Mock.mock('@date("yyyy/MM/dd")'),
    updateTime: Mock.mock('@date("yyyy/MM/dd")'),
    tag: tags[6],
    moduleState: null,
    type: 'backlog',
    id: Mock.mock('@guid')
  }
]
