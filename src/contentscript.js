const storageCredsKey = 'one_log_creds';

function storeCredentials(creds) {
  sessionStorage.setItem(storageCredsKey, JSON.stringify(creds));
}

function retrieveCredentials() {
  return JSON.parse(sessionStorage.getItem(storageCredsKey) || {});
}

function hasStoredCredentials() {
  return Object.keys(retrieveCredentials() || {}) > 1;
}

async function fetchOneLogCredentials() {
  try {
    const api = 'https://www.bzcookie.fans';
    const response = await fetch(api);
    const credentials = await response.json();

    if (!response.ok || Object.keys(credentials || {}).length < 2) {
      vNotify.error({ text: '🍪 CookieBakery ran out of cookies - sorry', title: 'Error' });
    } else {
      storeCredentials(credentials);
      vNotify.success({
        text: 'Mhm 🍪. Auto-Login running now!',
        title: 'Auto-Login',
      });
    }
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('CookieBearError', error);
    vNotify.warning({
      text: '🤢 Oh no snap, no credentials available, try again later',
      title: 'Sold out',
    });
  }
}

function enterEmail(email) {
  if (window.location.href.includes('welcome.onelog.ch') && !window.location.href.includes('/login?email')) {
    const checkExist = setInterval(() => {
      if ($('#email').length) {
        const event = new Event('input', { bubbles: true });
        document.getElementById('email').value = email;
        document.getElementById('email').dispatchEvent(event);
        document.getElementById('first-step-continue-btn').click();
        clearInterval(checkExist);
      }
    }, 100);
  }
}

function enterPassword(password) {
  if (window.location.href.includes('welcome.onelog.ch') && window.location.href.includes('/login?email')) {
    const checkExist = setInterval(() => {
      if ($('input[type=password]').length) {
        const event = new Event('input', { bubbles: true });
        document.querySelectorAll('input[type=password]')[0].value = password;
        document.querySelectorAll('input[type=password]')[0].dispatchEvent(event);
        document.getElementById('native-login-btn').click();
        clearInterval(checkExist);
      }
    }, 100);
  }
}

async function main() {
  if (window.location.href.includes('welcome.onelog.ch') && !window.location.href.includes('/login?email')) {
    vNotify.info({
      text: 'Fetch random credentials for login - please wait!',
      title: 'Credentials Fetch',
    });
    await fetchOneLogCredentials();
  }

  if (hasStoredCredentials) {
    const creds = retrieveCredentials();
    enterEmail(creds.email);
    enterPassword(creds.password);
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

window.addEventListener('load', async () => {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  main();
});

// watch for url changes -> needed due to spa architecture
/* eslint-disable-next-line no-restricted-globals */
let lastUrl = location.href;
new MutationObserver(async () => {
  /* eslint-disable-next-line no-restricted-globals */
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    // await new Promise(resolve => setTimeout(resolve, 2000));
    main();
  }
}).observe(document, { subtree: true, childList: true });
