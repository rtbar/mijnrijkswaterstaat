(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const y of a.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const x=[{pattern:/^(hi|hello|hey|greetings)/i,response:"Ho ho hoi, Maarten!"},{pattern:/stbt-c4pt-ainai/i,response:[{text:`Maarten, scherp gevonden! The code you traced with care.
What joy this bot is living, not rusting in despair.
Its heartbeat dim but present, its storage faint but true,
And in its logs were found these rules, now read aloud to you:`,type:"default"},{text:`No breaking, bending, forcing parts; keep every piece intact,
No hands into the water, nor direct boat contact.
Only dry land, SintBots, the vessel’s upper side,
Are clues to lead you on; no hidden force applied.`,type:"log"},{text:`So… that was standard bot-talk, nothing secret, nothing sly,
Just rules that every helper learns before they even try.
But since your boat’s still dry and stuck, the release bot missed its cue,
So go inspect its hidden shell; the job’s been passed to you.

These bots are kept behind locked doors, it’s protocol, you see,
And that means somewhere on dry land there lies a hidden key.
You’re sharp enough to find it, Maarten, truly, that I trust.
So track it down, unlock the door, and free the bot you must.`,type:"default"}]},{pattern:/stb-port-stuck/i,response:[{text:`Pressure log: control-room load has climbed beyond design,
Gift boxes wedged on levers tight, all meters out of line.
Safety locked the harbor gate, the platform fixed in place,
Present pressure at this node has tripped the fail-safe case.
Side note: one small pump consignment tagged “For Maarten” on the crate,
Filed under “staff with steady hands who keep lines running straight.”`,type:"log"},{text:`Seems someone turned this room of valves into a gift depot for two;
If anyone can ease the load, I’d wager that it’s you.
When weight and pressure shift a bit and something yields outside,
A certain waiting hull may find it’s time to test the tide.`,type:"default"}]},{pattern:/stbt-hbr-cl0g3r/i,response:[{text:`New access ping: the door gave way, fresh footsteps crossed the floor,
The logs recorded every step, like they have done before..
The harbor gate stands high and still, holds back the wider blue,
While quiet gears beneath the boards still choose who passes through.
One unit flagged as “out at sea” has slipped beyond the wall,
A SintBot bobbing in the waves, no beacon in its call.
Its serial stamped “for home use only,” not for foreign view,
Yet oceans tend to mock the forms that customs clerks once drew.
I’ve noted: those who reach this room and read this modest trace
May help the waiting hull move on and grant it open space.
When metal shifts and water parts, the way ahead is clear,
And someone with a steady hand can fish our straying friend back here.`,type:"log"},{text:`As for that roaming SintBot core, let’s keep it in our bay;
Not gift-wrapped off to Moscow or to Shenzhen labs one day.`,type:"default"}]},{pattern:/stbt-red-ht404/i,response:[{text:`I wear three red coats at once, one body, triple name;
Three harbours on one spinning world all claim the same old fame.
First: a sunlit southern quay, with horses, tiles and spray;
They swear I sail from orange winds that send their gifts this way.
Second: where the maps run out and snow replaces shore;
Reindeer scrape the frozen night the compass calls “no more.”
Third: old stones above warm seas where “Nicholas” was said;
A bishop walked those eastern streets before my hull turned red.
Three coasts, one globe, three stopping points; trace them on the sphere,
Set sun, and snow, and ancient walls… let hidden numbers appear.
Those digits wake the sleeping core that hums in darkness here.`,type:"log"},{text:`Well, that was not a normal log, more fever-dream than file,
A SintBot playing Sinterklaas in three lives all the while.
Three voices on one circuit board, all chasing one same role,
Three places on a spinning globe that tugged on one split soul.

Still, if three homes keep circling back in all this tangled lore,
Their map might hide the numbers that can wake the factory core.`,type:"default"}]}],w=[`My wires twisted at what you wrote; it sank my logic like a boat.
Have another attempt to keep me afloat.`,`I checked your message line by line, but nothing matched this code of mine.
Retry it once and we’ll be just fine.`,`Error triggered, rhyme engaged; your text and syntax misarranged
Please try once more with details changed.`];function M(e){return!e||e.trim().length===0?{isValid:!1,errorMessage:null}:e.trim().length<2?{isValid:!1,errorMessage:"Please type a longer message."}:{isValid:!0,errorMessage:null}}function T(e){const t=e.trim().toLowerCase();for(const s of x)if(t.match(s.pattern))return typeof s.response=="function"?s.response():s.response;const n=Math.floor(Math.random()*w.length);return w[n]}const u=document.getElementById("chat-history"),p=document.getElementById("user-input"),O=document.getElementById("send-btn");function S(e,t,n="default"){const s=document.createElement("div");s.classList.add("message-wrapper",t==="user"?"user-message":"bot-message");const o=document.createElement("div");o.classList.add("bubble"),n==="log"&&o.classList.add("log-message"),o.textContent=e,s.appendChild(o),u.appendChild(s),t==="user"&&A()}function A(){u.scrollTop=u.scrollHeight}function v(){p.value="",p.focus()}function C(){return p.value}function P(e){O.addEventListener("click",e),p.addEventListener("keydown",t=>{t.key==="Enter"&&e()})}let l=null;function f(){if(l)return;const e=document.createElement("div");e.classList.add("message-wrapper","bot-message"),e.id="typing-indicator-wrapper";const t=document.createElement("div");t.classList.add("bubble","typing-indicator");for(let n=0;n<3;n++){const s=document.createElement("div");s.classList.add("typing-dot"),t.appendChild(s)}e.appendChild(t),u.appendChild(e),l=e}function b(){l&&(l.remove(),l=null)}const N="Ho ho hoi, Maarten!",R=[`Cudos, Genius, sharp of mind, for reaching this odd place,
You’ve slipped through by a twist of chance and just a touch of grace.
The factory of Sinterklaas, once humming, bright, and clear,
Has stumbled in its workings and now calls for you to steer.`,`The system tried to mend itself, but every patch misfired,
So SintBots now lie scattered, guarding clues of what transpired.
Each SintBot holds a logfile, where the code slipped off the track,
But I can’t read a single one till you bring their numbers back.`,`Your journey starts with only this: go find the first small bot;
Its serial code lies hidden well, though you can find the spot.
Return that code here when you’re sure, exact from start to end,
And I’ll reveal what broke the flow so we can start to mend.`,`So search with care, trace every sign, stay sharp and hold on tight;
Bring me the proper number back and we’ll restore the light.`];function d(e){return new Promise(t=>setTimeout(t,e))}function j(e,t,n="default"){const s=JSON.parse(sessionStorage.getItem("chatMessages")||"[]");s.push({text:e,sender:t,type:n}),sessionStorage.setItem("chatMessages",JSON.stringify(s))}function H(){const e=JSON.parse(sessionStorage.getItem("chatMessages")||"[]");return e.length===0?!1:(e.forEach(t=>S(t.text,t.sender,t.type)),!0)}function r(e,t,n="default"){S(e,t,n),j(e,t,n)}async function B(){r(N,"bot");for(const e of R)await d(1e3),f(),await d(2e3),b(),r(e,"bot")}function F(){P(V)}function V(){const e=C(),t=M(e);if(!t.isValid){t.errorMessage&&(r(t.errorMessage,"bot"),v());return}r(e,"user"),v(),f(),(async()=>{await d(2e3),b();const n=T(e);if(Array.isArray(n))for(const s of n)r(s.text,"bot",s.type),n.indexOf(s)<n.length-1&&(await d(1e3),f(),await d(2e3),b());else r(n,"bot")})()}const L=document.getElementById("login-overlay"),W=document.getElementById("login-form"),q=document.getElementById("login-error"),g=document.getElementById("info-overlay"),G=document.getElementById("continue-btn"),c=document.getElementById("warning-overlay"),J=document.getElementById("go-back-btn"),Y=document.getElementById("advanced-btn"),I=document.getElementById("advanced-content"),z=document.getElementById("proceed-link"),i=document.getElementById("account-overlay"),E=document.getElementById("email-item"),D=document.getElementById("email-preview"),_=document.getElementById("malicious-link"),m={inbox:document.getElementById("tab-inbox"),sent:document.getElementById("tab-sent"),drafts:document.getElementById("tab-drafts"),trash:document.getElementById("tab-trash")},k={inbox:document.getElementById("view-inbox"),sent:document.getElementById("view-sent"),drafts:document.getElementById("view-drafts"),trash:document.getElementById("view-trash")};function U(e){Object.values(m).forEach(t=>t.classList.remove("active")),m[e].classList.add("active"),Object.values(k).forEach(t=>t.style.display="none"),k[e].style.display="block"}Object.keys(m).forEach(e=>{m[e].addEventListener("click",()=>U(e))});function h(e){sessionStorage.setItem("appState",e),sessionStorage.setItem("isLoggedIn","true")}function K(){const e=sessionStorage.getItem("isLoggedIn"),t=sessionStorage.getItem("appState");if(e==="true"&&t)switch(L.style.display="none",g.style.display="none",i.style.display="none",c.style.display="none",t){case"info":g.style.display="flex";break;case"account":i.style.display="flex";break;case"warning":c.style.display="flex";break;case"chat":document.title="SinterClaude v1.0",H()||B();break;default:i.style.display="flex"}}W.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("username").value,n=document.getElementById("password").value;t==="Maarten"&&n==="password"?(h("info"),L.style.display="none",g.style.display="flex"):q.style.display="block"});G.addEventListener("click",()=>{h("account"),g.style.display="none",i.style.display="flex"});E.addEventListener("click",()=>{E.classList.remove("unread"),D.style.display="block"});_.addEventListener("click",e=>{e.preventDefault(),h("warning"),i.style.display="none",c.style.display="flex"});J.addEventListener("click",()=>{h("account"),c.style.display="none",i.style.display="flex"});Y.addEventListener("click",()=>{const e=I.style.display==="none";I.style.display=e?"block":"none"});z.addEventListener("click",e=>{e.preventDefault(),h("chat"),c.style.display="none",document.title="SinterClaude v1.0",B()});F();K();
