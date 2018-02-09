let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/mydb'

/**
 * @class
 * @classdesc 数据库 */
class MongoDB {
    constructor() {
        this.mongoDB = ''
        this.DB = ''
    }

    /**
     * @function
     * @description 连接数据库 */
    open () {
        let that = this
        MongoClient.connect(url, (err, db) => {
            if(err) throw err
            console.log('数据库已创建')
            that.DB = db
            that.mongoDB = db.db('mydb')
        })
    }

    /**
     * @function
     * @description 关闭数据库 */
    close () {
        this.DB.close()
    }
}

exports.MongoDB = MongoDB