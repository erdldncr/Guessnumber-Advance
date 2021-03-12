let submitButton=document.querySelector('#submit-btn')
let input=document.querySelector('#number')
let tableBody= document.querySelector('tbody')


/////generate a randdom number
const randomNumberGenerator=()=>{
    let randomNumber=Math.floor((Math.random()*9000)+1000)
    if(new Set(Array.from(String(randomNumber),Number)).size==4){
        return randomNumber
    }else{
       return  randomNumberGenerator()
    }   

}

let number= randomNumberGenerator()///assign random number to a variable
submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(number)
    let inputValue =input.value
    ////random numberi arraye cevir
    let randomNumberArray=Array.from(String(number),Number)
    ///girilen sayi birbirinden farkli 4 sayi olsun ve girilen deger 4 haneden buyuk olmasin
    if(new Set(inputValue).size==4||inputValue.length==4){
        //randomsayi ile girilen sayidan basamaklari tutanlari ayir
        let indexCorrectNumbers=randomNumberArray.filter((item,index)=>item==Number([...inputValue][index]))
        //random sayida olan ama indexi farkli yani basamaklari farkli olanlari filtrele
        let correctNumbers=randomNumberArray.filter(item=>inputValue.includes(item.toString())&&(!indexCorrectNumbers.includes(item)))

        appendTable(indexCorrectNumbers,correctNumbers,inputValue)
        
        
    }else{
        alert('please, enter 4 different numbers')
    }



})

function appendTable(indexCorrectNumbers,correctNumbers,inputValue){
    ////tr element olustur
    let tr=document.createElement('tr')
    ///guess number'i koymak icin bir td olsutur
    let guess=document.createElement('td')
    ////gues number'i inner htmle yazdir
    guess.innerHTML=inputValue
    ////guess td yi appen et
    tr.appendChild(guess)
    ////result icin td olustur
    let result=document.createElement('td')
    //result inner html e dogru indexli sayi kadar + yanlis indexli sayi kadqr  - ekle
    result.innerHTML='+'.repeat(indexCorrectNumbers.length)+'-'.repeat(correctNumbers.length)
    //// resultu tr ye append et
    tr.appendChild(result)
    ///tr yi tbody e append et
    tableBody.appendChild(tr)

}