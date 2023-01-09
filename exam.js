const add_data = require("./add_data")
const read = require("./read")

const cmd = process.argv



var data = { 
    Employee: cmd[2],
    Role: cmd[3],
    Department: cmd[4]
}

var oldData = read()

add_data(data, oldData)