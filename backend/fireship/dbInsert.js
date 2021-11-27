function saveToDb(){
    fs.readFile(db, "utf8", (err, data) => {
      if (err) throw err

      // IF IS EMPTY
      if (data.length == 0) {
        fs.appendFile(db, "[" + sendData + ",", err => {
          if (err) throw err
          console.log("File successfully written to empty database.")
        })

        // IF IS HAS DATA
      } else if (data.includes("]")) {
        // CHECK THE CLOSING ]
        console.log(data.indexOf("]"))
        console.log(data)
        console.log(data.length)
        let newData = data.substring(0, data.length - 1)
        fs.writeFile(db, "", err => {
          if (err) throw err
        })
        fs.appendFile(db, newData + "]", err => {
          if (err) throw err
          console.log("File successfully written to database.")
        })
      } else {
        // IF IS THE SECOND ENTRY IN DB
        fs.appendFile(db, sendData + "]", err => {
          if (err) throw err
          console.log("File successfully written to database.")
        })
      }
    })
}