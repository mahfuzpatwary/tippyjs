(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{168:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return h});var n=t(86),l=t.n(n),r=t(7),o=t.n(r),i=t(0),c=t.n(i),m=t(179),s=t(183),u=t(180),p=t(178),E=t(190),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=s.a,t}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=l()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:a},c.a.createElement(m.MDXTag,{name:"p",components:a},"Tippy.js is a highly customizable tooltip and popover library powered by\nPopper.js. It's compatible with IE11+, about 99% of desktop users and 96% of\nmobile users. It can be used to create simple static text tooltips, or complex\nHTML popovers that utilize AJAX."),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Default"),c.a.createElement(m.MDXTag,{name:"p",components:a},"The default tooltip looks like this when given no options. It has a nifty\nbackground fill animation!"),c.a.createElement(p.c,null,c.a.createElement(u.b,null,c.a.createElement(p.a,null,"Default"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Placement"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can be placed in four different ways in relation to the reference\nelement. Additionally, the tooltip can be shifted along the axis using the\nsuffix ",c.a.createElement("code",{className:"language-text"},"-start")," or ",c.a.createElement("code",{className:"language-text"},"-end"),"."),c.a.createElement(p.c,null,c.a.createElement(u.b,{placement:"top"},c.a.createElement(p.a,null,"Top")),c.a.createElement(u.b,{placement:"bottom"},c.a.createElement(p.a,null,"Bottom")),c.a.createElement(u.b,{placement:"left"},c.a.createElement(p.a,null,"Left")),c.a.createElement(u.b,{placement:"right"},c.a.createElement(p.a,null,"Right")),c.a.createElement(u.b,{placement:"top-start"},c.a.createElement(p.a,null,"Top-Start")),c.a.createElement(u.b,{placement:"top-end"},c.a.createElement(p.a,null,"Top-End"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Arrows"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can have an arrow that points toward the reference element. The size\nand proportion can also be modified with CSS."),c.a.createElement(p.c,null,c.a.createElement(u.b,{arrow:!0,animation:"fade"},c.a.createElement(p.a,null,"Default arrow")),c.a.createElement(u.b,{arrow:!0,arrowType:"round",animation:"fade"},c.a.createElement(p.a,null,"Round arrow"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Animations"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can have different types of transition animations. Note, the filling\neffect has been disabled in these examples (",c.a.createElement("code",{className:"language-text"},"animateFill: false"),")."),c.a.createElement(p.c,null,c.a.createElement(u.b,{animation:"shift-away",animateFill:!1},c.a.createElement(p.a,null,"Shift-away")),c.a.createElement(u.b,{animation:"shift-toward",animateFill:!1},c.a.createElement(p.a,null,"Shift-toward")),c.a.createElement(u.b,{animation:"scale",animateFill:!1},c.a.createElement(p.a,null,"Scale")),c.a.createElement(u.b,{animation:"fade",animateFill:!1},c.a.createElement(p.a,null,"Fade")),c.a.createElement(u.b,{animation:"perspective",animateFill:!1},c.a.createElement(p.a,null,"Perspective")),c.a.createElement(u.b,{animateFill:!1,duration:[450,200],inertia:!0},c.a.createElement(p.a,null,"Shift with inertia")),c.a.createElement(u.b,{animation:"scale",animateFill:!1,duration:[450,200],inertia:!0},c.a.createElement(p.a,null,"Scale with inertia")),c.a.createElement(u.b,{animation:"fade",animateFill:!1,duration:[500,200],onMount:function(e){requestAnimationFrame(function(){e.popperChildren.tooltip.classList.add("rubberBand","animated")})},onHidden:function(e){e.popperChildren.tooltip.classList.remove("rubberBand","animated")},distance:20},c.a.createElement(p.a,null,"Animate.css: rubberBand")),c.a.createElement(u.b,{animation:"fade",animateFill:!1,duration:[500,200],onMount:function(e){requestAnimationFrame(function(){e.popperChildren.tooltip.classList.add("tada","animated")})},onHidden:function(e){e.popperChildren.tooltip.classList.remove("tada","animated")},distance:20},c.a.createElement(p.a,null,"Animate.css: tada"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Themes"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can have custom styling. There are a few themes that come with the\npackage available under ",c.a.createElement("code",{className:"language-text"},"themes/"),"."),c.a.createElement(p.c,null,c.a.createElement(u.b,{theme:"dark",animateFill:!1},c.a.createElement(p.a,null,"Dark")),c.a.createElement(u.b,{theme:"light",animateFill:!1},c.a.createElement(p.a,null,"Light")),c.a.createElement(u.b,{theme:"light-border",animateFill:!1},c.a.createElement(p.a,null,"Light-border")),c.a.createElement(u.b,{theme:"google",animateFill:!1},c.a.createElement(p.a,null,"Google"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Triggers"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can also be triggered by ",c.a.createElement("code",{className:"language-text"},"click")," or ",c.a.createElement("code",{className:"language-text"},"focus")," events."),c.a.createElement(p.c,null,c.a.createElement(u.b,{trigger:"click"},c.a.createElement(p.a,null,"Click")),c.a.createElement(u.b,{trigger:"focus",hideOnClick:!1},c.a.createElement(p.a,null,"Focus"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Interactivity"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can be interactive, allowing you to hover over and click inside them."),c.a.createElement(p.c,null,c.a.createElement(u.b,{interactive:!0,content:"You can select the text inside here."},c.a.createElement(p.a,null,"Interactive"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"HTML Content"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can contain HTML."),c.a.createElement(p.c,null,c.a.createElement(u.b,{content:c.a.createElement("strong",null,"Bolded ",c.a.createElement("span",{style:{color:"aqua"}},"content"))},c.a.createElement(p.a,null,"HTML Content")),c.a.createElement(E.a,null)),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Duration"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can have different animation durations."),c.a.createElement(p.c,null,c.a.createElement(u.b,{duration:0},c.a.createElement(p.a,null,"0")),c.a.createElement(u.b,{duration:1e3},c.a.createElement(p.a,null,"1000")),c.a.createElement(u.b,{duration:[800,100]},c.a.createElement(p.a,null,"[800, 100]"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Delay"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can delay hiding or showing after a trigger."),c.a.createElement(p.c,null,c.a.createElement(u.b,{delay:500},c.a.createElement(p.a,null,"500")),c.a.createElement(u.b,{delay:[800,0]},c.a.createElement(p.a,null,"[800, 0]")),c.a.createElement(u.b,{delay:[0,800]},c.a.createElement(p.a,null,"[0, 800]"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Follow Cursor"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can follow the mouse cursor and abide by a certain axis. Additionally,\nthe tooltip can follow the cursor until it shows, at which point it will stop\nfollowing (initial)."),c.a.createElement(p.c,null,c.a.createElement(u.b,{followCursor:!0,animateFill:!1,duration:200,animation:"fade"},c.a.createElement(p.a,null,"Default")),c.a.createElement(u.b,{followCursor:"horizontal",animateFill:!1,duration:200,animation:"fade"},c.a.createElement(p.a,null,"Horizontal")),c.a.createElement(u.b,{followCursor:"vertical",animateFill:!1,duration:200,animation:"fade"},c.a.createElement(p.a,null,"Vertical")),c.a.createElement(u.b,{followCursor:"initial",animateFill:!1,delay:200,duration:200,animation:"fade"},c.a.createElement(p.a,null,"Initial"))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"SVGs"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can be placed on SVG nodes, where ",c.a.createElement("code",{className:"language-text"},"followCursor: 'initial'")," becomes\nvery useful, since it can be placed directly on the line."),c.a.createElement("svg",{height:"150",width:"150"},c.a.createElement(u.b,{followCursor:"initial",animation:"fade",delay:100,arrow:!0},c.a.createElement("line",{x1:"0",y1:"0",x2:"150",y2:"150",style:{stroke:"tomato",strokeWidth:5}}))),c.a.createElement(m.MDXTag,{name:"h4",components:a},"Nesting"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Tooltips can even be nested. You can have fun with the following little example\n:-)"),c.a.createElement(p.c,null,c.a.createElement(u.b,{content:c.a.createElement(u.b,{content:c.a.createElement(u.b,null,c.a.createElement(p.a,{style:{margin:0}},"Nesting")),interactive:!0,theme:"light"},c.a.createElement(p.a,{style:{margin:0}},"Nesting")),interactive:!0,theme:"light"},c.a.createElement(p.a,null,"Nesting"))),c.a.createElement("br",null),c.a.createElement(m.MDXTag,{name:"p",components:a},"The above is not a complete list of features. There are plenty more!"))},a}(c.a.Component),h={}},180:function(e,a,t){"use strict";var n=t(9),l=t.n(n),r=t(185);t.d(a,"a",function(){return r.a});t(186),t(187),t(188);r.b.defaultProps=l()({},r.b.defaultProps,{content:"I'm a Tippy tooltip!"}),a.b=r.b},190:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(184),o=t(180),i=t(178),c=r.c.ul.withConfig({displayName:"Dropdown__List",componentId:"sc-1bayfxq-0"})(["margin:0;padding-left:0;list-style:none;text-align:left;"]),m=r.c.button.attrs({role:"menuitem"}).withConfig({displayName:"Dropdown__Reaction",componentId:"sc-1bayfxq-1"})(["background:none;border:none;font-size:22px;color:inherit;transition:transform 0.1s ease-out;transform:scale(1.0001);cursor:pointer;&:hover,&:focus{transform:scale(1.25);}"]),s=r.c.p.withConfig({displayName:"Dropdown__Text",componentId:"sc-1bayfxq-2"})(["margin:5px 0;color:#777;"]);function u(e){var a=e.text;return l.a.createElement(o.b,{content:l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null,"Pick your reaction"),l.a.createElement("hr",null),l.a.createElement(c,null,l.a.createElement(m,{"aria-label":"React with thumbs up emoji"},l.a.createElement("span",{role:"img","aria-label":"Thumbs up"},"👍")),l.a.createElement(m,{"aria-label":"React with thumbs down emoji"},l.a.createElement("span",{role:"img","aria-label":"Thumbs down"},"👎")),l.a.createElement(m,{"aria-label":"React with heart emoji"},l.a.createElement("span",{role:"img","aria-label":"Heart"},"❤️")),l.a.createElement(m,{"aria-label":"React with crying with laughter emoji"},l.a.createElement("span",{role:"img","aria-label":"Crying with laughter"},"😂")),l.a.createElement(m,{"aria-label":"React with party emoji"},l.a.createElement("span",{role:"img","aria-label":"Party"},"🎉")))),interactive:!0,aria:null,animateFill:!1,placement:"bottom",distance:7,animation:"fade",theme:"light-border dropdown",trigger:"click",arrow:!0,appendTo:function(e){return e.parentNode},onMount:function(e){e.reference.setAttribute("aria-expanded","true")},onHide:function(e){e.reference.setAttribute("aria-expanded","false")}},l.a.createElement(i.a,{"aria-haspopup":"true","aria-expanded":"false"},a))}u.defaultProps={text:"Dropdown"},a.a=u}}]);
//# sourceMappingURL=component---src-pages-index-mdx-92ec26271906d957d128.js.map