(window.webpackJsonp=window.webpackJsonp||[]).push([[21,54],{331:function(t,e,a){"use strict";a.r(e);a(40);var i=a(352),n=a(327),s=a(328),r=a(306),o=a(4),b="routes.gb_investment.",l={tab:"gbi_tab"},u={validate:function(t){return t.params.gb in i.gbs},head:function(){return this.$store.commit("SET_HERO",{title:this.$t(b+"hero.title",{gb_key:"foe_data.gb."+this.$data.gb.key}),subtitle:"routes.gb_investment_gb_chooser.hero.subtitle"}),{title:this.$t(b+"title",{gb_key:"foe_data.gb."+this.$data.gb.key})}},asyncData:function(t){var e=t.params,i=t.payload;return i?{gb:i}:{gb:a(520)("./".concat(e.gb))}},data:function(){this.$store.commit("SET_CURRENT_LOCATION","gb_investment");var t=this.cookieValid("gbi_tab")?parseInt(this.$cookies.get("gbi_tab")):0;t=o.a.inRange(t,0,1)?t:0,this.$store.commit("ADD_URL_QUERY",{key:l.tab,value:t});var e={i18nPrefix:b,levelData:null,gbi_tab:t,errors:{gbi_tab:!1}};return Object.assign(e,this.checkQuery()),e},watch:{gbi_tab:function(t,e){o.a.handlerForm(this,"gbi_tab",0===t.length?0:t,e,[0,1],!this.isPermalink,"/")===o.a.FormCheck.VALID&&this.$store.commit("UPDATE_URL_QUERY",{key:l.tab,value:t})}},methods:{cookieValid:function(t){return void 0!==this.$cookies.get(t)&&!isNaN(this.$cookies.get(t))},checkQuery:function(){var t={},e=!1;return this.$route.query[l.tab]&&!isNaN(this.$route.query[l.tab])&&o.a.inRange(parseInt(this.$route.query[l.tab]),0,1)&&(e=!0,t.gbi_tab=parseInt(this.$route.query[l.tab])),e&&this.$store.commit("IS_PERMALINK",!0),t}},components:{gbInvestment:n.a,securePosition:r.a,gbInvestmentInvestors:s.a}},c=a(15),g=Object(c.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-tabs",{attrs:{type:"is-toggle",expanded:""},model:{value:t.gbi_tab,callback:function(e){t.gbi_tab=e},expression:"gbi_tab"}},[a("b-tab-item",{attrs:{label:t.$t(t.i18nPrefix+"tab.owner_view.title")}},[a("gb-investment",{attrs:{gb:t.gb,canPermalink:!0},on:{updateLevelData:function(e){t.levelData=e}}}),a("secure-position",{directives:[{name:"show",rawName:"v-show",value:null!==t.levelData,expression:"levelData !== null"}],attrs:{levelData:t.levelData,ns:"gbi"}})],1),a("b-tab-item",{attrs:{label:t.$t(t.i18nPrefix+"tab.investors_view.title")}},[a("gb-investment-investors",{attrs:{gb:t.gb,canPermalink:!0}})],1)],1)],1)},[],!1,null,null,null);g.options.__file="index.vue";e.default=g.exports},820:function(t,e,a){"use strict";a.r(e);var i=a(331).default,n=a(15),s=Object(n.a)(i,void 0,void 0,!1,null,null,null);s.options.__file="index.vue";e.default=s.exports}}]);