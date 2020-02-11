$(document).ready(function () {
    class Translate{
        constructor(){
            this.String=[];
        }
        Encrypt(string){
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
    $("#Encrypted").keydown(function () {
        $("#Decrypted").val("");
    });
    $("#Decrypted").keydown(function () {
        $("#Encrypted").val("");
    });
    $("#Encrypt").click(function () {
        var Encrypt = $("#Encrypted").val();
        var Decrypted = translate.Encrypt(Encrypt);
        $("#Decrypted").val(Decrypted);
    });
    $("#Decrypt").click(function () {
        var Decrypt = $("#Decrypted").val();
        var Encrypted=translate.Decrypt(Decrypt);
        $("#Encrypted").val(Encrypted);
    });
});