
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import speakeasy from "@levminer/speakeasy"
import QRCode from 'qrcode'


const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors(
    {
        origin: ["http://localhost:3001"],
        methods: ["POST, GET, PUT"],
        credentials: true  
    }
))


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'register'
})

// QRCode.toDataURL(secret.otpauth_url, (err, data)=> {
//     if (err) return console.log(err)
//     return data
// })



const verifyUser = (req, res, next) => {
    
    const token = req.cookies.token
    if(!token) {
        return res.json({Message: "Please login"})
    } else {
        jwt.verify(token, "the-jsonwebtoken-secrett-key-pairforlogin", (err, decoded) => {
            if(err) {
                return res.json({Message: "Authentication Error"})
            } else {
                req.name = decoded.name
                next()
            }
        })
    }
}

app.get('/dashboard', verifyUser, (req, res) => {
    return res.json({Status: "Success", name: req.name})
})

app.put('/starttwofac', (req, res)=> {
    try {
        let secret = speakeasy.generateSecret({
            name: 'WeHodler'
        })
        
        const sql = "UPDATE users SET `secret` = ? WHERE `uuid` = ?"

        db.query(sql, [secret.base32, req.body.uuid], (err, result)=> {
            if(err) return res.json("Error")
            return res.json({text: secret.base32})
        })
        
        
    } catch(e) {
        console.log(e)
        return res.json({mesage: 'Error generating secret key' })
    }

})

app.put('/disabletwofac', (req, res)=> {
    try {
        const sql = "UPDATE users SET `authy` = ?  WHERE `uuid` = ?"

        db.query(sql, [req.body.authy, req.body.uuid], (err, result)=> {
            if(err) return res.json("Error")
            return res.json({updated: true})
        })
        
    } catch (error) {
        console.log(error)
        return res.json({mesage: 'Error disabling two-factor authentication' })
    }
})


app.post('/verifyauthy', (req, res)=> {
    const sql = "SELECT * FROM users WHERE `uuid` = ?"
    db.query(sql, [req.body.uuid], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        if(data.length > 0) {
            const sec = data[0].secret
            const verified = speakeasy.totp.verify({
                secret: sec,
                encoding: 'base32',
                token: req.body.token
            })
           
            if (verified) {
                return res.json({verified: true})
            } else {
                return res.json({verified: false})
            } 
        }
    })
})

app.put('/updateauthy', (req, res)=> {
    const sql = "UPDATE users SET `authy` = ?  WHERE `uuid` = ?"

    db.query(sql, [req.body.authy, req.body.uuid], (err, result)=> {
        if(err) return res.json("Error")
        return res.json({updated: true})
    })
})

app.post('/signup', (req, res)=> {
    const sql = "INSERT INTO users (`email`, `password`, `country`, `uuid`, `authy`) VALUES (?)"
    const values = [
        req.body.email,
        req.body.password,
        req.body.country,
        req.body.uuid,
        req.body.authy
    ]
    db.query(sql, [values], (err, data)=> {
        if(err) {
            return res.json("Error")
        }
        return res.json(data)
    })
})

app.post('/fulluser', (req, res)=> {
    const sql = "INSERT INTO fulluser (`uuid`, `firstname`, `lastname`, `email`, `dob`,  `country`, `zipcode`, `address`, `optin`,  `beneficial`, `moi`) VALUES (?)"
    const values = [
        req.body.uuid,
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.dob,
        req.body.country,
        req.body.zipcode,
        req.body.address,
        req.body.optin,
        req.body.beneficial,
        req.body.moi,
    ]
    db.query(sql, [values], (err, data)=> {
        if(err) {
            return res.json("Error")
        }
        return res.json(data)
    })
})

app.post('/deposit', (req, res)=> {
    const sql = "INSERT INTO deposits (`uuid`, `method`, `amount`, `type`) VALUES (?)"
    const values = [
        req.body.uuid,
        req.body.method,
        req.body.amount,
        req.body.type
    ]
    db.query(sql, [values], (err, data)=> {
        if(err) {
            return res.json("Error")
        } else {
            return res.json(data)
        }
    })
})

app.post('/withdraw', (req, res)=> {
    const sql = "INSERT INTO withdrawal (`uuid`, `method`, `amount`, `network`, `txid`, `address`, `type`) VALUES (?)"
    const values = [
        req.body.uuid,
        req.body.method,
        req.body.amount,
        req.body.network,
        req.body.txid,
        req.body.address,
        req.body.type
    ]
    db.query(sql, [values], (err, data)=> {
        if(err) {
            return res.json("Error")
        } else {
            return res.json(data)
        }
    })
})

app.post('/loan', (req, res)=> {
    const sql = "INSERT INTO loans (`uuid`, `method`, `amount`, `ltv`, `loan`) VALUES (?)"
    const values = [
        req.body.uuid,
        req.body.method,
        req.body.amount,
        req.body.ltv,
        req.body.loan,
    ]
    db.query(sql, [values], (err, data)=> {
        if(err) {
            return res.json("Error")
        } else {
            return res.json(data)
        }
    })
})

app.post('/savings', (req, res)=> {
    const sql = "INSERT INTO savings (`uuid`, `method`, `amount`, `amountusd`, `duration`, `totalreturn`, `status`) VALUES (?)"
    const values = [
        req.body.uuid,
        req.body.method,
        req.body.amount,
        req.body.amountusd,
        req.body.duration,
        req.body.totalreturn,
        req.body.status
    ]
    db.query(sql, [values], (err, data)=> {
        if(err) {
            return res.json("Error")
        } else {
            return res.json(data)
        }
    })
})

app.post('/hodler', (req, res)=> {
    const sql = "INSERT INTO hodler (`uuid`, `currency`, `mainid`, `amount`, `price`, `multiplier`, `takeprofit`, `stoploss`, `direction`, `status`, `exitprice`) VALUES (?)"
    const values = [
        req.body.uuid,
        req.body.currency,
        req.body.mainid,
        req.body.amount,
        req.body.price,
        req.body.multiplier,
        req.body.takeprofit,
        req.body.stoploss,
        req.body.direction,
        req.body.status,
        req.body.exitprice,
    ]
    db.query(sql, [values], (err, data)=> {
        if(err) {
            return res.json("Error")
        } else {
            return res.json(data)
        }
    })
})

app.post('/depositdata', (req, res)=> {
    const sql = "SELECT * FROM deposits WHERE `uuid` = ? AND `method` = ?"

    db.query(sql, [req.body.uuid, req.body.method], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        if(data.length > 0) {
            return res.json({Status: "Success", data: data})
        } else {
            return res.json({Message: "No deposits"})
        }
    })
})

app.post('/withdrawaldata', (req, res)=> {
    const sql = "SELECT * FROM withdrawal WHERE `uuid` = ? AND `method` = ?"

    db.query(sql, [req.body.uuid, req.body.method], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        if(data.length > 0) {
            return res.json({Status: "Success", data: data})
        } else {
            return res.json({Message: "No deposits"})
        }
    })
})

app.post('/alldeposits', (req, res)=> {
    const sql = "SELECT * FROM deposits WHERE `uuid` = ?"
    
    db.query(sql, [req.body.uuid], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        return res.json(data)
    })
})

app.post('/allwithdrawals', (req, res)=> {
    const sql = "SELECT * FROM withdrawal WHERE `uuid` = ?"
    
    db.query(sql, [req.body.uuid], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        return res.json(data)
    })
})

app.post('/loandata', (req, res)=> {
    const sql = "SELECT * FROM loans WHERE `uuid` = ?"
    
    db.query(sql, [req.body.uuid], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        return res.json(data)
    })
})


app.post('/savingsdata', (req, res)=> {
    const sql = "SELECT * FROM savings WHERE `uuid` = ?"
    
    db.query(sql, [req.body.uuid], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        return res.json(data)
    })
})


app.post('/currentsavingsdata', (req, res)=> {
    const sql = "SELECT * FROM savings WHERE `uuid` = ? AND `status` = ?"
    
    db.query(sql, [req.body.uuid, req.body.status], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        return res.json(data)
    })
})

app.post('/hodlerdata', (req, res)=> {
    const sql = "SELECT * FROM hodler WHERE `uuid` = ?"
    
    db.query(sql, [req.body.uuid], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        return res.json(data)
    })
})

app.put('/updatehodlerdata', (req, res)=> {
    const sql = "UPDATE hodler SET `exitprice` = ?, `status` = ? WHERE `id` = ?"

    db.query(sql, [req.body.exitprice, req.body.status, req.body.id], (err, result)=> {
        if(err) return res.json("Error")
        return res.json({updated: true})
    })

})

app.put('/updatefulluserdata', (req, res)=> {
    const sql = "UPDATE fulluser SET `phone` = ?  WHERE `uuid` = ?"

    db.query(sql, [req.body.phone, req.body.uuid], (err, result)=> {
        if(err) return res.json("Error")
        return res.json({updated: true})
    })

})

app.put('/delete-user/:id', (req, res)=> {
    const sql = "DELETE FROM `users` WHERE `uuid` = ?"
    const uuid = req.params.id

    db.query(sql, [uuid], (err, data)=> {
        if(err) return res.json("Server error")
        return res.json({updated: true})
    })
})

app.post('/uniquehodlerdata', (req, res)=> {
    const sql = "SELECT * FROM hodler WHERE `uuid` = ? AND `id` = ?"
    
    db.query(sql, [req.body.uuid, req.body.id], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        return res.json(data)
    })
})


app.post('/fetchauthstatus', (req, res)=> {
    const sql = "SELECT * FROM users WHERE `email` = ?"
    db.query(sql, [req.body.email], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        if(data.length > 0) {
            const sec = data[0].secret
            const verified = speakeasy.totp.verify({
                secret: sec,
                encoding: 'base32',
                token: req.body.token,
                window: 1
            })
            console.log(verified)
            if (verified) {
                return res.json({verified: true, data: data[0]})
            } else {
                return res.json({verified: false})
            } 
        }
    })
})

app.post('/signin', (req, res)=> {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?"
    
    db.query(sql, [req.body.email, req.body.password], (err, data)=> {
        if(err) {
            return res.json({Message: "Server Error"})
        }
        if(data.length > 0) {
            const name = data[0].name
            const authyy = data[0].authy
            
            const token = jwt.sign({name}, "the-jsonwebtoken-secrett-key-pairforlogin", {expiresIn: "1d"})
            res.cookie("token", token)
            if (authyy === 'enabled') {
                return res.json({Status: "Pending", data: data[0]})
            } else if (authyy === 'disabled') {
                return res.json({Status: "Success", data: data[0]})
            }
        } else {
            return res.json({Message: "Login Failed"})
        }
    })
})




app.get('/logout', (req,res)=> {
    res.clearCookie("token")
    return res.json({Status: "Successfully logged out"})
})

app.listen(8080, ()=> {
    console.log('listening')
})