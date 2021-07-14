<p align="center">
  <img height="300rem" src="https://raw.githubusercontent.com/jsalamander/BZCookieBear/main/assets/cookie_bear.png" alt="Cookie Bear"/>
</p>


![Chrome Web Store Release](https://github.com/jsalamander/BZCookieBear/actions/workflows/release.yml/badge.svg)
![Chrome Web Store Version](https://badgen.net/chrome-web-store/v/jbhjncaphhkhhdhcjdpdcnjpeplgbhah)
![Chrome Web Store Rating](https://badgen.net/chrome-web-store/rating/jbhjncaphhkhhdhcjdpdcnjpeplgbhah)
![Chrome Web Store Stars](https://badgen.net/chrome-web-store/stars/jbhjncaphhkhhdhcjdpdcnjpeplgbhah)
![GitHub](https://img.shields.io/github/license/jsalamander/BZCookieBear)

# BZCookieBear - Chrome / Firefox Extension
 Read Tamedia Abo Articles For Free
 
 [![Chrome Web Store](https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/mPGKYBIR2uCP0ApchDXE.png)](https://chrome.google.com/webstore/detail/cookiebear-gratis-bz-abo/jbhjncaphhkhhdhcjdpdcnjpeplgbhah?hl=de)
 [![Firefox Addons](https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/addons/files/2015/11/get-the-addon.png)](https://addons.mozilla.org/de/firefox/addon/cookiebear-gratis-bz-abo/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

 The supported pages are:
 
  * www.bernerzeitung.ch
  * www.24heures.ch
  * www.bazonline.ch
  * www.berneroberlaender.ch
  * www.tagesanzeiger.ch
  * www.derbund.ch
  * www.landbote.ch
  * www.langenthalertagblatt.ch
  * www.zsz.ch
  * www.thunertagblatt.ch
  * www.tdg.ch
  * www.zuonline.ch

 
 # Manual

 Install the extension from the links above.

 When you open any of the above listed pages, the addon will automatically log you in. This might take some time.
 If you installed the addon while having one of the above pages open in a tab, you might need to reload the page.

![Login Step](assets/tagi_example.png "Login Step")

After that you'll be able to read Abo articles and you can see that you are logged in as a random user.


![Logged In Step](assets/tagi_logged_in.png "Logged In Step")

If the random session is not valid anymore it will automatically fetch a new one.


# API
The extension communicates with [BZCookieBakery](https://github.com/jsalamander/BZCookieBakery) which delivers the cookies used to authenticate.
