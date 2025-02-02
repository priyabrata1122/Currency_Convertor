let home = document.querySelector(".Home");
home.addEventListener('click',function(){
    window.location.href = 'index.html';
})

const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };


// Code for appending the new options in both Select container
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");

for(currCode in countryList){
    let newoption = document.createElement("option");
    newoption.innerText = currCode;
    newoption.value = currCode;
    if(select1.name === "From" && currCode === "USD"){
        newoption.selected = "selected";
    }
    
    select1.append(newoption);
}

for(currCode in countryList){
    let newoption = document.createElement("option");
    newoption.innerText = currCode;
    newoption.value = currCode;
    if(select2.name === "To" && currCode === "INR"){
        newoption.selected = "selected";
    }
    
    select2.append(newoption);
}

const selectElement1 = document.querySelector("#select1");
const selectElement2 = document.querySelector("#select2");


// Code for the change of flag in the dropdown menu 
const updateFlag1=(selectedValue)=>{
    const countryCode = countryList[selectedValue];
    const flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let flag1 = document.querySelector("#flag1");
    flag1.src = flagUrl;
}

const updateFlag2=(selectedValue)=>{
    const countryCode = countryList[selectedValue];
    const flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let flag2 = document.querySelector("#flag2");
    flag2.src = flagUrl;
}

selectElement1.addEventListener('change',function(){
    const selectedValue = selectElement1.value;
    console.log(selectedValue);
    updateFlag1(selectedValue);
})

selectElement2.addEventListener('change',function(){
    const selectedValue = selectElement2.value;
    console.log(selectedValue);
    updateFlag2(selectedValue);
})

// code for getting the currency values and changing the output 

const element1=document.querySelector("#select1");
const element2=document.querySelector("#select2");
const outputBox=document.querySelector(".output_container h6");
let input_box=document.querySelector("#input_box");
let exchangeOutputBox=document.querySelector(".output");
let pushButton=document.querySelector("#finalSubmit");

pushButton.addEventListener('click',async()=>{
    console.log("button is clicked");
    const string1=element1.value;
    // console.log(typeof(string1));
    const string2=element2.value;
    // console.log(string2);
    let currCode = string1.toLowerCase();
    let currCode2 = string2.toLowerCase();
    console.log(currCode);
    console.log(currCode2);

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currCode}.json` ;
    let response = await fetch(url);
    let data = await response.json();

    let exchangeRate=data[currCode][currCode2];
    let multiple=input_box.value;
    let result=exchangeRate * multiple;
    console.log(result);
    console.log(exchangeRate);

    outputBox.innerText=result;
    exchangeOutputBox.innerText=`1 ${string1} : ${exchangeRate} ${string2}`;
})
