const request = require('request');
const cheerio = require('cheerio')
const fs = require('fs');
let iconv = require('iconv-lite')
const async = require('async')
let mysql = require('mysql')
let filter = require('bloom-filter-x')

iconv.skipDecodeWarning = true;
// 初始化布隆过滤器
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'headline'
})

function touch() {
    let newUrl = [];
    let urls = [];
    let select_sql = 'select url from news ';
    connection.query(select_sql, (err, result, fields) => {
        if (err) throw err;
        result.forEach((v) => {
            let url = v.url;
            if (filter.add(url)) {
                urls.push(url)
            }
        })
    });
    request({
        url: 'http://news.zol.com.cn/trend/',
        encoding: null //默认编码方式无
    }, function (err, res, body) {
        body = iconv.decode(body, 'gb2312'); //修改编码方式为gb2312
        let $ = cheerio.load(body);
        $('.content-list li').each((k, v) => {
            let t = $(v).find('.info-head a');
            let title = t.text();
            let dsc = $(v).find('p').contents().eq(0).text();
            let image = $(v).find('img').attr('.src');
            let url = t.attr('href');
            let time = $(v).find('.foot-date').text()
            console.log(time)
            if (filter.add(url)) {
                urls.push(url)
                newUrl.push({
                    'cid':6,
                    'title': title,
                    'dsc': dsc,
                    'image': image,
                    'url': url,
                    'time':time
                })
            }
        });
        if (urls.length) {
            let d = new Date();
            console.log(d.toTimeString() + "抓取一次，本次更新" + urls.length + "条")
            async.eachLimit(newUrl, 1, (v, next) => {
                request({
                    url: v.url,
                    encoding: null
                }, function (err, res, body) {
                    if (err) {
                        console.log(err.message)
                    } else {
                        body = iconv.decode(body, 'gb2312');
                        let $ = cheerio.load(body);
                        let pubtime = v.time;
                        let content = $('#article-content').html()
                        let cid = v.cid;
                        let title = v.title;
                        let dsc = v.dsc;
                        let image = v.image;
                        let url = v.url;

                        let insert_sql = 'insert into news (cid,title,dsc,image,url,time,content) values (?,?,?,?,?,?,?)';
                        connection.query(insert_sql, [cid,title, dsc, image, url, pubtime, content], (err, result, fields) => {
                            if (err) throw err;
                            console.log('finish')
                        })

                    }
                });
                next(null)
            })
        } else {
            let d = new Date();
            console.log(d.toTimeString() + "抓取一次，本次未更新")

        }
    })
}
touch()
setInterval(touch, 2*60*60*1000);
