# Flame Flags

Flags used across LightSpeed products

This package only provides the raw SVG files as well as a spritesheet.

## How to use individual flags

Each flags are available within the `src` directory. Flag names must use their ISO country code.
It is also important to update the list of `flag-iso.list.json` with the new flag ISO and it's corresponding
country.

If you are within a context where you can import SVGs via import statements (you may need to include https://webpack.js.org/loaders/svg-inline-loader/), you may do the following:

```js
import CanadaFlagSVG from '@lightspeed/flame-flags/src/CA.svg';
// ...
<CanadaFlagSVG />;
```

## Using the spritesheet

Flags are available as a spritesheet. To add a spritesheet to an app, you can import it directly from your
node_modules or use an appropriate webpack-loader (such as https://webpack.js.org/loaders/svg-inline-loader/).

```html
<!--Including the spritesheet via the img tag-->
<img src="./node_modules/@lightspeed/flame-flags/src/spritesheet.svg" />
```

## How to contribute

Flags must be added to the `src` directory. Flag names must use their ISO country code.
It is also important to update the list of `flag-iso.list.json` with the new flag ISO and it's corresponding
country. If a flag is a specific region of a country (e.g: province, state, etc...)you must prefix that flag with
the ISO value of the country of origin.

For example, if adding the flag for the province of Quebec, the final flag name will be: `CA-QC.svg`.

Once that's done, please run `yarn regenerate-readme` and preview the README.md file to see if the flag renders correctly.

<!-- Everything underneath here is auto generated. Don't touch! -->

### Flag Preview

| Country/Region                               | Flag Code | Preview                        |
| -------------------------------------------- | --------- | ------------------------------ |
| Andorra                                      | AD        | <img src="./src/AD.svg" />     |
| United Arab Emirates                         | AE        | <img src="./src/AE.svg" />     |
| Afghanistan                                  | AF        | <img src="./src/AF.svg" />     |
| Antigua and Barbuda                          | AG        | <img src="./src/AG.svg" />     |
| Anguilla                                     | AI        | <img src="./src/AI.svg" />     |
| Albania                                      | AL        | <img src="./src/AL.svg" />     |
| Armenia                                      | AM        | <img src="./src/AM.svg" />     |
| Angola                                       | AO        | <img src="./src/AO.svg" />     |
| Antarctica                                   | AQ        | <img src="./src/AQ.svg" />     |
| Argentina                                    | AR        | <img src="./src/AR.svg" />     |
| American Samoa                               | AS        | <img src="./src/AS.svg" />     |
| Austria                                      | AT        | <img src="./src/AT.svg" />     |
| Australia                                    | AU        | <img src="./src/AU.svg" />     |
| Aruba                                        | AW        | <img src="./src/AW.svg" />     |
| Åland                                        | AX        | <img src="./src/AX.svg" />     |
| Azerbaijan                                   | AZ        | <img src="./src/AZ.svg" />     |
| Bosnia-Herzegovina                           | BA        | <img src="./src/BA.svg" />     |
| Barbados                                     | BB        | <img src="./src/BB.svg" />     |
| Bangladesh                                   | BD        | <img src="./src/BD.svg" />     |
| Belgium                                      | BE        | <img src="./src/BE.svg" />     |
| Burkina Faso                                 | BF        | <img src="./src/BF.svg" />     |
| Bulgaria                                     | BG        | <img src="./src/BG.svg" />     |
| Bahrain                                      | BH        | <img src="./src/BH.svg" />     |
| Burundi                                      | BI        | <img src="./src/BI.svg" />     |
| Benin                                        | BJ        | <img src="./src/BJ.svg" />     |
| Bermuda                                      | BM        | <img src="./src/BM.svg" />     |
| Brunei                                       | BN        | <img src="./src/BN.svg" />     |
| Bolivia                                      | BO        | <img src="./src/BO.svg" />     |
| Bonaire                                      | BQ-BO     | <img src="./src/BQ-BO.svg" />  |
| Saba                                         | BQ-SA     | <img src="./src/BQ-SA.svg" />  |
| St Eustatius                                 | BQ-SE     | <img src="./src/BQ-SE.svg" />  |
| Brazil                                       | BR        | <img src="./src/BR.svg" />     |
| Bahamas                                      | BS        | <img src="./src/BS.svg" />     |
| Bhutan                                       | BT        | <img src="./src/BT.svg" />     |
| Botswana                                     | BW        | <img src="./src/BW.svg" />     |
| Belarus                                      | BY        | <img src="./src/BY.svg" />     |
| Belize                                       | BZ        | <img src="./src/BZ.svg" />     |
| Canada                                       | CA        | <img src="./src/CA.svg" />     |
| Alberta                                      | CA-AB     | <img src="./src/CA-AB.svg" />  |
| British Columbia                             | CA-BC     | <img src="./src/CA-BC.svg" />  |
| Manitoba                                     | CA-MB     | <img src="./src/CA-MB.svg" />  |
| New Brunswick                                | CA-NB     | <img src="./src/CA-NB.svg" />  |
| Newfoundland and Labrador                    | CA-NL     | <img src="./src/CA-NL.svg" />  |
| Nova Scotia                                  | CA-NS     | <img src="./src/CA-NS.svg" />  |
| Northwest Territories                        | CA-NT     | <img src="./src/CA-NT.svg" />  |
| Nunavut                                      | CA-NU     | <img src="./src/CA-NU.svg" />  |
| Ontario                                      | CA-ON     | <img src="./src/CA-ON.svg" />  |
| Prince Edward Island                         | CA-PE     | <img src="./src/CA-PE.svg" />  |
| Quebec                                       | CA-QC     | <img src="./src/CA-QC.svg" />  |
| Saskatchewan                                 | CA-SK     | <img src="./src/CA-SK.svg" />  |
| Yukon                                        | CA-YT     | <img src="./src/CA-YT.svg" />  |
| Cocos (Keeling) Islands                      | CC        | <img src="./src/CC.svg" />     |
| Congo D.R.                                   | CD        | <img src="./src/CD.svg" />     |
| Central African Rep.                         | CF        | <img src="./src/CF.svg" />     |
| Congo                                        | CG        | <img src="./src/CG.svg" />     |
| Switzerland                                  | CH        | <img src="./src/CH.svg" />     |
| Côte d'Ivoire                                | CI        | <img src="./src/CI.svg" />     |
| Cook Islands                                 | CK        | <img src="./src/CK.svg" />     |
| Chile                                        | CL        | <img src="./src/CL.svg" />     |
| Cameroon                                     | CM        | <img src="./src/CM.svg" />     |
| China                                        | CN        | <img src="./src/CN.svg" />     |
| Colombia                                     | CO        | <img src="./src/CO.svg" />     |
| Costa Rica                                   | CR        | <img src="./src/CR.svg" />     |
| Cuba                                         | CU        | <img src="./src/CU.svg" />     |
| Cape Verde                                   | CV        | <img src="./src/CV.svg" />     |
| Curaçao                                      | CW        | <img src="./src/CW.svg" />     |
| Christmas Island                             | CX        | <img src="./src/CX.svg" />     |
| Cyprus                                       | CY        | <img src="./src/CY.svg" />     |
| Czech Republic                               | CZ        | <img src="./src/CZ.svg" />     |
| Germany                                      | DE        | <img src="./src/DE.svg" />     |
| Djibouti                                     | DJ        | <img src="./src/DJ.svg" />     |
| Denmark                                      | DK        | <img src="./src/DK.svg" />     |
| Dominica                                     | DM        | <img src="./src/DM.svg" />     |
| Dominican Republic                           | DO        | <img src="./src/DO.svg" />     |
| Algeria                                      | DZ        | <img src="./src/DZ.svg" />     |
| Ecuador                                      | EC        | <img src="./src/EC.svg" />     |
| Estonia                                      | EE        | <img src="./src/EE.svg" />     |
| Egypt                                        | EG        | <img src="./src/EG.svg" />     |
| Western Sahara                               | EH        | <img src="./src/EH.svg" />     |
| Eritrea                                      | ER        | <img src="./src/ER.svg" />     |
| Spain                                        | ES        | <img src="./src/ES.svg" />     |
| Catalonia                                    | ES-CT     | <img src="./src/ES-CT.svg" />  |
| Ethiopia                                     | ET        | <img src="./src/ET.svg" />     |
| European Union                               | EU        | <img src="./src/EU.svg" />     |
| Finland                                      | FI        | <img src="./src/FI.svg" />     |
| Fiji                                         | FJ        | <img src="./src/FJ.svg" />     |
| Falkland Islands                             | FK        | <img src="./src/FK.svg" />     |
| Micronesia                                   | FM        | <img src="./src/FM.svg" />     |
| Faroe Islands                                | FO        | <img src="./src/FO.svg" />     |
| France                                       | FR        | <img src="./src/FR.svg" />     |
| Gabon                                        | GA        | <img src="./src/GA.svg" />     |
| United Kingdom                               | GB        | <img src="./src/GB.svg" />     |
| England                                      | GB-ENG    | <img src="./src/GB-ENG.svg" /> |
| Scotland                                     | GB-SCT    | <img src="./src/GB-SCT.svg" /> |
| Wales                                        | GB-WLS    | <img src="./src/GB-WLS.svg" /> |
| Grenada                                      | GD        | <img src="./src/GD.svg" />     |
| Georgia                                      | GE        | <img src="./src/GE.svg" />     |
| Abkhazia                                     | GE-AB     | <img src="./src/GE-AB.svg" />  |
| Guernsey                                     | GG        | <img src="./src/GG.svg" />     |
| Ghana                                        | GH        | <img src="./src/GH.svg" />     |
| Gibraltar                                    | GI        | <img src="./src/GI.svg" />     |
| Greenland                                    | GL        | <img src="./src/GL.svg" />     |
| Gambia                                       | GM        | <img src="./src/GM.svg" />     |
| Guinea                                       | GN        | <img src="./src/GN.svg" />     |
| Equatorial Guinea                            | GQ        | <img src="./src/GQ.svg" />     |
| Greece                                       | GR        | <img src="./src/GR.svg" />     |
| South Georgia and the South Sandwich Islands | GS        | <img src="./src/GS.svg" />     |
| Guatemala                                    | GT        | <img src="./src/GT.svg" />     |
| Guam                                         | GU        | <img src="./src/GU.svg" />     |
| Guinea-Bissau                                | GW        | <img src="./src/GW.svg" />     |
| Guyana                                       | GY        | <img src="./src/GY.svg" />     |
| Hong Kong                                    | HK        | <img src="./src/HK.svg" />     |
| Honduras                                     | HN        | <img src="./src/HN.svg" />     |
| Croatia                                      | HR        | <img src="./src/HR.svg" />     |
| Haiti                                        | HT        | <img src="./src/HT.svg" />     |
| Hungary                                      | HU        | <img src="./src/HU.svg" />     |
| Indonesia                                    | ID        | <img src="./src/ID.svg" />     |
| Ireland                                      | IE        | <img src="./src/IE.svg" />     |
| Israel                                       | IL        | <img src="./src/IL.svg" />     |
| Isle of Man                                  | IM        | <img src="./src/IM.svg" />     |
| India                                        | IN        | <img src="./src/IN.svg" />     |
| British Indian Ocean Terr.                   | IO        | <img src="./src/IO.svg" />     |
| Iraq                                         | IQ        | <img src="./src/IQ.svg" />     |
| Iran                                         | IR        | <img src="./src/IR.svg" />     |
| Iceland                                      | IS        | <img src="./src/IS.svg" />     |
| Italy                                        | IT        | <img src="./src/IT.svg" />     |
| Jersey                                       | JE        | <img src="./src/JE.svg" />     |
| Jamaica                                      | JM        | <img src="./src/JM.svg" />     |
| Jordan                                       | JO        | <img src="./src/JO.svg" />     |
| Japan                                        | JP        | <img src="./src/JP.svg" />     |
| Kenya                                        | KE        | <img src="./src/KE.svg" />     |
| Kyrgyzstan                                   | KG        | <img src="./src/KG.svg" />     |
| Cambodia                                     | KH        | <img src="./src/KH.svg" />     |
| Kiribati                                     | KI        | <img src="./src/KI.svg" />     |
| Comoros                                      | KM        | <img src="./src/KM.svg" />     |
| Saint Kitts and Nevis                        | KN        | <img src="./src/KN.svg" />     |
| North Korea                                  | KP        | <img src="./src/KP.svg" />     |
| South Korea                                  | KR        | <img src="./src/KR.svg" />     |
| Kuwait                                       | KW        | <img src="./src/KW.svg" />     |
| Cayman Islands                               | KY        | <img src="./src/KY.svg" />     |
| Kazakhstan                                   | KZ        | <img src="./src/KZ.svg" />     |
| Laos                                         | LA        | <img src="./src/LA.svg" />     |
| Lebanon                                      | LB        | <img src="./src/LB.svg" />     |
| Saint Lucia                                  | LC        | <img src="./src/LC.svg" />     |
| Liechtenstein                                | LI        | <img src="./src/LI.svg" />     |
| Sri Lanka                                    | LK        | <img src="./src/LK.svg" />     |
| Liberia                                      | LR        | <img src="./src/LR.svg" />     |
| Lesotho                                      | LS        | <img src="./src/LS.svg" />     |
| Lithuania                                    | LT        | <img src="./src/LT.svg" />     |
| Luxembourg                                   | LU        | <img src="./src/LU.svg" />     |
| Latvia                                       | LV        | <img src="./src/LV.svg" />     |
| Libya                                        | LY        | <img src="./src/LY.svg" />     |
| Morocco                                      | MA        | <img src="./src/MA.svg" />     |
| Monaco                                       | MC        | <img src="./src/MC.svg" />     |
| Moldova                                      | MD        | <img src="./src/MD.svg" />     |
| Montenegro                                   | ME        | <img src="./src/ME.svg" />     |
| Madagascar                                   | MG        | <img src="./src/MG.svg" />     |
| Marshall Islands                             | MH        | <img src="./src/MH.svg" />     |
| Macedonia                                    | MK        | <img src="./src/MK.svg" />     |
| Mali                                         | ML        | <img src="./src/ML.svg" />     |
| Burma                                        | MM        | <img src="./src/MM.svg" />     |
| Mongolia                                     | MN        | <img src="./src/MN.svg" />     |
| Macau                                        | MO        | <img src="./src/MO.svg" />     |
| Northern Mariana Islands                     | MP        | <img src="./src/MP.svg" />     |
| Martinique                                   | MQ        | <img src="./src/MQ.svg" />     |
| Mauritania                                   | MR        | <img src="./src/MR.svg" />     |
| Malta                                        | MT        | <img src="./src/MT.svg" />     |
| Mauritius                                    | MU        | <img src="./src/MU.svg" />     |
| Maldives                                     | MV        | <img src="./src/MV.svg" />     |
| Malawi                                       | MW        | <img src="./src/MW.svg" />     |
| Mexico                                       | MX        | <img src="./src/MX.svg" />     |
| Malaysia                                     | MY        | <img src="./src/MY.svg" />     |
| Mozambique                                   | MZ        | <img src="./src/MZ.svg" />     |
| Namibia                                      | NA        | <img src="./src/NA.svg" />     |
| New Caledonia                                | NC        | <img src="./src/NC.svg" />     |
| Niger                                        | NE        | <img src="./src/NE.svg" />     |
| Norfolk Island                               | NF        | <img src="./src/NF.svg" />     |
| Nigeria                                      | NG        | <img src="./src/NG.svg" />     |
| Nicaragua                                    | NI        | <img src="./src/NI.svg" />     |
| Netherlands                                  | NL        | <img src="./src/NL.svg" />     |
| Norway                                       | NO        | <img src="./src/NO.svg" />     |
| Nepal                                        | NP        | <img src="./src/NP.svg" />     |
| Nauru                                        | NR        | <img src="./src/NR.svg" />     |
| Niue                                         | NU        | <img src="./src/NU.svg" />     |
| New Zealand                                  | NZ        | <img src="./src/NZ.svg" />     |
| Oman                                         | OM        | <img src="./src/OM.svg" />     |
| Panama                                       | PA        | <img src="./src/PA.svg" />     |
| Peru                                         | PE        | <img src="./src/PE.svg" />     |
| French Polynesia                             | PF        | <img src="./src/PF.svg" />     |
| Papua New Guinea                             | PG        | <img src="./src/PG.svg" />     |
| Philippines                                  | PH        | <img src="./src/PH.svg" />     |
| Pakistan                                     | PK        | <img src="./src/PK.svg" />     |
| Poland                                       | PL        | <img src="./src/PL.svg" />     |
| Pitcairn Islands                             | PN        | <img src="./src/PN.svg" />     |
| Puerto Rico                                  | PR        | <img src="./src/PR.svg" />     |
| Palestine                                    | PS        | <img src="./src/PS.svg" />     |
| Portugal                                     | PT        | <img src="./src/PT.svg" />     |
| Palau                                        | PW        | <img src="./src/PW.svg" />     |
| Paraguay                                     | PY        | <img src="./src/PY.svg" />     |
| Qatar                                        | QA        | <img src="./src/QA.svg" />     |
| Réunion                                      | RE        | <img src="./src/RE.svg" />     |
| Romania                                      | RO        | <img src="./src/RO.svg" />     |
| Serbia                                       | RS        | <img src="./src/RS.svg" />     |
| Russia                                       | RU        | <img src="./src/RU.svg" />     |
| Rwanda                                       | RW        | <img src="./src/RW.svg" />     |
| Saudi Arabia                                 | SA        | <img src="./src/SA.svg" />     |
| Solomon Islands                              | SB        | <img src="./src/SB.svg" />     |
| Seychelles                                   | SC        | <img src="./src/SC.svg" />     |
| Sudan                                        | SD        | <img src="./src/SD.svg" />     |
| Sweden                                       | SE        | <img src="./src/SE.svg" />     |
| Singapore                                    | SG        | <img src="./src/SG.svg" />     |
| Saint Helena                                 | SH-HL     | <img src="./src/SH-HL.svg" />  |
| Slovenia                                     | SI        | <img src="./src/SI.svg" />     |
| Slovakia                                     | SK        | <img src="./src/SK.svg" />     |
| Sierra Leone                                 | SL        | <img src="./src/SL.svg" />     |
| San Marino                                   | SM        | <img src="./src/SM.svg" />     |
| Senegal                                      | SN        | <img src="./src/SN.svg" />     |
| Somalia                                      | SO        | <img src="./src/SO.svg" />     |
| Suriname                                     | SR        | <img src="./src/SR.svg" />     |
| South Sudan                                  | SS        | <img src="./src/SS.svg" />     |
| Sao Tome and Principe                        | ST        | <img src="./src/ST.svg" />     |
| El Salvador                                  | SV        | <img src="./src/SV.svg" />     |
| Sint Maarten                                 | SX        | <img src="./src/SX.svg" />     |
| Syria                                        | SY        | <img src="./src/SY.svg" />     |
| Swaziland                                    | SZ        | <img src="./src/SZ.svg" />     |
| Turks and Caicos Islands                     | TC        | <img src="./src/TC.svg" />     |
| Chad                                         | TD        | <img src="./src/TD.svg" />     |
| French Southern Territories                  | TF        | <img src="./src/TF.svg" />     |
| Togo                                         | TG        | <img src="./src/TG.svg" />     |
| Thailand                                     | TH        | <img src="./src/TH.svg" />     |
| Tajikistan                                   | TJ        | <img src="./src/TJ.svg" />     |
| Tokelau                                      | TK        | <img src="./src/TK.svg" />     |
| Timor-Leste                                  | TL        | <img src="./src/TL.svg" />     |
| Turkmenistan                                 | TM        | <img src="./src/TM.svg" />     |
| Tunisia                                      | TN        | <img src="./src/TN.svg" />     |
| Tonga                                        | TO        | <img src="./src/TO.svg" />     |
| Turkey                                       | TR        | <img src="./src/TR.svg" />     |
| Trinidad and Tobago                          | TT        | <img src="./src/TT.svg" />     |
| Tuvalu                                       | TV        | <img src="./src/TV.svg" />     |
| Taiwan                                       | TW        | <img src="./src/TW.svg" />     |
| Tanzania                                     | TZ        | <img src="./src/TZ.svg" />     |
| Ukraine                                      | UA        | <img src="./src/UA.svg" />     |
| Uganda                                       | UG        | <img src="./src/UG.svg" />     |
| United States of America                     | US        | <img src="./src/US.svg" />     |
| Uruguay                                      | UY        | <img src="./src/UY.svg" />     |
| Uzbekistan                                   | UZ        | <img src="./src/UZ.svg" />     |
| Vatican                                      | VA        | <img src="./src/VA.svg" />     |
| St Vincent & the Grenadines                  | VC        | <img src="./src/VC.svg" />     |
| Venezuela                                    | VE        | <img src="./src/VE.svg" />     |
| British Virgin Islands                       | VG        | <img src="./src/VG.svg" />     |
| U.S. Virgin Islands                          | VI        | <img src="./src/VI.svg" />     |
| Vietnam                                      | VN        | <img src="./src/VN.svg" />     |
| Vanuatu                                      | VU        | <img src="./src/VU.svg" />     |
| Samoa                                        | WS        | <img src="./src/WS.svg" />     |
| Kosovo                                       | XK        | <img src="./src/XK.svg" />     |
| Yemen                                        | YE        | <img src="./src/YE.svg" />     |
| Mayotte                                      | YT        | <img src="./src/YT.svg" />     |
| South Africa                                 | ZA        | <img src="./src/ZA.svg" />     |
| Zambia                                       | ZM        | <img src="./src/ZM.svg" />     |
| Zimbabwe                                     | ZW        | <img src="./src/ZW.svg" />     |
|                                              | ZZ        | <img src="./src/ZZ.svg" />     |
