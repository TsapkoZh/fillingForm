(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),c=a.n(l),o=a(5),i=a(8),m=a(14),s=a(1),d=a(2),u=a(4),h=a(3),p=a(7),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={formErrors:{date:"",number:"",toWhom:"",fromWhom:""},dateValid:!1,numberValid:!1,toWhomValid:!1,fromWhomValid:!1,formValid:!1},e.handleChange=function(t){var a=t.target.name,r=t.target.value;e.setState(Object(p.a)({},a,r),(function(){e.validateField(a,r)}))},e.handleSubmit=function(t){var a=e.state,r=a.formValid,n={date:a.date,number:a.number,toWhom:a.toWhom,fromWhom:a.fromWhom};t.preventDefault(),r&&e.props.addDate(n)},e}return Object(d.a)(a,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,r=this.state.dateValid,n=this.state.numberValid,l=this.state.toWhomValid,c=this.state.fromWhomValid;switch(e){case"date":r=t.length>=8,a.date=r?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443*";break;case"number":t.length>=7?(n=!1,a.number="\u041d\u0435 \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0441\u0435\u043c\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*"):!t&&t||(n=t>=1,a.number=n?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 (\u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u043e\u043b\u044f)*");break;case"toWhom":t.length>=50?(l=!1,a.toWhom="\u041d\u0435 \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u043f\u044f\u0442\u0438\u0434\u0435\u0441\u044f\u0442\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*"):!t&&t||(l=t.length>=2,a.toWhom=l?"":"\u041d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*");break;case"fromWhom":t.length>=50?(c=!1,a.fromWhom="\u041d\u0435 \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u043f\u044f\u0442\u0438\u0434\u0435\u0441\u044f\u0442\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*"):!t&&t||(c=t.length>=2,a.fromWhom=c?"":"\u041d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*")}this.setState({formErrors:a,dateValid:r,numberValid:n,toWhomValid:l,fromWhomValid:c},this.validateForm)}},{key:"validateForm",value:function(){var e=this.state,t=e.dateValid,a=e.numberValid,r=e.toWhomValid,n=e.fromWhomValid;this.setState({formValid:t&&a&&r&&n})}},{key:"render",value:function(){var e=this.state,t=e.formErrors,a=e.formValid,r=e.dateValid,l=e.numberValid,c=e.toWhomValid,o=e.fromWhomValid;return n.a.createElement("form",{className:"wrapper"},n.a.createElement("label",{className:"cap"},n.a.createElement("input",{name:"date",type:"date",onChange:this.handleChange,className:r?"entryField true":"entryField"}),n.a.createElement("p",{className:"error"},t.date),n.a.createElement("input",{name:"number",type:"number",onChange:this.handleChange,className:l?"entryField true":"entryField",placeholder:"\u043d\u043e\u043c\u0435\u0440 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e\u0439:"}),n.a.createElement("p",{className:"error"},t.number),n.a.createElement("input",{name:"toWhom",type:"text",onChange:this.handleChange,className:c?"entryField true":"entryField",placeholder:"\u043a\u043e\u043c\u0443:"}),n.a.createElement("p",{className:"error"},t.toWhom),n.a.createElement("input",{name:"fromWhom",type:"text",onChange:this.handleChange,className:o?"entryField true":"entryField",placeholder:"\u043e\u0442 \u043a\u043e\u0433\u043e:"}),n.a.createElement("p",{className:"error"},t.fromWhom)),n.a.createElement("button",{onClick:this.handleSubmit,className:a?"btnWriteDown":"btnWriteDownDisable",disabled:!a},"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}}]),a}(r.Component),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={formErrors:{nameProduct:"",quantity:"",price:""},nameProductValid:!1,quantityValid:!1,priceValid:!1},e.handleChange=function(t){var a=t.target.name,r=t.target.value;e.setState(Object(p.a)({},a,r),(function(){e.validateField(a,r)}))},e.validateField=function(t,a){var r,n=e.state.formErrors,l=e.state.nameProductValid,c=e.state.quantityValid,o=e.state.priceValid;switch(t){case"nameProduct":a.length>20?(l=!1,n.nameProduct="\u041d\u0435 \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*"):!a&&a||(l=a.length>=1,n.nameProduct=l?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430*");break;case"quantity":a.length>8?(c=!1,n.quantity="\u041d\u0435 \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0432\u043e\u0441\u044c\u043c\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*"):!a&&a||(c=a>0,n.quantity=c?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e*");break;case"price":a.length>8?(o=!1,n.price="\u041d\u0435 \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0432\u043e\u0441\u044c\u043c\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*"):((r=a).toString().includes(".")?r.toString().split(".").pop().length:0)>2?(o=!1,n.price="\u041d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0432\u0443\u0445 \u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439*"):!a&&a||(o=a>0,n.price=o?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043d\u0443*")}e.setState({formErrors:n,nameProductValid:l,quantityValid:c,priceValid:o},e.validateForm)},e.handleSubmit=function(t){var a=e.state,r=a.nameProduct,n=a.quantity,l=a.price,c={id:Date.now().toString(),nameProduct:r,quantity:n,price:l};t.preventDefault(),e.props.addProduct(c),t.currentTarget.value=""},e}return Object(d.a)(a,[{key:"validateForm",value:function(){var e=this.state,t=e.nameProductValid,a=e.quantityValid,r=e.priceValid;this.setState({formValid:t&&a&&r})}},{key:"render",value:function(){var e=this.state,t=e.formErrors,a=e.formValid,r=e.nameProductValid,l=e.quantityValid,c=e.priceValid,o=this.props.allProducts;return n.a.createElement("form",{onSubmit:this.handleSubmit,className:"wrapper"},n.a.createElement("label",{className:"cap capBorder"},n.a.createElement("input",{name:"nameProduct",type:"text",onChange:this.handleChange,className:r?"entryField true":"entryField",placeholder:"\u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430:"}),n.a.createElement("p",{className:"error"},t.nameProduct),n.a.createElement("input",{name:"quantity",type:"number",onChange:this.handleChange,className:l?"entryField true":"entryField",placeholder:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e:"}),n.a.createElement("p",{className:"error"},t.quantity),n.a.createElement("input",{name:"price",type:"number",onChange:this.handleChange,step:"0.01",min:"0",className:c?"entryField true":"entryField",placeholder:"\u0446\u0435\u043d\u0430: 0,00\u0440."}),n.a.createElement("p",{className:"error"},t.price)),n.a.createElement("button",{onClick:this.handleSubmit,disabled:!a||o>19,className:!a||o>19?"btnWriteDownDisable":"btnWriteDown"},"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"),n.a.createElement("p",{className:o>19?"error errorBtn":"show"},"\u041d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u0438 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0439*"))}}]),a}(r.Component),E=(a(27),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.addDate,a=e.addProduct,r=e.allProducts;return n.a.createElement("div",{className:"wrapper"},n.a.createElement(b,{addDate:t}),n.a.createElement(f,{addProduct:a,allProducts:r}))}}]),a}(r.Component)),v=(a(28),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.documentHeader;return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"date"},"\xab",n.a.createElement("span",{className:"dateDay"},e.date?e.date.split("-")[2]:""),"\xbb",n.a.createElement("span",{className:"dateMonth"},e.date?e.date.split("-")[1]:""),n.a.createElement("span",{className:"dateYear"},e.date?e.date.split("-")[0]:""),"\u0433."),n.a.createElement("h1",{className:"title"},"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u2116",n.a.createElement("span",{className:"invoiceNumber"},e.number)),n.a.createElement("p",{className:"toWhom"},"\u041a\u043e\u043c\u0443",n.a.createElement("span",{className:"toWhomField"},e.toWhom)),n.a.createElement("p",{className:"fromWhom"},"\u041e\u0442 \u043a\u043e\u0433\u043e",n.a.createElement("span",{className:"fromWhomField"},e.fromWhom)))}}]),a}(r.Component)),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.nameProduct,a=e.quantity,r=e.price,l=e.index;return n.a.createElement("tr",null,n.a.createElement("td",{className:"tableCell"},l+1),n.a.createElement("td",{className:"tableCell"},t),n.a.createElement("td",{className:"tableCell"},a),n.a.createElement("td",{className:"tableCell"},r),n.a.createElement("td",{className:"tableCell right"},a*r))}}]),a}(r.Component),N=(a(29),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).sum=function(e){return e.reduce((function(e,t){return e+t}),0)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.products,t=e.map((function(e){return Number(e.quantity)})),a=e.map((function(e){return Number(e.price)}));return n.a.createElement("div",null,n.a.createElement("table",{className:"tableHeader"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"tableCell"},"\u2116",n.a.createElement("br",null),"\u043f/\u043f"),n.a.createElement("td",{className:"tableCell"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"),n.a.createElement("td",{className:"tableCell"},"\u041a\u043e\u043b-\u0432\u043e"),n.a.createElement("td",{className:"tableCell"},"\u0426\u0435\u043d\u0430",n.a.createElement("br",null),"\u0440\u0443\u0431.,\u043a\u043e\u043f."),n.a.createElement("td",{className:"tableCell right"},"\u0421\u0443\u043c\u043c\u0430",n.a.createElement("br",null),"\u0440\u0443\u0431.,\u043a\u043e\u043f.")),e.map((function(e,t){var a=e.id,r=e.nameProduct,l=e.quantity,c=e.price;return n.a.createElement(y,{key:a,index:t,nameProduct:r,quantity:l,price:c})})),n.a.createElement("tr",null,n.a.createElement("td",{className:"tableCell right tableCellTotal"}),n.a.createElement("td",{className:"tableCell tableCellTotal"},"\u0418\u0442\u043e\u0433\u043e . . ."),n.a.createElement("td",{className:"tableCell"},this.sum(t)),n.a.createElement("td",{className:"tableCell"},this.sum(a)),n.a.createElement("td",{className:"tableCell right"},this.sum(a)*this.sum(t))))))}}]),a}(r.Component)),g=(a(30),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},"\u041c.\u041f.",n.a.createElement("div",{className:"signature"},"\u0421\u0434\u0430\u043b ",n.a.createElement("span",{className:"line"},"(\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0438)")),n.a.createElement("div",{className:"signature"},"\u041f\u0440\u0438\u043d\u044f\u043b ",n.a.createElement("span",{className:"line"},"(\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0438)")))}}]),a}(r.Component)),O=(a(31),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).clearLS=function(){localStorage.clear(),window.location.reload(!1)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.documentHeader,a=e.products;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"document"},n.a.createElement(v,{documentHeader:t}),n.a.createElement(N,{products:a}),n.a.createElement(g,null)),n.a.createElement("button",{onClick:this.clearLS,className:"btnClear"},"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))}}]),a}(r.Component)),C=function(e){return{type:"ADD_DOCUMENT_HEADER",payload:e}},j=function(e){return{type:"ADD_PRODUCT",payload:e}},V=(a(32),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.addDate,a=e.addProduct,r=e.documentHeader,l=e.products,c=e.allProducts;return n.a.createElement("div",{className:"fillingForm"},n.a.createElement(E,{addDate:t,addProduct:a,allProducts:c}),n.a.createElement(O,{documentHeader:r,products:l}))}}]),a}(r.Component)),W=Object(i.b)((function(e){return{documentHeader:e.documentHeader,products:e.products,allProducts:e.products.length}}),(function(e){return Object(o.bindActionCreators)({addDate:C,addProduct:j},e)}))(V),D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(W,null))}}]),a}(r.Component),P=[],S=a(15),F=[],k=Object(o.combineReducers)({documentHeader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DOCUMENT_HEADER":return t.payload;default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":return[].concat(Object(S.a)(e),[t.payload]);default:return e}}}),w=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},q=Object(o.createStore)(k,w,Object(m.devToolsEnhancer)());q.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(q.getState()))}));var A=n.a.createElement(i.a,{store:q},n.a.createElement(D,null));c.a.render(A,document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1521d6c8.chunk.js.map