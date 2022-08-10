import db from '../db/index.js'

export async function getAllUser(req, res) {

    try {
        const [rows] = await db.query('select id, username, nickname from ev_users')
        res.send({
            status: 0,
            message: '查询结果成功',
            data: rows
        })
    } catch (e) {
        res.send({
            status: 0,
            message: '查询结果失败',
            data: e.message
        })
    }

}
