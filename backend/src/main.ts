import server from './server'

const wendyASCI: string = `
    _      _                          
    |  |  /                    /      
    | /| /     __    __    __ /       
    |/ |/    /___) /   ) /   /   /   /
    /  |    (___  /   / (___/   (___/ 
                                   /  
                               (_ /   
  `

const PORT = 3000

server.listen(PORT, () => {
  console.log(`
  ${wendyASCI}
  \n\n
  ⚡⚡  Server Running on port ${PORT} ⚡⚡
  \n
    Click to here  👉  http://localhost:${PORT}
  `)
})
