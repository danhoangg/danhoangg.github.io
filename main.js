window.onload = function() {
    let i = 0;
    let tempWord = `${makeid(3)} ${makeid(5)}`;
    var randTitle = setInterval(() => {
        i++;
        if (i > 90 ) {
            tempWord = 'Dan Hoang';
            clearInterval(randTitle);
        } else if (i > 75) {
            tempWord = `Dan Hoan${makeid(1)}`;
        } else if (i > 70) {
            tempWord = `Dan Hoa${makeid(2)}`;
        } else if (i > 65) {
            tempWord = `Dan Ho${makeid(3)}`;
        } else if (i > 60) {
            tempWord = `Dan H${makeid(4)}`;
        } else if (i > 50) {
            tempWord = `Dan ${makeid(5)}`;
        } else if (i > 45) {
            tempWord = `Da${makeid(1)} ${makeid(5)}`;
        } else if (i > 40) {
            tempWord = `D${makeid(2)} ${makeid(5)}`;
        } else {
            tempWord = `${makeid(3)} ${makeid(5)}`;
        }
        document.getElementById("title").innerHTML = tempWord;
    }, 50);
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