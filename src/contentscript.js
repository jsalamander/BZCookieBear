const api = "https://bz-cookie-eater.herokuapp.com/"
// https://github.com/OUDUIDUI/notice-kit
const notice = new Notice();

async function main() {
        if (!document.cookie.includes("cresid")) {
                notice.showLoading({
                        type: 'dots',
                        title: 'Baking Some Cookies For Free Access',
                        color: '#333',
                        backgroundColor: 'rgba(255,255,255,.6)',
                        fontSize: 14
                })
                try {
                        const response = await fetch(api)
                        const cookieData = await response.json()
                        if (cookieData.length > 0) {
                                cookieData.forEach(cookieObj => {
                                        Cookies.set(cookieObj.name, cookieObj.value, { 
                                                path: cookieObj.path,
                                                domain: cookieObj.domain,
                                                secure: cookieObj.secure,
                                                sameSite: cookieObj.sameSite
                                        })
                                })
                                notice.showToast({
                                        text: "Mhm ate cookie. Reloading page to log you in!",
                                        type: "success"
                                })
                                location.reload()
                        }

                } catch {
                        notice.showToast({
                                text: "Oh no snap, no cookies available, try again later",
                                type: "error"
                        })

                }
                notice.hideLoading()
        }

}
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
                                                                                
                                                                                
`)
main()
