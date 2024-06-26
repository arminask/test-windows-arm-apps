import{s as r}from"./service-P8kc4j81.js";import{_ as i,G as a,r as l,o,c as d,w as h,a as t,t as s,b as f,e as v}from"./index-CampbdA2.js";const _={name:"PiAlert",mixins:[r],props:{item:Object},components:{Generic:a},data:()=>({total:0,connected:0,newdevices:0,downalert:0,serverError:!1}),created(){const e=parseInt(this.item.updateInterval,10)||0;e>0&&setInterval(()=>this.fetchStatus(),e),this.fetchStatus()},methods:{fetchStatus:async function(){this.fetch("/php/server/devices.php?action=getDevicesTotals").then(e=>{this.total=e[0],this.connected=e[1],this.newdevices=e[3],this.downalert=e[4]}).catch(e=>{console.log(e),this.serverError=!0})}}},m={class:"notifs"},p={class:"notif total",title:"Total Devices"},u={class:"notif connected",title:"Connected Devices"},w={class:"notif newdevices",title:"New Devices"},g={class:"notif alert",title:"Down Alerts"},D={key:0,class:"notif alert",title:"Connection error to PiAlert server, check the url in config.yml"};function k(e,C,n,I,y,A){const c=l("Generic");return o(),d(c,{item:n.item},{indicator:h(()=>[t("div",m,[t("strong",p,s(e.total),1),t("strong",u,s(e.connected),1),t("strong",w,s(e.newdevices),1),t("strong",g,s(e.downalert),1),e.serverError?(o(),f("strong",D,"?")):v("",!0)])]),_:1},8,["item"])}const G=i(_,[["render",k],["__scopeId","data-v-865c2091"]]);export{G as default};
