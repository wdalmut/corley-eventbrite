# Eventbrite simple lib

A simple lib for eventbrite

## Install

```sh
npm install corley-eventbrite --save
```

### Use

```js
var eventbrite = require('corley-eventbrite');

eventbrite.getOrder("1245678", process.env.TOKEN).then(function(order) {
    // do whatever you want with this order
});
```
