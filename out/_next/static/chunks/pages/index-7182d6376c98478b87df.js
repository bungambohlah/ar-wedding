(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6124:function(a,e,s){"use strict";s.r(e),s.d(e,{default:function(){return g}});var n=s(6311),i=s(266),r=s(809),t=s.n(r),l=s(9008),c=s(5675),d=s(4298),m=s(1664),o=s(7294),h=s(2941),j=s(8),u=s.n(j),x=s(5893);function f(a,e){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(t().mark((function a(e,s){var n,i,r=arguments;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=r.length>2&&void 0!==r[2]?r[2]:null,e.preventDefault(),!s||s.constructor!==Object){a.next=12;break}if(Boolean(s.name)){a.next=6;break}return alert("Harap isi nama"),a.abrupt("return",!1);case 6:return a.next=8,fetch("/api/attend",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 8:return(i=a.sent).ok&&(n(""),alert("Terima kasih telah mengisi "+s.name||0)),429===i.status&&alert("Maaf, kamu sudah mengisi nama"),a.abrupt("return",!0);case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function g(){var a=function(a){var e=(0,o.useState)(null),s=e[0],n=e[1],r=(0,o.useState)(!0),l=r[0],c=r[1];return(0,o.useEffect)((function(){var a=function(){var a=(0,i.Z)(t().mark((function a(){return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!l){a.next=6;break}return a.next=3,s.play();case 3:a.t0=a.sent,a.next=9;break;case 6:return a.next=8,s.pause();case 8:a.t0=a.sent;case 9:return a.abrupt("return",a.t0);case 10:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();s&&a()}),[l,s]),(0,o.useEffect)((function(){return s||n(new Audio(a)),s&&s.addEventListener("ended",(function(){return c(!1)})),function(){s&&(s.removeEventListener("ended",(function(){return c(!1)})),n(null))}}),[s,a]),[l,function(){return c(!l)}]}("/music/wedding.mp3"),e=(0,n.Z)(a,2),s=e[0],r=e[1],j=(0,o.useState)(""),p=j[0],g=j[1],k=u()("2021-10-10 13:00").tz("Asia/Jakarta"),b=k.clone().add(4,"hours"),v=u().duration(b.diff(k)).asHours(),N=(0,o.useState)({title:"Acara Nikah Rianti & Afif",description:"Event acara resepsi nikah rianti & afif yang diselenggarakan pada tanggal 10 oktober 2021",location:"Jl. Ploso IX-A no. 10, Surabaya, Jawa Timur",startDatetime:k.format("YYYYMMDDTHHmmssZ"),endDatetime:b.format("YYYYMMDDTHHmmssZ"),duration:v}),y=N[0],w=(N[1],(0,h.ZP)((function(a){var e=a.children,s=a.onClick;return(0,x.jsx)("a",{className:"btn btn-default btn-sm",onClick:s,children:e})}),(function(a){var e=a.children;return(0,x.jsx)("ul",{className:"dropdown animated-fast fadeInUpMenu",children:e})})));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(l.default,{children:[(0,x.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,x.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,x.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,x.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,x.jsx)("meta",{charSet:"utf-8"}),(0,x.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,x.jsx)("title",{children:"Wedding \u2014 Rianti & Afif"}),(0,x.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,x.jsx)("meta",{name:"description",content:"Rianti & Afif Wedding Website"}),(0,x.jsx)("meta",{name:"keywords",content:"afif, rianti, wedding, nikah, kawin, nikahan, afif abdillah jusuf, rianti dwi lestari, akad, akad nikah, landing page, resepsi, resepsi nikah"}),(0,x.jsx)("meta",{name:"author",content:"afif.dev"}),(0,x.jsx)("meta",{property:"og:title",content:"Wedding - Rianti & Afif"}),(0,x.jsx)("meta",{property:"og:image",content:""}),(0,x.jsx)("meta",{property:"og:url",content:"https://wedding.afif.dev/"}),(0,x.jsx)("meta",{property:"og:site_name",content:"Rianti & Afif Wedding Website"}),(0,x.jsx)("meta",{property:"og:description",content:"Rianti & Afif Wedding Website"}),(0,x.jsx)("meta",{name:"twitter:title",content:"Wedding - Rianti & Afif"}),(0,x.jsx)("meta",{name:"twitter:image",content:""}),(0,x.jsx)("meta",{name:"twitter:url",content:"https://wedding.afif.dev/"}),(0,x.jsx)("meta",{name:"twitter:card",content:""})]}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/modernizr-2.6.2.min.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/jquery.min.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/jquery.easing.1.3.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/bootstrap.min.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/jquery.waypoints.min.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/owl.carousel.min.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/jquery.countTo.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/jquery.stellar.min.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/jquery.magnific-popup.min.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/magnific-popup-options.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/simplyCountdown.js"}),(0,x.jsx)(d.default,{strategy:"beforeInteractive",src:"/js/main.js"}),(0,x.jsx)(d.default,{id:"my-script",children:"\n        var d = new Date(\"2021-10-10\");\n\n        // default example\n        simplyCountdown('.simply-countdown-one', {\n            year: d.getFullYear(),\n            month: d.getMonth() + 1,\n            day: d.getDate()\n        });\n\n        //jQuery example\n        $('#simply-countdown-losange').simplyCountdown({\n            year: d.getFullYear(),\n            month: d.getMonth() + 1,\n            day: d.getDate(),\n            enableUtc: false\n        });"}),(0,x.jsx)("div",{className:"fh5co-loader"}),(0,x.jsxs)("div",{id:"page",children:[(0,x.jsxs)("header",{id:"fh5co-header",className:"fh5co-cover",role:"banner",style:{backgroundImage:"url(/images/img_bg_2.jpg)"},"data-stellar-background-ratio":"0.5",children:[(0,x.jsx)("div",{className:"overlay"}),(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-8 col-md-offset-2 text-center",children:(0,x.jsx)("div",{className:"display-t",children:(0,x.jsxs)("div",{className:"display-tc animate-box","data-animate-effect":"fadeIn",children:[(0,x.jsx)("h1",{children:"Rianti & Afif"}),(0,x.jsx)("h2",{children:"Alhamdulillah, kita telah menikah"}),(0,x.jsx)("div",{className:"simply-countdown simply-countdown-one"}),(0,x.jsx)(w,{className:"has-dropdown",event:y,buttonText:"Save the date"})]})})})})})]}),(0,x.jsx)("div",{id:"fh5co-couple",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"col-md-8 col-md-offset-2 text-center fh5co-heading animate-box",children:[(0,x.jsx)("h2",{style:{fontSize:"3.5rem!important"},children:"Assalamu'alaikum"}),(0,x.jsx)("h3",{children:"\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u0647\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0652\u0645\u064e\u0646\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0650\u064a\u0652\u0645\u0650"}),(0,x.jsx)("h3",{children:"Salam sejahtera bagi kita semua"}),(0,x.jsx)("h3",{children:"10 Oktober 2021"}),(0,x.jsx)("p",{children:"Acara resepsi pernikahan kami"})]})}),(0,x.jsxs)("div",{className:"couple-wrap animate-box",children:[(0,x.jsxs)("div",{className:"couple-half",children:[(0,x.jsx)("div",{className:"bride",children:(0,x.jsx)(c.default,{src:"/images/bride.jpg",alt:"bride",className:"img-responsive",width:"300",height:"300"})}),(0,x.jsxs)("div",{className:"desc-bride",children:[(0,x.jsx)("h3",{children:"Rianti Dwi Lestari"}),(0,x.jsx)("p",{children:"Assalamu'alaikum, perkenalkan nama saya Rianti, panggil saja Ria. Sah istri dari Afif Abdillah Jusuf, saya meminta doa dan restu semoga pernikahan saya menjadi cinta yang abadi di dunia maupun di akhirat, aamiin."})]})]}),(0,x.jsx)("p",{className:"heart text-center",children:(0,x.jsx)("i",{className:"icon-heart2"})}),(0,x.jsxs)("div",{className:"couple-half",children:[(0,x.jsx)("div",{className:"groom",children:(0,x.jsx)(c.default,{src:"/images/groom.jpg",alt:"groom",className:"img-responsive",width:"300",height:"300"})}),(0,x.jsxs)("div",{className:"desc-groom",children:[(0,x.jsx)("h3",{children:"Afif Abdillah Jusuf"}),(0,x.jsx)("p",{children:"Perkenalkan saya Afif, panggil saja Apep, sah suami dari Rianti Dwi Lestari. Saya hanya seorang manusia yang tampil sederhana meminang istri saya dengan bismillah atas ridho Allah SWT. Saya meminta doa restu dari kalian atas pernikahan saya. Terima kasih."})]})]})]})]})}),(0,x.jsxs)("div",{id:"fh5co-event",className:"fh5co-bg",style:{backgroundImage:"url(/images/img_bg_3.jpg)"},children:[(0,x.jsx)("div",{className:"overlay"}),(0,x.jsxs)("div",{className:"container-fluid",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"col-md-8 col-md-offset-2 text-center fh5co-heading animate-box",children:[(0,x.jsx)("span",{children:"Daftar Acara Kami"}),(0,x.jsx)("h2",{children:"Acara Nikah"})]})}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"display-t",children:(0,x.jsx)("div",{className:"display-tc",children:(0,x.jsxs)("div",{className:"col-md-10 col-md-offset-1",children:[(0,x.jsx)("div",{className:"col-md-6 col-sm-6 text-center",children:(0,x.jsxs)("div",{className:"event-wrap animate-box",children:[(0,x.jsx)("h3",{children:"Akad Nikah"}),(0,x.jsxs)("div",{className:"col-sm-4 event-col",children:[(0,x.jsx)("i",{className:"icon-clock"}),(0,x.jsx)("span",{children:"09:00 - 11:00 WIB"})]}),(0,x.jsxs)("div",{className:"col-sm-4 event-col",children:[(0,x.jsx)("i",{className:"icon-calendar"}),(0,x.jsx)("span",{children:"Kamis, 15 Juli 2021"})]}),(0,x.jsxs)("div",{className:"col-sm-4 event-col",children:[(0,x.jsx)("i",{className:"icon-location2"}),(0,x.jsx)("span",{children:(0,x.jsx)(m.default,{href:"https://goo.gl/maps/Toa9NdLdhPCojxE8A",passHref:!0,children:(0,x.jsxs)("a",{style:{color:"whitesmoke"},target:"_blank",rel:"noreferrer",children:[(0,x.jsx)("strong",{children:"Masjid Subulussalam "}),(0,x.jsx)("i",{className:"icon-arrow-with-circle-up"})]})})})]}),(0,x.jsx)("p",{style:{marginTop:"10%"},children:"Atas doa dan restu kalian, Alhamdulillah acara Akad Nikah telah diselenggarakan dan berjalan lancar. Tanpa mengurangi rasa hormat, kami tidak mengundang kalian karena suasana pandemi saat itu masih tidak begitu baik, maka acara diselenggarakan dengan orang yang terbatas sesuai anjuran pemerintah. Mohon dimaklumi terima kasih."})]})}),(0,x.jsx)("div",{className:"col-md-6 col-sm-6 text-center",children:(0,x.jsxs)("div",{className:"event-wrap animate-box",children:[(0,x.jsx)("h3",{children:"Resepsi"}),(0,x.jsxs)("div",{className:"col-sm-4 event-col",children:[(0,x.jsx)("i",{className:"icon-clock"}),(0,x.jsx)("span",{children:"13:00 - 20:00 WIB"})]}),(0,x.jsxs)("div",{className:"col-sm-4 event-col",children:[(0,x.jsx)("i",{className:"icon-calendar"}),(0,x.jsx)("span",{children:"Minggu, 10 Oktober 2021"})]}),(0,x.jsxs)("div",{className:"col-sm-4 event-col",children:[(0,x.jsx)("i",{className:"icon-location2"}),(0,x.jsx)("span",{children:(0,x.jsx)(m.default,{href:"https://goo.gl/maps/kaC4hyjZh1h1okG46",passHref:!0,children:(0,x.jsxs)("a",{style:{color:"whitesmoke"},target:"_blank",rel:"noreferrer",children:[(0,x.jsx)("strong",{children:"Jl. Ploso IX-A No. 10 "}),(0,x.jsx)("i",{className:"icon-arrow-with-circle-up"})]})})})]}),(0,x.jsx)("p",{children:"Bismillah, kedepannya kami akan mengadakan acara resepsi pernikahan kami, tanpa mengurangi rasa hormat dimohon untuk hadir dengan memakai masker dan hand sanitizer. Tidak luput juga meminta doa dan restu dari kalian semua agar acara berjalan dengan normal, terima kasih."})]})})]})})})})]})]}),(0,x.jsx)("div",{id:"fh5co-couple-story",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"col-md-8 col-md-offset-2 text-center fh5co-heading animate-box",children:[(0,x.jsx)("h2",{children:"Cerita Kami"}),(0,x.jsx)("p",{children:"Perjalanan singkat kami mulai saat pertama kali kenal, bertemu kembali, hingga menjadi pasangan sah."})]})}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12 col-md-offset-0",children:(0,x.jsxs)("ul",{className:"timeline animate-box",children:[(0,x.jsxs)("li",{className:"animate-box",children:[(0,x.jsx)("div",{className:"timeline-badge",style:{backgroundImage:"url(/images/couple-1.jpg)"}}),(0,x.jsxs)("div",{className:"timeline-panel",children:[(0,x.jsxs)("div",{className:"timeline-heading",children:[(0,x.jsx)("h3",{className:"timeline-title",children:"Saat Jadi Teman Sekelas"}),(0,x.jsx)("span",{className:"date",children:"2012"})]}),(0,x.jsx)("div",{className:"timeline-body",children:(0,x.jsx)("p",{children:"Di sekolah SMPN 37 Surabaya, Kami menjadi teman sekelas, yaitu saat memasuki kelas 9 yang dimana saat itu tahun ajarannya adalah 2012. Kami tidak begitu akrab, hanya sekedar kenal saja."})})]})]}),(0,x.jsxs)("li",{className:"timeline-inverted animate-box",children:[(0,x.jsx)("div",{className:"timeline-badge",style:{backgroundImage:"url(/images/couple-2.jpg)"}}),(0,x.jsxs)("div",{className:"timeline-panel",children:[(0,x.jsxs)("div",{className:"timeline-heading",children:[(0,x.jsx)("h3",{className:"timeline-title",children:"Ketemu Lagi"}),(0,x.jsx)("span",{className:"date",children:"Desember 2017"})]}),(0,x.jsx)("div",{className:"timeline-body",children:(0,x.jsx)("p",{children:"Kami dipertemukan kembali pada tempat kerja yang bersebelahan, tempat kerja kami hanya beda gedung saja. Saat itu Afif bertempat kerja di Graha Bumi Surabaya, sedangkan Rianti bertempat kerja di Hotel Bumi Surabaya. Kami mulai berkenalan dan saling sapa lewat sosial media. Disinilah awal kami mulai PDKT dan berpacaran :)."})})]})]}),(0,x.jsxs)("li",{className:"animate-box",children:[(0,x.jsx)("div",{className:"timeline-badge",style:{backgroundImage:"url(/images/couple-3.jpg)"}}),(0,x.jsxs)("div",{className:"timeline-panel",children:[(0,x.jsxs)("div",{className:"timeline-heading",children:[(0,x.jsx)("h3",{className:"timeline-title",children:"Lamaran"}),(0,x.jsx)("span",{className:"date",children:"20 Desember 2020"})]}),(0,x.jsx)("div",{className:"timeline-body",children:(0,x.jsx)("p",{children:"3 tahun lamanya kami berpacaran dan mulai memutuskan untuk ke langkah yang lebih jauh lagi. Afif mulai berniat melamar pasangannya, Rianti dengan bismillah tawakallah"})})]})]}),(0,x.jsxs)("li",{className:"timeline-inverted animate-box",children:[(0,x.jsx)("div",{className:"timeline-badge",style:{backgroundImage:"url(/images/couple-4.jpg)"}}),(0,x.jsxs)("div",{className:"timeline-panel",children:[(0,x.jsxs)("div",{className:"timeline-heading",children:[(0,x.jsx)("h3",{className:"timeline-title",children:"Akad Nikah"}),(0,x.jsx)("span",{className:"date",children:"15 Juli 2021"})]}),(0,x.jsx)("div",{className:"timeline-body",children:(0,x.jsx)("p",{children:"Alhamdulillah, dengan ridho Allah SWT, Afif melangkah lebih jauh lagi dengan meminang pasangannya, Rianti menjadi istri sah. Banyak rintangan yang kami hadapi, salah satunya kondisi pandemi Covid-19 yang lagi tinggi saat itu, harus melakukan syarat dan anjuran pemerintah dengan orang yang terbatas. Akan tetapi, Alhamdulillah acara berjalan dengan lancar"})})]})]})]})})})]})}),(0,x.jsx)("div",{id:"fh5co-gallery",className:"fh5co-section-gray",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"col-md-8 col-md-offset-2 text-center fh5co-heading animate-box",children:[(0,x.jsx)("h2",{children:"Foto Foto"}),(0,x.jsx)("p",{children:"Coming Soon!"}),(0,x.jsx)("p",{children:"(Ditunggu ya, kita belum foto post weddingnya)"})]})})})}),(0,x.jsxs)("div",{id:"fh5co-counter",className:"fh5co-bg fh5co-counter",style:{backgroundImage:"url(/images/img_bg_5.jpg)"},children:[(0,x.jsx)("div",{className:"overlay"}),(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"display-t",children:(0,x.jsxs)("div",{className:"display-tc",children:[(0,x.jsx)("div",{className:"col-md-6 col-sm-6 animate-box",children:(0,x.jsxs)("div",{className:"feature-center",children:[(0,x.jsx)("span",{className:"icon",children:(0,x.jsx)("i",{className:"icon-users"})}),(0,x.jsx)("span",{className:"counter js-counter","data-from":"0","data-to":"450","data-speed":"5000","data-refresh-interval":"50",children:"1"}),(0,x.jsx)("span",{className:"counter-label",children:"Perkiraan Undangan"})]})}),(0,x.jsx)("div",{className:"col-md-6 col-sm-6 animate-box",children:(0,x.jsxs)("div",{className:"feature-center",children:[(0,x.jsx)("span",{className:"icon",children:(0,x.jsx)("i",{className:"icon-bowl"})}),(0,x.jsx)("span",{className:"counter js-counter","data-from":"0","data-to":"1000","data-speed":"5000","data-refresh-interval":"50",children:"1"}),(0,x.jsx)("span",{className:"counter-label",children:"Perkiraan Catering"})]})})]})})})})]}),(0,x.jsxs)("div",{id:"fh5co-started",className:"fh5co-bg",style:{backgroundImage:"url(/images/img_bg_4.jpg)"},children:[(0,x.jsx)("div",{className:"overlay"}),(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"row animate-box",children:(0,x.jsxs)("div",{className:"col-md-8 col-md-offset-2 text-center fh5co-heading",children:[(0,x.jsx)("h2",{children:"Sudah Datang?"}),(0,x.jsx)("p",{children:"Silakan isi nama untuk nandain kalau kamu sudah datang ya \ud83e\udd7a\ud83d\udc49\ud83d\udc48"}),(0,x.jsx)("p",{children:"Kalau bisa yang kasih nama lengkap biar gk bingung \ud83d\ude0a"})]})}),(0,x.jsx)("div",{className:"row animate-box",children:(0,x.jsx)("div",{className:"col-md-10 col-md-offset-1",children:(0,x.jsxs)("form",{name:"attendForm",action:"/api/attend",method:"post",onSubmit:function(){var a=(0,i.Z)(t().mark((function a(e){return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f(e,{name:p},g);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),className:"form-inline",children:[(0,x.jsx)("div",{className:"col-md-6 col-sm-6",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{htmlFor:"name",className:"sr-only",children:"Name"}),(0,x.jsx)("input",{type:"name",className:"form-control",id:"name",placeholder:"Nama kamu siapa?",name:"name",value:p,onChange:function(a){return g(a.currentTarget.value)}})]})}),(0,x.jsx)("div",{className:"col-md-6 col-sm-6",children:(0,x.jsx)("button",{type:"submit",className:"btn btn-default btn-block",children:"Hadir \u270b"})})]})})})]})]}),(0,x.jsx)("footer",{id:"fh5co-footer",role:"contentinfo",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row copyright",children:(0,x.jsxs)("div",{className:"col-md-12 text-center",children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("small",{className:"block",children:["\xa9 ",(new Date).getFullYear()," ","",(0,x.jsx)(m.default,{href:"https://afif.dev",passHref:!0,children:(0,x.jsx)("a",{children:"afif.dev"})}),". All Rights Reserved."]}),(0,x.jsxs)("small",{className:"block",children:["Thanks for Design"," ",(0,x.jsx)(m.default,{href:"https://freehtml5.co/",passHref:!0,children:(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",children:"FREEHTML5.co"})})]}),(0,x.jsxs)("small",{className:"block",children:["Thanks for Music"," ",(0,x.jsx)(m.default,{href:"https://youtu.be/_pR_cW4bDeE",passHref:!0,children:(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",children:"Ungu Feat. Andien - Saat Bahagia | VC Trinity"})})]}),(0,x.jsxs)("small",{children:["Thanks for Backgrounds"," ",(0,x.jsx)(m.default,{href:"https://www.freepik.com/photos/background",passHref:!0,children:(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",children:"Background photo created by jcomp - www.freepik.com"})})]})]}),(0,x.jsxs)("ul",{className:"fh5co-social-icons",children:[(0,x.jsx)("li",{children:(0,x.jsx)(m.default,{href:"https://twitter.com/bungambohlah",passHref:!0,children:(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,x.jsx)("i",{className:"icon-twitter"})})})}),(0,x.jsx)("li",{children:(0,x.jsx)(m.default,{href:"https://instagr.am/afif.abdillah.j",passHref:!0,children:(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,x.jsx)("i",{className:"icon-instagram"})})})}),(0,x.jsx)("li",{children:(0,x.jsx)(m.default,{href:"https://fb.me/rudrafentje.samasamagila",passHref:!0,children:(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,x.jsx)("i",{className:"icon-facebook"})})})}),(0,x.jsx)("li",{children:(0,x.jsx)(m.default,{href:"https://linkedin.com/in/afifjusuf/",passHref:!0,children:(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,x.jsx)("i",{className:"icon-linkedin"})})})}),(0,x.jsx)("li",{children:(0,x.jsx)(m.default,{href:"https://youtube.com/@afifdev",passHref:!0,children:(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,x.jsx)("i",{className:"icon-youtube"})})})}),(0,x.jsx)("li",{children:(0,x.jsx)(m.default,{href:"https://afif.dev",passHref:!0,children:(0,x.jsx)("a",{children:(0,x.jsx)("i",{className:"icon-globe2"})})})})]})]})})})}),(0,x.jsx)("div",{className:"gototop js-top",children:(0,x.jsx)("a",{href:"#",className:"js-gotop",children:(0,x.jsx)("i",{className:"icon-arrow-up"})})}),(0,x.jsx)("div",{className:"musicbtn",children:(0,x.jsx)("a",{onClick:r,children:s?(0,x.jsx)("i",{className:"icon-pause"}):(0,x.jsx)("i",{className:"icon-play"})})})]})]})}},8581:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6124)}])}},function(a){a.O(0,[774,678,885,738,888,179],(function(){return e=8581,a(a.s=e);var e}));var e=a.O();_N_E=e}]);