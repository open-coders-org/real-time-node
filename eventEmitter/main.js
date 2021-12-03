const PubSub = require('./PubSub')

const pubSub = new PubSub()

pubSub.subscribe('feedback', (value) => {
  console.log(`Hay un nuevo ${value.title} en ${value.url}`)
})

setInterval(() => {
  pubSub.publish('feedback', {
    title: 'Open coders',
    url: 'http://opencoders.co/realtime',
  })
}, 1000)

setTimeout(() => {
  pubSub.unsubscribe('feedback')
  process.exit(1)
}, 6100)
