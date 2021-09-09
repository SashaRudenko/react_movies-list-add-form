(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(9),r=i.n(a),s=(i(16),i(8)),l=i(2),n=i(3),c=i(6),o=i(5),m=i(1),d=i.n(m),j=(i(17),i(10)),h=(i(18),i(19),i(0)),b=function(e){var t=e.title,i=e.description,a=e.imgUrl,r=e.imdbUrl;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("figure",{className:"image is-4by3",children:Object(h.jsx)("img",{src:a,alt:"Film logo"})})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("figure",{className:"image is-48x48",children:Object(h.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(h.jsx)("div",{className:"media-content",children:Object(h.jsx)("p",{className:"title is-8",children:t})})]}),Object(h.jsxs)("div",{className:"content",children:[i,Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:r,children:"IMDB"})]})]})]})},g=function(e){var t=e.movies;return Object(h.jsx)("div",{className:"movies",children:t.map((function(e){return Object(h.jsx)(b,Object(j.a)({},e),e.imdbId)}))})},u=i(4),p=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.handlerForm=function(t){var i=t.target,a=i.name,r=i.value;e.setState(Object(u.a)({},a,r))},e}return Object(n.a)(i,[{key:"render",value:function(){var e=this,t=this.props.onAdd,i=this.state,a=i.title,r=i.description,s=i.imgUrl,l=i.imdbUrl,n=i.imdbId,c=i.errorMessage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:"display-6 text-decoration-underline",children:"Add Movie here"}),Object(h.jsx)("div",{className:"error",children:c&&"Enter correct url"}),Object(h.jsxs)("form",{onSubmit:function(i){i.preventDefault(),!1!==/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(s)?!1!==/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(l)?(t(a,r,s,l,n),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})):e.setState({errorMessage:"imdbUrl"}):e.setState({errorMessage:"imgUrl"})},children:[Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsxs)("label",{className:"form-label",htmlFor:"title",children:["Title",Object(h.jsx)("input",{type:"text",name:"title",className:"form-control form-control-lg",value:a,onChange:this.handlerForm,required:!0})]})}),Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsxs)("label",{className:"form-label",htmlFor:"description",children:["Desription",Object(h.jsx)("textarea",{className:"form-control form-control-lg",name:"description",value:r,onChange:this.handlerForm})]})}),Object(h.jsxs)("div",{className:"col-auto",children:[Object(h.jsxs)("label",{className:"form-label",htmlFor:"title",children:["imgUrl",Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",name:"imgUrl",value:s,onChange:this.handlerForm,required:!0})]}),"imgUrl"===c&&Object(h.jsx)("div",{className:"error",children:"Enter a valid imgUrl URL"})]}),Object(h.jsxs)("div",{className:"col-auto",children:[Object(h.jsxs)("label",{className:"form-label",htmlFor:"title",children:["imdbUrl",Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",name:"imdbUrl",value:l,onChange:this.handlerForm,required:!0})]}),"imdbUrl"===c&&Object(h.jsx)("div",{className:"error",children:"Enter a valid imdbUrl URL"})]}),Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsxs)("label",{className:"form-label",htmlFor:"title",children:["imdbId",Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",name:"imdbId",value:n,onChange:this.handlerForm,required:!0})]})}),Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Confirm"})})]})]})}}]),i}(d.a.Component),O=i(11),v=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={movies:Object(s.a)(O)},e.addMovie=function(t,i,a,r,l){e.setState((function(e){return{movies:[{title:t,description:i,imgUrl:a,imdbUrl:r,imdbId:l}].concat(Object(s.a)(e.movies))}}))},e}return Object(n.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("div",{className:"page-content",children:Object(h.jsx)(g,{movies:e})}),Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)(p,{onAdd:this.addMovie})})]})}}]),i}(d.a.Component);r.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e6a85453.chunk.js.map