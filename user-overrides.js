//User-overrides

// LEGEND:
//
// "(deprecated)": means the about:config setting in firefox is deprecated
// "(default)": already set at the same value as the arkenfox user.js, might remove all these prefs soon since they're obslete with arkenfox.



// --Section 1: Things disabled and or removed--
user_pref("extensions.pocket.enabled", false);        // disables shitty pocket (default)
user_pref("identity.fxaccounts.enabled", false);      // disable firefox sync (default)
user_pref("places.history.enabled", false);           // disables history entirely
user_pref("javascript.options.wasm", false);          // WebAssembly support. Completly disables WASM.
user_pref("layout.spellcheckDefault", 0);             // disables spell-check (default)
user_pref("media.navigator.enabled", false);          // blocks some peer-to-peer and remote access services (default)
user_pref("media.peerconnection.enabled", false);     // blocks some P2P and WebRTC (default)
user_pref("browser.translations.enable", false);      // disables auto translation. Just use something like TWPs (default)
user_pref("privacy.partition.network_state", true);   // isolates network state per site, boosts cookie protection (default)
user_pref("network.http.referer.spoofSource", true);  // fakes referrer to target URL, cuts data leaks
user_pref("beacon.enabled", false);                   // stops Beacon API, blocks sneaky background tracking (default)
user_pref("browser.send_pings", false);               // blocks ping tracking for clicks, keeps things private (default)
user_pref("privacy.clearOnShutdown.cache", true);     // wipes cache on close, less data hanging around (default)





// disables some general stuff that can be used for fingerprinting:
user_pref("javascript.options.ion", false);          // javascript "hardening" (deprecated)
user_pref("javascript.options.asmjs", false);        // javascript "hardening" (deprecated)
user_pref("javascript.options.baselinejit", false);  // basically acceleration. JIT is a big security problem and the speed is not worth it.
user_pref("dom.webaudio.enabled",false);             // old api used for fingerprinting (default)



// disables autofill/passwords:
user_pref("browser.urlbar.autoFill", false);                      // disables some autofill (deprecated)
user_pref("browser.formautofill.enabled", false);                 // disables some autofill (default)
user_pref("signon.rememberSignons", false);                       // disable saving passwords in browser (default)
user_pref("signon.management.page.breach-alerts.enabled",false);  // disables warning for breached sites that you have passwords in. Use https://bitwarden.com/ (default)


// disables safebrowsing:
user_pref("browser.safebrowsing.downloads.remote.enabled", false);  // disabled safebrowsing (default)
user_pref("browser.safebrowsing.phishing.enabled", false);          // disables phising safebrowsing (default)
user_pref("browser.safebrowsing.malware.enabled", false);           // disables malware safebrowsing (default)


// disables sensitive permissions:
user_pref("permissions.default.microphone", 2);            // disables microphone permission (default)
user_pref("permissions.default.desktop-notification", 2);  // disables notifications permission (default)
user_pref("permissions.default.geo", 2);                   // disables location access (default)
user_pref("geo.enabled", false);                           // fully disable location access (default)
user_pref("dom.webnotifications.enabled", false);          // disables any firefox notifications (default)


// disable recommendation/suggestions:
user_pref("browser.urlbar.suggest.history", false);               // disables suggestions from history (default)
user_pref("browser.urlbar.suggest.openpage", false);              // disables suggestions (default)
user_pref("browser.urlbar.suggest.topsites", false);              // disables top site suggestions (default)
user_pref("extensions.getAddons.discovery.api_url", "");          // disables some addon recommendations (default)
user_pref("extensions.htmlaboutaddons.discover.enabled", false);  // disables some more addon recommendations (default)
user_pref("browser.vpn_promo.enabled", false);                    // disables vpn promo (default)




// --Section 2: Re-enabled and enabled features--
user_pref("keyword.enabled", true);             // search from the urlbar
user_pref("browser.newtabpage.enabled", true);  // enabled non-empty ntp-s
user_pref("cookiebanners.service.mode", 2)      // enables Cookie banner


// disable URL bar suggestions:
user_pref("browser.search.suggest.enabled", true);   // enables search suggestions
user_pref("browser.urlbar.suggest.searches", true);  // enables search suggestions in the url-bar


// WebGL is the javascript bindings for OpenGL in browsers, if youd like to run games on your browser keep this enabled. Otherwise you may disable it by setting "false" to "true"
user_pref("webgl.disabled", true); // disables WebGL (default)


// customizable download directories and so:
user_pref("browser.download.dir", "C:\Users\%USERNAME%\Downloads");  // download Directory. Alternitively use a download manager like AB Download Manager, or even jdownloader2
user_pref("browser.download.useDownloadDir", true);                  // always download files to the System Download Directory (default)


// homepage
user_pref("browser.startup.page", 1);                // browser starts on the Homepage (default)
user_pref("browser.startup.homepage", "about:home"); // sets homepage


// these cause boxes around your window! turn this off if you don't like them!!!:
// user_pref("privacy.resistFingerprinting", true);               // spoofs size
// user_pref("privacy.resistFingerprinting.letterboxing", true);  // spoofs size




// --Section 3: No specific section--
user_pref("privacy.spoof_english", 2);                             // spoofs english by default
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);  // shows pointer whilst typing
user_pref("browser.compactmode.show", true);                       // re-enables compact mode


// DNS: You may change to what ever you want :3:
user_pref("network.trr.mode", 2);                                       // DNS over HTTPS (default)
user_pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query"); // forces custom DNS
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");        // custom DNS
