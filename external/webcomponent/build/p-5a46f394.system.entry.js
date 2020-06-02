System.register(["./p-1e1d63e0.system.js","./p-2b72bd04.system.js"],(function(t){"use strict";var e,i,r,o;return{setters:[function(t){e=t.r;i=t.h;r=t.g},function(t){o=t.g}],execute:function(){var a="peculiar-fortify-authorization{display:block;width:100%}peculiar-fortify-authorization .challenge_container{text-align:center;margin-top:56px}peculiar-fortify-authorization .challenge_item{width:30px;display:inline-block !important;vertical-align:top;border-radius:3px}peculiar-fortify-authorization .challenge_item+.challenge_item{margin-left:10px}peculiar-fortify-authorization .challenge_item peculiar-fortify-typography{line-height:38px}";var c=t("peculiar_fortify_authorization",function(){function t(t){e(this,t)}t.prototype.render=function(){return i("peculiar-fortify-layout",{type:"message",titleValue:o("authorization.title"),descriptionValue:o("authorization.description"),slotTitleBelow:i("div",{class:"challenge_container"},this.pin.split("").map((function(t){return i("peculiar-fortify-box",{stroke:"grey_3",class:"challenge_item"},i("peculiar-fortify-typography",{type:"h4",align:"center"},t))})))})};return t}());c.style=a;var n="peculiar-fortify-certificates-list{display:block;width:100%}peculiar-fortify-certificates-list .certificates_container{border-radius:3px;height:100%;overflow:auto}peculiar-fortify-certificates-list .certificates_container_center{height:100%;width:100%;padding:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}peculiar-fortify-certificates-list .icon_certificate_empty{width:20px;height:30px;margin-bottom:34px}peculiar-fortify-certificates-list .title_certificates_emty{margin-bottom:4px}peculiar-fortify-certificates-list .button_certificates_emty{margin-top:18px}peculiar-fortify-certificates-list .button_refresh{--peculiar-button-padding-end:6px;--peculiar-button-padding-start:0px}";var l=t("peculiar_fortify_certificates_list",function(){function t(t){e(this,t);this.certificates=[]}t.renderCertificatesEmpty=function(){return[i("img",{src:r("../assets/certificate_icon.svg"),alt:"Certificate",class:"icon_certificate_empty"}),i("peculiar-fortify-typography",{align:"center",class:"title_certificates_emty",color:"grey_5"},o("certificates.empty.title")),i("peculiar-fortify-typography",{color:"grey_4",type:"c1",align:"center"},o("certificates.empty.description")),i("peculiar-fortify-button",{href:"https://fortifyapp.com",bgType:"clear",class:"button_certificates_emty",colorText:"primary"},o("actions.needHelp"))]};t.renderCertificatesLoading=function(){return i("peculiar-fortify-loader",{class:"loader"})};t.prototype.renderCertificatesList=function(){var t=this;return this.certificates.map((function(e){return i("peculiar-fortify-certificate",{key:e.id,onClick:t.onCertificate.bind(t,e.id),certificate:e,isSelected:e.selected,onDetails:t.onCertificateDetails})}))};t.prototype.render=function(){var t=null;switch(true){case this.loading:t=i("div",{class:"certificates_container_center"},l.renderCertificatesLoading());break;case this.certificates.length>0:t=this.renderCertificatesList();break;default:t=i("div",{class:"certificates_container_center"},l.renderCertificatesEmpty())}return i("peculiar-fortify-layout",{type:"dialog",titleValue:o("certificates.title"),slotDialogContent:i("peculiar-fortify-box",{class:"certificates_container",stroke:"grey_3"},t)},i("peculiar-fortify-button",{onClick:this.onUpdate,bgType:"clear",class:"button_refresh",disabled:this.loading},i("img",{slot:"icon",src:r("../assets/refresh_icon.svg"),alt:"Refresh"}),o("actions.updateCertificates")),i("div",null,i("peculiar-fortify-button",{onClick:this.onCancel,disabled:this.loading},o("actions.cancel")),i("peculiar-fortify-button",{bgType:"fill",color:"secondary",colorText:"light",disabled:this.loading||!this.allowContinue,onClick:this.onContinue},o("actions.continue"))))};return t}());l.style=n;var s="peculiar-fortify-challenge-not-approved{display:block;width:100%}peculiar-fortify-challenge-not-approved .layout{height:100%}";var f=t("peculiar_fortify_challenge_not_approved",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=o("approve.title",{pattern:"{origin}",replacer:i("peculiar-fortify-typography",{type:"h4",color:"primary"},window.location.origin)});return i("peculiar-fortify-layout",{type:"message",titleValue:t,descriptionValue:o("approve.description"),class:"layout"},i("peculiar-fortify-button",{onClick:this.onCancel},o("actions.cancel")),i("peculiar-fortify-button",{onClick:this.onTryAgain,bgType:"fill",color:"secondary",colorText:"light"},o("actions.tryAgain")))};return t}());f.style=s;var p="peculiar-fortify-connecting{display:block;width:100%}peculiar-fortify-connecting .loader{display:block;margin:0 auto}";var u=t("peculiar_fortify_connecting",function(){function t(t){e(this,t)}t.prototype.render=function(){return i("peculiar-fortify-layout",{type:"message",slotTitleAbove:i("peculiar-fortify-loader",{class:"loader"})})};return t}());u.style=p;var y="peculiar-fortify-not-detected{width:100%}peculiar-fortify-not-detected>peculiar-fortify-layout{height:100%}";var d=t("peculiar_fortify_not_detected",function(){function t(t){e(this,t)}t.prototype.render=function(){return i("peculiar-fortify-layout",{type:"message",titleValue:o("detect.title"),descriptionValue:o("detect.description")},i("peculiar-fortify-button",{href:"https://fortifyapp.com#download_app",bgType:"fill",color:"secondary",colorText:"light"},o("actions.install")))};return t}());d.style=y;var h="peculiar-fortify-not-supported{display:block;width:100%}";var g=t("peculiar_fortify_not_supported",function(){function t(t){e(this,t)}t.prototype.render=function(){return i("peculiar-fortify-layout",{type:"message",titleValue:o("support.title"),descriptionValue:o("support.description")})};return t}());g.style=h;var _="peculiar-fortify-providers-empty{display:block;width:100%}peculiar-fortify-providers-empty>peculiar-fortify-layout{height:100%}peculiar-fortify-providers-empty .image_insert_token{width:199px;display:block;margin:40px auto 0;position:relative;left:-8px}";var m=t("peculiar_fortify_providers_empty",function(){function t(t){e(this,t)}t.prototype.render=function(){return i("peculiar-fortify-layout",{type:"message",titleValue:o("insert.title"),slotTitleBelow:i("img",{src:r("../assets/insert_token.svg"),alt:"Insert token",class:"image_insert_token"})},i("peculiar-fortify-button",{href:"https://fortifyapp.com",bgType:"clear",colorText:"grey_4"},o("actions.needHelp")),i("peculiar-fortify-button",{onClick:this.onCancel,bgType:"clear",colorText:"primary"},o("actions.dontHaveOne")))};return t}());m.style=_}}}));