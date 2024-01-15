// src/window-proxy.ts
var windowProxy = {
  eventListenerMap: {
    mousedown: {},
    mousemove: {},
    mouseup: {}
  },
  addEventListener: function(eventName, id, listener) {
    if (!this.eventListenerMap[eventName])
      this.eventListenerMap[eventName] = {};
    this.eventListenerMap[eventName][id] = listener;
    window.addEventListener(eventName, listener);
  },
  removeEventListener: function(event, id) {
    window.removeEventListener(event, this.eventListenerMap[event][id]);
    delete this.eventListenerMap[event][id];
  }
};

// test/main.ts
windowProxy.addEventListener("mousemove", "/index.ts", () => {
  console.log("mousemove");
});
console.log(windowProxy.eventListenerMap);
