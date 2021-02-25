// --- any ---//

const getServerData = (): any => {
  return 'some data'
}

const response = getServerData()

response.a.b.c()
response()[3].text()

// --- unknown ---//

// const getServerData = (): unknown => {
//   return 'some data'
// }

// const response = getServerData()

// response.a.b.c()
// response()[3].text()

// if (typeof response === 'string') {
//   response.toLowerCase()
// } else if (typeof response === 'object') {
//   if (response === null) {
//     console.log('null')
//   } else if ('data' in response) {
//     console.log(response.data)
//   }
// }
