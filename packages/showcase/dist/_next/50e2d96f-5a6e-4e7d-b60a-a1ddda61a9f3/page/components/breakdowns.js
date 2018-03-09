
          window.__NEXT_REGISTER_PAGE('/components/breakdowns', function() {
            var comp = module.exports=webpackJsonp([48],{1211:function(e,t,n){e.exports=n(1212)},1212:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),r=n(9),i=n(12),u=a(i),s=n(213),d=a(s),p=n(212),c=a(p),f=[{name:"number",description:"A number by which the breakdown is represented.",defaultValue:"-",type:"number",optional:!1},{name:"label",description:"A statistic number label within the bar of the breakdown",defaultValue:"-",type:"string",optional:!1},{name:"fill",description:"The percentage to fill the bar. This is typically passed in from a container component that calculates percentages at large.",defaultValue:"-",type:"number",optional:!1},{name:"color",description:"A theme palette color name, or a hex code that the bar will be colored with.",defaultValue:"*info*",type:"string",optional:!0},{name:"icon",description:"An icon that is displayed on the breakdown",defaultValue:"-",type:"string",optional:!0},{name:"onMouseEnter/onMouseLeave",description:"Functions that are invoked when the mouse enters and/or leaves the breakdown. Useful for tooltips/infowindows",defaultValue:"-",type:"func",optional:!0}];t.default=function(e){return l.createElement(u.default,{pathname:e.url.pathname},l.createElement(r.Card,null,l.createElement("p",null,"Breakdowns are a means of representing aggregated data in a way that should be relatively easy to reason about. The breakdown component itself belongs within the context of a larger container component that calculates numbers and supplies them to said component."),l.createElement("h2",null,"Usage"),l.createElement(c.default,{snippet:'\n<div>\n  <Breakdown number={1} label="50 (20%)" fill={0.2}>\n    Stat 1\n  </Breakdown>\n  <Breakdown number={2} label="20 (40%)" fill={0.4}>\n    Stat 2\n  </Breakdown>\n  <Breakdown number={3} label="40 (80%)" fill={0.8}>\n    Stat 3\n  </Breakdown>\n</div>\n',components:{Breakdown:r.Breakdown}}),l.createElement("h2",null,"Props"),l.createElement(d.default,{props:f})))}}},[1211]);
            return { page: comp.default }
          })
        