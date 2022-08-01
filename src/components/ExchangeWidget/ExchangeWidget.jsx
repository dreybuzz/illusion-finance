import { useState, useEffect } from "react"
import useLocationData from "../../Hooks/useLocationData"
import "./ExchangeWidget.scss"
export default function ExchangeWidget() {
  const countriesData = [
    {
      country: "Afghanistan",
      alpha2Code: "AF",
      alpha3Code: "AFG",
      currency: "Afghani",
      currencyCode: "AFN",
    },
    {
      country: "Albania",
      alpha2Code: "AL",
      alpha3Code: "ALB",
      currency: "Lek",
      currencyCode: "ALL",
    },
    {
      country: "Algeria",
      alpha2Code: "DZ",
      alpha3Code: "DZA",
      currency: "Algerian Dinar",
      currencyCode: "DZD",
    },
    {
      country: "American Samoa",
      alpha2Code: "AS",
      alpha3Code: "ASM",
      currency: "US Dollar",
      currencyCode: "USD",
    },
    {
      country: "Andorra",
      alpha2Code: "AD",
      alpha3Code: "AND",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Angola",
      alpha2Code: "AO",
      alpha3Code: "AGO",
      currency: "Kwanza",
      currencyCode: "AOA",
    },
    {
      country: "Anguilla",
      alpha2Code: "AI",
      alpha3Code: "AIA",
      currency: "East Caribbean Dollar",
      currencyCode: "XCD",
    },
    {
      country: "Antarctica",
      alpha2Code: "AQ",
      alpha3Code: "ATA",
      currency: "No universal currency",
      currencyCode: "",
    },
    {
      country: "Antigua and Barbuda",
      alpha2Code: "AG",
      alpha3Code: "ATG",
      currency: "East Caribbean Dollar",
      currencyCode: "XCD",
    },
    {
      country: "Argentina",
      alpha2Code: "AR",
      alpha3Code: "ARG",
      currency: "Argentine Peso",
      currencyCode: "ARS",
    },
    {
      country: "Armenia",
      alpha2Code: "AM",
      alpha3Code: "ARM",
      currency: "Armenian Dram",
      currencyCode: "AMD",
    },
    {
      country: "Aruba",
      alpha2Code: "AW",
      alpha3Code: "ABW",
      currency: "Aruban Florin",
      currencyCode: "AWG",
    },
    {
      country: "Australia",
      alpha2Code: "AU",
      alpha3Code: "AUS",
      currency: "Australian Dollar",
      currencyCode: "AUD",
    },
    {
      country: "Austria",
      alpha2Code: "AT",
      alpha3Code: "AUT",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Azerbaijan",
      alpha2Code: "AZ",
      alpha3Code: "AZE",
      currency: "Azerbaijanian Manat",
      currencyCode: "AZN",
    },
    {
      country: "Bahamas (the)",
      alpha2Code: "BS",
      alpha3Code: "BHS",
      currency: "Bahamian Dollar",
      currencyCode: "BSD",
    },
    {
      country: "Bahrain",
      alpha2Code: "BH",
      alpha3Code: "BHR",
      currency: "Bahraini Dinar",
      currencyCode: "BHD",
    },
    {
      country: "Bangladesh",
      alpha2Code: "BD",
      alpha3Code: "BGD",
      currency: "Taka",
      currencyCode: "BDT",
    },
    {
      country: "Barbados",
      alpha2Code: "BB",
      alpha3Code: "BRB",
      currency: "Barbados Dollar",
      currencyCode: "BBD",
    },
    {
      country: "Belarus",
      alpha2Code: "BY",
      alpha3Code: "BLR",
      currency: "Belarussian Ruble",
      currencyCode: "BYN",
    },
    {
      country: "Belgium",
      alpha2Code: "BE",
      alpha3Code: "BEL",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Belize",
      alpha2Code: "BZ",
      alpha3Code: "BLZ",
      currency: "Belize Dollar",
      currencyCode: "BZD",
    },
    {
      country: "Benin",
      alpha2Code: "BJ",
      alpha3Code: "BEN",
      currency: "CFA Franc BCEAO",
      currencyCode: "XOF",
    },
    {
      country: "Bermuda",
      alpha2Code: "BM",
      alpha3Code: "BMU",
      currency: "Bermudian Dollar",
      currencyCode: "BMD",
    },
    {
      country: "Bhutan",
      alpha2Code: "BT",
      alpha3Code: "BTN",
      currency: "Ngultrum",
      currencyCode: "BTN",
    },
    {
      country: "Bolivia (Plurinational State of)",
      alpha2Code: "BO",
      alpha3Code: "BOL",
    },
    {
      country: "Bonaire, Sint Eustatius and Saba",
      alpha2Code: "BQ",
      alpha3Code: "BES",
    },
    {
      country: "Bosnia and Herzegovina",
      alpha2Code: "BA",
      alpha3Code: "BIH",
      currency: "Convertible Mark",
      currencyCode: "BAM",
    },
    {
      country: "Botswana",
      alpha2Code: "BW",
      alpha3Code: "BWA",
      currency: "Pula",
      currencyCode: "BWP",
    },
    {
      country: "Bouvet Island",
      alpha2Code: "BV",
      alpha3Code: "BVT",
      currency: "Norwegian Krone",
      currencyCode: "NOK",
    },
    {
      country: "Brazil",
      alpha2Code: "BR",
      alpha3Code: "BRA",
      currency: "Brazilian Real",
      currencyCode: "BRL",
    },
    {
      country: "British Indian Ocean Territory (the)",
      alpha2Code: "IO",
      alpha3Code: "IOT",
    },
    {
      country: "Brunei Darussalam",
      alpha2Code: "BN",
      alpha3Code: "BRN",
      currency: "Brunei Dollar",
      currencyCode: "BND",
    },
    {
      country: "Bulgaria",
      alpha2Code: "BG",
      alpha3Code: "BGR",
      currency: "Bulgarian Lev",
      currencyCode: "BGN",
    },
    {
      country: "Burkina Faso",
      alpha2Code: "BF",
      alpha3Code: "BFA",
      currency: "CFA Franc BCEAO",
      currencyCode: "XOF",
    },
    {
      country: "Burundi",
      alpha2Code: "BI",
      alpha3Code: "BDI",
      currency: "Burundi Franc",
      currencyCode: "BIF",
    },
    {
      country: "Cabo Verde",
      alpha2Code: "CV",
      alpha3Code: "CPV",
      currency: "Cabo Verde Escudo",
      currencyCode: "CVE",
    },
    {
      country: "Cambodia",
      alpha2Code: "KH",
      alpha3Code: "KHM",
      currency: "Riel",
      currencyCode: "KHR",
    },
    {
      country: "Cameroon",
      alpha2Code: "CM",
      alpha3Code: "CMR",
      currency: "CFA Franc BEAC",
      currencyCode: "XAF",
    },
    {
      country: "Canada",
      alpha2Code: "CA",
      alpha3Code: "CAN",
      currency: "Canadian Dollar",
      currencyCode: "CAD",
    },
    {
      country: "Cayman Islands (the)",
      alpha2Code: "KY",
      alpha3Code: "CYM",
      currency: "Cayman Islands Dollar",
      currencyCode: "KYD",
    },
    {
      country: "Central African Republic (the)",
      alpha2Code: "CF",
      alpha3Code: "CAF",
    },
    {
      country: "Chad",
      alpha2Code: "TD",
      alpha3Code: "TCD",
      currency: "CFA Franc BEAC",
      currencyCode: "XAF",
    },
    {
      country: "Chile",
      alpha2Code: "CL",
      alpha3Code: "CHL",
      currency: "Unidad de Fomento",
      currencyCode: "CLF",
    },
    {
      country: "China",
      alpha2Code: "CN",
      alpha3Code: "CHN",
      currency: "Yuan Renminbi",
      currencyCode: "CNY",
    },
    {
      country: "Christmas Island",
      alpha2Code: "CX",
      alpha3Code: "CXR",
      currency: "Australian Dollar",
      currencyCode: "AUD",
    },
    {
      country: "Cocos (Keeling) Islands (the)",
      alpha2Code: "CC",
      alpha3Code: "CCK",
      currency: "Australian Dollar",
      currencyCode: "AUD",
    },
    {
      country: "Colombia",
      alpha2Code: "CO",
      alpha3Code: "COL",
      currency: "Colombian Peso",
      currencyCode: "COP",
    },
    {
      country: "Comoros (the)",
      alpha2Code: "KM",
      alpha3Code: "COM",
      currency: "Comoro Franc",
      currencyCode: "KMF",
    },
    {
      country: "Congo (the Democratic Republic of the)",
      alpha2Code: "CD",
      alpha3Code: "COD",
    },
    {
      country: "Congo (the)",
      alpha2Code: "CG",
      alpha3Code: "COG",
      currency: "CFA Franc BEAC",
      currencyCode: "XAF",
    },
    {
      country: "Cook Islands (the)",
      alpha2Code: "CK",
      alpha3Code: "COK",
      currency: "New Zealand Dollar",
      currencyCode: "NZD",
    },
    {
      country: "Costa Rica",
      alpha2Code: "CR",
      alpha3Code: "CRI",
      currency: "Costa Rican Colon",
      currencyCode: "CRC",
    },
    {
      country: "Croatia",
      alpha2Code: "HR",
      alpha3Code: "HRV",
      currency: "Kuna",
      currencyCode: "HRK",
    },
    {
      country: "Cuba",
      alpha2Code: "CU",
      alpha3Code: "CUB",
      currency: "Peso Convertible",
      currencyCode: "CUC",
    },
    {
      country: "Curaçao",
      alpha2Code: "CW",
      alpha3Code: "CUW",
      currency: "Netherlands Antillean Guilder",
      currencyCode: "ANG",
    },
    {
      country: "Cyprus",
      alpha2Code: "CY",
      alpha3Code: "CYP",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Czechia",
      alpha2Code: "CZ",
      alpha3Code: "CZE",
    },
    {
      country: "Côte d'Ivoire",
      alpha2Code: "CI",
      alpha3Code: "CIV",
      currency: "CFA Franc BCEAO",
      currencyCode: "XOF",
    },
    {
      country: "Denmark",
      alpha2Code: "DK",
      alpha3Code: "DNK",
      currency: "Danish Krone",
      currencyCode: "DKK",
    },
    {
      country: "Djibouti",
      alpha2Code: "DJ",
      alpha3Code: "DJI",
      currency: "Djibouti Franc",
      currencyCode: "DJF",
    },
    {
      country: "Dominica",
      alpha2Code: "DM",
      alpha3Code: "DMA",
      currency: "East Caribbean Dollar",
      currencyCode: "XCD",
    },
    {
      country: "Dominican Republic (the)",
      alpha2Code: "DO",
      alpha3Code: "DOM",
      currency: "Dominican Peso",
      currencyCode: "DOP",
    },
    {
      country: "Ecuador",
      alpha2Code: "EC",
      alpha3Code: "ECU",
      currency: "US Dollar",
      currencyCode: "USD",
    },
    {
      country: "Egypt",
      alpha2Code: "EG",
      alpha3Code: "EGY",
      currency: "Egyptian Pound",
      currencyCode: "EGP",
    },
    {
      country: "El Salvador",
      alpha2Code: "SV",
      alpha3Code: "SLV",
      currency: "El Salvador Colon",
      currencyCode: "SVC",
    },
    {
      country: "Equatorial Guinea",
      alpha2Code: "GQ",
      alpha3Code: "GNQ",
      currency: "CFA Franc BEAC",
      currencyCode: "XAF",
    },
    {
      country: "Eritrea",
      alpha2Code: "ER",
      alpha3Code: "ERI",
      currency: "Nakfa",
      currencyCode: "ERN",
    },
    {
      country: "Estonia",
      alpha2Code: "EE",
      alpha3Code: "EST",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Eswatini",
      alpha2Code: "SZ",
      alpha3Code: "SWZ",
    },
    {
      country: "Ethiopia",
      alpha2Code: "ET",
      alpha3Code: "ETH",
      currency: "Ethiopian Birr",
      currencyCode: "ETB",
    },
    {
      country: "Falkland Islands (the) [Malvinas]",
      alpha2Code: "FK",
      alpha3Code: "FLK",
    },
    {
      country: "Faroe Islands (the)",
      alpha2Code: "FO",
      alpha3Code: "FRO",
      currency: "Danish Krone",
      currencyCode: "DKK",
    },
    {
      country: "Fiji",
      alpha2Code: "FJ",
      alpha3Code: "FJI",
      currency: "Fiji Dollar",
      currencyCode: "FJD",
    },
    {
      country: "Finland",
      alpha2Code: "FI",
      alpha3Code: "FIN",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "France",
      alpha2Code: "FR",
      alpha3Code: "FRA",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "French Guiana",
      alpha2Code: "GF",
      alpha3Code: "GUF",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "French Polynesia",
      alpha2Code: "PF",
      alpha3Code: "PYF",
      currency: "CFP Franc",
      currencyCode: "XPF",
    },
    {
      country: "French Southern Territories (the)",
      alpha2Code: "TF",
      alpha3Code: "ATF",
    },
    {
      country: "Gabon",
      alpha2Code: "GA",
      alpha3Code: "GAB",
      currency: "CFA Franc BEAC",
      currencyCode: "XAF",
    },
    {
      country: "Gambia (the)",
      alpha2Code: "GM",
      alpha3Code: "GMB",
      currency: "Dalasi",
      currencyCode: "GMD",
    },
    {
      country: "Georgia",
      alpha2Code: "GE",
      alpha3Code: "GEO",
      currency: "Lari",
      currencyCode: "GEL",
    },
    {
      country: "Germany",
      alpha2Code: "DE",
      alpha3Code: "DEU",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Ghana",
      alpha2Code: "GH",
      alpha3Code: "GHA",
      currency: "Ghana Cedi",
      currencyCode: "GHS",
    },
    {
      country: "Gibraltar",
      alpha2Code: "GI",
      alpha3Code: "GIB",
      currency: "Gibraltar Pound",
      currencyCode: "GIP",
    },
    {
      country: "Greece",
      alpha2Code: "GR",
      alpha3Code: "GRC",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Greenland",
      alpha2Code: "GL",
      alpha3Code: "GRL",
      currency: "Danish Krone",
      currencyCode: "DKK",
    },
    {
      country: "Grenada",
      alpha2Code: "GD",
      alpha3Code: "GRD",
      currency: "East Caribbean Dollar",
      currencyCode: "XCD",
    },
    {
      country: "Guadeloupe",
      alpha2Code: "GP",
      alpha3Code: "GLP",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Guam",
      alpha2Code: "GU",
      alpha3Code: "GUM",
      currency: "US Dollar",
      currencyCode: "USD",
    },
    {
      country: "Guatemala",
      alpha2Code: "GT",
      alpha3Code: "GTM",
      currency: "Quetzal",
      currencyCode: "GTQ",
    },
    {
      country: "Guernsey",
      alpha2Code: "GG",
      alpha3Code: "GGY",
      currency: "Pound Sterling",
      currencyCode: "GBP",
    },
    {
      country: "Guinea",
      alpha2Code: "GN",
      alpha3Code: "GIN",
      currency: "Guinea Franc",
      currencyCode: "GNF",
    },
    {
      country: "Guinea-Bissau",
      alpha2Code: "GW",
      alpha3Code: "GNB",
      currency: "CFA Franc BCEAO",
      currencyCode: "XOF",
    },
    {
      country: "Guyana",
      alpha2Code: "GY",
      alpha3Code: "GUY",
      currency: "Guyana Dollar",
      currencyCode: "GYD",
    },
    {
      country: "Haiti",
      alpha2Code: "HT",
      alpha3Code: "HTI",
      currency: "Gourde",
      currencyCode: "HTG",
    },
    {
      country: "Heard Island and McDonald Islands",
      alpha2Code: "HM",
      alpha3Code: "HMD",
    },
    {
      country: "Holy See (the)",
      alpha2Code: "VA",
      alpha3Code: "VAT",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Honduras",
      alpha2Code: "HN",
      alpha3Code: "HND",
      currency: "Lempira",
      currencyCode: "HNL",
    },
    {
      country: "Hong Kong",
      alpha2Code: "HK",
      alpha3Code: "HKG",
      currency: "Hong Kong Dollar",
      currencyCode: "HKD",
    },
    {
      country: "Hungary",
      alpha2Code: "HU",
      alpha3Code: "HUN",
      currency: "Forint",
      currencyCode: "HUF",
    },
    {
      country: "Iceland",
      alpha2Code: "IS",
      alpha3Code: "ISL",
      currency: "Iceland Krona",
      currencyCode: "ISK",
    },
    {
      country: "India",
      alpha2Code: "IN",
      alpha3Code: "IND",
      currency: "Indian Rupee",
      currencyCode: "INR",
    },
    {
      country: "Indonesia",
      alpha2Code: "ID",
      alpha3Code: "IDN",
      currency: "Rupiah",
      currencyCode: "IDR",
    },
    {
      country: "Iran (Islamic Republic of)",
      alpha2Code: "IR",
      alpha3Code: "IRN",
      currency: "Iranian Rial",
      currencyCode: "IRR",
    },
    {
      country: "Iraq",
      alpha2Code: "IQ",
      alpha3Code: "IRQ",
      currency: "Iraqi Dinar",
      currencyCode: "IQD",
    },
    {
      country: "Ireland",
      alpha2Code: "IE",
      alpha3Code: "IRL",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Isle of Man",
      alpha2Code: "IM",
      alpha3Code: "IMN",
      currency: "Pound Sterling",
      currencyCode: "GBP",
    },
    {
      country: "Israel",
      alpha2Code: "IL",
      alpha3Code: "ISR",
      currency: "New Israeli Sheqel",
      currencyCode: "ILS",
    },
    {
      country: "Italy",
      alpha2Code: "IT",
      alpha3Code: "ITA",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Jamaica",
      alpha2Code: "JM",
      alpha3Code: "JAM",
      currency: "Jamaican Dollar",
      currencyCode: "JMD",
    },
    {
      country: "Japan",
      alpha2Code: "JP",
      alpha3Code: "JPN",
      currency: "Yen",
      currencyCode: "JPY",
    },
    {
      country: "Jersey",
      alpha2Code: "JE",
      alpha3Code: "JEY",
      currency: "Pound Sterling",
      currencyCode: "GBP",
    },
    {
      country: "Jordan",
      alpha2Code: "JO",
      alpha3Code: "JOR",
      currency: "Jordanian Dinar",
      currencyCode: "JOD",
    },
    {
      country: "Kazakhstan",
      alpha2Code: "KZ",
      alpha3Code: "KAZ",
      currency: "Tenge",
      currencyCode: "KZT",
    },
    {
      country: "Kenya",
      alpha2Code: "KE",
      alpha3Code: "KEN",
      currency: "Kenyan Shilling",
      currencyCode: "KES",
    },
    {
      country: "Kiribati",
      alpha2Code: "KI",
      alpha3Code: "KIR",
      currency: "Australian Dollar",
      currencyCode: "AUD",
    },
    {
      country: "Korea (the Democratic People's Republic of)",
      alpha2Code: "KP",
      alpha3Code: "PRK",
    },
    {
      country: "Korea (the Republic of)",
      alpha2Code: "KR",
      alpha3Code: "KOR",
      currency: "Won",
      currencyCode: "KRW",
    },
    {
      country: "Kuwait",
      alpha2Code: "KW",
      alpha3Code: "KWT",
      currency: "Kuwaiti Dinar",
      currencyCode: "KWD",
    },
    {
      country: "Kyrgyzstan",
      alpha2Code: "KG",
      alpha3Code: "KGZ",
      currency: "Som",
      currencyCode: "KGS",
    },
    {
      country: "Lao People's Democratic Republic (the)",
      alpha2Code: "LA",
      alpha3Code: "LAO",
    },
    {
      country: "Latvia",
      alpha2Code: "LV",
      alpha3Code: "LVA",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Lebanon",
      alpha2Code: "LB",
      alpha3Code: "LBN",
      currency: "Lebanese Pound",
      currencyCode: "LBP",
    },
    {
      country: "Lesotho",
      alpha2Code: "LS",
      alpha3Code: "LSO",
      currency: "Loti",
      currencyCode: "LSL",
    },
    {
      country: "Liberia",
      alpha2Code: "LR",
      alpha3Code: "LBR",
      currency: "Liberian Dollar",
      currencyCode: "LRD",
    },
    {
      country: "Libya",
      alpha2Code: "LY",
      alpha3Code: "LBY",
      currency: "Libyan Dinar",
      currencyCode: "LYD",
    },
    {
      country: "Liechtenstein",
      alpha2Code: "LI",
      alpha3Code: "LIE",
      currency: "Swiss Franc",
      currencyCode: "CHF",
    },
    {
      country: "Lithuania",
      alpha2Code: "LT",
      alpha3Code: "LTU",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Luxembourg",
      alpha2Code: "LU",
      alpha3Code: "LUX",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Macao",
      alpha2Code: "MO",
      alpha3Code: "MAC",
      currency: "Pataca",
      currencyCode: "MOP",
    },
    {
      country: "Madagascar",
      alpha2Code: "MG",
      alpha3Code: "MDG",
      currency: "Malagasy Ariary",
      currencyCode: "MGA",
    },
    {
      country: "Malawi",
      alpha2Code: "MW",
      alpha3Code: "MWI",
      currency: "Kwacha",
      currencyCode: "MWK",
    },
    {
      country: "Malaysia",
      alpha2Code: "MY",
      alpha3Code: "MYS",
      currency: "Malaysian Ringgit",
      currencyCode: "MYR",
    },
    {
      country: "Maldives",
      alpha2Code: "MV",
      alpha3Code: "MDV",
      currency: "Rufiyaa",
      currencyCode: "MVR",
    },
    {
      country: "Mali",
      alpha2Code: "ML",
      alpha3Code: "MLI",
      currency: "CFA Franc BCEAO",
      currencyCode: "XOF",
    },
    {
      country: "Malta",
      alpha2Code: "MT",
      alpha3Code: "MLT",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Marshall Islands (the)",
      alpha2Code: "MH",
      alpha3Code: "MHL",
      currency: "US Dollar",
      currencyCode: "USD",
    },
    {
      country: "Martinique",
      alpha2Code: "MQ",
      alpha3Code: "MTQ",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Mauritania",
      alpha2Code: "MR",
      alpha3Code: "MRT",
      currency: "Ouguiya",
      currencyCode: "MRU",
    },
    {
      country: "Mauritius",
      alpha2Code: "MU",
      alpha3Code: "MUS",
      currency: "Mauritius Rupee",
      currencyCode: "MUR",
    },
    {
      country: "Mayotte",
      alpha2Code: "YT",
      alpha3Code: "MYT",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Mexico",
      alpha2Code: "MX",
      alpha3Code: "MEX",
      currency: "Mexican Peso",
      currencyCode: "MXN",
    },
    {
      country: "Micronesia (Federated States of)",
      alpha2Code: "FM",
      alpha3Code: "FSM",
    },
    {
      country: "Moldova (the Republic of)",
      alpha2Code: "MD",
      alpha3Code: "MDA",
      currency: "Moldovan Leu",
      currencyCode: "MDL",
    },
    {
      country: "Monaco",
      alpha2Code: "MC",
      alpha3Code: "MCO",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Mongolia",
      alpha2Code: "MN",
      alpha3Code: "MNG",
      currency: "Tugrik",
      currencyCode: "MNT",
    },
    {
      country: "Montenegro",
      alpha2Code: "ME",
      alpha3Code: "MNE",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Montserrat",
      alpha2Code: "MS",
      alpha3Code: "MSR",
      currency: "East Caribbean Dollar",
      currencyCode: "XCD",
    },
    {
      country: "Morocco",
      alpha2Code: "MA",
      alpha3Code: "MAR",
      currency: "Moroccan Dirham",
      currencyCode: "MAD",
    },
    {
      country: "Mozambique",
      alpha2Code: "MZ",
      alpha3Code: "MOZ",
      currency: "Mozambique Metical",
      currencyCode: "MZN",
    },
    {
      country: "Myanmar",
      alpha2Code: "MM",
      alpha3Code: "MMR",
      currency: "Kyat",
      currencyCode: "MMK",
    },
    {
      country: "Namibia",
      alpha2Code: "NA",
      alpha3Code: "NAM",
      currency: "Namibia Dollar",
      currencyCode: "NAD",
    },
    {
      country: "Nauru",
      alpha2Code: "NR",
      alpha3Code: "NRU",
      currency: "Australian Dollar",
      currencyCode: "AUD",
    },
    {
      country: "Nepal",
      alpha2Code: "NP",
      alpha3Code: "NPL",
      currency: "Nepalese Rupee",
      currencyCode: "NPR",
    },
    {
      country: "Netherlands (the)",
      alpha2Code: "NL",
      alpha3Code: "NLD",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "New Caledonia",
      alpha2Code: "NC",
      alpha3Code: "NCL",
      currency: "CFP Franc",
      currencyCode: "XPF",
    },
    {
      country: "New Zealand",
      alpha2Code: "NZ",
      alpha3Code: "NZL",
      currency: "New Zealand Dollar",
      currencyCode: "NZD",
    },
    {
      country: "Nicaragua",
      alpha2Code: "NI",
      alpha3Code: "NIC",
      currency: "Cordoba Oro",
      currencyCode: "NIO",
    },
    {
      country: "Niger (the)",
      alpha2Code: "NE",
      alpha3Code: "NER",
      currency: "CFA Franc BCEAO",
      currencyCode: "XOF",
    },
    {
      country: "Nigeria",
      alpha2Code: "NG",
      alpha3Code: "NGA",
      currency: "Naira",
      currencyCode: "NGN",
    },
    {
      country: "Niue",
      alpha2Code: "NU",
      alpha3Code: "NIU",
      currency: "New Zealand Dollar",
      currencyCode: "NZD",
    },
    {
      country: "Norfolk Island",
      alpha2Code: "NF",
      alpha3Code: "NFK",
      currency: "Australian Dollar",
      currencyCode: "AUD",
    },
    {
      country: "Northern Mariana Islands (the)",
      alpha2Code: "MP",
      alpha3Code: "MNP",
    },
    {
      country: "Norway",
      alpha2Code: "NO",
      alpha3Code: "NOR",
      currency: "Norwegian Krone",
      currencyCode: "NOK",
    },
    {
      country: "Oman",
      alpha2Code: "OM",
      alpha3Code: "OMN",
      currency: "Rial Omani",
      currencyCode: "OMR",
    },
    {
      country: "Pakistan",
      alpha2Code: "PK",
      alpha3Code: "PAK",
      currency: "Pakistan Rupee",
      currencyCode: "PKR",
    },
    {
      country: "Palau",
      alpha2Code: "PW",
      alpha3Code: "PLW",
      currency: "US Dollar",
      currencyCode: "USD",
    },
    {
      country: "Palestine, State of",
      alpha2Code: "PS",
      alpha3Code: "PSE",
      currency: "No universal currency",
      currencyCode: "",
    },
    {
      country: "Panama",
      alpha2Code: "PA",
      alpha3Code: "PAN",
      currency: "Balboa",
      currencyCode: "PAB",
    },
    {
      country: "Papua New Guinea",
      alpha2Code: "PG",
      alpha3Code: "PNG",
      currency: "Kina",
      currencyCode: "PGK",
    },
    {
      country: "Paraguay",
      alpha2Code: "PY",
      alpha3Code: "PRY",
      currency: "Guarani",
      currencyCode: "PYG",
    },
    {
      country: "Peru",
      alpha2Code: "PE",
      alpha3Code: "PER",
      currency: "Nuevo Sol",
      currencyCode: "PEN",
    },
    {
      country: "Philippines (the)",
      alpha2Code: "PH",
      alpha3Code: "PHL",
      currency: "Philippine Peso",
      currencyCode: "PHP",
    },
    {
      country: "Pitcairn",
      alpha2Code: "PN",
      alpha3Code: "PCN",
      currency: "New Zealand Dollar",
      currencyCode: "NZD",
    },
    {
      country: "Poland",
      alpha2Code: "PL",
      alpha3Code: "POL",
      currency: "Zloty",
      currencyCode: "PLN",
    },
    {
      country: "Portugal",
      alpha2Code: "PT",
      alpha3Code: "PRT",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Puerto Rico",
      alpha2Code: "PR",
      alpha3Code: "PRI",
      currency: "US Dollar",
      currencyCode: "USD",
    },
    {
      country: "Qatar",
      alpha2Code: "QA",
      alpha3Code: "QAT",
      currency: "Qatari Rial",
      currencyCode: "QAR",
    },
    {
      country: "Republic of North Macedonia",
      alpha2Code: "MK",
      alpha3Code: "MKD",
      currency: "Denar",
      currencyCode: "MKD",
    },
    {
      country: "Romania",
      alpha2Code: "RO",
      alpha3Code: "ROU",
      currency: "Romanian Leu",
      currencyCode: "RON",
    },
    {
      country: "Russian Federation (the)",
      alpha2Code: "RU",
      alpha3Code: "RUS",
      currency: "Russian Ruble",
      currencyCode: "RUB",
    },
    {
      country: "Rwanda",
      alpha2Code: "RW",
      alpha3Code: "RWA",
      currency: "Rwanda Franc",
      currencyCode: "RWF",
    },
    {
      country: "Réunion",
      alpha2Code: "RE",
      alpha3Code: "REU",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Saint Barthélemy",
      alpha2Code: "BL",
      alpha3Code: "BLM",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Saint Helena, Ascension and Tristan da Cunha",
      alpha2Code: "SH",
      alpha3Code: "SHN",
    },
    {
      country: "Saint Kitts and Nevis",
      alpha2Code: "KN",
      alpha3Code: "KNA",
      currency: "East Caribbean Dollar",
      currencyCode: "XCD",
    },
    {
      country: "Saint Lucia",
      alpha2Code: "LC",
      alpha3Code: "LCA",
      currency: "East Caribbean Dollar",
      currencyCode: "XCD",
    },
    {
      country: "Saint Martin (French part)",
      alpha2Code: "MF",
      alpha3Code: "MAF",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Saint Pierre and Miquelon",
      alpha2Code: "PM",
      alpha3Code: "SPM",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Saint Vincent and the Grenadines",
      alpha2Code: "VC",
      alpha3Code: "VCT",
    },
    {
      country: "Samoa",
      alpha2Code: "WS",
      alpha3Code: "WSM",
      currency: "Tala",
      currencyCode: "WST",
    },
    {
      country: "San Marino",
      alpha2Code: "SM",
      alpha3Code: "SMR",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Sao Tome and Principe",
      alpha2Code: "ST",
      alpha3Code: "STP",
      currency: "Dobra",
      currencyCode: "STN",
    },
    {
      country: "Saudi Arabia",
      alpha2Code: "SA",
      alpha3Code: "SAU",
      currency: "Saudi Riyal",
      currencyCode: "SAR",
    },
    {
      country: "Senegal",
      alpha2Code: "SN",
      alpha3Code: "SEN",
      currency: "CFA Franc BCEAO",
      currencyCode: "XOF",
    },
    {
      country: "Serbia",
      alpha2Code: "RS",
      alpha3Code: "SRB",
      currency: "Serbian Dinar",
      currencyCode: "RSD",
    },
    {
      country: "Seychelles",
      alpha2Code: "SC",
      alpha3Code: "SYC",
      currency: "Seychelles Rupee",
      currencyCode: "SCR",
    },
    {
      country: "Sierra Leone",
      alpha2Code: "SL",
      alpha3Code: "SLE",
      currency: "Leone",
      currencyCode: "SLL",
    },
    {
      country: "Singapore",
      alpha2Code: "SG",
      alpha3Code: "SGP",
      currency: "Singapore Dollar",
      currencyCode: "SGD",
    },
    {
      country: "Sint Maarten (Dutch part)",
      alpha2Code: "SX",
      alpha3Code: "SXM",
      currency: "Netherlands Antillean Guilder",
      currencyCode: "ANG",
    },
    {
      country: "Slovakia",
      alpha2Code: "SK",
      alpha3Code: "SVK",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Slovenia",
      alpha2Code: "SI",
      alpha3Code: "SVN",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Solomon Islands",
      alpha2Code: "SB",
      alpha3Code: "SLB",
      currency: "Solomon Islands Dollar",
      currencyCode: "SBD",
    },
    {
      country: "Somalia",
      alpha2Code: "SO",
      alpha3Code: "SOM",
      currency: "Somali Shilling",
      currencyCode: "SOS",
    },
    {
      country: "South Africa",
      alpha2Code: "ZA",
      alpha3Code: "ZAF",
      currency: "Rand",
      currencyCode: "ZAR",
    },
    {
      country: "South Georgia and the South Sandwich Islands",
      alpha2Code: "GS",
      alpha3Code: "SGS",
    },
    {
      country: "South Sudan",
      alpha2Code: "SS",
      alpha3Code: "SSD",
      currency: "South Sudanese Pound",
      currencyCode: "SSP",
    },
    {
      country: "Spain",
      alpha2Code: "ES",
      alpha3Code: "ESP",
      currency: "Euro",
      currencyCode: "EUR",
    },
    {
      country: "Sri Lanka",
      alpha2Code: "LK",
      alpha3Code: "LKA",
      currency: "Sri Lanka Rupee",
      currencyCode: "LKR",
    },
    {
      country: "Sudan (the)",
      alpha2Code: "SD",
      alpha3Code: "SDN",
      currency: "Sudanese Pound",
      currencyCode: "SDG",
    },
    {
      country: "Suriname",
      alpha2Code: "SR",
      alpha3Code: "SUR",
      currency: "Surinam Dollar",
      currencyCode: "SRD",
    },
    {
      country: "Svalbard and Jan Mayen",
      alpha2Code: "SJ",
      alpha3Code: "SJM",
      currency: "Norwegian Krone",
      currencyCode: "NOK",
    },
    {
      country: "Sweden",
      alpha2Code: "SE",
      alpha3Code: "SWE",
      currency: "Swedish Krona",
      currencyCode: "SEK",
    },
    {
      country: "Switzerland",
      alpha2Code: "CH",
      alpha3Code: "CHE",
      currency: "WIR Euro",
      currencyCode: "CHE",
    },
    {
      country: "Syrian Arab Republic",
      alpha2Code: "SY",
      alpha3Code: "SYR",
      currency: "Syrian Pound",
      currencyCode: "SYP",
    },
    {
      country: "Taiwan (Province of China)",
      alpha2Code: "TW",
      alpha3Code: "TWN",
      currency: "New Taiwan Dollar",
      currencyCode: "TWD",
    },
    {
      country: "Tajikistan",
      alpha2Code: "TJ",
      alpha3Code: "TJK",
      currency: "Somoni",
      currencyCode: "TJS",
    },
    {
      country: "Tanzania, United Republic of",
      alpha2Code: "TZ",
      alpha3Code: "TZA",
      currency: "Tanzanian Shilling",
      currencyCode: "TZS",
    },
    {
      country: "Thailand",
      alpha2Code: "TH",
      alpha3Code: "THA",
      currency: "Baht",
      currencyCode: "THB",
    },
    {
      country: "Timor-Leste",
      alpha2Code: "TL",
      alpha3Code: "TLS",
      currency: "US Dollar",
      currencyCode: "USD",
    },
    {
      country: "Togo",
      alpha2Code: "TG",
      alpha3Code: "TGO",
      currency: "CFA Franc BCEAO",
      currencyCode: "XOF",
    },
    {
      country: "Tokelau",
      alpha2Code: "TK",
      alpha3Code: "TKL",
      currency: "New Zealand Dollar",
      currencyCode: "NZD",
    },
    {
      country: "Tonga",
      alpha2Code: "TO",
      alpha3Code: "TON",
      currency: "Pa’anga",
      currencyCode: "TOP",
    },
    {
      country: "Trinidad and Tobago",
      alpha2Code: "TT",
      alpha3Code: "TTO",
      currency: "Trinidad and Tobago Dollar",
      currencyCode: "TTD",
    },
    {
      country: "Tunisia",
      alpha2Code: "TN",
      alpha3Code: "TUN",
      currency: "Tunisian Dinar",
      currencyCode: "TND",
    },
    {
      country: "Turkey",
      alpha2Code: "TR",
      alpha3Code: "TUR",
      currency: "Turkish Lira",
      currencyCode: "TRY",
    },
    {
      country: "Turkmenistan",
      alpha2Code: "TM",
      alpha3Code: "TKM",
      currency: "Turkmenistan New Manat",
      currencyCode: "TMT",
    },
    {
      country: "Turks and Caicos Islands (the)",
      alpha2Code: "TC",
      alpha3Code: "TCA",
    },
    {
      country: "Tuvalu",
      alpha2Code: "TV",
      alpha3Code: "TUV",
      currency: "Australian Dollar",
      currencyCode: "AUD",
    },
    {
      country: "Uganda",
      alpha2Code: "UG",
      alpha3Code: "UGA",
      currency: "Uganda Shilling",
      currencyCode: "UGX",
    },
    {
      country: "Ukraine",
      alpha2Code: "UA",
      alpha3Code: "UKR",
      currency: "Hryvnia",
      currencyCode: "UAH",
    },
    {
      country: "United Arab Emirates (the)",
      alpha2Code: "AE",
      alpha3Code: "ARE",
      currency: "UAE Dirham",
      currencyCode: "AED",
    },
    {
      country: "United Kingdom of Great Britain and Northern Ireland (the)",
      alpha2Code: "GB",
      alpha3Code: "GBR",
    },
    {
      country: "United States Minor Outlying Islands (the)",
      alpha2Code: "UM",
      alpha3Code: "UMI",
    },
    {
      country: "United States of America (the)",
      alpha2Code: "US",
      alpha3Code: "USA",
    },
    {
      country: "Uruguay",
      alpha2Code: "UY",
      alpha3Code: "URY",
      currency: "Uruguay Peso en Unidades Indexadas (URUIURUI)",
      currencyCode: "UYI",
    },
    {
      country: "Uzbekistan",
      alpha2Code: "UZ",
      alpha3Code: "UZB",
      currency: "Uzbekistan Sum",
      currencyCode: "UZS",
    },
    {
      country: "Vanuatu",
      alpha2Code: "VU",
      alpha3Code: "VUT",
      currency: "Vatu",
      currencyCode: "VUV",
    },
    {
      country: "Venezuela (Bolivarian Republic of)",
      alpha2Code: "VE",
      alpha3Code: "VEN",
      currency: "Bolivar",
      currencyCode: "VEF",
    },
    {
      country: "Viet Nam",
      alpha2Code: "VN",
      alpha3Code: "VNM",
      currency: "Dong",
      currencyCode: "VND",
    },
    {
      country: "Virgin Islands (British)",
      alpha2Code: "VG",
      alpha3Code: "VGB",
      currency: "US Dollar",
      currencyCode: "USD",
    },
    {
      country: "Virgin Islands (U.S.)",
      alpha2Code: "VI",
      alpha3Code: "VIR",
      currency: "US Dollar",
      currencyCode: "USD",
    },
    {
      country: "Wallis and Futuna",
      alpha2Code: "WF",
      alpha3Code: "WLF",
      currency: "CFP Franc",
      currencyCode: "XPF",
    },
    {
      country: "Western Sahara",
      alpha2Code: "EH",
      alpha3Code: "ESH",
      currency: "Moroccan Dirham",
      currencyCode: "MAD",
    },
    {
      country: "Yemen",
      alpha2Code: "YE",
      alpha3Code: "YEM",
      currency: "Yemeni Rial",
      currencyCode: "YER",
    },
    {
      country: "Zambia",
      alpha2Code: "ZM",
      alpha3Code: "ZMB",
      currency: "Zambian Kwacha",
      currencyCode: "ZMW",
    },
    {
      country: "Zimbabwe",
      alpha2Code: "ZW",
      alpha3Code: "ZWE",
      currency: "Zimbabwe Dollar",
      currencyCode: "ZWL",
    },
    {
      country: "Åland Islands",
      alpha2Code: "AX",
      alpha3Code: "ALA",
      currency: "Euro",
      currencyCode: "EUR",
    },
  ]

  const mostTradedCurrencies = [
    {
      currency: "USD",
      country: "us",
    },
    {
      currency: "EUR",
      country: "eu",
    },
    {
      currency: "JPY",
      country: "jp",
    },
    {
      currency: "GBP",
      country: "gb",
    },
    {
      currency: "CAD",
      country: "ca",
    },
    {
      currency: "CHF",
      country: "ch",
    },
  ]

  const { ipData } = useLocationData()

  const [from, setFrom] = useState("NGN")
  const [to, setTo] = useState("USD")

  return (
    <div className="shadowed d-flex flex-column py-3">
      <marquee className="" behavior="scroll" direction="left">
        <span className="row flex-nowrap">
          {ipData &&
            mostTradedCurrencies.map((country, index) => {
              return (
                <span key={index} className="mx-5 text-nowrap col">
                  <img
                    src={`/assets/img/flags/${ipData.country.toLowerCase()}.svg`}
                    alt="My Country"
                    className=""
                    width={25}
                  />
                  <span> {ipData.country}</span>

                  <span className="">
                    {" "}
                    ({Math.ceil(Math.random() * 999)}) {country.currency}{" "}
                  </span>
                  <img
                    src={`/assets/img/flags/${country.country.toLowerCase()}.svg`}
                    alt="My Country"
                    className=""
                    width={25}
                  />
                </span>
              )
            })}
        </span>
      </marquee>

      {/* Divider */}
      <hr className="border border-2 mt-0" />

      <div className="container-fluid d-flex flex-column justify-content-between h-100">
        {/* Form */}
        <div className="shadowed p-4">
          {/* From */}
          <div className="container-fluid">
            <span className="fw-bolder">From</span>
            <select
              name=""
              id=""
              className="form-select"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value)
              }}>
              {countriesData
                .filter(
                  (country) =>
                    country.currencyCode !== to && country.currencyCode
                )
                .map((country, index) => {
                  return (
                    <option key={index} value={country.currencyCode}>
                      {country.country} - {country.currencyCode}
                    </option>
                  )
                })}
            </select>
          </div>

          {/* To */}
          <div className="container-fluid mt-5">
            <span className="fw-bolder">To</span>

            <select
              className="form-select"
              value={to}
              onChange={(e) => {
                setTo(e.target.value)
              }}>
              {countriesData
                .filter(
                  (country) =>
                    country.currencyCode !== from && country.currencyCode
                )
                .map((country, index) => {
                  return (
                    <option key={index} value={country.currencyCode}>
                      {country.country} - {country.currencyCode}
                    </option>
                  )
                })}
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="shadowed h-100 mt-5 d-flex flex-column justify-content-center align-items-center">
          <span className="fw-bolder fs-4">
            1 {from} - {Math.ceil(Math.random() * 999)} {to}
          </span>

          <span className="text-danger text-center text-warning fw-bolder mb-2">
            Data Is Not Accurate. This is dummy data
          </span>
        </div>
      </div>
    </div>
  )
}
