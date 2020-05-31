$(document).ready(function () {
    class Translate{
        constructor(){
            this.String=[];
        }
        Encrypt(string){//Encrypting the string
            var str=string;
            var newstr="";
            for(var i=0;i<string.length;i++){
                var n=str.charCodeAt(i);//Determining the Ascii value at all the index
                if((n>=65 && n<=90)){// If it is Capital Letter
                    var res=String.fromCharCode(155-n);//Take the ascii value from the last
                    newstr=newstr.concat(res);
                }
                else if((n>=97 && n<=122)){//If it is Small letter
                    var res=String.fromCharCode(219-n);//take the ascii value from the last
                    newstr=newstr.concat(res);//concat through the loop to the get the resulting string
                }
                else{
                    newstr=newstr.concat(str[i]);//  if it not a Alphabetical Character then simply concat in resulting string
                }
            }
            return newstr;
        }
        //Decryption is same as the that of Encryption
        Decrypt(string){
            var str=string;
            var newstr="";
            for(var i=0;i<string.length;i++){
                var n=str.charCodeAt(i);
                if((n>=65 && n<=90)){
                    var res=String.fromCharCode(155-n);
                    newstr=newstr.concat(res);
                }
                else if((n>=97 && n<=122)){
                    var res=String.fromCharCode(219-n);
                    newstr=newstr.concat(res);
                }
                else{
                    newstr=newstr.concat(str[i]);
                }
            }
            return newstr;
        }
    }
    var translate=new Translate();
    $("#p_t1").keydown(function () {
        $("#c_t1").val("");
    });
    $("#c_t1").keydown(function () {
        $("#p_t1").val("");
    });
    $("#encrypt1").click(function () {
        var Encrypt = $("#p_t1").val();//get the input value to Encrypt
        var Encrypted = translate.Encrypt(Encrypt);//get the Encrypted value
        $("#c_t1").val(Encrypted);//return the Encrypted text
    });
    $("#decrypt1").click(function () {
        var Decrypt = $("#c_t1").val();//get the input value to Decrypt
        var Decrypted=translate.Decrypt(Decrypt);//get the Decrypted value
        $("#p_t1").val(Decrypted);//return the Decrypted Text
    });
});