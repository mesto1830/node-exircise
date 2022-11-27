import EventEmiter from 'events'
const customEvent = new EventEmiter()

const msg = () => {
  console.log('Msg Event')
}

customEvent.on('msg', msg)
customEvent.emit('msg')//here must come after listening block (on)



//another example
customEvent.on('calc', (num1, num2) => {//msg is a event like click,change
  console.log(num1 * num2)
})
customEvent.emit('calc', 10, 20)
