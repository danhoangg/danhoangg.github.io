window.onload = function() {
    for(i=0;i<=100;i++){
        let tempWord;
        setInterval(() => {
            tempWord = `${makeid(3)} ${makeid(5)}`;
            document.getElementById("title").innerHTML = tempWord;
        }, 50);
    }
};

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}