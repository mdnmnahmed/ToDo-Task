(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=n(6),s=n(3),i=n(4),d=n(8),u=n(7),m=(n(14),n(5)),p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={currentTodo:"",allTodos:[{_id:1,todo:"Loading Todos..."}]},e.inputHandeler=function(t){e.setState({currentTodo:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),fetch("/api/addTodo",{method:"POST",body:JSON.stringify({todoItem:e.state.currentTodo}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({allTodos:[t].concat(Object(c.a)(e.state.allTodos)),currentTodo:""})}))},e.deleteTodo=function(t){fetch("/api/deleteTodo/"+t,{method:"delete"}).then((function(e){return e.json()})).then((function(t){var n=e.state.allTodos.filter((function(e){return e._id!==t._id}));e.setState({allTodos:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/getAllTodos").then((function(e){return e.json()})).then((function(t){e.setState({allTodos:t})}))}},{key:"render",value:function(){var e=this,t=this.state.allTodos.map((function(t){return o.a.createElement("div",{className:"list",key:t._id},o.a.createElement("p",{className:"shadow hoverable"},o.a.createElement("div",null,t.todo),o.a.createElement("span",{style:{margin:"-5px"},className:"deleteIcon fa fa-trash",onClick:function(){return e.deleteTodo(t._id)}})))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container appContainer col-lg-3 col-md-8 col-sm-12 shadow",align:"center"},o.a.createElement("div",{className:"secJumbotron shadow"},o.a.createElement("form",{id:"to-do-form",onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{type:"text",className:"shadow",placeholder:"ToDos...",title:"Enter ToDos",required:!0,name:"todoItem",value:this.state.currentTodo,onChange:function(t){e.setState({currentTodo:t.target.value})}}),o.a.createElement("button",{className:"shadow",type:"submit"},o.a.createElement("span",{className:"fa fa-plus"})," Add")),o.a.createElement("hr",{style:{margin:"-5px"}}),o.a.createElement("div",null,o.a.createElement(m.a,null,t)),o.a.createElement("br",null))))}}]),n}(a.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.66d9de83.chunk.js.map