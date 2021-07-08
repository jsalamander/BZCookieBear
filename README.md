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

 When you open https://www.bernerzeitung.ch it will automatically log you in. This might take some time.

![Login Step](assets/tagi_example.png "Login Step")

After that you'll be able to read Abo articles and you can see, that you are logged in as a random user.


![Logged In Step](assets/tagi_logged_in.png "Logged In Step")


# Firefox portability

To make it work as addon some changes in the `manifest.json` file are needed

Set the manifest version to `2`

```json
  "manifest_version": 3,
```

Add the permission key to allow cors request to the BZCookieBakery domain.

```json
 "permissions": [
    "https://bzcookie.fans/*"
  ],
```