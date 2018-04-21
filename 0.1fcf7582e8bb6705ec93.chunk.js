webpackJsonp([0],{"+PwK":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=n("LMZF"),o=function(){},e=n("0nO6"),r=function(){function t(t,i){var n=this;this.rows=t,this.cols=i,this.data=new Array(this.rows).fill(0).map(function(){return new Array(n.cols).fill(0)})}return t.fromArray=function(i){return new t(i.length,1).map(function(t,n){return i[n]})},t.subtract=function(i,n){if(i.rows===n.rows&&i.cols===n.cols)return new t(i.rows,i.cols).map(function(t,s,o){return i.data[s][o]-n.data[s][o]});console.log("Columns and Rows of A must match Columns and Rows of B.")},t.transpose=function(i){return new t(i.cols,i.rows).map(function(t,n,s){return i.data[s][n]})},t.multiply=function(i,n){if(i.cols===n.rows)return new t(i.rows,n.cols).map(function(t,s,o){for(var e=0,r=0;r<i.cols;r++)e+=i.data[s][r]*n.data[r][o];return e});console.log("Columns of A must match rows of B.")},t.map=function(i,n){return new t(i.rows,i.cols).map(function(t,s,o){return n(i.data[s][o],s,o)})},t.deserialize=function(i){"string"==typeof i&&(i=JSON.parse(i));var n=new t(i.rows,i.cols);return n.data=i.data,n},t.prototype.copy=function(){for(var i=new t(this.rows,this.cols),n=0;n<this.rows;n++)for(var s=0;s<this.cols;s++)i.data[n][s]=this.data[n][s];return i},t.prototype.toArray=function(){for(var t=[],i=0;i<this.rows;i++)for(var n=0;n<this.cols;n++)t.push(this.data[i][n]);return t},t.prototype.randomize=function(){return this.map(function(t){return 2*Math.random()-1})},t.prototype.add=function(i){return i instanceof t?this.rows!==i.rows||this.cols!==i.cols?void console.log("Columns and Rows of A must match Columns and Rows of B."):this.map(function(t,n,s){return t+i.data[n][s]}):this.map(function(t){return t+i})},t.prototype.multiply=function(i){return i instanceof t?this.rows!==i.rows||this.cols!==i.cols?void console.log("Columns and Rows of A must match Columns and Rows of B."):this.map(function(t,n,s){return t*i.data[n][s]}):this.map(function(t){return t*i})},t.prototype.map=function(t){t instanceof Function||console.log(t);for(var i=0;i<this.rows;i++)for(var n=0;n<this.cols;n++)this.data[i][n]=t(this.data[i][n],i,n);return this},t.prototype.print=function(){return console.table(this.data),this},t.prototype.serialize=function(){return JSON.stringify(this)},t}(),h=function(t,i){this.func=t,this.dfunc=i},a=new h(function(t){return 1/(1+Math.exp(-t))},function(t){return t*(1-t)}),l=(new h(function(t){return Math.tanh(t)},function(t){return 1-t*t}),function(){function t(i,n,s){i instanceof t?(this.input_nodes=i.input_nodes,this.hidden_nodes=i.hidden_nodes,this.output_nodes=i.output_nodes,this.weights_ih=i.weights_ih.copy(),this.weights_ho=i.weights_ho.copy(),this.bias_h=i.bias_h.copy(),this.bias_o=i.bias_o.copy()):(this.input_nodes=i,this.hidden_nodes=n,this.output_nodes=s,this.weights_ih=new r(this.hidden_nodes,this.input_nodes),this.weights_ho=new r(this.output_nodes,this.hidden_nodes),this.weights_ih.randomize(),this.weights_ho.randomize(),this.bias_h=new r(this.hidden_nodes,1),this.bias_o=new r(this.output_nodes,1),this.bias_h.randomize(),this.bias_o.randomize()),this.setLearningRate(),this.setActivationFunction()}return t.deserialize=function(i){"string"==typeof i&&(i=JSON.parse(i));var n=new t(i.input_nodes,i.hidden_nodes,i.output_nodes);return n.weights_ih=r.deserialize(i.weights_ih),n.weights_ho=r.deserialize(i.weights_ho),n.bias_h=r.deserialize(i.bias_h),n.bias_o=r.deserialize(i.bias_o),n.learning_rate=i.learning_rate,n},t.prototype.predict=function(t){var i=r.fromArray(t),n=r.multiply(this.weights_ih,i);n.add(this.bias_h),n.map(this.activation_function.func);var s=r.multiply(this.weights_ho,n);return s.add(this.bias_o),s.map(this.activation_function.func),s.toArray()},t.prototype.setLearningRate=function(t){void 0===t&&(t=.1),this.learning_rate=t},t.prototype.setActivationFunction=function(t){void 0===t&&(t=a),this.activation_function=t},t.prototype.train=function(t,i){var n=r.fromArray(t),s=r.multiply(this.weights_ih,n);s.add(this.bias_h),s.map(this.activation_function.func);var o=r.multiply(this.weights_ho,s);o.add(this.bias_o),o.map(this.activation_function.func);var e=r.fromArray(i),h=r.subtract(e,o),a=r.map(o,this.activation_function.dfunc);a.multiply(h),a.multiply(this.learning_rate);var l=r.transpose(s),u=r.multiply(a,l);this.weights_ho.add(u),this.bias_o.add(a);var p=r.transpose(this.weights_ho),c=r.multiply(p,h),d=r.map(s,this.activation_function.dfunc);d.multiply(c),d.multiply(this.learning_rate);var f=r.transpose(n),g=r.multiply(d,f);this.weights_ih.add(g),this.bias_h.add(d)},t.prototype.serialize=function(){return JSON.stringify(this)},t.prototype.copy=function(){return new t(this)},t.prototype.mutate=function(t){this.weights_ih.map(t),this.weights_ho.map(t),this.bias_h.map(t),this.bias_o.map(t)},t}()),u=function(){return function(t){this.dir=p5.Vector.fromAngle(t),this.val=0}}(),p=function(){function t(t,i){this.p=t,this.gravity=.6,this.lift=-20,this.alive=!0,this.score=1,this.fitness=0,this.visionRadius=160,this.health=2,this.maxHealth=3,this.minSpeed=.25,this.maxSpeed=8,this.sensorLength=50,this.totalSensors=8,this.r=4,this.foodEaten=0,this.sensorAngle=2*Math.PI/this.totalSensors,this.mutationRate=.1,this.sensors=[];for(var n=0;n<this.p.TWO_PI;n+=this.sensorAngle)this.sensors.push(new u(n));i instanceof l?(this.brain=i.copy(),this.brain.mutate(this.mutate.bind(this))):this.brain=new l(this.sensors.length+9,128,2),this.pos=this.p.createVector(this.p.random(200,this.p.width-200),this.p.random(200,this.p.height-200)),this.velocity=this.p.createVector(0,0),this.acc=this.p.createVector(0,0)}return t.prototype.mutate=function(t){return this.p.random(1)<this.mutationRate?t+.5*this.p.randomGaussian():t},t.prototype.think=function(t){if(this.alive){for(var i=0;i<this.sensors.length;i++)this.sensors[i].val=this.sensorLength;for(var n=0;n<t.length;n++){var s=t[n],o=p5.Vector.dist(this.pos,s);if(!(o>this.sensorLength)){var e=p5.Vector.sub(s,this.pos);for(i=0;i<this.sensors.length;i++)this.sensors[i].dir.angleBetween(e)<this.sensorAngle/2&&(this.sensors[i].val=this.p.min(this.sensors[i].val,o))}}var r=[];for(r[0]=this.p.constrain(this.p.map(this.pos.x,0,0,0,1),0,1),r[1]=this.p.constrain(this.p.map(this.pos.y,0,0,0,1),0,1),r[2]=this.p.constrain(this.p.map(this.pos.x,this.p.width,this.p.width,0,1),0,1),r[3]=this.p.constrain(this.p.map(this.pos.y,this.p.height,this.p.height,0,1),0,1),r[4]=this.velocity.x/this.maxSpeed,r[5]=this.velocity.y/this.maxSpeed,r[6]=this.health/this.maxHealth,r[7]=this.pos.x/this.p.width,r[8]=this.pos.y/this.p.height,i=0;i<this.sensors.length;i++)r[i+9]=this.p.map(this.sensors[i].val,0,this.sensorLength,1,0);var h=this.brain.predict(r),a=this.p.createVector(2*h[0]-1,2*h[1]-1);a.mult(this.maxSpeed);var l=p5.Vector.sub(a,this.velocity);l.limit(.1),this.acc.add(l)}},t.prototype.copy=function(){return new t(this.p,this.brain)},t.prototype.clone=function(i){if(this.p.random(1)<i)return new t(this.p,this.brain)},t.prototype.eat=function(t){for(var i=t.length-1;i>=0;i--)p5.Vector.dist(t[i],this.pos)<2*this.r&&(t.splice(i,1),this.score++,this.foodEaten++,this.health++)},t.prototype.update=function(t){this.velocity.add(this.acc),this.velocity.limit(this.maxSpeed),this.velocity.mag()<this.minSpeed&&this.velocity.setMag(this.minSpeed),this.pos.add(this.velocity),this.health=this.p.constrain(this.health,0,this.maxHealth),this.velocity.mag()<1&&(this.health-=.005,this.score--),this.velocity.mag()>=2&&(this.health+=.005),this.acc.mult(0),this.health-=.01,this.score++,this.health<0&&(this.alive=!1),this.pos.y>this.p.height&&(this.alive=!1),this.pos.y<0&&(this.alive=!1),this.pos.x>this.p.width&&(this.alive=!1),this.pos.x<0&&(this.alive=!1)},t.prototype.up=function(){this.velocity+=this.lift},t.prototype.show=function(t){var i=this.p.color(0,255,255,255),n=this.p.color(255,0,100,100),s=this.p.lerpColor(n,i,this.health);if(this.p.push(),this.p.translate(this.pos.x,this.pos.y),t)for(var o=0;o<this.sensors.length;o++){var e=this.sensors[o].val;if(e>0){this.p.stroke(s),this.p.strokeWeight(this.p.map(e,0,this.sensorLength,4,0));var r=this.sensors[o].dir;this.p.line(0,0,r.x*e,r.y*e)}}this.p.noStroke(),this.p.fill(255,200),this.p.text(this.p.int(this.score)+"/"+this.p.int(this.velocity.mag()),0,0);var h=this.velocity.heading()+this.p.PI/2;this.p.rotate(h),this.p.fill(s),this.p.strokeWeight(1),this.p.stroke(s),this.p.beginShape(),this.p.vertex(0,2*-this.r),this.p.vertex(-this.r,2*this.r),this.p.vertex(this.r,2*this.r),this.p.endShape(this.p.CLOSE),this.p.pop()},t.prototype.highlight=function(){this.p.fill(255,255,255,50),this.p.stroke(255),this.p.ellipse(this.pos.x,this.pos.y,32,32)},t}(),c=function(){function t(t,i,n){this.p=t,this.birds=i,this.total=n,this.currentBestAvrgFitness=0,this.generationsCount=0,this.maxGenerationsWithNoImprovement=20,this.generationsSinceBestOne=0}return t.prototype.nextGeneration=function(t){this.generationsCount++,t=this.caluclateFitness(t);for(var i=[],n=0;n<t.length;n++)i[n]=this.pickOne(t);return i},t.prototype.pickOne=function(t){for(var i=0,n=this.p.random(1);n>0;)n-=t[i].fitness,i++;return t[--i].copy()},t.prototype.caluclateFitness=function(t){for(var i,n=0,s=0,o=t;s<o.length;s++)(h=o[s]).score=this.p.pow(h.score,2),n+=h.score;for(var e=0,r=t;e<r.length;e++){var h;(h=r[e]).fitness=h.score/n}return n>this.currentBestAvrgFitness&&(this.currentBestAvrgFitness=n,this.currentBestGeneration=t,console.log("new best",this.currentBestGeneration),this.generationsSinceBestOne=0),i=t,console.log("best avrg fitness",this.currentBestAvrgFitness/this.currentBestGeneration.length),console.log("current avrg fitness",n/t.length),i},t}(),d=function(){function t(){this.population=50,this.cylces=1,this.debug=!1,this.food=[],this.runningBest=!1,this.trainingData=[{inputs:[0,0],targets:[0]},{inputs:[1,0],targets:[1]},{inputs:[0,1],targets:[1]},{inputs:[1,1],targets:[0]}]}return t.prototype.generateFood=function(){for(var t=0;t<200;t++)this.food.push(this.p.createVector(this.p.random(200,this.p.width-200),this.p.random(200,this.p.height-200)))},t.prototype.drawing=function(t){var i=this;this.p=t,this.p.setup=function(){i.p.createCanvas(window.innerWidth,window.innerHeight),i.p.background(0),i.birds=new Array,i.food=[];for(var t=0;t<i.population;t++)i.birds.push(new p(i.p,i.p.random(i.p.width)));i.generateFood(),i.ga=new c(i.p,i.birds,i.population)},this.p.draw=function(){for(var t=0;t<i.cylces;t++){for(;i.food.length<200;)i.food.push(i.p.createVector(i.p.random(200,i.p.width-200),i.p.random(200,i.p.height-200)));for(var n=-1,s=0,o=i.birds;s<o.length;s++)(g=o[s]).eat(i.food),g.think(i.food),g.update(i.food);for(var e=i.birds.length-1;e>=0;e--)(a=i.birds[e]).alive?a.score>n&&(n=a.score,i.best=a):i.birds.splice(e,1);if(i.birds.length<20)for(var r=0,h=i.birds;r<h.length;r++){var a,l=(a=h[r]).clone(.1*a.score/n);null!=l&&i.birds.push(l)}}i.p.background(0);for(var u=0,p=i.food;u<p.length;u++){var c=p[u];i.p.stroke(255),i.p.point(c.x,c.y)}i.best.highlight();for(var d=0,f=i.birds;d<f.length;d++){var g;(g=f[d]).alive&&g.show(i.debug)}}},t.prototype.ngOnInit=function(){this.p5=new p5(this.drawing.bind(this))},t}(),f=s.Z({encapsulation:0,styles:[[""]],data:{}});function g(t){return s._17(0,[(t()(),s._16(-1,null,["\n"])),(t()(),s._1(1,0,null,null,12,"div",[["style","position: fixed; bottom:0; right:0; margin: 20px;"]],null,null,null,null,null)),(t()(),s._16(-1,null,["\n  "])),(t()(),s._1(3,0,null,null,6,"input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(t,i,n){var o=!0,e=t.component;return"input"===i&&(o=!1!==s._11(t,4)._handleInput(n.target.value)&&o),"blur"===i&&(o=!1!==s._11(t,4).onTouched()&&o),"compositionstart"===i&&(o=!1!==s._11(t,4)._compositionStart()&&o),"compositionend"===i&&(o=!1!==s._11(t,4)._compositionEnd(n.target.value)&&o),"change"===i&&(o=!1!==s._11(t,5).onChange(n.target.value)&&o),"input"===i&&(o=!1!==s._11(t,5).onChange(n.target.value)&&o),"blur"===i&&(o=!1!==s._11(t,5).onTouched()&&o),"ngModelChange"===i&&(o=!1!==(e.cylces=n)&&o),o},null,null)),s._0(4,16384,null,0,e.b,[s.B,s.k,[2,e.a]],null,null),s._0(5,16384,null,0,e.i,[s.B,s.k],null,null),s._13(1024,null,e.d,function(t,i){return[t,i]},[e.b,e.i]),s._0(7,671744,null,0,e.g,[[8,null],[8,null],[8,null],[2,e.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._13(2048,null,e.e,null,[e.g]),s._0(9,16384,null,0,e.f,[e.e],null,null),(t()(),s._16(-1,null,["\n  "])),(t()(),s._1(11,0,null,null,1,"button",[],null,[[null,"click"]],function(t,i,n){var s=!0,o=t.component;return"click"===i&&(s=0!=(o.debug=!o.debug)&&s),s},null,null)),(t()(),s._16(-1,null,["toggle debug"])),(t()(),s._16(-1,null,["\n"])),(t()(),s._16(-1,null,["\n"]))],function(t,i){t(i,7,0,i.component.cylces)},function(t,i){t(i,3,0,s._11(i,9).ngClassUntouched,s._11(i,9).ngClassTouched,s._11(i,9).ngClassPristine,s._11(i,9).ngClassDirty,s._11(i,9).ngClassValid,s._11(i,9).ngClassInvalid,s._11(i,9).ngClassPending)})}var m=s.X("app-perceptron",d,function(t){return s._17(0,[(t()(),s._1(0,0,null,null,1,"app-perceptron",[],null,null,null,g,f)),s._0(1,114688,null,0,d,[],null,null)],function(t,i){t(i,1,0)},null)},{},{},[]),_=n("Un6q"),v=n("UHIZ"),y=function(){};n.d(i,"NeuralNetworkModuleNgFactory",function(){return w});var w=s.Y(o,[],function(t){return s._8([s._9(512,s.j,s.V,[[8,[m]],[3,s.j],s.v]),s._9(4608,_.i,_.h,[s.s,[2,_.m]]),s._9(4608,e.j,e.j,[]),s._9(512,_.b,_.b,[]),s._9(512,e.h,e.h,[]),s._9(512,e.c,e.c,[]),s._9(512,v.m,v.m,[[2,v.r],[2,v.k]]),s._9(512,y,y,[]),s._9(512,o,o,[]),s._9(1024,v.i,function(){return[[{path:"",pathMatch:"full",redirectTo:"perceptron"},{path:"perceptron",component:d}]]},[])])})}});