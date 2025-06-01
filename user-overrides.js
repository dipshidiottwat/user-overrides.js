//User-overrides




// --Section 1: Things disabled and or removed--
user_pref("extensions.pocket.enabled", false); //Disables shitty pocket
user_pref("identity.fxaccounts.enabled", false); //Disable firefox sync
user_pref("places.history.enabled", false); // Disables history entirely
user_pref("javascript.options.wasm", false); //WebAssembly support. Completly disables WASM.
user_pref("layout.spellcheckDefault", 0); //Disables spell-check
user_pref("media.navigator.enabled", false); //Blocks some peer-to-peer and remote access services
user_pref("media.peerconnection.enabled", false); //Blocks some P2P and WebRTC 
user_pref("browser.translations.enable", false); //Disables auto translation. Just use something like TWPs


//Disables some general stuff that can be used for fingerprinting
user_pref("javascript.options.ion", false); //Javascript "hardening"
user_pref("javascript.options.asmjs", false); //Javascript "hardening"
user_pref("javascript.options.baselinejit", false); //Basically acceleration. JIT is a big security problem and the speed is not worth it.
user_pref("dom.webaudio.enabled",false); //Old api used for fingerprinting



//Disables autofill/passwords
user_pref("browser.urlbar.autoFill", false); //Disables some autofill
user_pref("browser.formautofill.enabled", false); //Disables some autofill
user_pref("signon.rememberSignons", false); //Disable saving passwords in browser
user_pref("signon.management.page.breach-alerts.enabled",false); //Disables warning for breached sites that you have passwords in. Use https://bitwarden.com/


//Disables safebrowsing
user_pref("browser.safebrowsing.downloads.remote.enabled", false); //Disabled safebrowsing
user_pref("browser.safebrowsing.phishing.enabled", false); //Disables phising safebrowsing
user_pref("browser.safebrowsing.malware.enabled", false); //Disables malware safebrowsing


//Disables sensitive permissions
user_pref("permissions.default.microphone", 2); //Disables microphone permission
user_pref("permissions.default.desktop-notification", 2); //Disables notifications permission
user_pref("permissions.default.geo", 2); //Disables location access
user_pref("geo.enabled", false); //Fully disable location acces
user_pref("dom.webnotifications.enabled", false); //Disables any firefox notifications


//Disable recommendation/suggestions
user_pref("browser.urlbar.suggest.history", false); //Disables suggestions from history
user_pref("browser.urlbar.suggest.openpage", false); //disables suggestions
user_pref("browser.urlbar.suggest.topsites", false); //Disables top site suggestions
user_pref("extensions.getAddons.discovery.api_url", ""); //Disables some addon recommendations
user_pref("extensions.htmlaboutaddons.discover.enabled", false); //Disables some more addon recommendations
user_pref("browser.vpn_promo.enabled", false); //Disables vpn promo




// --Section 2: Re-enabled and enabled features--
user_pref("keyword.enabled", true); //Search from the urlbar
user_pref("browser.newtabpage.enabled", true); //Enabled non-empty ntp-s
user_pref("cookiebanners.service.mode", 2) //Enables Cookie banner


//Disable URL bar suggestions.
user_pref("browser.search.suggest.enabled", true); //Enables search suggestions
user_pref("browser.urlbar.suggest.searches", true); //Enables search suggestions in the url-bar


//WebGL is the javascript bindings for OpenGL in browsers, if youd like to run games on your browser keep this enabled. Otherwise you may disable it by setting "false" to "true"
user_pref("webgl.disabled", false); //Enables WebGL


//Customizable download directories and so.
user_pref("browser.download.dir", "C:\Users\%USERNAME%\Downloads"); //Download Directory. Alternitively use a download manager like gopeed, or even jdownloader2
user_pref("browser.download.useDownloadDir", true); //Always download files to the System Download Directory


//Homepage
user_pref("browser.startup.page", 1); //Browser starts on the Homepage
user_pref("browser.startup.homepage", "about:home"); //Sets homepage


//These cause boxes around your window! turn this off if you don't like them!!!
user_pref("privacy.resistFingerprinting", true); //Spoofs size
user_pref("privacy.resistFingerprinting.letterboxing", true); //Spoofs size




// --Section 3: No specific section--
user_pref("privacy.spoof_english", 2); //Spoofs english by default
user_pref("network.trr.mode", 2);
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false) //Shows pointer whilst typing
user_pref("browser.compactmode.show", true) //Re-enables compact mode


//DNS: You may change to what ever you want :3
user_pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query"); //Forces custom DNS
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query"); //Custom DNS
