const route = require("express").Router();
const database = require("..//configs/postgre")


exports.historyProduct = (req, res) => {
    database.query("select history.id, product.names, prices.price from history LEFT JOIN product ON history.product_id = product.id LEFT JOIN prices ON history.prices_id = prices.id", (err, result) => {
        if (err) {
            res.status(500).json({
                msg: "Internal Server Error!",
            });
            return;
        }
        res.status(200).json({
            data: result.rows
        });
    })
}
exports.product = (req, res) => {
    database.query(`select product.*, prices.price from product left join prices on prices.product_id = product.id where categories_id = '3' order by id ASC limit 10 `, (err, result) => {
        if (err) {
            res.status(500).json({
                msg: "Internal Server Error!",
            });
            return;
        }console.log(result);
        res.status(200).json({
            data: result.rows
        });
    })
}
exports.categories = (req, res) => {
    database.query(`select product.*, prices.price from product left join prices on prices.product.id = product.id where categories_id = '1' order by id ASC limit 10`, (err, result) => {
        if (err) {
            res.status(500).json({
                msg: "Internal Server Error!"
            }); return
        }
        res.status(200).json({
            data: result.rows
        });
    })
}

exports.promo = (req, res) => {
    database.query(`select promo.*, product.names from promo left join product on product.id = promo.product_id 
    where product_id = '${req.params.id}'`,
        (err, result) => {
            if (err) {
                res.status(500).json({
                    msg: "Internal Server Error!",
                })
                return
            }
            res.status(200).json({
                data: result.rows[0]
            });
        })
}

exports.addProduct = (req, res) => {
    const names = req.body.names,
        categories = req.body.categories_id,
        prices = req.body.prices;
    database.query(`insert into product (names, categories_id, prices) values ('${names}','${categories}', '${prices}') RETURNING id, names`,
        (err, result) => {
            if (err) {
                res.status(400).json({ data: `INSERT INTO product (names, categories_id, prices) VALUES('${names}','${categories}','${prices}')` })
            }
            res.status(200).json({
                data: result.rows
            })
        })
}
exports.addPromo = (req, res) => {
    // const names = req.body.names,
    //     coupon_desc = req.body.coupon_desc,
    //     coupon_code = req.body.coupon_code,
    //     coupon_expired = req.body.coupon_expired;
    const { coupon_desc, coupon_code, coupon_expired, created_at, product_id, discount } = req.body
    database.query(`INSERT INTO promo (coupon_desc, coupon_code, coupon_expired, created_at, product_id, discount) values ('${coupon_desc}', '${coupon_code}', '${coupon_expired}', '${created_at}', '${product_id}', '${discount}') RETURNING id`, (err, result) => {
        if (err) {
            res.status(500).json({
                msg: "Internal Server Error!"
            })
        }
        res.status(200).json({
            data: result.rows
        })
    })
}
exports.deleteHistory = (req, res) => {
    database.query(`delete from history where id = '${req.params.id}'`,
        (err, result) => {
            if (err) {
                res.status(500).json({
                    msg: "Internal Server Error!",
                })
                return
            }
            res.status(200).json({
                data: 'success'
            });
        })
}


exports.getSearchItems = (req, res) => {
    const limit = parseInt(req.query.limit) || 8
    const page = parseInt(req.query.page) || 1
    const sort = req.query.sort || 'asc'
    const order = req.query.order || 'created_at'
    const search = req.query.search || ''
    const pageInfo = {}
    itemsModel.getSearch(limit, page, sort, order, search, (err, results, _field) => {
      if (!err) {
        if (results.length > 0) {
          const data = [...results]
          data.forEach(items => {
            delete items.detail
          })
          itemsModel.getItemsCount(search, (err, resultCount, _fields) => {
            if (!err) {
              const totalData = resultCount[0].count
              const lastPage = Math.ceil(totalData / limit)
              pageInfo.totalData = totalData
              pageInfo.currentPage = page
              pageInfo.lastPage = lastPage
              pageInfo.limitData = limit
              pageInfo.nextPage = page < lastPage ? `${APP_URL}/items?search=${req.query.search}&order=${order}&sort=${sort}&page=${page + 1}` : null
              pageInfo.prevPage = page > 1 ? `${APP_URL}/items?search=${req.query.search}&order=${order}&sort=${sort}&page=${page - 1}` : null
              return standardResponse(res, 200, true, 'Search items', data, pageInfo)
            } else {
              return standardResponse(res, 500, false, 'An error occured')
            }
          })
        } else {
          return standardResponse(res, 404, false, 'Item not found')
        }
      } else {
        console.log(err)
        return standardResponse(res, 500, false, 'An error occured')
      }
    })
  }
