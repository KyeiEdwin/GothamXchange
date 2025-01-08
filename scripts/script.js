function updateSecondSelect(value) {
    var secondSelect = document.getElementById('secondSelect');
    // 清空第二个select的options
    secondSelect.options.length = 0;
    // 根据第一个select的value值，设置第二个select的options
     
    if (value === 'category1') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - USD - 4847/4513/4111 - 500 - ASK ！", "0");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - USD - 4847/4513/4111 - 300~499 - ASK ！", "0");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanllia - USD - 4847/4513/4111 - 100~299 - ASK ！", "0");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanllia - USD - 4097/4118 - 500", "530");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - CAD - 4086/4282/5338/5339 - 100~500 - ASK !", "0");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - CAD - 4263/4850/5203/53328 - 100~500", "960");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - CAD - 5171/5219 - 50~500 - ASK !", "0");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - CAD - 5336/511340 - 100~500 - ASK！", "");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - USD - 5253/5456/5164/5432 - 100~500 - AKS !", "0");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - USD - 4097/4118 100~199", "530");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - USD - 4097/4118 200~299", "530");
        
      secondSelect.options[secondSelect.options.length] = new Option("Vanilla - USD - 4097/4118 300-499", "530");
      
    }
    
    else if (value === 'category2') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Google Play - USD - America/United States", "1080");
        
      secondSelect.options[secondSelect.options.length] = new Option("Google Play - EUR - European Union", "910");
        
      secondSelect.options[secondSelect.options.length] = new Option("Google Play - UK - Britain/England", "910");
        
      secondSelect.options[secondSelect.options.length] = new Option("Google Play - CHF - Switzerland", "720");
        
      secondSelect.options[secondSelect.options.length] = new Option("Google Play - AUD - Australia", "480");
        
      secondSelect.options[secondSelect.options.length] = new Option("Google Play - CAD - Canada", "530");
      
    }
    
    else if (value === 'category3') {
        
      secondSelect.options[secondSelect.options.length] = new Option("eBay - USD - 25~99", "1000");
        
      secondSelect.options[secondSelect.options.length] = new Option("eBay - USD - 100~200", "1150");
        
      secondSelect.options[secondSelect.options.length] = new Option("eBay - USD - 200~500-ASK！", "0");
      
    }
    
    else if (value === 'category4') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Amazon - USD - Pic - 25~100", "620");
        
      secondSelect.options[secondSelect.options.length] = new Option("Amazon - USD - Code - 25~500", "550");
        
      secondSelect.options[secondSelect.options.length] = new Option("Amazon - USD - Pic/Code -100+（Ask！！）", "0");
        
      secondSelect.options[secondSelect.options.length] = new Option("Amazon - Any other country（Ask！！）", "0");
      
    }
    
    else if (value === 'category5') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Steam - USD - America/United States", "1200");
        
      secondSelect.options[secondSelect.options.length] = new Option("Steam - EUR - European Union", "1300");
        
      secondSelect.options[secondSelect.options.length] = new Option("Steam - UK - Britain/England", "1570");
        
      secondSelect.options[secondSelect.options.length] = new Option("Steam - CAD - Canada", "860");
        
      secondSelect.options[secondSelect.options.length] = new Option("Steam - AUD - Australia", "800");
        
      secondSelect.options[secondSelect.options.length] = new Option("Steam - NZD - New Zealand", "720");
        
      secondSelect.options[secondSelect.options.length] = new Option("Steam - CHF - Switzerland", "1390");
      
    }
    
    else if (value === 'category6') {
        
      secondSelect.options[secondSelect.options.length] = new Option("iTunes - USD - Fast - 100/150", "1190");
        
      secondSelect.options[secondSelect.options.length] = new Option("iTunes - USD - Fast - 200~500（Multiple of 50）", "1210");
        
      secondSelect.options[secondSelect.options.length] = new Option("iTunes - USD - Fast - 10~499（Any value）", "1150");
        
      secondSelect.options[secondSelect.options.length] = new Option("iTunes - CAD - Fast - 25~500（Any value）", "840");
        
      secondSelect.options[secondSelect.options.length] = new Option("iTunes - UK - Fast - 25~499（Any value）", "1200");
        
      secondSelect.options[secondSelect.options.length] = new Option("iTunes - UK - Fast - 50~500（Multiple of 50）", "1200");
        
      secondSelect.options[secondSelect.options.length] = new Option("iTunes - AUD - Fast - 25~499（Any value）", "730");
        
      secondSelect.options[secondSelect.options.length] = new Option("iTunes - AUD - Fast - 50~500（Multiple of 50）", "750");
      
    }
    
    else if (value === 'category7') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Foot Locker - USD - 100~500", "1250");
      
    }
    
    else if (value === 'category8') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Razer Gold - SGP - Singapore", "915");
        
      secondSelect.options[secondSelect.options.length] = new Option("Razer Gold - NZD - New Zealand", "735");
        
      secondSelect.options[secondSelect.options.length] = new Option("Razer Gold - CAD - Canada", "860");
        
      secondSelect.options[secondSelect.options.length] = new Option("Razer Gold - EUR - European Union - ASK ！", "");
        
      secondSelect.options[secondSelect.options.length] = new Option("Razer Gold - RM - Malaysia", "300");
        
      secondSelect.options[secondSelect.options.length] = new Option("Razer Gold - USD - 10~500", "1250");
      
    }
    
    else if (value === 'category9') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Sephora - USD - 50~99", "1000");
        
      secondSelect.options[secondSelect.options.length] = new Option("Sephora - USD - 100~500", "1200");
      
    }
    
    else if (value === 'category10') {
        
      secondSelect.options[secondSelect.options.length] = new Option("American Express - USD - 3779 - 50~99", "720");
        
      secondSelect.options[secondSelect.options.length] = new Option("American Express - USD - 3779 - 100~299", "770");
        
      secondSelect.options[secondSelect.options.length] = new Option("American Express - USD - 3779 - 300~499", "770");
        
      secondSelect.options[secondSelect.options.length] = new Option("American Express - USD - 3779 - 500", "770");
      
    }
    
    else if (value === 'category11') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Nike - USD - 100~500", "1130");
      
    }
    
    else if (value === 'category12') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Nordstrom - USD - 100~500", "1040");
      
    }
    
    else if (value === 'category13') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Xbox - CHF - Switzerland", "1050");
        
      secondSelect.options[secondSelect.options.length] = new Option("Xbox - SGP - Singapore", "630");
        
      secondSelect.options[secondSelect.options.length] = new Option("Xbox- NZD - New Zealand", "480");
        
      secondSelect.options[secondSelect.options.length] = new Option("Xbox - AUD - Australia", "570");
        
      secondSelect.options[secondSelect.options.length] = new Option("Xbox - CAD - Canada", "650");
        
      secondSelect.options[secondSelect.options.length] = new Option("Xbox - UK - Britain/England", "1150");
        
      secondSelect.options[secondSelect.options.length] = new Option("Xbox - EUR - European Union", "1000");
        
      secondSelect.options[secondSelect.options.length] = new Option("Xbox - USD - America/United States", "1030");
      
    }
    
    else if (value === 'category14') {
        
      secondSelect.options[secondSelect.options.length] = new Option("CashApp - USD - 10+", "1300");
        
      secondSelect.options[secondSelect.options.length] = new Option("CashApp - USD - 20~99", "1350");
      
    }
    
    else if (value === 'category15') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Chime - USD - 20~99", "1400");
        
      secondSelect.options[secondSelect.options.length] = new Option("Chime - USD - 100~3000", "1450");
      
    }
    
    else if (value === 'category16') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Zelle - USD - 10+", "800");
        
      secondSelect.options[secondSelect.options.length] = new Option("Zelle - USD - 100+", "950");
      
    }
    
    else if (value === 'category17') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Greendot gift card - 4143/4497 - 20~99 - ASK ！", "0");
        
      secondSelect.options[secondSelect.options.length] = new Option("Greendot gift card - 4143/4497 - 300~500", "1250");
        
      secondSelect.options[secondSelect.options.length] = new Option("Greendot gift card - 4143/4497 - 200~299", "1200");
        
      secondSelect.options[secondSelect.options.length] = new Option("Greendot gift card - 4143/4497 - 100~199", "1150");
        
      secondSelect.options[secondSelect.options.length] = new Option("Green dot - USD - Transfer 400-500", "1000");
      
    }
    
    else if (value === 'category18') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Macy's - USD - 50-99", "1000");
        
      secondSelect.options[secondSelect.options.length] = new Option("Macy's - USD - 100~300", "1200");
      
    }
    
    else if (value === 'category19') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Walmart money card - 4020/5181/4373/5273/4468 - 100~500", "1200");
        
      secondSelect.options[secondSelect.options.length] = new Option("Walmart gift card -USD -100~300", "930");
        
      secondSelect.options[secondSelect.options.length] = new Option("Walmart gift card -USD -20~99", "850");
        
      secondSelect.options[secondSelect.options.length] = new Option("Walmart - USD - Transfer 400~500", "1000");
      
    }
    
    else if (value === 'category20') {
        
      secondSelect.options[secondSelect.options.length] = new Option("VISA - 4358/4034/4912/511332 - 100~299", "1350");
        
      secondSelect.options[secondSelect.options.length] = new Option("VISA - 4358/4034/4912/511332 - 300~500", "1350");
      
    }
    
    else if (value === 'category21') {
        
      secondSelect.options[secondSelect.options.length] = new Option("PayPal - USD - Transfer 20+", "1300");
      
    }
    
    else if (value === 'category22') {
        
      secondSelect.options[secondSelect.options.length] = new Option("Venmo - USD - Transfer  20+", "600");
      
    }
    
  }
  



  
  var a_input = document.getElementById('numsl');
var a_value = document.getElementById('amount');

document.getElementById('secondSelect').addEventListener('change', function() {

var num_val = a_input.value;
var select=document.querySelector("#secondSelect");
var quantity = parseInt(select.value, 10);
var amount = quantity  * num_val;
document.getElementById('amount').textContent = amount;
});

a_input.addEventListener('input', function(event) {

var num_val = a_input.value;
var select=document.querySelector("#secondSelect");
var quantity = parseInt(select.value, 10);
var amount = quantity * num_val;
console.log('Input event fired!');
console.log('Current value:', event.target.value);
a_value.textContent = amount;

});