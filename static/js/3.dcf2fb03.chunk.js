(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a(9),r=a(12),o=a(10),c=a(11),i=a(0),u=a.n(i),l=(a(65),a(109)),h=a(45),g=a(46),p=a(47),d=a.n(p),f=a(57),S=a(55),w=a(56),m={SUCCESS:"SUCCESS",ERROR:"ERROR",LOADING:"LOADING"},C="https://newsapi.org/v2/everything?apiKey=".concat(S.a),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={news:[],loadState:m.LOADING,q:"technology",totalResults:0,pageSize:5,currentPage:1},a.fetchNews=function(e){var t=C,n=a.state,s=n.pageSize,r=n.q,o=e;d.a.get(t).query({q:r,page:o,pageSize:s}).set("Accept","application/json").end(function(t,n){!t&&n?a.setState({news:n.body,loadState:m.SUCCESS,totalResults:n.body.totalResults,currentPage:e}):console.log("There was an error fetching from News.org",t)})},a.onChangeSport=function(e){a.fetchNews(a.state.currentPage),a.setState({q:"sport"})},a.onChangeBusiness=function(e){a.fetchNews(a.state.currentPage),a.setState({q:"business"})},a.onQueryChange=function(e){a.setState({q:e.target.value})},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchNews(this.state.currentPage)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"Trending"},u.a.createElement(f.a,{onRouteChange:this.props.onRouteChange,searchHandler:function(){return e.fetchNews(e.state.currentPage)},onQueryChange:this.onQueryChange,query:this.state.q}),u.a.createElement(g.a,{sport:this.onChangeSport,business:this.onChangeBusiness}),this.state.loadState===m.LOADING?u.a.createElement("div",{className:"loader"}):u.a.createElement(y,{data:this.state.news}),u.a.createElement(h.a,{current:this.state.currentPage,total:this.state.totalResults,pageSize:this.state.pageSize,onPageChanged:this.fetchNews}))}}]),t}(i.Component),y=function(e){var t=e.data,a=t.articles.map(function(e){return u.a.createElement(w.a,{key:Math.random(),article:e})});return u.a.createElement("div",{className:"grid"},a,u.a.createElement(l.a,null,u.a.createElement("h6",null,t.totalResults," ","news discovered")))};t.default=v}}]);
//# sourceMappingURL=3.dcf2fb03.chunk.js.map