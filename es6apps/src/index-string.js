//variables,literals,types -  string
let firstName = "Subramanian"
let lastName = 'Murugan'
//string concatnation

let fullName = firstName + lastName // traditional 
console.log("Name " + fullName)
console.log("Name " , fullName)

//back tick 
fullName = `${firstName} ${lastName}`
console.log(`Name ${fullName}`) // string interpoltion

//multi line strings
let doc = `
   <html>
      <head>
          <title></title>
      </head>
    <body>
    </body>
 </html>
`
console.log(doc)