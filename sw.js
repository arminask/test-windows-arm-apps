if(!self.define){let r,s={};const e=(e,l)=>(e=new URL(e+".js",l).href,s[e]||new Promise((s=>{if("document"in self){const r=document.createElement("script");r.src=e,r.onload=s,document.head.appendChild(r)}else r=e,importScripts(e),s()})).then((()=>{let r=s[e];if(!r)throw new Error(`Module ${e} didn’t register its module`);return r})));self.define=(l,u)=>{const o=r||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let i={};const n=r=>e(r,o),c={module:{uri:o},exports:i,require:n};s[o]=Promise.all(l.map((r=>c[r]||n(r)))).then((r=>(u(...r),i)))}}define(["./workbox-b584cb72"],(function(r){"use strict";self.skipWaiting(),r.clientsClaim(),r.precacheAndRoute([{url:"index.html",revision:"3bf0e0d25560d226e50ae2bf6f8a710f"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"resources/AdGuardHome-BM3S8BjX.js",revision:null},{url:"resources/AdGuardHome-VUHEHvTH.css",revision:null},{url:"resources/CopyToClipboard-BxewyV6X.js",revision:null},{url:"resources/CopyToClipboard-c-nP7xwp.css",revision:null},{url:"resources/Emby-6M-swsO9.css",revision:null},{url:"resources/Emby-qHXx0qre.js",revision:null},{url:"resources/Healthchecks-CZrbG_u_.css",revision:null},{url:"resources/Healthchecks-VebYr-D1.js",revision:null},{url:"resources/HomeAssistant-BsFecGwn.css",revision:null},{url:"resources/HomeAssistant-DV5UGxvS.js",revision:null},{url:"resources/Immich-CPPBWwRI.js",revision:null},{url:"resources/Immich-CRGpKmOg.css",revision:null},{url:"resources/index-CampbdA2.js",revision:null},{url:"resources/index-Cr7_iVHT.css",revision:null},{url:"resources/Jellystat-CHcDemiE.js",revision:null},{url:"resources/Jellystat-Dzz3_t1s.css",revision:null},{url:"resources/Lidarr-B-PGZVnW.js",revision:null},{url:"resources/Lidarr-BVtjDeed.css",revision:null},{url:"resources/Mealie-dqUJdots.js",revision:null},{url:"resources/Medusa-BMYyJY6W.css",revision:null},{url:"resources/Medusa-ChlBJxlU.js",revision:null},{url:"resources/Mylar-B10Z48qE.js",revision:null},{url:"resources/Mylar-BLX8E9HU.css",revision:null},{url:"resources/OctoPrint-4COaWX9a.css",revision:null},{url:"resources/OctoPrint-y8cNbwNN.js",revision:null},{url:"resources/OpenHAB-CnrwoovX.css",revision:null},{url:"resources/OpenHAB-DGAlO_E_.js",revision:null},{url:"resources/OpenWeather-Bh-0Z-Qx.js",revision:null},{url:"resources/OpenWeather-DrhKYttg.css",revision:null},{url:"resources/PaperlessNG-D6iJHd2i.js",revision:null},{url:"resources/PiAlert-DJ7MxcX8.css",revision:null},{url:"resources/PiAlert-DPNRLTXk.js",revision:null},{url:"resources/PiHole-CGXBG_xS.css",revision:null},{url:"resources/PiHole-CYaBqW3s.js",revision:null},{url:"resources/Ping-CKmHX6og.js",revision:null},{url:"resources/Ping-CtOsu8GH.css",revision:null},{url:"resources/Portainer-B3ZAV5eQ.css",revision:null},{url:"resources/Portainer-DS9dB9Zk.js",revision:null},{url:"resources/Prometheus-C388KMHL.css",revision:null},{url:"resources/Prometheus-LrW3_EVu.js",revision:null},{url:"resources/Prowlarr-CguNJ4eM.css",revision:null},{url:"resources/Prowlarr-DLj99EYT.js",revision:null},{url:"resources/Proxmox-BvOeeyTa.css",revision:null},{url:"resources/Proxmox-uFTeVac9.js",revision:null},{url:"resources/qBittorrent-CgSzXXQH.css",revision:null},{url:"resources/qBittorrent-n2T0nOWF.js",revision:null},{url:"resources/Radarr-C6cGI7n_.css",revision:null},{url:"resources/Radarr-DdjwXZT2.js",revision:null},{url:"resources/Readarr-BG9H1a8I.js",revision:null},{url:"resources/Readarr-BUEdOLg1.css",revision:null},{url:"resources/Rtorrent-BURVppN2.js",revision:null},{url:"resources/Rtorrent-C01DK07j.css",revision:null},{url:"resources/SABnzbd-DMq9TCbu.js",revision:null},{url:"resources/SABnzbd-DrSgZ6-5.css",revision:null},{url:"resources/service-P8kc4j81.js",revision:null},{url:"resources/Sonarr-CPIwTh9J.css",revision:null},{url:"resources/Sonarr-Cvm369o0.js",revision:null},{url:"resources/SpeedtestTracker-Cr90Y3Nj.js",revision:null},{url:"resources/Tautulli-C9LHrclE.js",revision:null},{url:"resources/Tautulli-DNxI2bJp.css",revision:null},{url:"resources/Tdarr-D5Ge1w0J.js",revision:null},{url:"resources/Tdarr-FH4BLoRx.css",revision:null},{url:"resources/UptimeKuma-BCA_D_sE.css",revision:null},{url:"resources/UptimeKuma-lEsChPno.js",revision:null},{url:"resources/WUD-QepDU8yq.css",revision:null},{url:"resources/WUD-s8P_CiRn.js",revision:null},{url:"assets/manifest.json",revision:"32b26ee6e51fb4c94ac9a6398aded962"}],{}),r.cleanupOutdatedCaches()}));
