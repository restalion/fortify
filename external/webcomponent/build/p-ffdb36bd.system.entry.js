var __awaiter=this&&this.__awaiter||function(e,t,i,r){function a(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,c){function l(e){try{s(r.next(e))}catch(t){c(t)}}function n(e){try{s(r["throw"](e))}catch(t){c(t)}}function s(e){e.done?i(e.value):a(e.value).then(l,n)}s((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},r,a,c,l;return l={next:n(0),throw:n(1),return:n(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function n(e){return function(t){return s([e,t])}}function s(l){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,a&&(c=l[0]&2?a["return"]:l[0]?a["throw"]||((c=a["return"])&&c.call(a),0):a.next)&&!(c=c.call(a,l[1])).done)return c;if(a=0,c)l=[l[0]&2,c.value];switch(l[0]){case 0:case 1:c=l;break;case 4:i.label++;return{value:l[1],done:false};case 5:i.label++;a=l[1];l=[0];continue;case 7:l=i.ops.pop();i.trys.pop();continue;default:if(!(c=i.trys,c=c.length>0&&c[c.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!c||l[1]>c[0]&&l[1]<c[3])){i.label=l[1];break}if(l[0]===6&&i.label<c[1]){i.label=c[1];c=l;break}if(c&&i.label<c[2]){i.label=c[2];i.ops.push(l);break}if(c[2])i.ops.pop();i.trys.pop();continue}l=t.call(e,i)}catch(n){l=[6,n];a=0}finally{r=c=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-1e1d63e0.system.js","./p-258b6935.system.js","./p-b0f61c01.system.js"],(function(e){"use strict";var t,i,r,a,c,l,n,s;return{setters:[function(e){t=e.r;i=e.h;r=e.H;a=e.c},function(e){c=e.s;l=e.C;n=e.E;s=e.v},function(){}],execute:function(){var o=".sc-peculiar-button-split-h{display:inline-block;vertical-align:top;position:relative;white-space:nowrap;font-size:0}.button_split_icon.sc-peculiar-button-split{width:7px;height:5px;display:inline-block;vertical-align:middle;fill:rgb(var(--peculiar-color-primary-rgb))}.button_split_with_icon.sc-peculiar-button-split{width:25px;border-bottom-left-radius:0;border-top-left-radius:0}.button_split_action.sc-peculiar-button-split{width:100%}.active_split_container.sc-peculiar-button-split{position:absolute;bottom:calc(100% + 1px);left:0;width:100%;border-radius:2px;-webkit-box-shadow:0px -2px 1px rgb(var(--peculiar-color-light-rgb)), 0px 0px 10px rgba(var(--peculiar-color-dark-rgb), 0.0241168);box-shadow:0px -2px 1px rgb(var(--peculiar-color-light-rgb)), 0px 0px 10px rgba(var(--peculiar-color-dark-rgb), 0.0241168);z-index:1}.button_split.sc-peculiar-button-split{border-bottom-right-radius:0;border-top-right-radius:0;border-right-width:0}";var u=e("peculiar_button_split",function(){function e(e){var i=this;t(this,e);this.fill="stroke";this.actions=[];this.activeSplit=false;this.onClickSplitButton=function(e){e.stopPropagation();i.activeSplit=!i.activeSplit}}e.prototype.onClickActiveButton=function(e,t){this.activeSplit=false;e(t)};e.prototype.renderActiveSplitState=function(){var e=this;if(!this.activeSplit){return null}return i("div",{class:"active_split_container peculiar_fill_light"},this.actions.map((function(t){return i("peculiar-button",{fill:"fill",class:"button_split_action",onClick:e.onClickActiveButton.bind(e,t.onClick)},t.text)})))};e.prototype.render=function(){return i(r,null,i("peculiar-button",{fill:this.fill,onClick:this.onClick,class:"button_split"},i("slot",null)),i("peculiar-button",{fill:this.fill,onClick:this.onClickSplitButton,class:"button_split_with_icon"},i("svg",{viewBox:"0 0 7 5",xmlns:"http://www.w3.org/2000/svg",class:"button_split_icon"},i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.459.124c.934.001 1.442.994.84 1.644L4.425 3.794c-.44.475-1.244.475-1.684 0L.862 1.764C.26 1.115.77.12 1.705.122l3.754.003z"}))),this.renderActiveSplitState())};return e}());u.style=o;var p='.sc-peculiar-certificate-summary-h{display:block;width:100%}th.sc-peculiar-certificate-summary,td.sc-peculiar-certificate-summary{border:none}td.sc-peculiar-certificate-summary{padding:0}.basic_wrapper.sc-peculiar-certificate-summary{position:relative}.basic_wrapper.sc-peculiar-certificate-summary::before,.basic_wrapper.sc-peculiar-certificate-summary::after{content:"";display:block;position:absolute;width:1px;top:0;bottom:0;background-color:rgba(var(--peculiar-color-grey_3-rgb), 0.5)}.basic_wrapper.sc-peculiar-certificate-summary::before{left:calc(30% - 20px)}.basic_wrapper.sc-peculiar-certificate-summary::after{left:calc(60% - 20px)}.is_only.basic_wrapper.sc-peculiar-certificate-summary::before{content:none}.basic_col.sc-peculiar-certificate-summary{vertical-align:top;display:inline-block;width:30%;padding-right:40px;position:relative}.is_only.sc-peculiar-certificate-summary .basic_col.sc-peculiar-certificate-summary{width:60%}.basic_meta.sc-peculiar-certificate-summary{vertical-align:top;display:inline-block;width:40%}.dn_name.sc-peculiar-certificate-summary{min-width:30px;vertical-align:top;padding-right:5px}.dn_value.sc-peculiar-certificate-summary{vertical-align:top}.dn_row.sc-peculiar-certificate-summary:not(:last-child){margin-bottom:10px}.meta_row.sc-peculiar-certificate-summary:not(:last-child){margin-bottom:10px}.meta_name.sc-peculiar-certificate-summary{display:inline-block;width:120px;padding-right:5px;vertical-align:top}.meta_value.sc-peculiar-certificate-summary{display:inline-block;vertical-align:top;width:calc(100% - 120px)}.table_attributes.sc-peculiar-certificate-summary{width:100%}@media (max-width: 767px){.basic_wrapper.sc-peculiar-certificate-summary::before,.basic_wrapper.sc-peculiar-certificate-summary::after{content:none}.basic_col.sc-peculiar-certificate-summary{padding:20px 0;width:100% !important;border-bottom:1px solid rgba(var(--peculiar-color-grey_3-rgb), 0.5)}.basic_col.sc-peculiar-certificate-summary::after{top:auto;bottom:0;left:0;right:0;height:1px;width:100%}.basic_meta.sc-peculiar-certificate-summary{width:100%;padding:20px 0;min-width:auto}.basic_wrapper.sc-peculiar-certificate-summary::before,.basic_wrapper.sc-peculiar-certificate-summary::after{content:none}.meta_row.sc-peculiar-certificate-summary:not(:last-child){margin-bottom:0}.meta_name.sc-peculiar-certificate-summary,.meta_value.sc-peculiar-certificate-summary{width:100%;padding:5px 0}}[data-view=mobile].sc-peculiar-certificate-summary-h .basic_wrapper.sc-peculiar-certificate-summary::before,[data-view=mobile].sc-peculiar-certificate-summary-h .basic_wrapper.sc-peculiar-certificate-summary::after{content:none}[data-view=mobile].sc-peculiar-certificate-summary-h .basic_col.sc-peculiar-certificate-summary{padding:20px 0;width:100% !important;border-bottom:1px solid rgba(var(--peculiar-color-grey_3-rgb), 0.5)}[data-view=mobile].sc-peculiar-certificate-summary-h .basic_col.sc-peculiar-certificate-summary::after{top:auto;bottom:0;left:0;right:0;height:1px;width:100%}[data-view=mobile].sc-peculiar-certificate-summary-h .basic_meta.sc-peculiar-certificate-summary{width:100%;padding:20px 0;min-width:auto}[data-view=mobile].sc-peculiar-certificate-summary-h .basic_wrapper.sc-peculiar-certificate-summary::before,[data-view=mobile].sc-peculiar-certificate-summary-h .basic_wrapper.sc-peculiar-certificate-summary::after{content:none}[data-view=mobile].sc-peculiar-certificate-summary-h .meta_row.sc-peculiar-certificate-summary:not(:last-child){margin-bottom:0}[data-view=mobile].sc-peculiar-certificate-summary-h .meta_name.sc-peculiar-certificate-summary,[data-view=mobile].sc-peculiar-certificate-summary-h .meta_value.sc-peculiar-certificate-summary{width:100%;padding:5px 0}';var d=e("peculiar_certificate_summary",function(){function e(e){t(this,e);this.showIssuer=true}e.prototype.renderDN=function(e){return Object.keys(e).map((function(t){return i("tr",{class:"dn_row"},i("td",{class:"dn_name"},i("peculiar-typography",null,t)),i("td",{class:"dn_value"},i("peculiar-typography",null,e[t].value)))}))};e.prototype.renderMetaData=function(e){return[i("div",{class:"meta_row"},i("peculiar-typography",{class:"meta_name",color:"grey_5"},"Serial number:"),i("peculiar-typography",{class:"meta_value",monospace:true},e.serialNumber)),i("div",{class:"meta_row"},i("peculiar-typography",{class:"meta_name",color:"grey_5"},"Version:"),i("peculiar-typography",{class:"meta_value"},e.version)),i("div",{class:"meta_row"},i("peculiar-typography",{class:"meta_name",color:"grey_5"},"Validity:"),i("peculiar-typography",{class:"meta_value"},e.validity)),i("div",{class:"meta_row"},i("peculiar-typography",{class:"meta_name",color:"grey_5"},"Issued:"),i("peculiar-typography",{class:"meta_value"},c(e.notBefore))),i("div",{class:"meta_row"},i("peculiar-typography",{class:"meta_name",color:"grey_5"},"Expired:"),i("peculiar-typography",{class:"meta_value"},c(e.notAfter)))]};e.prototype.render=function(){return i(r,{"data-view":this.view},i("div",{class:{basic_wrapper:true,is_only:!this.showIssuer}},i("div",{class:"basic_col"},i("peculiar-typography",{class:"dn_row",color:"grey_5"},"Subject DN:"),i("table",{class:"table_attributes"},i("tbody",null,this.renderDN(this.certificate.subject)))),this.showIssuer&&i("div",{class:"basic_col peculiar_stroke_grey_3"},i("peculiar-typography",{class:"dn_row",color:"grey_5"},this.issuerDnLink?i("a",{href:this.issuerDnLink,target:"_blank",class:"peculiar_color_primary"},"Issuer DN"):"Issuer DN",":"),i("table",{class:"table_attributes"},i("tbody",null,this.renderDN(this.certificate.issuer)))),i("div",{class:"basic_meta"},this.renderMetaData(this.certificate))))};return e}());d.style=p;var h=".sc-peculiar-certificate-viewer-h{display:block;width:100%;word-wrap:break-word;position:relative;min-width:280px;min-height:300px;background:rgb(var(--peculiar-color-light-rgb))}th.sc-peculiar-certificate-viewer,td.sc-peculiar-certificate-viewer{border:none}table.sc-peculiar-certificate-viewer{width:100%;margin-bottom:30px}table.sc-peculiar-certificate-viewer .title.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer{border-color:rgba(var(--peculiar-color-grey_3-rgb), 0.5);padding-top:60px;padding-bottom:15px;border-bottom-width:1px;border-bottom-style:solid}table.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer:first-child{padding-left:30px;width:130px;padding-right:10px}table.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer:last-child{padding-right:30px;width:calc(100% - 130px)}table.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer{vertical-align:top;padding-top:5px;padding-bottom:5px}.vertical_align_top.sc-peculiar-certificate-viewer{vertical-align:top}.vertical_align_middle.sc-peculiar-certificate-viewer{vertical-align:middle}table.sc-peculiar-certificate-viewer .title.sc-peculiar-certificate-viewer:first-child td.sc-peculiar-certificate-viewer{padding-top:15px}table.sc-peculiar-certificate-viewer .title.sc-peculiar-certificate-viewer+tr.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer{padding-top:15px}table.sc-peculiar-certificate-viewer td.monospace.sc-peculiar-certificate-viewer{max-width:0}table.sc-peculiar-certificate-viewer .divider.sc-peculiar-certificate-viewer{padding-top:15px;padding-bottom:15px}.divider.sc-peculiar-certificate-viewer .bg_fill.sc-peculiar-certificate-viewer{background-color:rgba(var(--peculiar-color-grey_3-rgb), 0.5)}table.sc-peculiar-certificate-viewer tr.sc-peculiar-certificate-viewer:last-child .divider.sc-peculiar-certificate-viewer{padding-top:0;opacity:0}.divider.sc-peculiar-certificate-viewer span.sc-peculiar-certificate-viewer{display:block;height:1px}.status_wrapper.sc-peculiar-certificate-viewer{min-height:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.interaction_text.sc-peculiar-certificate-viewer{padding:15px 0;width:300px;margin:auto;text-align:center}@media (max-width: 900px){table.sc-peculiar-certificate-viewer,tr.sc-peculiar-certificate-viewer,td.sc-peculiar-certificate-viewer{display:block}table.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer:last-child,table.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer:first-child{padding-right:15px;padding-left:15px;width:100%}table.sc-peculiar-certificate-viewer .title.sc-peculiar-certificate-viewer+tr.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer{padding-top:5px}table.sc-peculiar-certificate-viewer .title.sc-peculiar-certificate-viewer+tr.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer:first-child{padding-top:15px}table.sc-peculiar-certificate-viewer td.monospace.sc-peculiar-certificate-viewer{width:100%;max-width:none}}[data-view=mobile].sc-peculiar-certificate-viewer-h table.sc-peculiar-certificate-viewer,[data-view=mobile].sc-peculiar-certificate-viewer-h tr.sc-peculiar-certificate-viewer,[data-view=mobile].sc-peculiar-certificate-viewer-h td.sc-peculiar-certificate-viewer{display:block}[data-view=mobile].sc-peculiar-certificate-viewer-h table.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer:last-child,[data-view=mobile].sc-peculiar-certificate-viewer-h table.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer:first-child{padding-right:15px;padding-left:15px;width:100%}[data-view=mobile].sc-peculiar-certificate-viewer-h table.sc-peculiar-certificate-viewer .title.sc-peculiar-certificate-viewer+tr.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer{padding-top:5px}[data-view=mobile].sc-peculiar-certificate-viewer-h table.sc-peculiar-certificate-viewer .title.sc-peculiar-certificate-viewer+tr.sc-peculiar-certificate-viewer td.sc-peculiar-certificate-viewer:first-child{padding-top:15px}[data-view=mobile].sc-peculiar-certificate-viewer-h table.sc-peculiar-certificate-viewer td.monospace.sc-peculiar-certificate-viewer{width:100%;max-width:none}";var f=e("peculiar_certificate_viewer",function(){function e(e){t(this,e);this.isDecodeInProcess=true}e.prototype.componentWillLoad=function(){this.decodeCertificate(this.certificate)};e.prototype.decodeCertificate=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.isDecodeInProcess=true;if(e instanceof l){this.certificateDecoded=e}if(typeof e==="string"){try{this.certificateDecoded=new l(e,undefined,true)}catch(i){this.certificateDecodeError=i;console.error(i)}}if(!this.certificateDecoded)return[3,3];return[4,this.certificateDecoded.getFingerprint("SHA-1")];case 1:t.sent();return[4,this.certificateDecoded.getFingerprint("SHA-256")];case 2:t.sent();t.label=3;case 3:this.isDecodeInProcess=false;return[2]}}))}))};e.prototype.watchCertificateAndDecode=function(e,t){if(typeof e==="string"&&typeof t==="string"){if(e!==t){this.decodeCertificate(e)}return}if(e instanceof l&&t instanceof l){if(e.serialNumber!==t.serialNumber){this.decodeCertificate(e)}}};e.prototype.getAuthKeyIdParentLink=function(e){var t;return(t=this.authKeyIdParentLink)===null||t===void 0?void 0:t.replace("{{authKeyId}}",e.value.keyIdentifier)};e.prototype.getAuthKeyIdSiblingsLink=function(e){var t;return(t=this.authKeyIdSiblingsLink)===null||t===void 0?void 0:t.replace("{{authKeyId}}",e.value.keyIdentifier)};e.prototype.getSubjectKeyIdChildrenLink=function(e){var t;return(t=this.subjectKeyIdChildrenLink)===null||t===void 0?void 0:t.replace("{{subjectKeyId}}",e.value)};e.prototype.getSubjectKeyIdSiblingsLink=function(e){var t;return(t=this.subjectKeyIdSiblingsLink)===null||t===void 0?void 0:t.replace("{{subjectKeyId}}",e.value)};e.prototype.getLEILink=function(e){return"https://www.gleif.org/lei/"+e.value};e.prototype.renderRowTitle=function(e){return i("tr",{class:"title"},i("td",{colSpan:2},i("peculiar-typography",{type:"h6"},e)))};e.prototype.renderRowValue=function(e,t,r){if(r===void 0){r={}}if(typeof t!=="string"&&typeof t!=="number"&&!Array.isArray(t)){return null}var a;if(r.collapse){a=i("peculiar-text-hider",null,t)}else{a=Array.isArray(t)?t:t.toString()}return i("tr",null,i("td",{class:{vertical_align_top:r.align!=="middle",vertical_align_middle:r.align==="middle"}},i("peculiar-typography",{color:"grey_5"},e,":")),i("td",{class:{monospace:r.monospace}},i("peculiar-typography",{monospace:r.monospace},a)))};e.prototype.renderRowExtensionValue=function(e){var t=this;switch(e.oid){case n.BasicConstraints:{return[this.renderRowValue("cA",String(e.value.cA)),this.renderRowValue("pathLenConstraint",e.value.pathLenConstraint)]}case n.NetscapeCertificateType:case n.KeyUsage:{return this.renderRowValue("Value",e.value.join(", "))}case n.ExtendedKeyUsage:{return this.renderRowValue("Values",e.value.map((function(e){return i("peculiar-typography",null,e.name," (",e.oid,")")})))}case n.CertificatePolicies:{return[e.value.policies.map((function(e,r){return t.renderRowValue("Policy "+(r+1),[i("peculiar-typography",null,e.name," (",e.oid,")")])})),e.value.qualifiers.map((function(e,r){return t.renderRowValue("Qualifier "+(r+1),[i("peculiar-typography",null,e.name," (",e.oid,")"),s.isUrl(e.value)?i("a",{class:"peculiar_color_primary",href:e.value,target:"_blank"},e.value):i("peculiar-typography",null,e.value)])}))]}case n.CRLDistributionPoints:{return this.renderRowValue("Paths",e.value.map((function(e){if(!e.distributionPoint){return null}return e.distributionPoint.map((function(e){if(e.type===6){return i("peculiar-typography",null,i("a",{class:"peculiar_color_primary",href:e.value,target:"_blank"},e.value))}return i("peculiar-typography",null,e.value)}))})))}case n.CertificateAuthorityInformationAccess:{return e.value.map((function(e,r){return t.renderRowValue("Method "+(r+1),[i("peculiar-typography",null,e.name," (",e.oid,")"),e.type===6?i("a",{class:"peculiar_color_primary",href:e.value,target:"_blank"},e.value):e.value])}))}case n.NameConstraints:{return[this.renderRowValue("Permitted Values",e.value.permitted.map((function(e){if(e.type===2){return i("peculiar-typography",null,i("a",{class:"peculiar_color_primary",href:"https://censys.io/ipv4?q="+e.value,target:"_blank"},e.value))}if(e.type===7){return i("peculiar-typography",null,i("a",{class:"peculiar_color_primary",href:"https://censys.io/ipv4?q="+e.value,target:"_blank"},e.value))}if(e.type===4){return i("peculiar-typography",null,e.value.map((function(e){return e.name+"="+e.value})).join(", "))}return i("peculiar-typography",null,e.value)})))]}case n.SubjectAlternativeName:{return[this.renderRowValue("Values",e.value.map((function(e){if(e.type===2){return i("peculiar-typography",null,i("a",{class:"peculiar_color_primary",href:"https://censys.io/ipv4?q="+e.value,target:"_blank"},e.value))}if(e.type===7){return i("peculiar-typography",null,i("a",{class:"peculiar_color_primary",href:"https://censys.io/ipv4?q="+e.value,target:"_blank"},e.value))}if(e.type===4){return i("peculiar-typography",null,e.value.map((function(e){return e.name+"="+e.value})).join(", "))}return i("peculiar-typography",null,e.value)})))]}case n.CertificateTemplate:{return[this.renderRowValue("Template Id",e.value.templateID),this.renderRowValue("Template Major Version",e.value.templateMajorVersion),this.renderRowValue("Template Minor Version",e.value.templateMinorVersion)]}case n.AuthorityKeyIdentifier:{var r=this.getAuthKeyIdParentLink(e);var a=this.getAuthKeyIdSiblingsLink(e);return[this.renderRowValue("Key Identifier",[i("span",null,e.value.keyIdentifier),r&&i("span",null," [",i("a",{class:"peculiar_color_primary",href:r,target:"_blank"},"parents"),"]"),a&&i("span",null," [",i("a",{class:"peculiar_color_primary",href:a,target:"_blank"},"siblings"),"]")],{monospace:true}),this.renderRowValue("Authority Cert Issuer",e.value.authorityCertIssuer),this.renderRowValue("Authority Cert Serial Number",e.value.authorityCertSerialNumber)]}case n.CertificateTransparency:{return e.value.map((function(e){return[i("br",null),t.renderRowValue("Log ID",e.logID,{monospace:true}),t.renderRowValue("Log Name",e.name),t.renderRowValue("Hash Algorithm",e.hashAlgorithm.toUpperCase()),t.renderRowValue("Signature Algorithm",e.signatureAlgorithm.toUpperCase()),t.renderRowValue("Timestamp",c(e.timestamp))]}))}case n.SubjectKeyIdentifier:{var l=this.getSubjectKeyIdChildrenLink(e);var a=this.getSubjectKeyIdSiblingsLink(e);return this.renderRowValue("Value",[i("span",null,e.value),l&&i("span",null," [",i("a",{class:"peculiar_color_primary",href:l,target:"_blank"},"children"),"]"),a&&i("span",null," [",i("a",{class:"peculiar_color_primary",href:a,target:"_blank"},"siblings"),"]")],{monospace:true})}case n.QualifiedCertificateStatements:{return e.value.map((function(e,r){return t.renderRowValue("Statement "+(r+1),[i("peculiar-typography",null,e.name," (",e.oid,")")])}))}case n.MicrosoftCARenewal:{return[this.renderRowValue("Certificate Index",e.value.certificateIndex),this.renderRowValue("Key Index",e.value.keyIndex)]}case n.MicrosoftCertificateType:{return this.renderRowValue("Value",e.value)}case n.SubjectDirectoryAttributes:{return e.value.map((function(e,r){return t.renderRowValue("Attribute "+(r+1),[i("peculiar-typography",null,e.name," (",e.oid,")"),e.value.map((function(e){return i("peculiar-typography",null,c(e))}))])}))}case n.AdobeTimestamp:{return[this.renderRowValue("Version",e.value.version),this.renderRowValue("Location",[i("a",{class:"peculiar_color_primary",href:e.value.location,target:"_blank"},e.value.location)]),this.renderRowValue("Require Auth",(e.value.requiresAuth||false).toString())]}case n.LEI:{var o=this.getLEILink(e);return this.renderRowValue("Value",[i("a",{class:"peculiar_color_primary",href:o,target:"_blank"},e.value)])}case n.Role:{return this.renderRowValue("Value",e.value)}}if(typeof e.value==="string"){return this.renderRowValue("Value",e.value,{monospace:true})}return this.renderRowValue("Value",e.value)};e.prototype.renderMiscellaneous=function(){if(!this.download){return null}return[this.renderRowTitle("Miscellaneous"),this.renderRowValue("Download",[i("peculiar-button-split",{onClick:this.certificateDecoded.downloadAsPEM.bind(this),actions:[{text:"Download DER",onClick:this.certificateDecoded.downloadAsDER.bind(this)}]},"Download PEM")],{align:"middle"})]};e.prototype.renderErrorState=function(){return i("div",{class:"status_wrapper"},i("peculiar-typography",{type:"b1",class:"interaction_text"},"There is error for certificate decode."))};e.prototype.renderEmptyState=function(){return i("div",{class:"status_wrapper"},i("peculiar-typography",{type:"b1",class:"interaction_text"},"There is no certificate available."))};e.prototype.render=function(){var e=this;if(this.certificateDecodeError){return this.renderErrorState()}if(!this.certificateDecoded){return this.renderEmptyState()}return i(r,{"data-view":this.view},i("table",null,this.renderRowTitle("Basic Information"),i("tr",null,i("td",{colSpan:2},i("peculiar-certificate-summary",{certificate:this.certificateDecoded,issuerDnLink:this.issuerDnLink,view:this.view}))),this.renderRowTitle("Public Key Info"),this.renderRowValue("Algorithm",this.certificateDecoded.publicKey.algorithm.name),this.renderRowValue("Modulus Bits",this.certificateDecoded.publicKey.algorithm.modulusBits),this.renderRowValue("Public Exponent",this.certificateDecoded.publicKey.algorithm.publicExponent),this.renderRowValue("Named Curve",this.certificateDecoded.publicKey.algorithm.namedCurve),this.renderRowValue("Value",this.certificateDecoded.publicKey.value,{monospace:true,collapse:true}),this.renderRowTitle("Signature"),this.renderRowValue("Algorithm",this.certificateDecoded.signature.algorithm.name),this.renderRowValue("Hash",this.certificateDecoded.signature.algorithm.hash),this.renderRowValue("Value",this.certificateDecoded.signature.value,{monospace:true,collapse:true}),this.renderRowTitle("Fingerprints"),this.renderRowValue("SHA-256",this.certificateDecoded.fingerprints["SHA-256"],{monospace:true}),this.renderRowValue("SHA-1",this.certificateDecoded.fingerprints["SHA-1"],{monospace:true}),this.renderRowTitle("Extensions"),this.certificateDecoded.extensions.map((function(t){return[e.renderRowValue("Name",t.name?t.name+" ("+t.oid+")":t.oid),e.renderRowValue("Critical",String(t.critical)),e.renderRowExtensionValue(t),i("tr",null,i("td",{colSpan:2,class:"divider"},i("span",{class:"bg_fill"})))]})),this.renderMiscellaneous()))};Object.defineProperty(e,"watchers",{get:function(){return{certificate:["watchCertificateAndDecode"]}},enumerable:true,configurable:true});return e}());f.style=h;var m=".sc-peculiar-text-hider-h{display:block;width:100%}.text.sc-peculiar-text-hider{display:inline-block;width:calc(100% - 70px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0}.text.m_opened.sc-peculiar-text-hider{white-space:initial}.action.sc-peculiar-text-hider{vertical-align:top;display:inline-block;width:70px;text-align:right;position:relative;top:-6px}.button_action.sc-peculiar-text-hider{width:30px}.expand_icon.sc-peculiar-text-hider{width:7px;height:5px;display:inline-block;fill:rgb(var(--peculiar-color-primary-rgb))}.m_opened.sc-peculiar-text-hider .expand_icon.sc-peculiar-text-hider{-webkit-transform:rotate(180deg);transform:rotate(180deg);fill:rgb(var(--peculiar-color-light-rgb))}";var y=e("peculiar_text_hider",function(){function e(e){t(this,e);this.opened=false;this.textExpand=a(this,"textExpand",7)}e.prototype.textExpandHandler=function(){this.opened=!this.opened};e.prototype.render=function(){return i(r,null,i("div",{class:"root"},i("div",{class:{text:true,m_opened:this.opened}},i("slot",null)),i("div",{class:"action"},i("peculiar-button",{onClick:this.textExpand.emit,class:{button_action:true,m_opened:this.opened},fill:this.opened?"fill":"stroke"},i("svg",{viewBox:"0 0 7 5",xmlns:"http://www.w3.org/2000/svg",class:{expand_icon:true}},i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.459.124c.934.001 1.442.994.84 1.644L4.425 3.794c-.44.475-1.244.475-1.684 0L.862 1.764C.26 1.115.77.12 1.705.122l3.754.003z"}))))))};return e}());y.style=m;var v=":host{display:block}.typography_native{margin:0;padding:0;font-family:var(--peculiar-font-family);font-size:inherit;line-height:inherit;letter-spacing:inherit;word-break:break-word}:host(.align_left){text-align:left}:host(.align_center){text-align:center}:host(.align_right){text-align:right}.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.monospace{font-family:monospace}";var w=e("peculiar_typography",function(){function e(e){t(this,e);this.type="b3";this.color="dark"}e.prototype.render=function(){var e;var t=this.type&&this.type.includes("h")?this.type:"p";return i(r,{class:(e={},e["peculiar_"+(this.type||"b3")]=true,e["peculiar_color_"+(this.color||"dark")]=true,e["align_"+this.align]=!!this.align,e)},i(t,{class:{typography_native:true,ellipsis:this.ellipsis,monospace:this.monospace}},i("slot",null)))};return e}());w.style=v}}}));