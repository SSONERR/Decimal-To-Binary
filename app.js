//Decimal to binary
let binary ="";
let rev = ""
let number=prompt("Lütfen 2'lik sayıya dönüştürmek istediğiniz sayıyı giriniz : ")
let sayin = number
convert()

function convert(sayi){
    
    while(true){
        binary+=(number%2).toString()
        number=Math.floor(number/2)
        if(number==1){
            binary+="1"
            break;
        }
    }for(let i = binary.length-1;0<=i;i--){
        rev+=binary.charAt(i)
    }
    alert(sayin+" = "+rev)
}

