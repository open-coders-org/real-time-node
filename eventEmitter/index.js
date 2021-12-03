'use strict'

const { on, once, EventEmitter } = require('events')

const ee = new EventEmitter({ captureRejections: true })

async function main() {
  const value = await once(ee, 'ping')
  console.log(`Received: ${value}`)

  for await (const val of on(ee, 'ping')) {
    console.log(`Async iterator received ${val}`)
  }
}

setInterval(() => {
  ee.emit('ping', 'wenas noches')
}, 2000)

main()
