const api = 'https://bz-cookie-eater.herokuapp.com/';
// https://github.com/OUDUIDUI/notice-kit
/* eslint-disable-next-line no-undef */
const notice = new Notice();

async function main() {
  // will fail if the httpOnly cresid is set
  if (!document.cookie.includes('cresid')) {
    notice.showLoading({
      type: 'dots',
      title: '🦄 Baking Some Cookies For Free Access. This might take a while. 🦚',
      color: '#0C042A',
      backgroundColor: 'rgba(222, 194, 173,.95)',
      fontSize: 14,
    });
    try {
      // logout to remove the httpOnly cresid cookie
      await fetch('https://www.bernerzeitung.ch/disco-api/v1/paywall/terminate-session', {
        body: '{}',
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      });
      const response = await fetch(api);
      if (!response.ok) {
        notice.showToast({
          text: '🍪 CookieBakery ran out of cookies - sorry',
          type: 'error',
        });
      } else {
        const cookieData = await response.json();
        if (cookieData.length > 0) {
          cookieData.forEach((cookieObj) => {
            /* eslint-disable-next-line no-undef */
            Cookies.set(cookieObj.name, cookieObj.value, {
              path: cookieObj.path,
              domain: cookieObj.domain,
              secure: cookieObj.secure,
              sameSite: cookieObj.sameSite,
            });
          });
          notice.showToast({
            text: 'Mhm 🍪. Reloading page to log you in!',
            type: 'success',
          });
          /* eslint-disable-next-line no-restricted-globals */
          location.reload();
        }
      }
    } catch {
      notice.showToast({
        text: '🤢 Oh no snap, no cookies available, try again later',
        type: 'error',
      });
    }
    notice.hideLoading();
  }
}
/* eslint-disable-next-line no-console */
console.log(`
                                                                                
                                                                                
                                                                                
                      *.***      .*             (//*///*                        
                    .//.., /*    ///*,*/*,     (*.     //*,                     
                    (/     ,,///////////////////*      ./*,                     
                    //*.  /////////////////////////* .*/**                      
                      (*#///////////////////////////**.                         
                       ,//////////////////////////////**                        
                       ( . /////////// *//////////////***                       
                       ////////////////////////////////**                       
                     *///&&&&&&&&&&&&&////////////////****                      
                    ,(/&(&& ... &&&&& &&//////////////**                        
                     .&& &&%..&&&&&& /// ///////////**                          
                    .#%. (((((%(((( /((((.(/ ////*, /                           
                    %%((((((((((((   (%%(((// ***/////                          
                   ##(** (((((* (((((((** /((//**/,////*                        
                //*. (((((((((* /((((((((((,//((////////*.                      
               /*//* ((((((((((((((,((((/,* *////////////**                     
               ////*.((((*,.*((((.../((((/,*/ ,/////////./**,                   
               //*/* ((((((((((((((((((( ,/ **//./////* *//**                   
                 /* (((((((((.../((((((((((//* *****..**////*                   
                    ,%((/((((((((((((( .///./(/////( * /////**                  
                    (/*  ##(((((((((// ** */////////////////***//(.             
                   /#//// / ***. *** #/&#%&/ */////////////** *///*             
                   %#//&// ********* (&#/&////,*//////////** ****,              
                   (/&&&///**********.//%&&&//,**///////***.                    
                    //&&//************ (//&&//,*********                        
                       */ .               ///                                   
                                                                                
                                                                                
`);
main();

// watch for url changes -> needed due to spa architecture
let lastUrl = location.href; 
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    main();
  }
}).observe(document, {subtree: true, childList: true});