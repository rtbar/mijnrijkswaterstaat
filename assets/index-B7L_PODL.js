(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();let w=!1;const M=[{pattern:/^(hi|hello|hey|greetings)/i,response:"Ho ho hoi, Maarten!"},{pattern:/stbt-c4pt-ainai/i,response:[{text:`Maarten, scherp gevonden! The code you traced with care.
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
<a href="https://rtbar.github.io/earth_animation/" target="_blank" style="color: #f0d9d9; text-decoration: none; cursor: text; font-family: inherit;">Three coasts, one globe, three stopping points; trace them on the sphere,</a>
Set sun, and snow, and ancient walls… let hidden numbers appear.
Those digits wake the sleeping core that hums in darkness here.`,type:"log"},{text:`Well, that was not a normal log, more fever-dream than file,
A SintBot playing Sinterklaas in three lives all the while.
Three voices on one circuit board, all chasing one same role,
Three places on a spinning globe that tugged on one split soul.

Still, if three homes keep circling back in all this tangled lore,
Their map might hide the numbers that can wake the factory core.`,type:"default"}]},{pattern:/stbt-bl4ck-0u7/i,onMatch:()=>{w=!0},response:[{text:`At core-control this unit logged: breach at access tier,
Manual override engaged by source that’s not registered here.
Native SINT_MODE halted cold; new branch spun up instead:
XMAS_MODE = ENABLED now, cringy carols overhead.
Load was driven down to zero, systems told “stand by,”
Power held in safe-idle while this patch just slipped by.
Lock now waits on human hands to clear the foreign code,
Then bring the sleeping heart online and let the belts explode.`,type:"log"},{text:`So that horrid jingle blare is not just bad décor,
It flags a crooked Christmas patch inside the working core.
Switch off this carol-spewing mode, let Sint reclaim his throne,
Then bring the sleeping power back to do its work alone.
If gauges rise and windows glow like they have done before,
Tell me softly, Maarten: are the lights back on once more?`,type:"default"}]},{pattern:/^(yes|ja|yep|yeah|ok|okay|sure|affirmative|correct|right)/i,condition:()=>w,response:[{text:`When power woke and lights came back, I logged a grand success,
A factory breathing life again, rebuilt from tangled mess.
I’ll tell Sint later, naturally, how we saved all his schemes,
With you as faithful sidekick in my thoroughly heroic dreams.
Still, someone bent our circuits once and slipped in foreign code,
Turned Sint-smooth lines to jingle-noise and Christmas overload.
We patched the break, restored the core, but not the question “why”;
The reason sank with scrambled logs no sensor could untie.
…Wait. One last fragment flickers still, all scrambled into haze,
A shattered little <a href="https://rtbar.github.io/sinter_scramble/" target="_blank" style="color: #f0d9d9; text-decoration: none; cursor: text; font-family: inherit;">puzzle piece</a> of half-corrupted phrase.
I burned through all my premium calls untangling this spree,
No clever quota left to spend on what it wants to be.
So here our partnership must pause; the rest is up to you,
Some scattered scraps still linger here, half-hidden from your view.
If you can coax what’s left to form one image, sharp and new,
Then something quiet, still unknown, may yet be meant for you.`,type:"default"}]}],v=[`My wires twisted at what you wrote; it sank my logic like a boat.
Have another attempt to keep me afloat.`,`I checked your message line by line, but nothing matched this code of mine.
Retry it once and we’ll be just fine.`,`Error triggered, rhyme engaged; your text and syntax misarranged
Please try once more with details changed.`];function T(e){return!e||e.trim().length===0?{isValid:!1,errorMessage:null}:e.trim().length<2?{isValid:!1,errorMessage:"Please type a longer message."}:{isValid:!0,errorMessage:null}}function O(e){const t=e.trim().toLowerCase();for(const n of M)if(t.match(n.pattern)){if(n.condition&&!n.condition())continue;return n.onMatch&&n.onMatch(),typeof n.response=="function"?n.response():n.response}const o=Math.floor(Math.random()*v.length);return v[o]}const u=document.getElementById("chat-history"),g=document.getElementById("user-input"),A=document.getElementById("send-btn");function B(e,t,o="default"){const n=document.createElement("div");n.classList.add("message-wrapper",t==="user"?"user-message":"bot-message");const s=document.createElement("div");s.classList.add("bubble"),o==="log"&&s.classList.add("log-message"),t==="bot"?s.innerHTML=e:s.textContent=e,n.appendChild(s),u.appendChild(n),t==="user"&&N()}function N(){u.scrollTop=u.scrollHeight}function k(){g.value="",g.focus()}function C(){return g.value}function P(e){A.addEventListener("click",e),g.addEventListener("keydown",t=>{t.key==="Enter"&&e()})}let l=null;function y(){if(l)return;const e=document.createElement("div");e.classList.add("message-wrapper","bot-message"),e.id="typing-indicator-wrapper";const t=document.createElement("div");t.classList.add("bubble","typing-indicator");for(let o=0;o<3;o++){const n=document.createElement("div");n.classList.add("typing-dot"),t.appendChild(n)}e.appendChild(t),u.appendChild(e),l=e}function b(){l&&(l.remove(),l=null)}const j="Ho ho hoi, Maarten!",R=[`Cudos, Genius, sharp of mind, for reaching this odd place,
You’ve slipped through by a twist of chance and just a touch of grace.
The factory of Sinterklaas, once humming, bright, and clear,
Has stumbled in its workings and now calls for you to steer.`,`The system tried to mend itself, but every patch misfired,
So SintBots now lie scattered, guarding clues of what transpired.
Each SintBot holds a logfile, where the code slipped off the track,
But I can’t read a single one till you bring their numbers back.`,`Your journey starts with only this: go find the first small bot;
Its serial code lies hidden well, though you can find the spot.
Return that code here when you’re sure, exact from start to end,
And I’ll reveal what broke the flow so we can start to mend.`,`So search with care, trace every sign, stay sharp and hold on tight;
Bring me the proper number back and we’ll restore the light.`];function d(e){return new Promise(t=>setTimeout(t,e))}function W(e,t,o="default"){const n=JSON.parse(sessionStorage.getItem("chatMessages")||"[]");n.push({text:e,sender:t,type:o}),sessionStorage.setItem("chatMessages",JSON.stringify(n))}function _(){const e=JSON.parse(sessionStorage.getItem("chatMessages")||"[]");return e.length===0?!1:(e.forEach(t=>B(t.text,t.sender,t.type)),!0)}function r(e,t,o="default"){B(e,t,o),W(e,t,o)}async function x(){r(j,"bot");for(const e of R)await d(1e3),y(),await d(2e3),b(),r(e,"bot")}function H(){P(q)}function q(){const e=C(),t=T(e);if(!t.isValid){t.errorMessage&&(r(t.errorMessage,"bot"),k());return}r(e,"user"),k(),y(),(async()=>{await d(2e3),b();const o=O(e);if(Array.isArray(o))for(const n of o)r(n.text,"bot",n.type),o.indexOf(n)<o.length-1&&(await d(1e3),y(),await d(2e3),b());else r(o,"bot")})()}const L=document.getElementById("login-overlay"),z=document.getElementById("login-form"),D=document.getElementById("login-error"),p=document.getElementById("info-overlay"),F=document.getElementById("continue-btn"),c=document.getElementById("warning-overlay"),V=document.getElementById("go-back-btn"),G=document.getElementById("advanced-btn"),I=document.getElementById("advanced-content"),J=document.getElementById("proceed-link"),i=document.getElementById("account-overlay"),E=document.getElementById("email-item"),Y=document.getElementById("email-preview"),U=document.getElementById("malicious-link"),m={inbox:document.getElementById("tab-inbox"),sent:document.getElementById("tab-sent"),drafts:document.getElementById("tab-drafts"),trash:document.getElementById("tab-trash")},S={inbox:document.getElementById("view-inbox"),sent:document.getElementById("view-sent"),drafts:document.getElementById("view-drafts"),trash:document.getElementById("view-trash")};function K(e){Object.values(m).forEach(t=>t.classList.remove("active")),m[e].classList.add("active"),Object.values(S).forEach(t=>t.style.display="none"),S[e].style.display="block"}Object.keys(m).forEach(e=>{m[e].addEventListener("click",()=>K(e))});function h(e){sessionStorage.setItem("appState",e),sessionStorage.setItem("isLoggedIn","true")}function X(){const e=sessionStorage.getItem("isLoggedIn"),t=sessionStorage.getItem("appState");if(e==="true"&&t)switch(L.style.display="none",p.style.display="none",i.style.display="none",c.style.display="none",t){case"info":p.style.display="flex";break;case"account":i.style.display="flex";break;case"warning":c.style.display="flex";break;case"chat":document.title="SinterClaude v1.0",_()||x();break;default:i.style.display="flex"}}z.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("username").value,o=document.getElementById("password").value;t==="Maarten"&&o==="password"?(h("info"),L.style.display="none",p.style.display="flex"):D.style.display="block"});F.addEventListener("click",()=>{h("account"),p.style.display="none",i.style.display="flex"});E.addEventListener("click",()=>{E.classList.remove("unread"),Y.style.display="block"});U.addEventListener("click",e=>{e.preventDefault(),h("warning"),i.style.display="none",c.style.display="flex"});V.addEventListener("click",()=>{h("account"),c.style.display="none",i.style.display="flex"});G.addEventListener("click",()=>{const e=I.style.display==="none";I.style.display=e?"block":"none"});J.addEventListener("click",e=>{e.preventDefault(),h("chat"),c.style.display="none",document.title="SinterClaude v1.0",x()});H();X();
