(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),l=a.n(s),i=(a(15),a(1)),r=a(2),o=a(5),u=a(3),h=a(6),m=a(4),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{class:"add-task",onSubmit:this.props.handleSubmit},c.a.createElement("input",{type:"text",name:"task",placeholder:"add a new mission...",value:this.props.task,onChange:this.props.handleChange}),c.a.createElement("button",{type:"submit",name:"task"},"+"))}}]),t}(c.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.taskList,t=[],a="";if(e.length>1){a=e.length>4?c.a.createElement("a",{href:"/"},"more"):"",e=e.slice(1,4);for(var n=0;n<e.length;n++)t.push(c.a.createElement("li",{key:e[n].id},e[n].task,c.a.createElement("i",{class:"material-icons"},"play_circle_outline")))}return c.a.createElement("div",{class:"tasks-group"},c.a.createElement("ul",null,t),a)}}]),t}(c.a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"clock-wrapper"},c.a.createElement("div",{class:"clock-main"},c.a.createElement("div",{class:"clock-btn",onClick:this.props.changeClockState},c.a.createElement("i",{class:"material-icons"},"play_arrow"),c.a.createElement("span",{class:"clock-decoration"}))))}}]),t}(c.a.Component);var v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={task:"",taskList:[],activating:!1,resting:!1,countDown:1500},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.changeClockState=a.changeClockState.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({task:t})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.task){var t={task:this.state.task,id:Date.now()};this.setState(function(e){return{taskList:e.taskList.concat(t),task:"",id:""}})}}},{key:"countDown",value:function(){this.setState(function(e){return{countDown:e.countDown-1}})}},{key:"changeClockState",value:function(e){var t=this;this.state.activating||this.state.resting?clearInterval(this.interval):this.interval=setInterval(function(){return t.countDown()},1e3),this.setState({activating:!this.state.activating}),function(e){var t=document.querySelector(".clock-wrapper"),a=document.querySelector(".clock-main"),n=document.querySelector(".clock-btn"),c=document.querySelector(".clock-btn > .material-icons"),s=document.querySelector(".clock-decoration");t.classList.toggle("sub-theme"),a.classList.toggle("main-theme"),n.classList.toggle("sub-theme"),c.innerHTML="play_arrow"===c.innerHTML?"pause":"play_arrow",c.classList.toggle("main-theme-font"),s.classList.toggle("sub-theme")}()}},{key:"render",value:function(){var e=this.state,t=e.taskList,a=e.countDown,n=[];return t.length>0?n.push(c.a.createElement("div",{class:"activity-task",key:Date.now()},c.a.createElement("span",{class:"circle-lg main-decoration"}),c.a.createElement("h3",null,t[0].task),c.a.createElement("span",{class:"circle-sm sub-decoration"}),c.a.createElement("div",null,Math.floor(a/60).toString().padStart(2,"0"),":",(a%60).toString().padStart(2,"0")))):n.push(c.a.createElement("div",{class:"activity-task",key:Date.now()},c.a.createElement("h3",null,"No task? Add one."))),c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"main-panel"},c.a.createElement(d,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,changeClockState:this.changeClockState,task:this.state.task}),n,c.a.createElement(k,{taskList:t})),c.a.createElement("div",{class:"sub-panel"},c.a.createElement("nav",{class:"nav"},c.a.createElement("ul",null,c.a.createElement("li",{class:"to-do-list-folded"},c.a.createElement("i",{class:"material-icons"},"list")),c.a.createElement("li",{class:"analytics"},c.a.createElement("i",{class:"material-icons"},"insert_chart")),c.a.createElement("li",{class:"ringtones"},c.a.createElement("i",{class:"material-icons"},"library_music")))),c.a.createElement("div",{class:"logo"},c.a.createElement("div",null,"pomodoro"))),c.a.createElement(p,{changeClockState:this.changeClockState}))}}]),t}(c.a.Component);var b=function(){return c.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.33ca8f3b.chunk.js.map