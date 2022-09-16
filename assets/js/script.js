document.getElementById("name-button").addEventListener("click", function () {
    let inputName = document.getElementById("username").value;
    let element = document.getElementById("quiz-outer");
    element.scrollIntoView();
    document.getElementById("name-display").innerHTML = `<h2>Go ${inputName}!</h2>`
})


//flags data 


// game function


function displayQuestion() {

}

function correctScore() {}

function incorrectScore() {}

const flagData = {
    flag: 0,
    pair: [{
            imgCode: "ad",
            country: "Andorra"
        },
        {
            imgCode: "ae",
            country: "United Arab Emirates"
        },
        {
            imgCode: "af",
            country: "Afghanistan"
        },
        {
            imgCode: "ag",
            country: "Antigua and Barbuda"
        },
        {
            imgCode: "ai",
            country: "Anguilla"
        },
        {
            imgCode: "al",
            country: "Albania"
        },
        {
            imgCode: "am",
            country: "Armenia"
        },
        {
            imgCode: "ao",
            country: "Angola"
        },
        {
            imgCode: "aq",
            country: "Antarctica"
        },
        {
            imgCode: "ar",
            country: "Argentina"
        },
        {
            imgCode: "as",
            country: "American Samoa"
        },
        {
            imgCode: "at",
            country: "Austria"
        },
        {
            imgCode: "au",
            country: "Australia"
        },
        {
            imgCode: "aw",
            country: "Aruba"
        },
        {
            imgCode: "ax",
            country: "Åland Islands"
        },
        {
            imgCode: "az",
            country: "Azerbaijan"
        },
        {
            imgCode: "ba",
            country: "Bosnia and Herzegovina"
        },
        {
            imgCode: "bb",
            country: "Barbados"
        },
        {
            imgCode: "bd",
            country: "Bangladesh"
        },
        {
            imgCode: "be",
            country: "Belgium"
        },
        {
            imgCode: "bf",
            country: "Burkina Faso"
        },
        {
            imgCode: "bg",
            country: "Bulgaria"
        },
        {
            imgCode: "bh",
            country: "Bahrain"
        },
        {
            imgCode: "bi",
            country: "Burundi"
        },
        {
            imgCode: "bj",
            country: "Benin"
        },
        {
            imgCode: "bl",
            country: "Saint Barthélemy"
        },
        {
            imgCode: "bm",
            country: "Bermuda"
        },
        {
            imgCode: "bn",
            country: "Brunei"
        },
        {
            imgCode: "bo",
            country: "Bolivia"
        },
        {
            imgCode: "bq",
            country: "Caribbean Netherlands"
        },
        {
            imgCode: "br",
            country: "Brazil"
        },
        {
            imgCode: "bs",
            country: "Bahamas"
        },
        {
            imgCode: "bt",
            country: "Bhutan"
        },
        {
            imgCode: "bv",
            country: "Bouvet Island"
        },
        {
            imgCode: "bw",
            country: "Botswana"
        },
        {
            imgCode: "by",
            country: "Belarus"
        },
        {
            imgCode: "bz",
            country: "Belize"
        },
        {
            imgCode: "ca",
            country: "Canada"
        },
        {
            imgCode: "cc",
            country: "Cocos (Keeling) Islands"
        },
        {
            imgCode: "cd",
            country: "DR Congo"
        },
        {
            imgCode: "cf",
            country: "Central African Republic"
        },
        {
            imgCode: "cg",
            country: "Republic of the Congo"
        },
        {
            imgCode: "ch",
            country: "Switzerland"
        },
        {
            imgCode: "ci",
            country: "Côte d'Ivoire (Ivory Coast)"
        },
        {
            imgCode: "ck",
            country: "Cook Islands"
        },
        {
            imgCode: "cl",
            country: "Chile"
        },
        {
            imgCode: "cm",
            country: "Cameroon"
        },
        {
            imgCode: "cn",
            country: "China"
        },
        {
            imgCode: "co",
            country: "Colombia"
        },
        {
            imgCode: "cr",
            country: "Costa Rica"
        },
        {
            imgCode: "cu",
            country: "Cuba"
        },
        {
            imgCode: "cv",
            country: "Cape Verde"
        },
        {
            imgCode: "cw",
            country: "Curaçao"
        },
        {
            imgCode: "cx",
            country: "Christmas Island"
        },
        {
            imgCode: "cy",
            country: "Cyprus"
        },
        {
            imgCode: "cz",
            country: "Czechia"
        },
        {
            imgCode: "de",
            country: "Germany"
        },
        {
            imgCode: "dj",
            country: "Djibouti"
        },
        {
            imgCode: "dk",
            country: "Denmark"
        },
        {
            imgCode: "dm",
            country: "Dominica"
        },
        {
            imgCode: "do",
            country: "Dominican Republic"
        },
        {
            imgCode: "dz",
            country: "Algeria"
        },
        {
            imgCode: "ec",
            country: "Ecuador"
        },
        {
            imgCode: "ee",
            country: "Estonia"
        },
        {
            imgCode: "eg",
            country: "Egypt"
        },
        {
            imgCode: "eh",
            country: "Western Sahara"
        },
        {
            imgCode: "er",
            country: "Eritrea"
        },
        {
            imgCode: "es",
            country: "Spain"
        },
        {
            imgCode: "et",
            country: "Ethiopia"
        },
        {
            imgCode: "eu",
            country: "European Union"
        },
        {
            imgCode: "fi",
            country: "Finland"
        },
        {
            imgCode: "fj",
            country: "Fiji"
        },
        {
            imgCode: "fk",
            country: "Falkland Islands"
        },
        {
            imgCode: "fm",
            country: "Micronesia"
        },
        {
            imgCode: "fo",
            country: "Faroe Islands"
        },
        {
            imgCode: "fr",
            country: "France"
        },
        {
            imgCode: "ga",
            country: "Gabon"
        },
        {
            imgCode: "gb",
            country: "United Kingdom"
        },
        {
            imgCode: "gb-eng",
            country: "England"
        },
        {
            imgCode: "gb-nir",
            country: "Northern Ireland"
        },
        {
            imgCode: "gb-sct",
            country: "Scotland"
        },
        {
            imgCode: "gb-wls",
            country: "Wales"
        },
        {
            imgCode: "gd",
            country: "Grenada"
        },
        {
            imgCode: "ge",
            country: "Georgia"
        },
        {
            imgCode: "gf",
            country: "French Guiana"
        },
        {
            imgCode: "gg",
            country: "Guernsey"
        },
        {
            imgCode: "gh",
            country: "Ghana"
        },
        {
            imgCode: "gi",
            country: "Gibraltar"
        },
        {
            imgCode: "gl",
            country: "Greenland"
        },
        {
            imgCode: "gm",
            country: "Gambia"
        },
        {
            imgCode: "gn",
            country: "Guinea"
        },
        {
            imgCode: "gp",
            country: "Guadeloupe"
        },
        {
            imgCode: "gq",
            country: "Equatorial Guinea"
        },
        {
            imgCode: "gr",
            country: "Greece"
        },
        {
            imgCode: "gs",
            country: "South Georgia"
        },
        {
            imgCode: "gt",
            country: "Guatemala"
        },
        {
            imgCode: "gu",
            country: "Guam"
        },
        {
            imgCode: "gw",
            country: "Guinea-Bissau"
        },
        {
            imgCode: "gy",
            country: "Guyana"
        },
        {
            imgCode: "hk",
            country: "Hong Kong"
        },
        {
            imgCode: "hm",
            country: "Heard Island and McDonald Islands"
        },
        {
            imgCode: "hn",
            country: "Honduras"
        },
        {
            imgCode: "hr",
            country: "Croatia"
        },
        {
            imgCode: "ht",
            country: "Haiti"
        },
        {
            imgCode: "hu",
            country: "Hungary"
        },
        {
            imgCode: "id",
            country: "Indonesia"
        },
        {
            imgCode: "ie",
            country: "Ireland"
        },
        {
            imgCode: "il",
            country: "Israel"
        },
        {
            imgCode: "im",
            country: "Isle of Man"
        },
        {
            imgCode: "in",
            country: "India"
        },
        {
            imgCode: "io",
            country: "British Indian Ocean Territory"
        },
        {
            imgCode: "iq",
            country: "Iraq"
        },
        {
            imgCode: "ir",
            country: "Iran"
        },
        {
            imgCode: "is",
            country: "Iceland"
        },
        {
            imgCode: "it",
            country: "Italy"
        },
        {
            imgCode: "je",
            country: "Jersey"
        },
        {
            imgCode: "jm",
            country: "Jamaica"
        },
        {
            imgCode: "jo",
            country: "Jordan"
        },
        {
            imgCode: "jp",
            country: "Japan"
        },
        {
            imgCode: "ke",
            country: "Kenya"
        },
        {
            imgCode: "kg",
            country: "Kyrgyzstan"
        },
        {
            imgCode: "kh",
            country: "Cambodia"
        },
        {
            imgCode: "ki",
            country: "Kiribati"
        },
        {
            imgCode: "km",
            country: "Comoros"
        },
        {
            imgCode: "kn",
            country: "Saint Kitts and Nevis"
        },
        {
            imgCode: "kp",
            country: "North Korea"
        },
        {
            imgCode: "kr",
            country: "South Korea"
        },
        {
            imgCode: "kw",
            country: "Kuwait"
        },
        {
            imgCode: "ky",
            country: "Cayman Islands"
        },
        {
            imgCode: "kz",
            country: "Kazakhstan"
        },
        {
            imgCode: "la",
            country: "Laos"
        },
        {
            imgCode: "lb",
            country: "Lebanon"
        },
        {
            imgCode: "lc",
            country: "Saint Lucia"
        },
        {
            imgCode: "li",
            country: "Liechtenstein"
        },
        {
            imgCode: "lk",
            country: "Sri Lanka"
        },
        {
            imgCode: "lr",
            country: "Liberia"
        },
        {
            imgCode: "ls",
            country: "Lesotho"
        },
        {
            imgCode: "lt",
            country: "Lithuania"
        },
        {
            imgCode: "lu",
            country: "Luxembourg"
        },
        {
            imgCode: "lv",
            country: "Latvia"
        },
        {
            imgCode: "ly",
            country: "Libya"
        },
        {
            imgCode: "ma",
            country: "Morocco"
        },
        {
            imgCode: "mc",
            country: "Monaco"
        },
        {
            imgCode: "md",
            country: "Moldova"
        },
        {
            imgCode: "me",
            country: "Montenegro"
        },
        {
            imgCode: "mf",
            country: "Saint Martin"
        },
        {
            imgCode: "mg",
            country: "Madagascar"
        },
        {
            imgCode: "mh",
            country: "Marshall Islands"
        },
        {
            imgCode: "mk",
            country: "North Macedonia"
        },
        {
            imgCode: "ml",
            country: "Mali"
        },
        {
            imgCode: "mm",
            country: "Myanmar"
        },
        {
            imgCode: "mn",
            country: "Mongolia"
        },
        {
            imgCode: "mo",
            country: "Macau"
        },
        {
            imgCode: "mp",
            country: "Northern Mariana Islands"
        },
        {
            imgCode: "mq",
            country: "Martinique"
        },
        {
            imgCode: "mr",
            country: "Mauritania"
        },
        {
            imgCode: "ms",
            country: "Montserrat"
        },
        {
            imgCode: "mt",
            country: "Malta"
        },
        {
            imgCode: "mu",
            country: "Mauritius"
        },
        {
            imgCode: "mv",
            country: "Maldives"
        },
        {
            imgCode: "mw",
            country: "Malawi"
        },
        {
            imgCode: "mx",
            country: "Mexico"
        },
        {
            imgCode: "my",
            country: "Malaysia"
        },
        {
            imgCode: "mz",
            country: "Mozambique"
        },
        {
            imgCode: "na",
            country: "Namibia"
        },
        {
            imgCode: "nc",
            country: "New Caledonia"
        },
        {
            imgCode: "ne",
            country: "Niger"
        },
        {
            imgCode: "nf",
            country: "Norfolk Island"
        },
        {
            imgCode: "ng",
            country: "Nigeria"
        },
        {
            imgCode: "ni",
            country: "Nicaragua"
        },
        {
            imgCode: "nl",
            country: "Netherlands"
        },
        {
            imgCode: "no",
            country: "Norway"
        },
        {
            imgCode: "np",
            country: "Nepal"
        },
        {
            imgCode: "nr",
            country: "Nauru"
        },
        {
            imgCode: "nu",
            country: "Niue"
        },
        {
            imgCode: "nz",
            country: "New Zealand"
        },
        {
            imgCode: "om",
            country: "Oman"
        },
        {
            imgCode: "pa",
            country: "Panama"
        },
        {
            imgCode: "pe",
            country: "Peru"
        },
        {
            imgCode: "pf",
            country: "French Polynesia"
        },
        {
            imgCode: "pg",
            country: "Papua New Guinea"
        },
        {
            imgCode: "ph",
            country: "Philippines"
        },
        {
            imgCode: "pk",
            country: "Pakistan"
        },
        {
            imgCode: "pl",
            country: "Poland"
        },
        {
            imgCode: "pm",
            country: "Saint Pierre and Miquelon"
        },
        {
            imgCode: "pn",
            country: "Pitcairn Islands"
        },
        {
            imgCode: "pr",
            country: "Puerto Rico"
        },
        {
            imgCode: "ps",
            country: "Palestine"
        },
        {
            imgCode: "pt",
            country: "Portugal"
        },
        {
            imgCode: "pw",
            country: "Palau"
        },
        {
            imgCode: "py",
            country: "Paraguay"
        },
        {
            imgCode: "qa",
            country: "Qatar"
        },
        {
            imgCode: "re",
            country: "Réunion"
        },
        {
            imgCode: "ro",
            country: "Romania"
        },
        {
            imgCode: "rs",
            country: "Serbia"
        },
        {
            imgCode: "ru",
            country: "Russia"
        },
        {
            imgCode: "rw",
            country: "Rwanda"
        },
        {
            imgCode: "sa",
            country: "Saudi Arabia"
        },
        {
            imgCode: "sb",
            country: "Solomon Islands"
        },
        {
            imgCode: "sc",
            country: "Seychelles"
        },
        {
            imgCode: "sd",
            country: "Sudan"
        },
        {
            imgCode: "se",
            country: "Sweden"
        },
        {
            imgCode: "sg",
            country: "Singapore"
        },
        {
            imgCode: "sh",
            country: "Saint Helena}, Ascension and Tristan da Cunha"
        },
        {
            imgCode: "si",
            country: "Slovenia"
        },
        {
            imgCode: "sj",
            country: "Svalbard and Jan Mayen"
        },
        {
            imgCode: "sk",
            country: "Slovakia"
        },
        {
            imgCode: "sl",
            country: "Sierra Leone"
        },
        {
            imgCode: "sm",
            country: "San Marino"
        },
        {
            imgCode: "sn",
            country: "Senegal"
        },
        {
            imgCode: "so",
            country: "Somalia"
        },
        {
            imgCode: "sr",
            country: "Suriname"
        },
        {
            imgCode: "ss",
            country: "South Sudan"
        },
        {
            imgCode: "st",
            country: "São Tomé and Príncipe"
        },
        {
            imgCode: "sv",
            country: "El Salvador"
        },
        {
            imgCode: "sx",
            country: "Sint Maarten"
        },
        {
            imgCode: "sy",
            country: "Syria"
        },
        {
            imgCode: "sz",
            country: "Eswatini (Swaziland)"
        },
        {
            imgCode: "tc",
            country: "Turks and Caicos Islands"
        },
        {
            imgCode: "td",
            country: "Chad"
        },
        {
            imgCode: "tf",
            country: "French Southern and Antarctic Lands"
        },
        {
            imgCode: "tg",
            country: "Togo"
        },
        {
            imgCode: "th",
            country: "Thailand"
        },
        {
            imgCode: "tj",
            country: "Tajikistan"
        },
        {
            imgCode: "tk",
            country: "Tokelau"
        },
        {
            imgCode: "tl",
            country: "Timor-Leste"
        },
        {
            imgCode: "tm",
            country: "Turkmenistan"
        },
        {
            imgCode: "tn",
            country: "Tunisia"
        },
        {
            imgCode: "to",
            country: "Tonga"
        },
        {
            imgCode: "tr",
            country: "Turkey"
        },
        {
            imgCode: "tt",
            country: "Trinidad and Tobago"
        },
        {
            imgCode: "tv",
            country: "Tuvalu"
        },
        {
            imgCode: "tw",
            country: "Taiwan"
        },
        {
            imgCode: "tz",
            country: "Tanzania"
        },
        {
            imgCode: "ua",
            country: "Ukraine"
        },
        {
            imgCode: "ug",
            country: "Uganda"
        },
        {
            imgCode: "um",
            country: "United States Minor Outlying Islands"
        },
        {
            imgCode: "un",
            country: "United Nations"
        },
        {
            imgCode: "us",
            country: "United States"
        },
        {
            imgCode: "us-ak",
            country: "Alaska"
        },
        {
            imgCode: "us-al",
            country: "Alabama"
        },
        {
            imgCode: "us-ar",
            country: "Arkansas"
        },
        {
            imgCode: "us-az",
            country: "Arizona"
        },
        {
            imgCode: "us-ca",
            country: "California"
        },
        {
            imgCode: "us-co",
            country: "Colorado"
        },
        {
            imgCode: "us-ct",
            country: "Connecticut"
        },
        {
            imgCode: "us-de",
            country: "Delaware"
        },
        {
            imgCode: "us-fl",
            country: "Florida"
        },
        {
            imgCode: "us-ga",
            country: "Georgia"
        },
        {
            imgCode: "us-hi",
            country: "Hawaii"
        },
        {
            imgCode: "us-ia",
            country: "Iowa"
        },
        {
            imgCode: "us-id",
            country: "Idaho"
        },
        {
            imgCode: "us-il",
            country: "Illinois"
        },
        {
            imgCode: "us-in",
            country: "Indiana"
        },
        {
            imgCode: "us-ks",
            country: "Kansas"
        },
        {
            imgCode: "us-ky",
            country: "Kentucky"
        },
        {
            imgCode: "us-la",
            country: "Louisiana"
        },
        {
            imgCode: "us-ma",
            country: "Massachusetts"
        },
        {
            imgCode: "us-md",
            country: "Maryland"
        },
        {
            imgCode: "us-me",
            country: "Maine"
        },
        {
            imgCode: "us-mi",
            country: "Michigan"
        },
        {
            imgCode: "us-mn",
            country: "Minnesota"
        },
        {
            imgCode: "us-mo",
            country: "Missouri"
        },
        {
            imgCode: "us-ms",
            country: "Mississippi"
        },
        {
            imgCode: "us-mt",
            country: "Montana"
        },
        {
            imgCode: "us-nc",
            country: "North Carolina"
        },
        {
            imgCode: "us-nd",
            country: "North Dakota"
        },
        {
            imgCode: "us-ne",
            country: "Nebraska"
        },
        {
            imgCode: "us-nh",
            country: "New Hampshire"
        },
        {
            imgCode: "us-nj",
            country: "New Jersey"
        },
        {
            imgCode: "us-nm",
            country: "New Mexico"
        },
        {
            imgCode: "us-nv",
            country: "Nevada"
        },
        {
            imgCode: "us-ny",
            country: "New York"
        },
        {
            imgCode: "us-oh",
            country: "Ohio"
        },
        {
            imgCode: "us-ok",
            country: "Oklahoma"
        },
        {
            imgCode: "us-or",
            country: "Oregon"
        },
        {
            imgCode: "us-pa",
            country: "Pennsylvania"
        },
        {
            imgCode: "us-ri",
            country: "Rhode Island"
        },
        {
            imgCode: "us-sc",
            country: "South Carolina"
        },
        {
            imgCode: "us-sd",
            country: "South Dakota"
        },
        {
            imgCode: "us-tn",
            country: "Tennessee"
        },
        {
            imgCode: "us-tx",
            country: "Texas"
        },
        {
            imgCode: "us-ut",
            country: "Utah"
        },
        {
            imgCode: "us-va",
            country: "Virginia"
        },
        {
            imgCode: "us-vt",
            country: "Vermont"
        },
        {
            imgCode: "us-wa",
            country: "Washington"
        },
        {
            imgCode: "us-wi",
            country: "Wisconsin"
        },
        {
            imgCode: "us-wv",
            country: "West Virginia"
        },
        {
            imgCode: "us-wy",
            country: "Wyoming"
        },
        {
            imgCode: "uy",
            country: "Uruguay"
        },
        {
            imgCode: "uz",
            country: "Uzbekistan"
        },
        {
            imgCode: "va",
            country: "Vatican City (Holy See)"
        },
        {
            imgCode: "vc",
            country: "Saint Vincent and the Grenadines"
        },
        {
            imgCode: "ve",
            country: "Venezuela"
        },
        {
            imgCode: "vg",
            country: "British Virgin Islands"
        },
        {
            imgCode: "vi",
            country: "United States Virgin Islands"
        },
        {
            imgCode: "vn",
            country: "Vietnam"
        },
        {
            imgCode: "vu",
            country: "Vanuatu"
        },
        {
            imgCode: "wf",
            country: "Wallis and Futuna"
        },
        {
            imgCode: "ws",
            country: "Samoa"
        },
        {
            imgCode: "xk",
            country: "Kosovo"
        },
        {
            imgCode: "ye",
            country: "Yemen"
        },
        {
            imgCode: "yt",
            country: "Mayotte"
        },
        {
            imgCode: "za",
            country: "South Africa"
        },
        {
            imgCode: "zm",
            country: "Zambia"
        },
        {
            imgCode: "zw",
            country: "Zimbabwe"
        }
    ]
};


function startQuiz() {
    flagData.flag = Math.floor(Math.random() * flagData.pair.length);
    document.getElementById("flag-image").src = "https://flagcdn.com/w640/" + flagData.pair[flagData.flag].imgCode + ".png";
    document.getElementById("correct-answer").textContent = flagData.pair[flagData.flag].country;
}
startQuiz();

function userAnswer() {


    let inputAnswer = document.getElementById("user-answer").value.toLowerCase();

    if (inputAnswer == flagData.pair[flagData.flag].country.toLowerCase()) {
        alert("correct");

    } else {
        alert("incorrect");
    }
}

let submitButton = document.getElementById("submit-button");