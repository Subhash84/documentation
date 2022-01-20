(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(234)),l=["components"],c={title:"Code",sidebar_label:"Code"},i={unversionedId:"platform_concepts/studio/cloud-function",id:"platform_concepts/studio/cloud-function",isDocsHomePage:!1,title:"Code",description:"How to create a new function?",source:"@site/docs/platform_concepts/studio/cloud-function.md",slug:"/platform_concepts/studio/cloud-function",permalink:"/docs/platform_concepts/studio/cloud-function",version:"current",sidebar_label:"Code",sidebar:"platform_concepts",previous:{title:"Variables",permalink:"/docs/platform_concepts/studio/bot-variables"},next:{title:"Publish your Bot",permalink:"/docs/platform_concepts/studio/modes"}},b=[{value:"How to create a new function?",id:"how-to-create-a-new-function",children:[]},{value:"Useful args you can access in code",id:"useful-args-you-can-access-in-code",children:[]},{value:"Useful Code Snippets",id:"useful-code-snippets",children:[{value:"Autocomplete",id:"autocomplete",children:[]},{value:"Decode BASE64",id:"decode-base64",children:[]}]}],s={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-create-a-new-function"},"How to create a new function?"),Object(o.b)("p",null,"You can add a new function to write your custom logic in code in the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"code"))," section of the studio.\nTo execute these functions in a flow, you can attach function action node."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Format of cloud functions")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"return new Promise(resolve => {\n      // Your logic goes here\n      resolve();\n  }); \n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"useful-args-you-can-access-in-code"},"Useful args you can access in code"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"arg"),Object(o.b)("th",{parentName:"tr",align:null},"data type"),Object(o.b)("th",{parentName:"tr",align:null},"Use"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.variables.<variable_name>"),Object(o.b)("td",{parentName:"tr",align:null},"Key : String, Value: any"),Object(o.b)("td",{parentName:"tr",align:null},"To access any bot variable in code.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.channel"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"To access channel names like whatsapp, yellowmessenger, facebook etc")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.profile"),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"Contains user profile values like name, number, email, city , country, language")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.sender"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"User ID")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.bot"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Bot ID")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.message"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"To access Last/latest user message in the conversation")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.event.<event_name>"),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"To access events in code")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ymLib.args.apiResponse"),Object(o.b)("td",{parentName:"tr",align:null},"any"),Object(o.b)("td",{parentName:"tr",align:null},"To access API response in API transformation function")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ymLib.args.logger"),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"Can be used to add logs")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"context.history"),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"Contains history of nodes visited by user")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"prediction.intents"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"To get Intents predicted from user message")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"prediction.entities"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"To get entities predicted from user message")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"useful-code-snippets"},"Useful Code Snippets"),Object(o.b)("h3",{id:"autocomplete"},"Autocomplete"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'return new Promise(resolve => {\n    console.log("inside autoSuggestion");\n    let result = data.variables.autoComponents;\n    const { term } = data;\n    let suggestions = [];\n    result.forEach((hit) => {\n        if (hit.component.toLowerCase().includes(term.toLowerCase())) {\n            suggestions.push([hit.component, hit.component]);\n        }\n    });\n    resolve(suggestions);\n});\n')),Object(o.b)("h3",{id:"decode-base64"},"Decode BASE64"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The Base64 Alphabet contains 64 basic ASCII characters.")),Object(o.b)("p",null,"If we receive an encrypted string through API, then we need to decrypt it first then only we can get the actual object. Then upload to YM Server, at last we can share the URL."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'    let call_api = await app.executeApi(\'api_name\', { argument: _value});\n    let api_data = JSON.parse(call_api.body);\n    app.log(api_data, "#####API DATA");\n\n    let buffer = new Buffer.from(api_data.obj_name, "base64"); // Decode the file\n    let file_url = await app.uploadFile(buffer, \'File.pdf\');  // Upload the file to YM server\n    // await app.sendDocument(file_url, { caption:"FILE", filename: \'File.pdf\', mime: \'application/pdf\' });\n    // Share the File URL\n    await app.sendCards([\n        {\n            title: "Kindly download the same as PDF",\n            actions: [{\n                title: "DOWNLOAD",\n                url: file_url\n            }]\n        }\n    ]);\n')),Object(o.b)("p",null,"For more information : ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Base64"},"Click Here")))}u.isMDXComponent=!0},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);