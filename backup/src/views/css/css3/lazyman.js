function _lazyMan (name) {
  this.tasks = [];
  var self = this;
  var fn = (function(name){
    return function () {
      console.log('hi' + name);
      self.next();
    }
  })(name);
  this.tasks.push(fn);
  setTimeout(function () {
    self.next();
  }, 0); // 下一个事件循环启动
}

// 事件调度函数

_lazyMan.prototype.next = function () {
  var fn = this.tasks.shift();
  fn && fn();
}

_lazyMan.prototype.eat = function (name) {
  var self = this;
  var fn = (function(name){
    return function() {
      console.log(name + ' is eatting')
      self.next();
    }
  })(name);

  this.tasks.push(fn);
  return this;
}

_lazyMan.prototype.sleep = function (time) {
  var self = this;
  var fn =(function (time) {
    return function() {
      setTimeout(function () {
        console.log('sleeped' + time + 's')
        self.next();
      }, time*1000);
    }
  })(time);
  this.tasks.push(fn);
  return this;
}

_lazyMan.prototype.sleepFirst = function (time) {
  var self = this;
  var fn =(function (time) {
    return function() {
      setTimeout(function () {
        console.log('sleeped' + time + 's')
        self.next();
      }, time*1000);
    }
  })(time);
  this.tasks.unshift(fn);
  return this;
}

function lazyMan(name) {
  return new _lazyMan(name);
}