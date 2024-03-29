import {chunk} from "../functions/chunk.js";

//первоначальный Rows
 export const rows =
    [
        {
            "id": "5c2286fb23e87be312d55d9a",
            "name": {
                "firstName": "Brooks",
                "lastName": "Stone"
            },
            "about": "Qui aliquip esse occaecat voluptate cillum laborum do adipisicing ea. Lorem dolor pariatur exercitation et Lorem voluptate reprehenderit. Culpa nisi sunt laborum culpa eu et nulla aute aliqua commodo cupidatat culpa. Eu laboris dolor enim officia mollit labore proident proident tempor ex minim magna dolor. Ipsum cillum officia irure amet enim voluptate consequat deserunt laborum nulla excepteur pariatur voluptate incididunt. In excepteur adipisicing dolor ea occaecat elit. Irure dolor quis cillum minim voluptate.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fb7f4c26c63eff1b66",
            "name": {
                "firstName": "Johnston",
                "lastName": "Tate"
            },
            "about": "Eu ipsum est in exercitation voluptate occaecat fugiat fugiat ea elit ad veniam adipisicing ullamco. Laboris consectetur enim dolore amet exercitation sit non do reprehenderit non. Proident consequat anim non voluptate non culpa sit occaecat adipisicing. Reprehenderit dolor cillum laboris incididunt exercitation quis esse in ad ut voluptate commodo in. Exercitation veniam adipisicing irure ut qui nulla.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fb25005bd0905c04e1",
            "name": {
                "firstName": "Susie",
                "lastName": "Newman"
            },
            "about": "Non eiusmod minim ut anim qui non dolore veniam. Lorem veniam nostrud ullamco ad enim commodo incididunt amet ipsum irure. Minim sint tempor incididunt quis. Excepteur commodo mollit elit voluptate reprehenderit eiusmod ex nostrud dolor mollit. Culpa duis pariatur anim sunt in irure ex aliqua.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb982c7590025be630",
            "name": {
                "firstName": "Kelly",
                "lastName": "Schwartz"
            },
            "about": "Et commodo velit proident reprehenderit. In cillum adipisicing ut excepteur nostrud pariatur proident. Qui consectetur esse aliqua incididunt dolor esse ullamco cupidatat tempor mollit. Elit nulla eiusmod occaecat laborum laborum consequat eu nisi labore tempor aute. Dolor sunt anim reprehenderit non excepteur dolor consectetur eu.",
            "eyeColor": "green"
        },
        {
            "id": "5c2286fbc20c5d4618855c36",
            "name": {
                "firstName": "Chris",
                "lastName": "Dorsey"
            },
            "about": "Aliquip velit ut ex nisi officia proident. Eu anim elit deserunt exercitation officia tempor proident eu non incididunt aliqua. Lorem consequat commodo laborum minim ad consectetur. Sunt et anim dolor mollit tempor irure. Non fugiat anim laborum fugiat duis et culpa ea enim excepteur. Amet sint enim aliquip est.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fb0d7c75cda0c18b33",
            "name": {
                "firstName": "Jimmie",
                "lastName": "Gay"
            },
            "about": "Nisi deserunt eu consectetur occaecat minim aliqua eu cupidatat ea. Esse consectetur deserunt nulla ullamco sit aute. Ad aliqua sint veniam enim exercitation in eiusmod ut aliqua consequat ipsum laborum. Aliqua excepteur non dolore adipisicing aliquip incididunt nostrud dolore consequat.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fb49295e3d2caa2b19",
            "name": {
                "firstName": "Moon",
                "lastName": "Ortiz"
            },
            "about": "Eiusmod amet commodo sit nulla velit eu eiusmod. Fugiat proident sunt fugiat nostrud occaecat velit qui. Ea aute culpa irure excepteur esse. Laborum esse in enim aliqua proident ea cupidatat enim ea enim exercitation ullamco. Aliquip culpa enim et tempor elit enim quis sint ea.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fbb2ad79f1f40500d3",
            "name": {
                "firstName": "Beach",
                "lastName": "Lindsey"
            },
            "about": "Laborum pariatur fugiat ut fugiat nulla ad nostrud minim nulla do do occaecat labore. Incididunt exercitation nulla ea sint quis excepteur reprehenderit. Amet ea tempor dolor incididunt aliqua reprehenderit laborum excepteur consectetur consequat minim ea. Velit labore ex non reprehenderit. Dolor laboris voluptate sit adipisicing ad officia tempor aliqua eu. Aliqua do cupidatat veniam nulla. Aliqua minim tempor non eu commodo quis ex.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fb25a61a6ff446ab4f",
            "name": {
                "firstName": "Gilbert",
                "lastName": "Sanford"
            },
            "about": "Cupidatat veniam occaecat deserunt ullamco do magna ex voluptate exercitation irure. Proident ea officia laboris nulla eu fugiat aliqua veniam duis exercitation aute anim velit. Minim nulla amet id mollit reprehenderit id. Duis ullamco occaecat mollit excepteur adipisicing nostrud velit exercitation quis veniam commodo aliquip veniam. Mollit sunt culpa nulla excepteur adipisicing do ut fugiat. Mollit elit pariatur esse ea officia mollit exercitation.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fbfb41f12cd0bc3fb2",
            "name": {
                "firstName": "Julie",
                "lastName": "Shepherd"
            },
            "about": "Excepteur quis exercitation sint officia commodo commodo aliquip ex exercitation laborum quis qui. Reprehenderit aliqua dolore aliqua est veniam et. Cupidatat sint ea ex consectetur eu aliqua cillum velit nulla ipsum fugiat qui ad.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fbd9e655815bd489d2",
            "name": {
                "firstName": "Callie",
                "lastName": "Ford"
            },
            "about": "Ea elit veniam laborum adipisicing. Lorem consequat magna ea et aliqua duis in mollit ea commodo officia amet et. Amet eu cupidatat proident commodo ex exercitation est voluptate mollit laborum et tempor duis nisi. Qui cupidatat adipisicing enim irure enim elit ullamco.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fbbabce0ea304e7b70",
            "name": {
                "firstName": "Beatriz",
                "lastName": "Lancaster"
            },
            "about": "Cillum quis incididunt aute laboris ad ad irure laborum fugiat nostrud. Ad aute sint duis excepteur ut officia. Qui consequat incididunt magna incididunt anim sunt cillum dolor incididunt veniam nulla elit id. Ullamco eu in tempor laborum sunt consectetur cupidatat ex amet Lorem reprehenderit in. Exercitation laborum labore minim ad. Occaecat culpa amet aute cupidatat nostrud excepteur.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb639d7dbcc0cae9e6",
            "name": {
                "firstName": "Johnnie",
                "lastName": "Knowles"
            },
            "about": "In esse exercitation tempor proident nulla est amet ut. Enim pariatur do laboris dolor Lorem amet ullamco eiusmod aliqua excepteur elit nisi. Adipisicing deserunt cupidatat in reprehenderit adipisicing proident deserunt. Elit adipisicing officia excepteur magna magna officia incididunt minim irure pariatur. Aliquip culpa do ullamco labore aliqua minim reprehenderit magna esse Lorem culpa. Consequat elit labore irure cupidatat id qui pariatur deserunt non consequat eiusmod et minim amet.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb5d734a18b3163fc8",
            "name": {
                "firstName": "Finley",
                "lastName": "Watts"
            },
            "about": "Occaecat in velit ullamco ad mollit ea nisi mollit sit esse consectetur exercitation reprehenderit. Labore cupidatat voluptate quis ipsum esse excepteur. Enim sunt officia culpa Lorem ipsum voluptate id aliquip. Aute nostrud consectetur consectetur quis aute quis exercitation aliqua elit magna.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fb54624961f84b6607",
            "name": {
                "firstName": "Brady",
                "lastName": "Trevino"
            },
            "about": "In sunt non reprehenderit Lorem sit exercitation anim eiusmod irure. Non anim Lorem nulla in culpa non pariatur nulla in Lorem enim sit. Sunt pariatur deserunt occaecat ut. Nostrud enim laborum pariatur Lorem voluptate reprehenderit do aute officia veniam. Duis laborum et ea laboris elit consectetur id enim enim nisi consequat. Tempor occaecat culpa qui ipsum nisi fugiat nisi sit esse ea. Culpa est nisi Lorem officia commodo minim ullamco cupidatat nisi irure.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fb5c2ac3cd9312946c",
            "name": {
                "firstName": "Vanessa",
                "lastName": "Lowe"
            },
            "about": "Reprehenderit magna esse tempor dolor deserunt veniam officia ullamco ipsum. Officia nostrud dolore fugiat amet reprehenderit sint velit est nisi exercitation in et. Aliqua quis nisi duis minim. Exercitation pariatur officia aliquip do anim nisi nisi dolor pariatur consectetur ea.",
            "eyeColor": "green"
        },
        {
            "id": "5c2286fbad86e5926e025b52",
            "name": {
                "firstName": "Maricela",
                "lastName": "Roberson"
            },
            "about": "Duis cupidatat qui nulla ea elit enim est incididunt aute consequat fugiat minim non sint. Id ipsum exercitation minim minim aute. Minim magna aliquip adipisicing in fugiat aliquip duis proident.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fbe9146dab0289ee25",
            "name": {
                "firstName": "Marva",
                "lastName": "Ray"
            },
            "about": "Non aliqua cupidatat quis adipisicing non consequat. Nulla eiusmod sint minim aliqua sint nostrud occaecat nisi incididunt. Dolor exercitation enim elit nisi aute cillum proident duis fugiat do ex excepteur. Deserunt fugiat est laborum esse veniam. Magna ipsum ea incididunt proident.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fb6ed4e8c39e8f549c",
            "name": {
                "firstName": "Mcclure",
                "lastName": "Melendez"
            },
            "about": "Exercitation aliqua id cillum laborum amet officia et. Est ad nulla do incididunt consequat officia laborum magna laboris. Incididunt est voluptate voluptate non est ipsum commodo enim voluptate mollit sit ullamco aliquip ea. Eiusmod incididunt ea occaecat incididunt adipisicing eiusmod deserunt elit reprehenderit. Est nulla minim commodo quis id irure proident do magna aliqua culpa aute cillum reprehenderit. Incididunt nulla Lorem officia veniam sunt culpa. Proident sunt sint incididunt non voluptate consequat amet elit ea ut incididunt dolore.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fb42cbbcf764de06c8",
            "name": {
                "firstName": "Vasquez",
                "lastName": "Manning"
            },
            "about": "Sunt mollit anim nulla consequat. Commodo laborum Lorem labore sunt pariatur consequat velit ad. Pariatur aute Lorem dolor cillum dolore sit ut. Deserunt excepteur elit do qui ex anim pariatur pariatur dolor eu laborum cillum ipsum veniam. Nisi dolore ipsum irure magna do amet ex esse in laboris aliqua ullamco fugiat cupidatat. Consequat tempor velit consectetur consequat enim do Lorem adipisicing tempor laboris. Mollit officia cupidatat veniam duis minim cillum nostrud incididunt ullamco ad incididunt enim est.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fb03b63d22fad39e10",
            "name": {
                "firstName": "Hawkins",
                "lastName": "Hopkins"
            },
            "about": "Fugiat aliqua esse eu quis velit nulla fugiat id reprehenderit sint non irure ea enim. Elit laborum sunt esse occaecat aliqua veniam dolore nostrud dolore. Eiusmod et commodo dolor exercitation Lorem consectetur qui sint eu. Culpa magna ut consequat Lorem nisi proident nisi irure adipisicing laboris velit dolore Lorem.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fb88b8cf12c9a35aca",
            "name": {
                "firstName": "Angelina",
                "lastName": "Gillespie"
            },
            "about": "Est esse deserunt laborum sint sunt occaecat cupidatat enim. Duis aliqua officia cupidatat cupidatat. Eu enim elit eu magna proident est veniam. Pariatur proident elit in aliqua ad consectetur proident nostrud anim reprehenderit.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb73c192df1d6cf949",
            "name": {
                "firstName": "Meghan",
                "lastName": "Robbins"
            },
            "about": "Lorem nostrud aute incididunt proident non laboris esse non do excepteur. Sint mollit consequat enim minim quis laborum ad cupidatat aliquip minim duis. Sunt excepteur id esse voluptate.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fb8ab95671e3765259",
            "name": {
                "firstName": "Malone",
                "lastName": "Mack"
            },
            "about": "Esse nostrud voluptate commodo commodo ad consectetur aliquip tempor velit veniam ex. Culpa reprehenderit pariatur aliqua in occaecat cillum esse laboris enim exercitation ex minim. Labore non sint deserunt id. Et deserunt id anim magna amet. Non ipsum commodo commodo sint nostrud dolore et veniam elit ad. Est dolor non ad id enim ut laborum do consectetur id officia. Exercitation cillum occaecat eiusmod exercitation.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fba5bd3d862ac4d7e0",
            "name": {
                "firstName": "Eula",
                "lastName": "Aguirre"
            },
            "about": "Consectetur do cupidatat reprehenderit nulla anim dolore anim voluptate esse non ex ullamco eu ea. Deserunt do irure ad incididunt ut. Minim pariatur ipsum quis ipsum reprehenderit exercitation voluptate ut occaecat labore amet. Nisi sit ex dolor nulla reprehenderit nulla ullamco sint aliqua. Ullamco non aliquip elit est eiusmod.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb4148f031437ee69c",
            "name": {
                "firstName": "Katy",
                "lastName": "Church"
            },
            "about": "Pariatur irure dolore excepteur commodo do id commodo ex sit nulla tempor fugiat dolor. Ad ullamco labore eiusmod laboris quis excepteur velit minim exercitation elit non irure. Occaecat voluptate nostrud cillum ea laboris exercitation consectetur ex. Incididunt nisi magna occaecat reprehenderit laboris esse. Laborum nulla fugiat sint incididunt. Deserunt quis ipsum aute eiusmod anim dolore sunt.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb49d38b81288fca71",
            "name": {
                "firstName": "Blanca",
                "lastName": "Bradshaw"
            },
            "about": "Dolore quis ex laborum anim tempor adipisicing Lorem pariatur reprehenderit commodo sit fugiat. Cillum consectetur ea reprehenderit anim. Dolor voluptate proident pariatur veniam reprehenderit aliqua nostrud.",
            "eyeColor": "green"
        },
        {
            "id": "5c2286fb0afb209b3bec8073",
            "name": {
                "firstName": "Kay",
                "lastName": "William"
            },
            "about": "Consequat eu fugiat id elit laborum do nulla Lorem nulla in laborum laborum. Sit officia nulla amet consequat commodo deserunt eu cupidatat labore nostrud nostrud. Cillum nulla cillum ad nostrud eiusmod elit esse tempor commodo proident nostrud occaecat reprehenderit. Excepteur in officia mollit in qui non aute in sunt sint Lorem eiusmod consequat.",
            "eyeColor": "green"
        },
        {
            "id": "5c2286fbbfc54c696f663211",
            "name": {
                "firstName": "Camacho",
                "lastName": "Wells"
            },
            "about": "Occaecat deserunt consequat deserunt officia ipsum ex. Nostrud officia in voluptate tempor velit nisi dolor cupidatat irure quis. Deserunt excepteur deserunt veniam exercitation ea cillum nostrud occaecat excepteur in ut veniam. Anim voluptate pariatur sunt consequat pariatur occaecat laborum nisi esse labore cupidatat. Do proident cillum consectetur enim Lorem voluptate proident.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fbb73f5c893d46dde2",
            "name": {
                "firstName": "Bradshaw",
                "lastName": "Hodges"
            },
            "about": "Ea quis sint magna amet nulla ut nostrud. Ea sunt do aliquip cupidatat pariatur officia ex laboris proident quis minim ea. Officia anim minim aliquip labore ex anim irure qui anim magna labore aliqua occaecat. Velit consequat duis culpa esse dolor. Duis non qui fugiat ex laboris.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb6072dd80f1d56c39",
            "name": {
                "firstName": "Rutledge",
                "lastName": "Acosta"
            },
            "about": "Dolore minim anim sint eu culpa et eu adipisicing nisi laborum laborum id qui veniam. Anim reprehenderit est dolor proident velit nisi. Anim eu elit enim laborum minim duis. Consequat et ipsum ex esse cillum excepteur commodo commodo irure sit proident. In deserunt nulla qui fugiat.",
            "eyeColor": "green"
        },
        {
            "id": "5c2286fbc750d871ffb16329",
            "name": {
                "firstName": "Cline",
                "lastName": "Fitzpatrick"
            },
            "about": "In incididunt reprehenderit quis do consequat duis et in. Ea mollit mollit nulla deserunt nulla commodo voluptate laboris cupidatat sit non. Sint eiusmod minim ut commodo sint. Quis in ea non consectetur do aliquip veniam aute.",
            "eyeColor": "green"
        },
        {
            "id": "5c2286fb79bf32d653202f75",
            "name": {
                "firstName": "Sloan",
                "lastName": "Dale"
            },
            "about": "Laboris ut ullamco consequat nisi occaecat sint nisi. Commodo minim deserunt officia exercitation est aliquip pariatur et aliquip quis dolore deserunt esse. Eu consectetur elit do veniam sit.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb81d27ce4dd8a84ae",
            "name": {
                "firstName": "Buckner",
                "lastName": "Fowler"
            },
            "about": "Est anim labore ea qui officia ea sunt dolor. Elit aliquip dolore amet nostrud qui cillum anim aute ut voluptate non non. Consectetur cillum velit elit sit dolore occaecat amet sunt mollit quis aute labore enim commodo. Minim eu in nisi mollit veniam aliquip fugiat duis nostrud deserunt incididunt duis.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fbf5a16ef438aaa5fa",
            "name": {
                "firstName": "Hays",
                "lastName": "Hurley"
            },
            "about": "Consequat commodo anim est ex veniam dolor pariatur officia officia elit quis sint esse. Commodo consectetur esse enim mollit reprehenderit qui ad. Mollit magna ipsum et exercitation voluptate veniam adipisicing duis nisi dolore ad do quis tempor. Esse ea nisi cupidatat non elit velit anim nulla qui nisi commodo ullamco anim.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fbab253d31546ba1ac",
            "name": {
                "firstName": "Ryan",
                "lastName": "Case"
            },
            "about": "Excepteur quis dolor qui laborum anim anim cupidatat culpa esse sunt excepteur. Incididunt elit nostrud excepteur anim nostrud sit veniam deserunt sunt id ipsum labore aute dolor. Est culpa in do ea Lorem fugiat cillum reprehenderit. Consectetur cupidatat irure adipisicing dolore voluptate sit ex. Exercitation in tempor duis ea irure nisi minim velit ipsum irure. Cillum ullamco cillum commodo fugiat mollit.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fb63577dc573f8a927",
            "name": {
                "firstName": "Tameka",
                "lastName": "Walls"
            },
            "about": "Aliqua tempor do tempor Lorem laborum ut consectetur commodo velit magna non deserunt quis. Eu et cupidatat pariatur amet laborum amet officia eu voluptate ad adipisicing. Occaecat nisi Lorem esse commodo dolore tempor dolore exercitation ea sint labore. Do proident id quis ex do consequat non eiusmod consequat pariatur nostrud. Ad id adipisicing reprehenderit sit amet fugiat in eiusmod sunt incididunt laboris.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fb82222dbb58fb241c",
            "name": {
                "firstName": "Diane",
                "lastName": "Pruitt"
            },
            "about": "Occaecat ad reprehenderit aute quis culpa anim tempor officia. Fugiat laboris et nostrud veniam aliquip. Ut nulla culpa quis anim sunt aliquip. Proident esse incididunt do commodo est non ea dolor nisi adipisicing quis id exercitation. Nisi eu do pariatur id officia nostrud culpa amet. Anim duis anim aute amet pariatur irure anim deserunt irure sit proident sunt exercitation. Culpa nisi excepteur id laborum occaecat esse occaecat laborum aliquip non non.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb1802a0ecd0aa6873",
            "name": {
                "firstName": "Mccullough",
                "lastName": "Sullivan"
            },
            "about": "Velit ipsum elit amet aute incididunt culpa occaecat dolore cillum esse quis magna veniam. Elit ipsum cupidatat irure Lorem minim nulla deserunt. Incididunt officia esse Lorem cillum sint qui amet esse est.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fb02d305780e20521b",
            "name": {
                "firstName": "Fay",
                "lastName": "Burgess"
            },
            "about": "Occaecat non nisi nisi qui minim eiusmod aute ullamco culpa aliquip ut irure. Culpa sit exercitation dolore ullamco velit proident incididunt. Amet aliqua adipisicing cillum sint cupidatat ullamco cillum aute eiusmod ex. Adipisicing reprehenderit proident nulla commodo mollit tempor eiusmod nulla eiusmod. Non commodo amet reprehenderit aute. Officia voluptate in adipisicing nostrud pariatur in. Labore commodo do commodo excepteur nostrud ea occaecat ullamco pariatur veniam excepteur aliquip fugiat amet.",
            "eyeColor": "green"
        },
        {
            "id": "5c2286fbe330f035ee90c0db",
            "name": {
                "firstName": "Kasey",
                "lastName": "Joyner"
            },
            "about": "Dolor aliqua quis nulla fugiat enim cillum aute excepteur. Qui qui commodo ipsum deserunt velit fugiat ex ipsum Lorem velit. Veniam veniam aliquip commodo adipisicing officia sint ut dolor et. Fugiat consequat ad nulla nostrud aliqua Lorem. Sit tempor ut esse non nisi officia qui consectetur velit adipisicing sit excepteur cupidatat.",
            "eyeColor": "blue"
        },
        {
            "id": "5c2286fbf21aa796126a9505",
            "name": {
                "firstName": "Delia",
                "lastName": "Kline"
            },
            "about": "Nulla esse sunt aute reprehenderit aliqua nisi eiusmod dolor. Excepteur consequat nisi ea ex velit et officia voluptate. Qui culpa mollit culpa ut enim non laborum in amet. Id aute cupidatat magna ipsum consequat magna officia velit.",
            "eyeColor": "green"
        },
        {
            "id": "5c2286fb771275c314fa32d2",
            "name": {
                "firstName": "Finch",
                "lastName": "Keller"
            },
            "about": "Proident nostrud voluptate incididunt nostrud Lorem cillum voluptate cillum ipsum duis irure. Ut exercitation aliquip ullamco laboris sunt incididunt magna est ipsum cillum. Dolor exercitation ullamco dolor anim et mollit ex proident amet Lorem proident laboris enim. Tempor laboris dolore anim anim officia voluptate exercitation sint eiusmod. Pariatur ex laborum nulla adipisicing ex cupidatat ea officia duis aute. Do anim velit dolor ad quis occaecat id.",
            "eyeColor": "green"
        },
        {
            "id": "5c2286fb166f6243646aa197",
            "name": {
                "firstName": "Yang",
                "lastName": "Reeves"
            },
            "about": "Fugiat deserunt veniam incididunt cillum irure nulla esse. Minim ut dolor in consequat anim incididunt. Consequat incididunt culpa enim laborum et ipsum.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fbec1ed6670a8e3fce",
            "name": {
                "firstName": "Mayer",
                "lastName": "Boyd"
            },
            "about": "Dolor enim ad aliquip cupidatat ut voluptate voluptate Lorem proident dolore. Anim id ullamco consequat aliqua ut voluptate et ea minim officia. Dolor ex irure sint Lorem ad tempor duis. Sit ullamco ullamco eu esse cupidatat ut culpa ut. Reprehenderit ex proident do esse labore fugiat non Lorem exercitation excepteur ex et. Mollit in aliqua nostrud irure ipsum ad cupidatat eu aliqua ut officia. Est Lorem ut do et duis irure velit ipsum ullamco duis.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fb8e5edeca325590ee",
            "name": {
                "firstName": "Molly",
                "lastName": "Gentry"
            },
            "about": "Do aliquip occaecat labore excepteur officia. Tempor Lorem ipsum qui enim non et quis velit. Commodo ut commodo aliqua proident irure minim non adipisicing id dolore. Veniam voluptate esse nostrud ut anim ea. Do dolor id quis commodo eiusmod aliquip in ex duis fugiat proident amet ad. Excepteur fugiat occaecat ad Lorem esse est quis pariatur aliqua amet sunt consequat consectetur. Pariatur laboris mollit ut sunt commodo aute quis velit fugiat qui nostrud consectetur qui consectetur.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fbe2e14f332b2ec00d",
            "name": {
                "firstName": "Misty",
                "lastName": "Fernandez"
            },
            "about": "Velit est aliqua laboris ea commodo. Nisi adipisicing veniam deserunt excepteur do excepteur in sit ullamco do laborum minim ex. Qui dolor ullamco consectetur esse ut irure dolor cupidatat duis dolor eiusmod cupidatat.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fbc0dd407398e1a2a1",
            "name": {
                "firstName": "George",
                "lastName": "Yang"
            },
            "about": "Officia aliquip consequat reprehenderit do aute Lorem in proident reprehenderit ad ullamco eiusmod esse consectetur. Eu fugiat Lorem ullamco irure minim pariatur aliqua magna mollit non eu exercitation exercitation. Enim Lorem exercitation fugiat ad reprehenderit enim laborum qui. Id officia reprehenderit veniam nostrud officia laboris minim ad fugiat ex nulla dolor ut proident. Nulla consequat amet anim id eiusmod minim.",
            "eyeColor": "brown"
        },
        {
            "id": "5c2286fbaee7a091b9ead63f",
            "name": {
                "firstName": "Lucille",
                "lastName": "Clark"
            },
            "about": "Irure ex exercitation et dolore. Quis duis dolor quis do deserunt voluptate. Aliquip commodo sunt consequat non consectetur anim qui voluptate commodo culpa. Laborum mollit tempor adipisicing ad do mollit dolor ex veniam in quis exercitation. Consectetur consectetur incididunt pariatur sunt dolore. Consequat ullamco consectetur sunt proident sunt excepteur pariatur dolor magna ut esse tempor.",
            "eyeColor": "red"
        },
        {
            "id": "5c2286fb7761161aac35caaa",
            "name": {
                "firstName": "Leblanc",
                "lastName": "Monroe"
            },
            "about": "Nulla consectetur laboris nisi labore laboris reprehenderit. Deserunt aute pariatur nostrud tempor amet ad pariatur et ipsum cupidatat nostrud. Elit irure labore nostrud et reprehenderit enim. Deserunt sint magna sunt ex commodo nostrud adipisicing et laborum est amet.",
            "eyeColor": "brown"
        }
    ]

//разбваем Rows на массив с массивами по 10 строк для пагинации
export const Rows = chunk(rows, 10);