(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[295],{295:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var i=n(43),r=n(475),s=n(551),a=n(579);const c=e=>{let{data:t}=e;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:t.degree}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Education"})}),t.map((e=>(0,a.jsx)(c,{data:e},e.school)))]})};o.defaultProps={data:[]};const l=o;var u=n(446),d=n.n(u),h=n(574);const g=e=>{let{data:{name:t,position:n,url:i,startDate:r,endDate:s,summary:c,highlights:o}}=e;return(0,a.jsxs)("article",{className:"jobs-container",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:i,children:t})," - ",n]}),(0,a.jsxs)("p",{className:"daterange",children:[" ",d()(r).format("MMMM YYYY")," -"," ",s?d()(s).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,a.jsx)(h.Ay,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,o?(0,a.jsx)("ul",{className:"points",children:o.map((e=>(0,a.jsx)("li",{children:e},e)))}):null]})},m=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"experience",children:[(0,a.jsx)("div",{className:"link-to",id:"experience"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,a.jsx)(g,{data:e},"".concat(e.name,"-").concat(e.position))))]})};m.defaultProps={data:[]};const y=m,f=e=>{let{handleClick:t,active:n,label:i}=e;return(0,a.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:()=>t(i),children:i})},p=e=>{let{data:t,categories:n}=e;const{category:i,competency:r,title:s}=t,c={background:n.filter((e=>i.includes(e.name))).map((e=>e.color))[0]},o={...c,width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")};return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:c,children:(0,a.jsx)("span",{children:s})}),(0,a.jsx)("div",{className:"skillbar-bar",style:o}),(0,a.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};p.defaultProps={categories:[]};const v=p,w=e=>{let{skills:t,categories:n}=e;const r=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[s,c]=(0,i.useState)(r),o=e=>{const t=Object.keys(s).reduce(((t,n)=>({...t,[n]:e===n&&!s[n]})),{});t.All=!Object.keys(s).some((e=>t[e])),c(t)};return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Skills"}),(0,a.jsx)("p",{children:"An overview of my technical and professional skills in the field of subsurface engineering and numerical modeling."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:Object.keys(s).map((e=>(0,a.jsx)(f,{label:e,active:s,handleClick:o},e)))}),(0,a.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(s).reduce(((e,t)=>s[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,a.jsx)(v,{categories:n,data:e},e.title)))})()})]})};w.defaultProps={skills:[],categories:[]};const M=w,j=e=>{let{data:t,last:n}=e;return(0,a.jsxs)("li",{className:"course-container",children:[(0,a.jsxs)("a",{href:t.link,children:[(0,a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,a.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,a.jsx)("div",{className:"course-dot",children:(0,a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};j.defaultProps={last:!1};const b=j,x=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,a.jsx)(b,{data:t,last:n===e.length-1},t.title))),$=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"courses",children:[(0,a.jsx)("div",{className:"link-to",id:"courses"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Selected Courses"})}),(0,a.jsx)("ul",{className:"course-list",children:x(t)})]})};$.defaultProps={data:[]};const S=$,k=()=>(0,a.jsxs)("div",{className:"references",children:[(0,a.jsx)("div",{className:"link-to",id:"references"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)(r.N_,{to:"/contact",children:(0,a.jsx)("h3",{children:"References"})}),(0,a.jsx)("p",{children:"Professional references available upon request:"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Prof. Florian Amann"}),(0,a.jsx)("li",{children:"Prof. Zhengyang Song"}),(0,a.jsx)("li",{children:"Dr.-Ing Kavan Khaledi"}),(0,a.jsx)("li",{children:"Dr. Mohammadreza Jalali"})]})]})]}),E=[{title:"Rock Mechanics",number:"GEO-E2040",link:"https://www.rwth-aachen.de",university:"RWTH Aachen"},{title:"Subsurface Storage Systems",number:"GEO-E3050",link:"https://www.rwth-aachen.de",university:"RWTH Aachen"},{title:"Numerical Methods in Geosciences",number:"GEO-E2060",link:"https://www.rwth-aachen.de",university:"RWTH Aachen"},{title:"Advanced Constitutive Modeling",number:"GEO-E3070",link:"https://www.rwth-aachen.de",university:"RWTH Aachen"},{title:"Geothermal Engineering",number:"GEO-E2080",link:"https://www.rwth-aachen.de",university:"RWTH Aachen"},{title:"Tunnel Engineering",number:"GEO-E2090",link:"https://www.rwth-aachen.de",university:"RWTH Aachen"},{title:"Finite Element Methods",number:"GEO-E3100",link:"https://www.rwth-aachen.de",university:"RWTH Aachen"},{title:"Advanced Programming for Engineering",number:"CS-E2110",link:"https://www.rwth-aachen.de",university:"RWTH Aachen"},{title:"Geological Engineering",number:"GE-B1010",link:"https://www.cqjtu.edu.cn/en/",university:"Chongqing Jiaotong University"},{title:"Landslide Prevention",number:"GE-B2020",link:"https://www.cqjtu.edu.cn/en/",university:"Chongqing Jiaotong University"},{title:"Structural Mechanics",number:"GE-B2030",link:"https://www.cqjtu.edu.cn/en/",university:"Chongqing Jiaotong University"}],D=[{school:"RWTH Aachen University",degree:"Ph.D. Subsurface Energy Engineering",link:"https://www.rwth-aachen.de/",year:2024,notes:'Dissertation: "Cyclic Processes related to Underground Energy Storage Systems"'},{school:"RWTH Aachen University",degree:"M.Sc. Geo-engineering",link:"https://www.rwth-aachen.de/",year:2021,notes:'Thesis: "Numerical Simulation of Hydro-Mechanical Coupled Processes around Tunnels in Opalinus Clay"'},{school:"Chongqing Jiaotong University",degree:"B.Sc. Geological Engineering",link:"https://www.cqjtu.edu.cn/en/",year:2017,notes:'Thesis: "Landslide Management and Design Protection Project in Waxiang Village, China"'}],N=[{name:"RWTH Aachen University",position:"Scientific Researcher",url:"https://www.rwth-aachen.de/",startDate:"2021-09-01",endDate:"2024-11-01",summary:"Conducted research on cyclic processes related to energy storage systems as part of a DFG-funded project. Specialized in subsurface engineering and numerical modeling.",highlights:["Published three papers on energy storage mechanisms and applications","Presented at the European Geosciences Union (EGU) Conference","Developed multi-physics constitutive models for rock mass behavior in MOOSE","Conducted numerical simulations in reservoir engineering using Python, C++ (with MOOSE), and FEM","Analyzed THM coupled effects and rock formation instability under varying loading conditions","Worked collaboratively in a multidisciplinary and international team"]},{name:"Self-Employed Entrepreneur",position:"Product Procurement and Sales",url:"https://deyan-tian.com",startDate:"2017-08-01",endDate:"2019-08-01",summary:"Operated an independent business focused on product procurement and sales in Berlin, Germany.",highlights:["Managed product procurement and sales operations","Developed business strategies and market analysis","Built customer relationships and managed client communications"]},{name:"Geo-Mechanical Engineering Internship",position:"Intern",url:"https://www.rwth-aachen.de/",startDate:"2017-01-01",endDate:"2017-06-01",summary:"Worked as an intern in the field of geo-mechanical engineering in Chongqing, China.",highlights:["Assisted in site investigations and data collection","Supported analysis of geological and mechanical properties","Contributed to engineering reports and documentation"]}],O=[{title:"MOOSE Framework",competency:5,category:["Numerical Modeling","Tools","Subsurface Engineering"]},{title:"Python",competency:5,category:["Languages","Data Analysis","Subsurface Engineering","ML Engineering"]},{title:"C++",competency:4,category:["Languages","Numerical Modeling"]},{title:"FEM",competency:5,category:["Numerical Modeling","Subsurface Engineering"]},{title:"HPC",competency:4,category:["Tools","Numerical Modeling"]},{title:"Rock Mechanics",competency:5,category:["Subsurface Engineering","Geo-engineering"]},{title:"Constitutive Modeling",competency:5,category:["Numerical Modeling","Subsurface Engineering"]},{title:"THM-coupled Modeling",competency:5,category:["Numerical Modeling","Subsurface Engineering"]},{title:"LaTeX",competency:4,category:["Tools","Documentation"]},{title:"Reservoir Data Analysis",competency:4,category:["Data Analysis","Subsurface Engineering"]},{title:"Parameter Optimization",competency:4,category:["Data Analysis","Numerical Modeling"]},{title:"Inelastic Analysis",competency:5,category:["Numerical Modeling","Subsurface Engineering"]},{title:"Geo-storage Systems",competency:5,category:["Subsurface Engineering","Energy Storage"]},{title:"Algorithm Optimization",competency:3,category:["Numerical Modeling","Programming"]},{title:"Coupled Physics Modeling",competency:5,category:["Numerical Modeling","Subsurface Engineering"]},{title:"Subsurface Instability Analysis",competency:4,category:["Numerical Modeling","Subsurface Engineering"]},{title:"Creep-Fatigue Modeling",competency:5,category:["Numerical Modeling","Subsurface Engineering"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Numpy",competency:4,category:["Data Science","Data Engineering","Python"]},{title:"Pandas",competency:4,category:["Data Engineering","ML Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Git",competency:3,category:["Tools"]},{title:"MATLAB",competency:4,category:["Languages","Numerical Modeling"]},{title:"German",competency:4,category:["Languages"]},{title:"English",competency:3,category:["Languages"]},{title:"Chinese",competency:5,category:["Languages"]},{title:"Japanese",competency:1,category:["Languages"]}].map((e=>({...e,category:e.category.sort()}))),A=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],C=[...new Set(O.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:A[t%A.length]}))),T={Education:()=>(0,a.jsx)(l,{data:D}),Experience:()=>(0,a.jsx)(y,{data:N}),Skills:()=>(0,a.jsx)(M,{skills:O,categories:C}),Courses:()=>(0,a.jsx)(S,{data:E}),References:()=>(0,a.jsx)(k,{})},P=()=>(0,a.jsx)(s.A,{title:"Resume",description:"Deyan Tian's Resume. RWTH Aachen University, Subsurface Engineering, Numerical Modeling, MOOSE Framework, HPC, FEM.",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{children:(0,a.jsx)(r.N_,{to:"resume",children:"Resume"})}),(0,a.jsx)("div",{className:"link-container",children:Object.keys(T).map((e=>(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object.entries(T).map((e=>{let[t,n]=e;return(0,a.jsx)(n,{},t)}))]})})},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",c="day",o="week",l="month",u="quarter",d="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+p(i,2,"0")+":"+p(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,l),s=n-r<0,a=t.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:c,D:h,h:a,m:s,s:r,ms:i,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},w="en",M={};M[w]=f;var j="$isDayjsObject",b=function(e){return e instanceof k||!(!e||!e[j])},x=function e(t,n,i){var r;if(!t)return w;if("string"==typeof t){var s=t.toLowerCase();M[s]&&(r=s),n&&(M[s]=n,r=s);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var c=t.name;M[c]=t,r=c}return!i&&r&&(w=r),r||!i&&w},$=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},S=v;S.l=x,S.i=b,S.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function f(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[j]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return S},p.isValid=function(){return!(this.$d.toString()===g)},p.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return $(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<$(e)},p.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,i=!!S.u(t)||t,u=S.p(e),g=function(e,t){var r=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?r:r.endOf(c)},m=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},y=this.$W,f=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return i?g(1,0):g(31,11);case l:return i?g(1,f):g(0,f+1);case o:var w=this.$locale().weekStart||0,M=(y<w?y+7:y)-w;return g(i?p-M:p+(6-M),f);case c:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case r:return m(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,o=S.p(e),u="set"+(this.$u?"UTC":""),g=(n={},n[c]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[s]=u+"Minutes",n[r]=u+"Seconds",n[i]=u+"Milliseconds",n)[o],m=o===c?this.$D+(t-this.$W):t;if(o===l||o===d){var y=this.clone().set(h,1);y.$d[g](m),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[S.p(e)]()},p.add=function(i,u){var h,g=this;i=Number(i);var m=S.p(u),y=function(e){var t=$(g);return S.w(t.date(t.date()+Math.round(e*i)),g)};if(m===l)return this.set(l,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===c)return y(1);if(m===o)return y(7);var f=(h={},h[s]=t,h[a]=n,h[r]=e,h)[m]||1,p=this.$d.getTime()+i*f;return S.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),s=this.$H,a=this.$m,c=this.$M,o=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].slice(0,s)},h=function(e){return S.s(s%12||12,e,"0")},m=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(y,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return c+1;case"MM":return S.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,l,3);case"MMMM":return d(l,c);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return S.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,h,g){var m,y=this,f=S.p(h),p=$(i),v=(p.utcOffset()-this.utcOffset())*t,w=this-p,M=function(){return S.m(y,p)};switch(f){case d:m=M()/12;break;case l:m=M();break;case u:m=M()/3;break;case o:m=(w-v)/6048e5;break;case c:m=(w-v)/864e5;break;case a:m=w/n;break;case s:m=w/t;break;case r:m=w/e;break;default:m=w}return g?m:S.a(m)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return M[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=x(e,t,!0);return i&&(n.$L=i),n},p.clone=function(){return S.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),E=k.prototype;return $.prototype=E,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",c],["$M",l],["$y",d],["$D",h]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,k,$),e.$i=!0),$},$.locale=x,$.isDayjs=b,$.unix=function(e){return $(1e3*e)},$.en=M[w],$.Ls=M,$.p={},$}()}}]);
//# sourceMappingURL=295.3574b960.chunk.js.map