let randomCode=['credit-cartel/b15','credit-cartel/za2','credit-cartel/5la',
'credit-cartel/rf1','credit-cartel/h55','credit-cartel/y89','credit-cartel/w52',
'credit-cartel/x24'
,'credit-cartel/q32','credit-cartel/u69','credit-cartel/n67','credit-cartel/m98',
'credit-cartel/c20','credit-cartel/d44','credit-cartel/j80','credit-cartel/t11',
'credit-cartel/v07','credit-cartel/r37','credit-cartel/i26','credit-cartel/f19',
'MILLIONDOLLARCLOSER','AMANDAK22','AMNAF22','JJAMES22',
'NICKPERRYREI','ELENAV22','GALINDOS22','REHABKING',
'WILLNYG22','DEREKT22','KYLERK22','EASYP22','SYNSYN22',
'DPRICE22','LILD','CCRENTERPRISE','THATCASUALKID','FABIAN2022','JBRANDON22','MOE2022','MOEMONEY','PEUGH22','JJACKSON22','CLTBuyers22'];

const referralInput=document.querySelector('.referral');


const invalidInput=document.querySelector('.invalid');
const scriptURL = 'https://script.google.com/macros/s/AKfycbyVLkM-XztLihYZm3CnX3D4ZImJ98E5r4e9OpqGKZrOYXxHN8XRzs4P20KvyKwcjKWa/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
    e.preventDefault();
    if(randomCode.includes(referralInput.value)|| referralInput.value===""){
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response=>console.log('success',response)).catch(error=>console.log("error",error))
        document.forms['google-sheet'].reset()
        setTimeout(() => {
            window.location.href='./../thankyou-page/index.html'
        }, 1000);
    }
    else{
        invalidInput.innerHTML='invalid referral code';
  }
})
 /*referralInput.addEventListener('mouseup',function(){
     if(randomCode.includes(referralInput.value)|| referralInput.value===""){
         console.log(referralInput.value)
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response=>console.log('success',response)).catch(error=>console.log("error",error))
            document.forms['google-sheet'].reset()
            setTimeout(() => {
                window.location.href='./../thankyou-page/index.html'
            }, 1000);
        })
        
   }else{
         invalidInput.innerHTML='invalid referral code';
   }
 })*/