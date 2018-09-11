const request = require('request');
const cheerio = require('cheerio')
const fs = require('fs');
let iconv = require('iconv-lite')
const async = require('async')
let mysql = require('mysql')
let filter = require('bloom-filter-x')

iconv.skipDecodeWarning = true;

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'headline'
})
let newUrl = [];
let urls = [];
// 初始化布隆过滤器
function start() {
    let select_sql = 'select url from news ';
    connection.query(select_sql, (err, result, fields) => {
        if (err) throw err;
        result.forEach((v) => {
            let url = v.url;
            filter.add(url);
        });
        console.log('初始化完成');
        touch();
    });
}

function touch() {
    request({
        url: 'http://news.zol.com.cn/',
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

            if (filter.add(url)) {
                urls.push(url)
                newUrl.push({
                    'cid':3,
                    'title': title,
                    'dsc': dsc,
                    'image': image,
                    'url': url
                })
            }
        });
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
                        let pubtime = $('#pubtime_baidu').attr('content');
                        let content = $('#article-content').html()
                        let cid = v.cid;
                        let title = v.title;
                        let dsc = v.dsc;
                        let image = v.image;
                        let url = v.url;
                        let insert_sql = 'insert into news (cid,title,dsc,image,url,time,content) values (?,?,?,?,?,?,?)';
                        connection.query(insert_sql, [cid,title, dsc, image, url, pubtime, content], (err, result, fields) => {
                            if (err) throw err;
                            console.log('一条数据已添加')
                        })

                    }
                });
                next(null)
            }),
            () => {
                console.log("数据已添加完成")
                setInterval(touch, 2*60*60*1000);
            }
    })
}
start();

