(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(337)),l=["components"],b={title:"Instagram",sidebar_label:"Instagram"},c={unversionedId:"platform_concepts/channelConfiguration/instagram",id:"platform_concepts/channelConfiguration/instagram",isDocsHomePage:!1,title:"Instagram",description:"Instagram channel documentation",source:"@site/docs/platform_concepts/channelConfiguration/instagram.md",slug:"/platform_concepts/channelConfiguration/instagram",permalink:"/docs/platform_concepts/channelConfiguration/instagram",version:"current",sidebar_label:"Instagram",sidebar:"platform_concepts",previous:{title:"Google Chat",permalink:"/docs/platform_concepts/channelConfiguration/googleChat"},next:{title:"iOS Chatbot SDK",permalink:"/docs/platform_concepts/channelConfiguration/ios"}},i=[],s={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"instagram-channel-documentation"},"Instagram channel documentation"),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"introduction"},"Introduction")),Object(o.b)("hr",null),Object(o.b)("p",null,"This document will help you understand features and limitations of Instagram channel, and guide you in setting up your own Instagram chatbot on Yellow AI platform."),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"pre-requisites"},"Pre-requisites")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before setting up a chatbot make sure you have:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("a",{parentName:"li",href:"https://www.facebook.com/help/instagram/138925576505882"},Object(o.b)("strong",{parentName:"a"},"Instagram Professional Account"))," (either Creator or Business account)."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"Facebook Page")," ",Object(o.b)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/overview#pages"},"connected to that Instagram account"),". Make sure that you have a Facebook Page that represents your Instagram Professional account identity when connecting with users. To create a new Page, visit ",Object(o.b)("a",{parentName:"li",href:"https://www.facebook.com/pages/create"},"https://www.facebook.com/pages/create"),", you can also set up a test Page to start."),Object(o.b)("li",{parentName:"ul"},"Enabled ",Object(o.b)("strong",{parentName:"li"},"Access to Messages")," is enabled in the Instagram account\nSteps: ",Object(o.b)("strong",{parentName:"li"},"Settings \u2192 Privacy \u2192 Messages \u2192 Enable Allow Access to Messages"))),Object(o.b)("h4",{id:"set-up-a-business-account-on-instagram"},"Set up a business account on Instagram"),Object(o.b)("p",null,"On Instagram, you can convert your personal profile to a business account to access features that can help you grow your business."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," ",Object(o.b)("a",{parentName:"p",href:"https://l.facebook.com/l.php?u=https%3A%2F%2Fhelp.instagram.com%2F1682672155283228%3Ffbclid%3DIwAR26QtzM_0hTNg-1d4KBbctcw_l4JrVH9xn2WUqeQRGqwSZbeT2qBQsmJoY&h=AT0-raQ9NUsNKCDI0NEahsCfXnVivLQA5wLV5RR4gd36QB2XZGOc5u2EX8O2Xhc6YcKaM_f9p6skRnRiixkcwmOH7OZlQZMT3hCWNE5IEpipN7Hwtod1ywVRT39DLLvFOPULF8G0ncw"},"You may only have five Instagram accounts")," at a time."),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"to-switch-your-profile-to-a-business-account"},"To switch your profile to a business account:")),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to your profile and tap ",Object(o.b)("strong",{parentName:"li"},"Hamburger Menu")," in the top right-hand corner."),Object(o.b)("li",{parentName:"ul"},"Tap ",Object(o.b)("strong",{parentName:"li"},"Settings."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For some accounts, the ",Object(o.b)("strong",{parentName:"li"},"Switch to professional account")," option will be listed directly under ",Object(o.b)("strong",{parentName:"li"},"Settings.")))),Object(o.b)("li",{parentName:"ul"},"Tap ",Object(o.b)("strong",{parentName:"li"},"Account"),"."),Object(o.b)("li",{parentName:"ul"},"Tap ",Object(o.b)("strong",{parentName:"li"},"Switch to professional account"),"."),Object(o.b)("li",{parentName:"ul"},"Tap ",Object(o.b)("strong",{parentName:"li"},"Continue.")),Object(o.b)("li",{parentName:"ul"},"Select a category for your business and tap ",Object(o.b)("strong",{parentName:"li"},"Done.")),Object(o.b)("li",{parentName:"ul"},"Tap ",Object(o.b)("strong",{parentName:"li"},"OK")," to confirm."),Object(o.b)("li",{parentName:"ul"},"Tap ",Object(o.b)("strong",{parentName:"li"},"Business"),"."),Object(o.b)("li",{parentName:"ul"},"Tap ",Object(o.b)("strong",{parentName:"li"},"Next"),"."),Object(o.b)("li",{parentName:"ul"},"Add contact details and tap ",Object(o.b)("strong",{parentName:"li"},"Next.")," Or tap ",Object(o.b)("strong",{parentName:"li"},"Don't use my contact info")," to skip this step."),Object(o.b)("li",{parentName:"ul"},"If you'd like, you can follow the steps to connect your business account to a Facebook Page associated with your business. This step is optional, and will make it easier to use all of the features available for businesses across the Facebook family of apps. At this time, only one Facebook Page can be connected to your business account."),Object(o.b)("li",{parentName:"ul"},"Tap ",Object(o.b)("strong",{parentName:"li"},"X")," in the top-right corner to return to your profile.")),Object(o.b)("p",null,"With a business account, you'll be able to access insights that can help you understand who is engaging with your business on Instagram. You'll also have access to the professional dashboard, where you can track your performance, access and discover professional tools and explore educational information curated by Instagram."),Object(o.b)("p",null,"You also have the option to display or hide your business category and contact information on your profile. After setting up, go to your profile and tap ",Object(o.b)("strong",{parentName:"p"},"Edit profile"),". Go to ",Object(o.b)("strong",{parentName:"p"},"Profile display")," under Public business information to choose whether you want to hide or display your category label and contact info. Then, tap ",Object(o.b)("strong",{parentName:"p"},"Done"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Source:")," ",Object(o.b)("a",{parentName:"p",href:"https://www.facebook.com/business/help/502981923235522"},"https://www.facebook.com/business/help/502981923235522"))),Object(o.b)("h4",{id:"connecting-facebook-page-and-instagram-account"},"Connecting Facebook page and Instagram account"),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"to-connect-your-facebook-page-and-instagram-account"},"To connect your Facebook Page and Instagram account")),Object(o.b)("hr",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"From your News Feed, click ",Object(o.b)("strong",{parentName:"li"},"Pages")," in the left menu."),Object(o.b)("li",{parentName:"ol"},"Go to your Page and click ",Object(o.b)("strong",{parentName:"li"},"Page settings")," in the bottom left."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Instagram")," in the left column, then click ",Object(o.b)("strong",{parentName:"li"},"Connect Account"),"."),Object(o.b)("li",{parentName:"ol"},"Toggle ",Object(o.b)("strong",{parentName:"li"},"Allow access to Instagram messages in Inbox")," on or off. When on, it provides access to people who manage your Page to view and respond to Instagram messages."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Confirm"),"."),Object(o.b)("li",{parentName:"ol"},"Enter your username and password and click ",Object(o.b)("strong",{parentName:"li"},"Log In"),"."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Connect account"),", then click ",Object(o.b)("strong",{parentName:"li"},"Confirm"),". If you're connecting a personal Instagram account to a Page managed in Business Manager, change your Instagram account to a professional one:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Business")," or ",Object(o.b)("strong",{parentName:"li"},"Creator")," account."),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Next"),"."),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Done"),".")))),Object(o.b)("p",null,"Learn what happens when you ",Object(o.b)("a",{parentName:"p",href:"https://www.facebook.com/help/2546917405323366"},"connect your Facebook Page and Instagram account"),"."),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"sync-business-contact-info"},"Sync business contact info")),Object(o.b)("hr",null),Object(o.b)("p",null,"You can sync your business contact info between your Facebook Page and Instagram account. To sync your info you'll need to have a business profile on Instagram."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"From your News Feed, click ",Object(o.b)("strong",{parentName:"li"},"Pages")," in the left menu."),Object(o.b)("li",{parentName:"ol"},"Go to your Page and click ",Object(o.b)("strong",{parentName:"li"},"Page settings")," in the bottom left."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Instagram")," in the left column."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Connect Account"),"."),Object(o.b)("li",{parentName:"ol"},"Follow the prompts on the screen.")),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"disconnect-your-facebook-page-and-instagram-account"},"Disconnect your Facebook Page and Instagram account")),Object(o.b)("hr",null),Object(o.b)("p",null,"To disconnect your Facebook Page and Instagram account:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"From your News Feed, click ",Object(o.b)("strong",{parentName:"li"},"Pages")," in the left menu."),Object(o.b)("li",{parentName:"ul"},"Go to your Page and click ",Object(o.b)("strong",{parentName:"li"},"Page settings")," in the bottom left."),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Instagram")," in the left column."),Object(o.b)("li",{parentName:"ul"},"Scroll down and click ",Object(o.b)("strong",{parentName:"li"},"Disconnect"),".")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Source:")," ",Object(o.b)("a",{parentName:"p",href:"https://www.facebook.com/help/1148909221857370"},"https://www.facebook.com/help/1148909221857370"))),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"account-setup"},"Account setup")),Object(o.b)("hr",null),Object(o.b)("p",null,"1) ",Object(o.b)("a",{parentName:"p",href:"http://cloud.yellowmessenger.com/"},"Sign-up")," on Yellow AI platfrom: app.yellow.ai. If you have already signed-up, just sign-in."),Object(o.b)("p",null,"2) Navigate to your chatbot: ",Object(o.b)("strong",{parentName:"p"},"Projects \u2192 Select your chatbot"),"."),Object(o.b)("p",null,"3) To connect your Instagram account, go to ",Object(o.b)("strong",{parentName:"p"},"Configuration \u2192 Channels \u2192 Select Instagram")," on app.yellow.ai platform."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/78bdb997-0cc9-7068-7d7c-d6821b77cef5/setup_1.png",alt:"setup_1.png"})),Object(o.b)("p",null,"4) Click on ",Object(o.b)("strong",{parentName:"p"},"Connect with Instagram"),". You will be redirected to Facebook login page. Login to your account and grant requested permissions."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/943859bd-7b66-2975-fdb6-4cadd69c5d6e/setup_2.png",alt:"setup_2.png"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," If you have multiple Instagram accounts linked to your Facebook page, select the one that you want to connect to the bot."),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"features-and-developer-documentation"},"Features and Developer documentation")),Object(o.b)("hr",null),Object(o.b)("h4",{id:"generic-templates"},"Generic Templates"),Object(o.b)("p",null,"The generic template allows you to send a structured message that includes an image, text and buttons. A generic template with multiple templates described in the ",Object(o.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/messenger-platform/instagram/features/generic-template/#elements"},Object(o.b)("inlineCode",{parentName:"a"},"elements"))," array will send a horizontally scrollable carousel of items, each composed of an image, text and buttons."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/b9186c0b-459b-6ee9-1d7b-b2d73b166b9c/product_template_1.png",alt:"product_template_1.png"})),Object(o.b)("p",null,"The generic template supports a maximum of 10 elements per message.\nAt least one property must be set in addition to ",Object(o.b)("inlineCode",{parentName:"p"},"title"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Property Name")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Type")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Requirement")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"title")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Mandatory"),Object(o.b)("td",{parentName:"tr",align:null},"The title to display in the template. 80 character limit.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"subtitle")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Optional"),Object(o.b)("td",{parentName:"tr",align:null},"The subtitle to display in the template. 80 character limit.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"image_url")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Optional"),Object(o.b)("td",{parentName:"tr",align:null},"The URL of the image to display in the template.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"default_action")),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"Optional"),Object(o.b)("td",{parentName:"tr",align:null},"The default action executed when the template is tapped. Accepts the same properties as ",Object(o.b)("a",{parentName:"td",href:"https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button"},"URL button"),", except ",Object(o.b)("inlineCode",{parentName:"td"},"title"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"buttons")),Object(o.b)("td",{parentName:"tr",align:null},"Array < ",Object(o.b)("a",{parentName:"td",href:"https://developers.facebook.com/docs/messenger-platform/instagram/features/generic-template/#button"},Object(o.b)("inlineCode",{parentName:"a"},"button"))," >"),Object(o.b)("td",{parentName:"tr",align:null},"Optional"),Object(o.b)("td",{parentName:"tr",align:null},"An array of ",Object(o.b)("a",{parentName:"td",href:"https://developers.facebook.com/docs/messenger-platform/send-api-reference/buttons"},"buttons")," to append to the template. A maximum of 3 buttons per element is supported. Only ",Object(o.b)("inlineCode",{parentName:"td"},"postback")," and ",Object(o.b)("inlineCode",{parentName:"td"},"web_url")," buttons are supported.")))),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"limitations"},"Limitations")),Object(o.b)("hr",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"This feature is currently not available on desktop.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," This feature is currently under development. More limitations (if any) will be added further."),Object(o.b)("h4",{id:"private-replies"},"Private Replies"),Object(o.b)("p",null,"Private Replies allows Businesses to reply to comments made on their posts with a single message on Instagram. When using this feature, the user will get a message with a reference link to the comment that is getting the reply."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Sample use case:")," Initiating conversation with a user who comments on a post."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/1997fc3e-3d13-cafd-1c26-54930064407d/private_reply_1.png",alt:"private_reply_1.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/07ce4db5-ba53-ddae-1dd9-9094e4ac67be/private_reply_2.png",alt:"private_reply_2.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/cef4e6c9-f73e-8b17-4dca-28f5517ab89e/private_reply_3.png",alt:"private_reply_3.png"})),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"limitations-1"},Object(o.b)("strong",{parentName:"h2"},"Limitations"))),Object(o.b)("hr",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Private replies are currently not supported for Instagram ads and IGTV comments."),Object(o.b)("li",{parentName:"ol"},"Private replies are allowed within 7 days (except IG live) of the creation date of the comment."),Object(o.b)("li",{parentName:"ol"},"Private Replies do not open the 24 hour window for standard messaging.")),Object(o.b)("h4",{id:"story-mentionsreplies"},"Story Mentions/Replies"),Object(o.b)("p",null,"An Instagram Professional account can be notified when a user mentions them in a story. When this happens, the IG Professional account will get a message in the inbox referencing the story that the user posted. Due to a story being ephemeral by nature (it will disappear after 24 hours or when deleted by the user), you must meet specific requirements and implementation guidelines to comply and respect user privacy for ephemeral content."),Object(o.b)("p",null,"Story mention is part of the app review requirements for ",Object(o.b)("inlineCode",{parentName:"p"},"instagram_manage_messages")," permission. Please ensure that you meet all the story mention requirements before submitting for ",Object(o.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/messenger-platform/instagram/app-review/"},"app review"),"."),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"important-points"},"Important Points")),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A Story mention webhook will only flow in if the user mentioning the account has their account setup as public. Story mentions from a private account will only flow in if the account follows the said account."),Object(o.b)("li",{parentName:"ul"},"You must not store/cache the media content on your server.")),Object(o.b)("h4",{id:"quick-replies"},"Quick Replies"),Object(o.b)("p",null,"Quick replies provide a way to present a set of buttons in-conversation for users to reply with."),Object(o.b)("p",null,"When a quick reply is tapped, the buttons are dismissed, and the title of the tapped button is posted to the conversation as a message. A messages event will be sent to your webhook that contains the button title and an optional payload."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/8225d40c-6185-a11c-be91-e1809c4bf131/quick_reply_1.png",alt:"quick_reply_1.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/fbc93788-7c36-c113-2142-62c7c0832ceb/quick_reply_2.png",alt:"quick_reply_2.png"})),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"limitations-2"},"Limitations")),Object(o.b)("hr",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"This feature is currently not available on desktop."),Object(o.b)("li",{parentName:"ol"},"A maximum of 13 quick replies are supported."),Object(o.b)("li",{parentName:"ol"},"Each quick reply allows up to 20 characters before being truncated."),Object(o.b)("li",{parentName:"ol"},"Quick replies only support plain text.")),Object(o.b)("h4",{id:"ice-breakers"},"Ice Breakers"),Object(o.b)("p",null,"Ice Breakers provide a way for users to start a conversation with a business with a list of frequently asked questions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Sample use case:")," Pre-purchase product queries"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/5660e1dd-fb73-7cd2-81dc-b02a0dba2231/ice_breaker_1.png",alt:"ice_breaker_1.png"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Sample use case:")," Post-purchase customer support"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/1cd01305-f681-acc4-e760-addd10927e9d/ice_breaker_2.png",alt:"ice_breaker_2.png"})),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"limitations-3"},"Limitations")),Object(o.b)("hr",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"This feature is currently not available on desktop."),Object(o.b)("li",{parentName:"ol"},"A maximum of 4 questions can be set via the Ice Breaker API."),Object(o.b)("li",{parentName:"ol"},"Ice Breaker will be available only once, and for the first time users.")),Object(o.b)("h4",{id:"human-agent-escalation"},"Human Agent Escalation"),Object(o.b)("p",null,"Apps with instagram_manage_message permission must have an escalation path to a human agent. Experiences can either start by directly interacting with a human agent or can start from an automation to qualify intent but must have a way for users to chat with a human agent as needed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Sample use case:")," Pre-purchase discovery support"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/a167ad72-1c3b-d66f-22ab-371b627ba339/human_agent_escalation_1.png",alt:"human_agent_escalation_1.png"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Sample use case:")," Post-purchase customer support"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/5f93617e-7427-47b5-9778-ef8682541f37/human_agent_escalation_2a.png",alt:"human_agent_escalation_2a.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/7df95020-e3aa-0f0c-6a6f-29ab54e34f0c/human_agent_escalation_2b.png",alt:"human_agent_escalation_2b.png"})),Object(o.b)("blockquote",null,Object(o.b)("h3",{parentName:"blockquote",id:"list-of-supported-messages-by-yellow-ai-platform"},"List of supported messages by Yellow AI platform")),Object(o.b)("hr",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Action type")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Message type")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Bot Support?")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"User Support?")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Message"),Object(o.b)("td",{parentName:"tr",align:null},"Text"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Message"),Object(o.b)("td",{parentName:"tr",align:null},"Image"),Object(o.b)("td",{parentName:"tr",align:null},"Yes. Supported formats: jpg, png, ico, bmp. Size: Less than 8 MB."),Object(o.b)("td",{parentName:"tr",align:null},"Yes. Supported formats: jpg, png, ico, bmp. Size: Less than 8 MB.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Message"),Object(o.b)("td",{parentName:"tr",align:null},"Product Template"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"NA")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Message"),Object(o.b)("td",{parentName:"tr",align:null},"Generic Template"),Object(o.b)("td",{parentName:"tr",align:null},"Yes*"),Object(o.b)("td",{parentName:"tr",align:null},"NA")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Message"),Object(o.b)("td",{parentName:"tr",align:null},"Sticker"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"Yes #")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Message"),Object(o.b)("td",{parentName:"tr",align:null},"Attachments (video, voice, file)"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"Yes #")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Reaction"),Object(o.b)("td",{parentName:"tr",align:null},"React"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Reaction"),Object(o.b)("td",{parentName:"tr",align:null},"Unreact"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Media Share"),Object(o.b)("td",{parentName:"tr",align:null},"Image"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Yes #")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Media Share"),Object(o.b)("td",{parentName:"tr",align:null},"Video"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Yes #")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Media Share"),Object(o.b)("td",{parentName:"tr",align:null},"Story"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Media Share"),Object(o.b)("td",{parentName:"tr",align:null},"IGTV"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Media Share"),Object(o.b)("td",{parentName:"tr",align:null},"Reels"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Coming Soon"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"# Events will be received by the platform, and responses can be configured at the bot level")),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"channel-limitations"},"Channel limitations")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Following are some of the limitations set up by Instagram:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Conversation should always be initiated by the user unless they comment on any posts.  ",Object(o.b)("strong",{parentName:"li"},"NOTE:")," If user has not interacted with the bot directly but, only made a comment, a temporary user_id will be created so that the bot can respond only to that comment via direct message."),Object(o.b)("li",{parentName:"ol"},"A maximum of 13 Quick replies can be added in a single prompt."),Object(o.b)("li",{parentName:"ol"},"A single quick reply can have a maximum of 20 characters and supports only text. If the limit exceeds, those characters will be truncated."),Object(o.b)("li",{parentName:"ol"},"Brands can only access a user\u2019s Profile Name, and Profile Picture."),Object(o.b)("li",{parentName:"ol"},"Bot can handle only one message at a time.")),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"frequently-asked-questions"},"Frequently asked questions")),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Is it mandatory to have a professional Instagram account? Can we not setup the chatbot using personal account?",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Yes. Both are mandatory.")))),Object(o.b)("li",{parentName:"ul"},"Does Instagram let brands to proactively reach out to customers?",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No. Currently, brands cannot run any campaigns on Instagram.")))),Object(o.b)("li",{parentName:"ul"},"Is it mandatory for users to start converstaion using Ice breakers?",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No. Users can choose to tap on an Ice breaker OR send any message.")))),Object(o.b)("li",{parentName:"ul"},"Is it mandatory to have Ice breakers?",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No. Brands can choose not to display Ice breakers. However, it\u2019s suggested to have them in order to help users understand the bot\u2019s capabilities.")))),Object(o.b)("li",{parentName:"ul"},"What happens if users share audio/video/sticker in between a conversation?",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"A webhook event will be received on the platform which can be handled at a bot level.")))),Object(o.b)("li",{parentName:"ul"},"Can the bot respond if a user replies to a previous thread?",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No. The bot can only repond to the latest single message from the user.")))),Object(o.b)("li",{parentName:"ul"},"Can the bot retain a context if the user switches to a different context?",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Yes. This can be configured in the Builder/Studio module of the platform.")))),Object(o.b)("li",{parentName:"ul"},"Can there be multiple images in a single template/product card?",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No. Currently only a single image can be displayed in a single template/product card. However, brands can display upto 10 cards at once.")))),Object(o.b)("li",{parentName:"ul"},"How many buttons are supported in a template/product card?",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Currently upto 3 buttons can be added in a template/product card."))))),Object(o.b)("blockquote",null,Object(o.b)("h1",{parentName:"blockquote",id:"sample-messenger-api-support-for-instagram-experience---original-coast-clothing"},"Sample Messenger API support for Instagram Experience - Original Coast Clothing")),Object(o.b)("hr",null),Object(o.b)("p",null,"You can experience the sample bot built by Facebook by sending a message to ",Object(o.b)("a",{parentName:"p",href:"https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Foriginalcoastclothing%3Fref%3DDEVDOCS%26fbclid%3DIwAR3lNgARJ786nDwyRwBTcWdtn3yzS4SbD6LXI10_HDQuMU2KDF2KOMwccZc&h=AT2EEdvM5fRZ7oiY8Qp8N7kWv21l-3LHPhLOFLjwEOxHA-8qpl0cyiSkJ_edVUnCdpSHVXJjeVLRrEjSAseKtefkF6ge55W_Ml49Tqf9kzrfcovdesF1BG9X1rfmxa8_HDhUTHZcdw9sepR_4R8pSv1k0d0"},Object(o.b)("strong",{parentName:"a"},"@originalcoastclothing"))," or ",Object(o.b)("a",{parentName:"p",href:"https://www.instagram.com/p/CNaLh5xgppt/?fbclid=IwAR25MQqch_ofU_HWv5CFjGOPJmfiqV8qIjImlShqFvpOdSTwm-0_QCpdIjc"},Object(o.b)("strong",{parentName:"a"},"commenting on a post")),"."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/3fa05cdd-b6a7-5bf3-526b-344e84bd812a/Image",alt:"Image"})))}p.isMDXComponent=!0},337:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?r.a.createElement(d,b(b({ref:t},i),{},{components:a})):r.a.createElement(d,b({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<o;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);