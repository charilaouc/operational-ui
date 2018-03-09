
          window.__NEXT_REGISTER_PAGE('/components/timeline', function() {
            var comp = module.exports=webpackJsonp([30],{1253:function(e,n,t){e.exports=t(1254)},1254:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var l=t(0),o=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(l),a=t(9),m=t(212),r=i(m),c=t(12),s=i(c),p=t(213),u=i(p),d={Timeline:[],TimelineItem:[{name:"color",description:"It can be a named theme color or a hex value.",defaultValue:"info",type:"string",optional:!0},{name:"icon",description:"Icon name, see https://feathericons.com/ (convert name to PascalCase)",defaultValue:"''",type:"string",optional:!0}]};n.default=function(e){return o.createElement(s.default,{pathname:e.url.pathname},o.createElement(a.Card,null,o.createElement("p",null,"Display information vertically on a timeline from top to bottom."),o.createElement("h2",null,"Usage"),o.createElement("p",null,"A timeline is composed of multiple TimeLineItem componenets nested inside a container Timeline component. Items may contain any children."),o.createElement(r.default,{snippet:'\n<Timeline>\n  <TimelineItem color="success">\n    <h3>Service visit - issue resolved</h3>\n    <p>1 week ago</p>\n  </TimelineItem>\n  <TimelineItem color="error">\n    <h3>Network issues</h3>\n    <p>2 days ago</p>\n  </TimelineItem>\n  <TimelineItem>\n    <h3>Contract extended</h3>\n    <p>5 days ago</p>\n  </TimelineItem>\n  <TimelineItem color="warning">\n    <h3>Contract expires in 1 month</h3>\n    <p>2 weeks ago</p>\n  </TimelineItem>\n</Timeline>\n',components:{Timeline:a.Timeline,TimelineItem:a.TimelineItem}}),o.createElement("h2",null,"Props"),o.createElement(u.default,{props:d.TimelineItem})))}}},[1253]);
            return { page: comp.default }
          })
        