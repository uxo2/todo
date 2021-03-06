const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')
const baseurl = 'https://zhuanlan.zhihu.com/p/'
const promiseList = [];
const zhihu = [58349237, 87667349, 130812111, 64033141, 77782049, 84386456, 151342495, 140004463, 139286000, 130884857, 53599723]
const urls = [
  {
    type: 'technology',
    name: '技术',
    source: 'https://www.zhihu.com/',
    sourceName: '知乎',
    value: zhihu
  },
  {
    type: 'technology',
    name: '技术',
    source: 'https://www.zhihu.com/',
    sourceName: 'github',
    value: zhihu
  }
].map(v => ({...v, value: v.value.map(t => baseurl + t)}))

urls.forEach((p, i) => {
  console.log('开始爬取数据....')
  p.value.forEach(url => {
    promiseList.push(
      // eslint-disable-next-line promise/param-names
      new Promise((res, rej) => {
        axios.get(url).then(response => {
          const $ = cheerio.load(response.data)
          res({
            type: p.type,
            name: p.name,
            source: p.source,
            sourceName: p.sourceName,
            content: '',
            url,
            title: $('.Post-Title').eq(0).text().trim(),
            author: $('.AuthorInfo-head').eq(0).text().trim(),
            awatar: $('.Avatar.Avatar--round.AuthorInfo-avatar').eq(0).attr('src'),
            homePageLink: `https:${$('.UserLink-link').eq(0).attr('href')}`,
          })
        })
      })
    )
  })
})
Promise.all(promiseList).then(
  data => {
    console.log('爬虫下载完成, 开始存储数据....')
    fs.readFile(path.join(__dirname, '../data/article.json'), 'utf-8', (err, v) => {
      if (err) throw err;
      fs.writeFile(path.join(__dirname, '../data/article.json'), JSON.stringify(data, null, "\t"), 'utf8', (err) => {
        if (err) throw err;
        console.log('存储完成');
      })
    })
  }
)
