import { windowProxy } from ".."

windowProxy.addEventListener('mousemove', '/index.ts', () => {
  console.log('mousemove')
})
console.log(windowProxy.eventListenerMap)
// windowProxy.removeEventListener('mousemove', '/index.ts')
// console.log(windowProxy.eventListenerMap)