import Mock from "mockjs"

export default {
	thus: {
		list: obj => {
			let result = [
				{name: '世界之妖，带你走进妖怪的世界', link: 'https://www.cbaigui.com/'},
				{name: '雪花之美，领略另一种风域', link: 'http://www.snowcrystals.com/guide/guide.html'},
				{name: 'CSS绚丽，创造五彩斑斓的黑', link: 'https://codepen.io/'},
				{name: 'Vue技术内幕，走进源码世界', link: 'http://caibaojian.com/vue-design/art/'},
				{name: '知乎之前端饭碗，日常学习平台', link: 'https://www.zhihu.com/collection/286882025'},
				{name: 'js拖动，有趣拖动库', link: 'https://github.com/Jexordexan/vue-slicksort'},
				{name: 'vuedraggable，大型拖动库', link: 'https://github.com/SortableJS/Vue.Draggable'},
				{name: '数据库基础， 扫盲', link: 'https://wujun234.github.io/2018/12/18/07'},
				{name: '煎蛋-最新有趣头条，无聊去处', link: 'http://jandan.net/'},
				{name: '紫云飞博客，日常膜拜大佬', link: 'https://www.cnblogs.com/ziyunfei/'},
				{name: 'postimage，免费图片托管工具', link: 'https://postimages.org/'},
				{name: 'cssgradient 渐变颜色选取工具', link: 'https://cssgradient.io/'},
				{name: 'DWB - 简单理解的文章', link: 'https://davidwalsh.name/'},
				{name: 'David Walsh 博客', link: 'https://davidwalsh.name/'},
				{name: 'stylint，css样式校验工具', link: 'https://stylelint.io/'},
				{name: '掘金 - 文章浏览网站', link: 'https://juejin.im/'},
				{name: 'webpack 源码分析', link: 'https://webpack.wuhaolin.cn/'},
				{name: 'codepen - 引力', link: 'https://codepen.io/akm2/pen/rHIsa'},
				{name: 'CSS灵感', link: 'https://chokcoco.github.io/CSS-Inspiration'},
				{name: 'axios源码分析', link: 'https://github.com/ronffy/axios-tutorial'},
				{name: 'vode canvas', link: 'http://voidcanvas.com/?s='},
				{name: 'leetCode', link: 'https://leetcode-cn.com/'},
				{name: '牛客网', link: 'https://www.nowcoder.com/'},
				{name: '看目录就行', link: 'https://devopen.club/course/chromedevtools'},
				{name: 'survivejs 文章浏览', link: 'https://survivejs.com/react/introduction/'},
				{name: '材料设计，UI和前端首选的样式', link: 'https://www.mdui.org/design/patterns/data-formats.html#data-formats-date-time'},
				{name: 'markyun博客', link: 'https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions'},
				{name: 'lifesinger博客', link: 'https://github.com/lifesinger/blog'},
				{name: 'techfoco博客', link: 'https://techfoco.com/'},
				{name: '大前端面试题', link: 'http://bigerfe.com/'},
				{name: 'FE-Interview博客', link: 'https://blog.poetries.top/FE-Interview-Questions/docs/base.html'},
				{name: 'Advanced博客', link: 'https://github.com/Advanced-Frontend/Daily-Interview-Question/issues'},
				{name: 'mqyqingfeng博客', link: 'https://github.com/mqyqingfeng/Blog/issues'},
				{name: 'ly2011博客', link: 'https://github.com/ly2011/blog/issues'},
				{name: 'yygmind博客', link: 'https://github.com/yygmind/blog/issues'},
				{name: '算法网', link: 'http://ddrv.cn/'},
				{name: 'react学习', link: 'https://github.com/reactnativecn/react-native-guide'}
			]

			return {
				status: 200,
				data: result
			}
		}
	},
	sprints: {
		sprintList: obj => {
			function sprintListFn() {
				let pointsTotal = 0;
				let total = Math.ceil(Math.random() * 10) + 10
				let issueList = [];
				let i = 0

				while (i < total) {
					let points = Math.ceil(Math.random() * 10)
					issueList.push({
						name: Mock.mock('@cname'),
						order: i,
						level: Math.ceil(Math.random() * 5),
						link: `INHOPE-${Math.ceil(Math.random() * 9000) + 1000}`,
						type: Math.random() > 0.5 ? 'needs' : 'bug',
						title: Mock.mock('@csentence(20, 40)'),
						fixed: Math.random() > 0.5,
						points,
						implementStatus: ['doing', 'not-start', 'finish'][Math.floor(Math.random() * 3)]
					})
					pointsTotal += points
					i++
				}

				return {
					issueList,
					pointsTotal,
					total
				}
			}

			let result = []

			for (let i = 0; i < 25; i++) {
				let v = sprintListFn()

				result.push({
					id: Mock.mock('@guid'),
					title: `sprint${i}`,
					createTime: Mock.mock('@date("yyyy/MM/dd")'),
					endTime: Mock.mock('@date("yyyy/MM/dd")'),
					status: i >= 23 ? 'doing' : 'done',
					count: v.total,
					issueList: v.issueList,
					pointsTotal: v.pointsTotal
				})
			}
			return {
				status: 200,
				data: {
					sprintList: result.reverse()
				}
			}
		},
		backlogList: obj => {
			let result = []
			let i = 0;
			let total = Math.ceil(Math.random() * 60) + 60

			while (i < total) {
				result.push({
					name: Mock.mock('@cname'),
					order: i,
					link: `INHOPE-${Math.ceil(Math.random() * 9000) + 1000}`,
					type: Math.random() > 0.5 ? 'needs' : 'bug',
					level: Math.ceil(Math.random() * 5),
					title: Mock.mock('@csentence(20, 40)'),
					fixed: Math.random() > 0.5,
					implementStatus: null,
					points: Math.random() > 0.7 ? Math.ceil(Math.random() * 10) : null
				})
				++i
			}
			return {
				status: 200,
				data: {
					total,
					sprintList: result
				}
			}
		}
	},
	article: {
		menu: obj => {
			return {
				status: 200,
				data: [
					{
						name: '技术型',
						link: 'technology',
						children: [
							{name: 'JS/HTML/CSS', link: 'javaScript'},
							{name: '协议/网络/存储', link: 'agreement'},
							{name: '算法/leetCode', link: 'leetCode'},
							{name: '浏览器/内核', link: 'browser'},
							{name: '包管理器/webpack', link: 'webpack'},
							{name: '小程序', link: 'applet'}
						]
					},
					{
						name: '工具类',
						link: '/tool',
						children: [
							{name: '开发', link: '/dev'},
							{name: '测试', link: '/test'},
							{name: '其他', link: '/tool/others'}
						]
					},
					{
						name: '生活类',
						link: '',
						children: [
							{name: '故事', link: '/stroy'},
							{name: 'SCP', link: '/scp'},
							{name: '游戏', link: '/games'}
						]
					}
				]
			}
		},
		list: obj => {
			let result = []
			let len = obj.pageSize

			while (len > 0) {
				result.push({
					'img': Math.random() > 0.5 ? Mock.Random.image('100x100') : null,	// logo
					'level': Math.ceil(Math.random() * 5),	// 文章阅读level
					'title': Mock.mock('@ctitle(10, 40)'),	// 文章标题
					'author': Mock.mock('@cname'),	// 文章作者
					'authorID': Mock.mock('@guid(10)'),	// 作者ID
					'content': Mock.mock('@cparagraph(7, 17)'),	// 简短内容
					'articleID': Mock.mock('@id'),	// 文章唯一ID
					'praise|1-100': 100, // 文章点赞数量
					'publish': Mock.mock('@date()')	// 文章发布时间
				})
				-- len
			}

			return {
				status: 200,
				data: {
					list: result,
					total: 1000,
					sortBy: obj.sortBy,
					pageSize: obj.pageSize,
					currentPage: obj.currentPage
				}
			}
		}
	},
	header: {
		getMenu: obj => {
			let result = [
				{name: '大块文章', link: 'article'},
				{name: '事务分发', link: 'story'},
				{name: '兴趣使然', link: 'thus'},
				{name: '仪表盘', link: 'dashboard'},
				{name: '求知欲望', link: 'seekKnowledge'},
				{name: '美味厨房', link: 'kitchen'},
				{name: '途观旅游', link: 'tour'},
				{name: '市场楼盘', link: 'loupan'},
				{name: '原始生存', link: 'existence'},
				{name: '简单素描', link: 'Sketch'},
				{name: '眺望宇宙', link: 'universe'}
			]

			return {
				status: 200,
				data: result
			}
		}
	}
}
