import{r as e,h as r,H as i}from"./p-2b60d672.js";import{C as t}from"./p-df6fb79a.js";import"./p-29765681.js";const c=class{constructor(r){e(this,r),this.certificates=[],this.filterWithSearch=!0,this.highlightWithSearch=!0,this.search="",this.certificatesDecoded=[],this.isDecodeInProcess=!0,this.isHasTests=!1,this.isHasRoots=!1,this.onClickDetails=(e,r)=>{r.stopPropagation(),this.certificateSelectedForDetails=e},this.onClickModalClose=()=>{this.certificateSelectedForDetails=null},this.onSearchChange=e=>{this.search=e.target.value.trim()}}componentWillLoad(){this.certificatesDecodeAndSet()}watchCertificates(){this.certificatesDecodeAndSet()}async certificatesDecodeAndSet(){const e=performance.now();if(this.isHasTests=!1,this.isHasRoots=!1,!Array.isArray(this.certificates))return[];const r=[];for(const a of this.certificates)try{const e=new t(a.value,a.name);await e.getFingerprint("SHA-1"),r.push(Object.assign(e,{tests:a.tests})),!this.isHasRoots&&e.isRoot&&(this.isHasRoots=!0),this.isHasTests||a.tests&&(a.tests.expired||a.tests.revoked||a.tests.valid)&&(this.isHasTests=!0)}catch(c){console.error(c)}const i=performance.now()-e;i<800?setTimeout(()=>this.isDecodeInProcess=!1,800-i):this.isDecodeInProcess=!1,this.certificatesDecoded=r}onClickDownload(e,r,i){return i.stopPropagation(),"PEM"===r?e.downloadAsPEM():e.downloadAsDER()}onClickRow(e){this.expandedRow=this.expandedRow===e?null:e}renderExpandedRow(e){let i=4;return this.isHasTests&&(i+=1),this.isHasRoots||(i+=1),r("tr",{class:"expanded_summary peculiar_stroke_grey_3"},r("td",{colSpan:i,class:"peculiar_stroke_grey_3"},r("peculiar-certificate-summary",{certificate:e,showIssuer:!e.isRoot})))}renderCertificateTests(e){if(!e)return null;const i=[];return e.valid&&i.push(r("peculiar-button",{class:"button_table_action",href:e.valid,target:"_blank"},"Valid")),e.revoked&&i.push(r("peculiar-button",{class:"button_table_action",href:e.revoked,target:"_blank"},"Revoked")),e.expired&&i.push(r("peculiar-button",{class:"button_table_action",href:e.expired,target:"_blank"},"Expired")),i}renderContentState(){const e=this.highlightWithSearch?this.search:"",i=[];return this.certificatesDecoded.forEach(t=>{const c=t.serialNumber===this.expandedRow,a=`${t.publicKey.algorithm.name} ${t.publicKey.algorithm.modulusBits||t.publicKey.algorithm.namedCurve}`,s=t.issuer&&t.issuer.CN?t.issuer.CN.value:"";this.filterWithSearch&&this.search&&-1===[a,s,t.commonName,t.fingerprints["SHA-1"]].join(" ").toLowerCase().indexOf(this.search.toLowerCase())||i.push([r("tr",{class:{peculiar_stroke_grey_3:!0,expanded:c},onClick:this.onClickRow.bind(this,t.serialNumber),key:t.serialNumber},!this.isHasRoots&&r("td",{class:"peculiar_stroke_grey_3"},r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Issuer:"),r("peculiar-typography",{class:"content"},r("peculiar-highlight-words",{search:e},s))),r("td",{class:"peculiar_stroke_grey_3"},r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Name:"),r("peculiar-typography",{class:"content"},r("peculiar-highlight-words",{search:e},t.commonName))),r("td",{class:"peculiar_stroke_grey_3"},r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Public Key:"),r("peculiar-typography",{class:"content"},r("peculiar-highlight-words",{search:e},a))),r("td",{class:"peculiar_stroke_grey_3"},r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Fingerprint (SHA-1):"),r("peculiar-typography",{class:"content",monospace:!0},r("peculiar-highlight-words",{search:e},t.fingerprints["SHA-1"]))),r("td",{class:"align_center peculiar_stroke_grey_3"},r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Actions:"),r("span",{class:"content"},r("peculiar-button",{onClick:this.onClickDetails.bind(this,t.base64),class:"button_table_action"},"Details"),r("peculiar-button-split",{onClick:this.onClickDownload.bind(this,t,"PEM"),actions:[{text:"Download DER",onClick:this.onClickDownload.bind(this,t,"DER")}],class:"button_table_action"},"Download PEM"))),this.isHasTests&&r("td",{class:"align_center peculiar_stroke_grey_3"},r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Test URLs:"),r("span",{class:"content"},this.renderCertificateTests(t.tests)))),c&&this.renderExpandedRow(t)])}),i}renderCertificateDetailsModal(){return this.certificateSelectedForDetails?r("div",{class:"modal_wrapper"},r("div",{class:"modal_content peculiar_fill_light"},r("div",{class:"modal_title peculiar_stroke_grey_3"},r("peculiar-typography",{type:"h4"},"Certificate details"),r("button",{class:"modal_close",onClick:this.onClickModalClose},r("svg",{width:"30",height:"30",viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg"},r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.7204 14.375L21.0654 19.7185C21.3115 19.9658 21.3115 20.3693 21.0654 20.6154L20.615 21.0645C20.3689 21.3118 19.9667 21.3118 19.7181 21.0645L14.3744 15.721L9.03194 21.0645C8.78327 21.3118 8.3811 21.3118 8.13371 21.0645L7.68459 20.6154C7.43847 20.3693 7.43847 19.9658 7.68459 19.7185L13.0296 14.375L7.68459 9.03155C7.43847 8.78417 7.43847 8.38074 7.68459 8.13463L8.13371 7.68554C8.3811 7.43815 8.78327 7.43815 9.03194 7.68554L14.3744 13.029L19.7181 7.68554C19.9667 7.43815 20.3689 7.43815 20.615 7.68554L21.0654 8.13463C21.3115 8.38074 21.3115 8.78417 21.0654 9.03155L15.7204 14.375Z"})))),r("peculiar-certificate-viewer",{certificate:this.certificateSelectedForDetails}))):null}renderSearch(){return this.filterWithSearch||this.highlightWithSearch?r("div",{class:"search_section peculiar_stroke_grey_3"},r("input",{onInput:this.onSearchChange,type:"search",value:"",class:"input_search peculiar_fill_light peculiar_stroke_grey_3 peculiar_color_dark",disabled:!this.certificatesDecoded.length,placeholder:"Search"})):null}renderEmptyState(){return r("tr",{class:"peculiar_stroke_grey_3"},r("td",{class:"peculiar_stroke_grey_3 status_wrapper",colSpan:5},r("peculiar-typography",{type:"b1",align:"center"},"There are no certificates available.")))}renderEmptySearchState(){return r("tr",{class:"peculiar_stroke_grey_3"},r("td",{class:"peculiar_stroke_grey_3 status_wrapper",colSpan:5},r("peculiar-typography",{type:"b1",align:"center"},'No results found for "',this.search,'"')))}renderLoadingState(){return r("div",{class:"loading_container"},r("peculiar-circular-progress",null))}renderBody(){if(this.isDecodeInProcess)return null;if(!this.certificatesDecoded.length)return this.renderEmptyState();const e=this.renderContentState();return this.search&&!e.length?this.renderEmptySearchState():e}render(){return r(i,null,this.renderSearch(),r("table",{class:{peculiar_color_dark:!0,m_extra:this.isHasTests||!this.isHasRoots}},r("thead",null,r("tr",{class:"peculiar_stroke_grey_3"},!this.isHasRoots&&r("th",{class:"peculiar_stroke_grey_3 col_issuer"},r("peculiar-typography",{type:"h7",align:"left"},"Issuer")),r("th",{class:"peculiar_stroke_grey_3 col_name"},r("peculiar-typography",{type:"h7",align:"left"},"Name")),r("th",{class:"peculiar_stroke_grey_3 col_public_key"},r("peculiar-typography",{type:"h7",align:"left"},"Public Key")),r("th",{class:"peculiar_stroke_grey_3 col_fingerprint"},r("peculiar-typography",{type:"h7",align:"left"},"Fingerprint (SHA-1)")),r("th",{class:"peculiar_stroke_grey_3 col_actions"},r("peculiar-typography",{type:"h7",align:"center"},"Actions")),this.isHasTests&&r("th",{class:"peculiar_stroke_grey_3 col_tests"},r("peculiar-typography",{type:"h7",align:"center"},"Test URLs")))),r("tbody",null,this.renderBody())),this.renderCertificateDetailsModal(),this.isDecodeInProcess&&this.renderLoadingState())}static get watchers(){return{certificates:["watchCertificates"]}}};c.style='.sc-peculiar-certificates-viewer-h{display:block;width:100%;word-wrap:break-word;min-width:280px;overflow:auto;position:relative;background:rgb(var(--peculiar-color-light-rgb))}table.sc-peculiar-certificates-viewer{width:100%;table-layout:fixed;border-collapse:collapse}table.sc-peculiar-certificates-viewer thead.sc-peculiar-certificates-viewer{background-color:rgba(var(--peculiar-color-primary-rgb), 0.07)}table.sc-peculiar-certificates-viewer tr.sc-peculiar-certificates-viewer td.sc-peculiar-certificates-viewer{vertical-align:middle}table.sc-peculiar-certificates-viewer tbody.sc-peculiar-certificates-viewer tr.sc-peculiar-certificates-viewer:not(.expanded_summary){cursor:pointer}table.sc-peculiar-certificates-viewer th.sc-peculiar-certificates-viewer{padding:15px 10px;border-width:1px;border-style:solid}table.sc-peculiar-certificates-viewer td.sc-peculiar-certificates-viewer{padding:8px 10px;border-width:1px;border-style:solid}table.sc-peculiar-certificates-viewer .col_issuer.sc-peculiar-certificates-viewer,table.sc-peculiar-certificates-viewer .col_name.sc-peculiar-certificates-viewer,table.sc-peculiar-certificates-viewer .col_public_key.sc-peculiar-certificates-viewer{width:16%}table.sc-peculiar-certificates-viewer .col_actions.sc-peculiar-certificates-viewer,table.sc-peculiar-certificates-viewer .col_tests.sc-peculiar-certificates-viewer{width:18%}table.m_extra.sc-peculiar-certificates-viewer .col_issuer.sc-peculiar-certificates-viewer,table.m_extra.sc-peculiar-certificates-viewer .col_name.sc-peculiar-certificates-viewer,table.m_extra.sc-peculiar-certificates-viewer .col_public_key.sc-peculiar-certificates-viewer{width:12%}table.m_extra.sc-peculiar-certificates-viewer .col_actions.sc-peculiar-certificates-viewer,table.m_extra.sc-peculiar-certificates-viewer .col_tests.sc-peculiar-certificates-viewer{width:17%}table.sc-peculiar-certificates-viewer tr.expanded.sc-peculiar-certificates-viewer td.sc-peculiar-certificates-viewer:not(:last-child){border-right-color:transparent}table.sc-peculiar-certificates-viewer tr.expanded.sc-peculiar-certificates-viewer td.sc-peculiar-certificates-viewer{border-bottom-color:transparent}.expanded.sc-peculiar-certificates-viewer{border-bottom-color:transparent;background-color:rgba(var(--peculiar-color-primary-rgb), 0.04)}table.sc-peculiar-certificates-viewer tr.expanded_summary.sc-peculiar-certificates-viewer{background-color:rgba(var(--peculiar-color-primary-rgb), 0.04)}table.sc-peculiar-certificates-viewer tr.expanded_summary.sc-peculiar-certificates-viewer td.sc-peculiar-certificates-viewer{vertical-align:top;padding:10px 20px 26px}@-webkit-keyframes fadeIn{0%{opacity:0.001}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0.001}100%{opacity:1}}.modal_wrapper.sc-peculiar-certificates-viewer{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:auto;padding:10px;text-align:center;background:rgba(var(--peculiar-color-dark-rgb), 0.9);-webkit-animation:fadeIn 300ms;animation:fadeIn 300ms}.modal_wrapper.sc-peculiar-certificates-viewer:before{display:inline-block;vertical-align:middle;width:0;height:100%;content:""}.modal_content.sc-peculiar-certificates-viewer{position:relative;display:inline-block;vertical-align:middle;width:100%;max-width:900px;text-align:left;border-radius:3px;overflow:hidden}.modal_title.sc-peculiar-certificates-viewer{background-color:rgba(var(--peculiar-color-primary-rgb), 0.07);border-bottom-width:1px;border-bottom-style:solid;padding:17px 60px 17px 20px;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.modal_close.sc-peculiar-certificates-viewer{cursor:pointer;border:none;background-color:transparent;position:absolute;top:0;bottom:0;right:0;padding:0 12px;-webkit-transition:opacity 100ms;transition:opacity 100ms;outline:none}.modal_close.sc-peculiar-certificates-viewer:hover{opacity:0.6}.modal_close.sc-peculiar-certificates-viewer svg.sc-peculiar-certificates-viewer{fill:rgb(var(--peculiar-color-dark-rgb))}.button_table_action.sc-peculiar-certificates-viewer{margin:2px}.mobile_title.sc-peculiar-certificates-viewer{display:none}.status_wrapper.sc-peculiar-certificates-viewer{height:85px;text-align:center;pointer-events:none}.search_section.sc-peculiar-certificates-viewer{background-color:rgba(var(--peculiar-color-primary-rgb), 0.07);height:50px;padding:10px;border-width:1px 1px 0 1px;border-style:solid}.input_search.sc-peculiar-certificates-viewer{height:100%;width:100%;border-radius:3px;border-width:1px;border-style:solid;padding:0 14px;font-size:12px;outline:none}.input_search.sc-peculiar-certificates-viewer::-webkit-input-placeholder{color:rgb(var(--peculiar-color-grey_3-rgb))}.input_search.sc-peculiar-certificates-viewer::-moz-placeholder{color:rgb(var(--peculiar-color-grey_3-rgb))}.input_search.sc-peculiar-certificates-viewer:-ms-input-placeholder{color:rgb(var(--peculiar-color-grey_3-rgb))}.input_search.sc-peculiar-certificates-viewer::-ms-input-placeholder{color:rgb(var(--peculiar-color-grey_3-rgb))}.input_search.sc-peculiar-certificates-viewer::placeholder{color:rgb(var(--peculiar-color-grey_3-rgb))}.loading_container.sc-peculiar-certificates-viewer{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(var(--peculiar-color-dark-rgb), 0.3);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.align_center.sc-peculiar-certificates-viewer{text-align:center}@media (hover: hover){table.sc-peculiar-certificates-viewer tbody.sc-peculiar-certificates-viewer tr.sc-peculiar-certificates-viewer:not(.expanded_summary):hover{background-color:rgba(var(--peculiar-color-primary-rgb), 0.04)}}@media (max-width: 900px){table.sc-peculiar-certificates-viewer,tbody.sc-peculiar-certificates-viewer,tr.sc-peculiar-certificates-viewer,td.sc-peculiar-certificates-viewer{display:block}thead.sc-peculiar-certificates-viewer{display:none}tr.sc-peculiar-certificates-viewer{padding:0 15px;border-width:1px;border-style:solid}tr.sc-peculiar-certificates-viewer:not(:first-child){margin-top:-1px}tr.sc-peculiar-certificates-viewer:not(.expanded_summary) td.sc-peculiar-certificates-viewer:first-child{border:none !important}table.sc-peculiar-certificates-viewer td.sc-peculiar-certificates-viewer{padding-left:0;padding-right:0;border-width:1px 0 0 0 !important;border-color:rgba(var(--peculiar-color-grey_3-rgb), 0.5) !important}table.sc-peculiar-certificates-viewer tr.expanded_summary.sc-peculiar-certificates-viewer td.sc-peculiar-certificates-viewer{padding:15px 0}.mobile_title.sc-peculiar-certificates-viewer{display:inline-block;width:90px;vertical-align:middle}.modal_title.sc-peculiar-certificates-viewer{padding:17px 60px 17px 15px}.content.sc-peculiar-certificates-viewer{display:inline-block;width:calc(100% - 90px);vertical-align:middle;text-align:left}.expanded_summary.sc-peculiar-certificates-viewer{border-top-color:transparent;padding-bottom:10px}.expanded_summary.sc-peculiar-certificates-viewer td.sc-peculiar-certificates-viewer:before{content:none}.status_wrapper.sc-peculiar-certificates-viewer{height:266px;display:table-cell}.search_section.sc-peculiar-certificates-viewer{height:60px;padding:15px}.align_center.sc-peculiar-certificates-viewer{text-align:inherit}}';export{c as peculiar_certificates_viewer}