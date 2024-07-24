import bs58 from 'bs58'

const address = ''
const decoded = bs58.decode(address)

console.log(JSON.stringify(Array.from(decoded)))