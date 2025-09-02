window.addEventListener("load",function(){window.scrollTo({top:0,behavior:"smooth"});var t="reloadData__"+encodeURIComponent(window.location.origin+window.location.pathname+window.location.search),a=Date.now();let o;try{o=JSON.parse(localStorage.getItem(t))}catch(e){o=null}(!o||a-o.timestamp>432e6)&&(localStorage.setItem(t,JSON.stringify({timestamp:a})),location.reload())});
const links = document.querySelectorAll("a"); function showLoading() {
  let e = document.createElement("div"); e.style.position = "fixed", e.style.top = "50%", e.style.left = "50%", e.style.transform = "translate(-50%, -50%)", e.style.border = "4px solid #f3f3f3", e.style.borderTop = "4px solid #3498db", e.style.borderRadius = "50%", e.style.width = "40px", e.style.height = "40px", e.style.animation = "spin 1s linear infinite", document.body.appendChild(e); let t = document.createElement("style"); t.innerHTML = `
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
`, document.head.appendChild(t)
} function isTetDate() { let e = new Date, t = new Intl.DateTimeFormat("vi-u-ca-lunar").format(e); return /^(1|2|3|4)\/(1|13)$/.test(t) } function isMobile() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) } function toggleTopNav() { let e = document.getElementById("myTopnav"); e.className = "topnav" === e.className ? "topnav responsive" : "topnav" } function shouldHideDivOnSmallScreens() { return window.innerWidth < 600 } function isRelative() { return !0 } function isMobileDevice() { return /Mobi|Android/i.test(navigator.userAgent) } function isHomePage() { return "/" === window.location.pathname } if (links.forEach(function (e) { e.addEventListener("click", function (t) { t.preventDefault(), console.log("next page"), showLoading(), setTimeout(() => { window.location.href = e.href }, 1e3) }) }), "localhost" !== window.location.hostname) { let e = document.createElement("script"); e.src = "https://static.elfsight.com/platform/platform.js", e.defer = !0, document.body.appendChild(e); let t = document.getElementById("searchBox"); t && (t.style.display = "block") } function checkDevice() { return window.innerWidth < 768 || void 0 !== window.orientation } const navMenu = document.getElementById("nav-menu"); function consentGrantedAdStorage() { gtag("consent", "update", { ad_storage: "granted" }) } function loadFacebookSDK() { window.fbAsyncInit = function () { FB.init({ xfbml: !0, version: "v3.2" }) }; let e = document.createElement("script"); e.id = "facebook-jssdk", e.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js", document.getElementsByTagName("script")[0].parentNode.insertBefore(e, null) } function loadFacebookSDKLoad() { let e = document.createElement("script"); e.async = !0, e.defer = !0, e.crossOrigin = "anonymous", e.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v16.0&appId=2086804534891096&autoLogAppEvents=1", e.nonce = "y8xxA5Uo", document.head.appendChild(e) } function handleChatButtonClick() { let e = document.getElementById("chat-button"); if (e) { e.style.display = "none"; let t = document.createElement("div"); t.classList.add("elfsight-app-d15cd726-3619-4d26-9eeb-d7661922dbe1"), t.setAttribute("data-elfsight-app-lazy", ""), document.body.appendChild(t) } } let chatButtonAuto = !0; function checkScrollAndClick() { if (chatButtonAuto) { let e = document.getElementById("replace-day"), t = document.getElementById("chat-button"); e && t && e.getBoundingClientRect().top <= window.innerHeight && (t.click(), handleChatButtonClick(), chatButtonAuto = !1) } } const pageProgressBar = document.querySelector(".progress-bar"), scrollContainer = () => document.documentElement || document.body; function gtag() { dataLayer.push(arguments) } document.addEventListener("scroll", () => { let e = scrollContainer().scrollTop, t = scrollContainer().scrollHeight, n = scrollContainer().clientHeight, a = e / (t - n) * 100; pageProgressBar.style.width = `${a}%`, checkScrollAndClick() }), window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "TAG_ID"), gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" }), document.addEventListener("DOMContentLoaded", function () { document.querySelectorAll("img").forEach(function (e) { e.getAttribute("loading") || (e.classList.add("lazyload"), e.setAttribute("loading", "lazy")), e.alt && "" !== e.alt.trim() || (e.alt = "anhhangxomfoto.github.io"), e.addEventListener("load", function () { e.style.width = `${e.width}px`, e.style.height = `${e.height}px` }) }), function (e, t, n) { let a = e.createElement(t), o = e.getElementsByTagName(t)[0]; a.async = !0, a.src = n, o.parentNode.insertBefore(a, o) }(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/a439f78ba77fd2f9e892d4fa8/f37836a9f614fff78ac17eacf.js") });
window.addEventListener("load",function(){var o=window.location.origin+window.location.pathname+window.location.search,t="reloadData__"+encodeURIComponent(o),o=Date.now();let a;try{a=JSON.parse(localStorage.getItem(t))}catch(o){a=null}(!a||432e6<o-a.timestamp)&&(localStorage.setItem(t,JSON.stringify({timestamp:o})),location.reload())});

    function hideTetDivs() {
  const classesToHide = ['tet_left', 'tet_right', 'tet_bottom'];

  classesToHide.forEach(className => {
    const elements = document.querySelectorAll(`div.${className}`);
    elements.forEach(el => {
      el.style.display = 'none';
    });
  });
}
document.addEventListener('DOMContentLoaded', function() {
    // --- Biến và Hằng số ---
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Tháng từ 1 (Tháng 1) đến 12 (Tháng 12)

    // Giả sử 'siteBaseUrl' được định nghĩa toàn cục hoặc được truyền vào từ Jekyll/Liquid
    // Nếu không, bạn cần đảm bảo biến này có giá trị đúng.
    // Ví dụ: const siteBaseUrl = "{{ site.baseurl }}" || ""; // Cần được xử lý bởi Jekyll
    // Để code JavaScript thuần túy chạy được, bạn có thể cần một cách khác để lấy base URL này.
    // Dưới đây, chúng ta sẽ giả định nó đã được xử lý và là một chuỗi.
    const siteBaseUrl = "https://anhhangxomfoto.github.io"; // Giữ nguyên nếu Jekyll xử lý

    // --- Hàm Trợ Giúp ---
    /**
     * Thêm một file CSS vào <head>.
     * @param {string} href Đường dẫn đến file CSS.
     */
    const addCss = (href) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    };

    /**
     * Thêm một file JavaScript vào tài liệu.
     * @param {string} src Đường dẫn đến file JS.
     * @param {boolean} async Tải bất đồng bộ hay không (mặc định là true).
     * @param {'head'|'body'} placement Nơi chèn script ('head' hoặc 'body', mặc định là 'body').
     */
    const addJs = (src, async = true, placement = 'body') => {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        if (placement === 'head') {
            document.head.appendChild(script);
        } else {
            document.body.appendChild(script);
        }
    };

    // --- Logic theo mùa ---
    // Sử dụng hằng số cho các tháng để dễ đọc hơn (tùy chọn)
    const JANUARY = 1, FEBRUARY = 2, SEPTEMBER = 9, OCTOBER = 10, NOVEMBER = 11, DECEMBER = 12;

    switch (currentMonth) {
        case NOVEMBER:
            hideTetDivs();
        case DECEMBER:
            hideTetDivs();
            console.log('Loading Christmas/Winter effects...');
            addCss(`https://anhhangxomfoto.github.io/assets/css/snow.css`);
            addJs(`https://anhhangxomfoto.github.io/assets/js/snowflakes.js`, true, 'body');
            break;

        case SEPTEMBER:
            hideTetDivs();
        case OCTOBER:
            hideTetDivs();
            console.log('Loading Mid-Autumn effects...');
            addCss(`https://anhhangxomfoto.github.io/assets/css/trungthu.css`);
            const midAutumnMessage = document.getElementById("mid-autumn-message");
            if (midAutumnMessage) {
                midAutumnMessage.style.display = "block";
            } else {
                console.warn('Element with ID "mid-autumn-message" not found.');
            }
            break;

        case JANUARY:
            hideTetDivs();
        case FEBRUARY:
            console.log('Loading Tet effects...');
            // Giả sử `tet.css` cũng nên dùng siteBaseUrl cho nhất quán
            addCss(`https://anhhangxomfoto.github.io/assets/css/tet.css`);

            // Kiểm tra xem hàm `createSnowfallEffect` có tồn tại không trước khi gọi
            if (typeof createSnowfallEffect === 'function') {
                createSnowfallEffect();
            } else {
                // Nếu hàm này được định nghĩa trong một file JS riêng, bạn cần tải file đó trước
                // Ví dụ: addJs(`${siteBaseUrl}/assets/js/tet-effects.js`, true, 'body');
                // Và sau đó, hàm createSnowfallEffect có thể được gọi an toàn hơn,
                // có thể là trong callback của việc tải script đó hoặc đảm bảo nó được tải đồng bộ hơn.
                console.warn('Function "createSnowfallEffect" is not defined. Tet snowfall effect might not work.');
                // Cân nhắc tải một script chứa hàm này, ví dụ:
                // addJs(`${siteBaseUrl}/assets/js/tetSnowEffect.js`, true, 'body');
            }
            break;

        default:
            hideTetDivs();
            // Không có hiệu ứng đặc biệt cho các tháng khác
            break;
    }
});(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','G-8WQCFPL56N');
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(99783189, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true,
       ecommerce:"dataLayer"
  });

  function createSnowfallEffect(){const imgURL='/assets/images/hoadao-anonyviet.com.webp';const colorSnow='#fff';const snowDistance='windowheight';const hideSnowTime=0;let no=window.matchMedia('only screen and (max-width: 767px)').matches?10:20;let docWidth=800;let docHeight=600;const isIE=!!document.all;const isNS6=document.getElementById&&!document.all;const dx=[],xp=[],yp=[],am=[],stx=[],sty=[];function getDocSize(){if(isNS6){docWidth=window.innerWidth-10;docHeight=snowDistance==='windowheight'?window.innerHeight:document.body.offsetHeight}else if(isIE){const docElem=document.compatMode&&document.compatMode!=='BackCompat'?document.documentElement:document.body;docWidth=docElem.clientWidth-10;docHeight=snowDistance==='windowheight'?docElem.clientHeight:docElem.scrollHeight}}
for(let i=0;i<no;i++){dx[i]=0;xp[i]=Math.random()*(docWidth-50);yp[i]=Math.random()*docHeight;am[i]=Math.random()*20;stx[i]=0.02+Math.random()/10;sty[i]=0.7+Math.random();const snowDiv=document.createElement('div');snowDiv.id='dot'+i;snowDiv.style.position='fixed';snowDiv.style.zIndex=99+i;snowDiv.style.visibility='visible';snowDiv.style.pointerEvents='none';snowDiv.style.width='15px';const snowImg=document.createElement('img');snowImg.src=imgURL;snowImg.alt='snowflake';snowImg.style.fontSize='18px';snowImg.style.color=colorSnow;snowDiv.appendChild(snowImg);document.body.appendChild(snowDiv)}
function snowFall(){getDocSize();for(let i=0;i<no;i++){yp[i]+=sty[i];if(yp[i]>docHeight-50){xp[i]=Math.random()*(docWidth-am[i]-30);yp[i]=0;stx[i]=0.02+Math.random()/10;sty[i]=0.7+Math.random()}
dx[i]+=stx[i];const snowDot=document.getElementById('dot'+i);snowDot.style.top=yp[i]+'px';snowDot.style.left=xp[i]+am[i]*Math.sin(dx[i])+'px'}
requestAnimationFrame(snowFall)}
function hideSnow(){for(let i=0;i<no;i++){document.getElementById('dot'+i).style.visibility='hidden'}}
if(isIE||isNS6){snowFall();if(hideSnowTime>0){setTimeout(hideSnow,hideSnowTime*1000)}}}
window.addEventListener('load', function () {
  const tetEls = document.querySelectorAll('.tet_left, .tet_right, .tet_bottom');
  tetEls.forEach(el => el.classList.add('visible-after-load'));
});
