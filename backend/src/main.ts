import server from "./server";

const PORT = 3000

server.listen(PORT, () => {
  console.log('listen on port ' + PORT)
})