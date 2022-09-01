// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const syncAndSeed = async () => {
  try {
    Campus.hasMany(Student, { foreignKey: 'campusId' });
    Student.belongsTo(Campus);

    // will force the db to re-instantiate and seed every time
    await db.sync({ force: true });

    // dummy data of students; close this code block in your IDE
    const students = [
      {
          firstName: 'Eve',
          lastName: 'Cho',
          email: 'evecho@gmail.com',
          gpa: 2.7,
          campusId: 1,
      },
      {
          firstName: 'Helen',
          lastName: 'Cho',
          email: 'helencho@gmail.com',
          gpa: 2.8,
          campusId: 2,
      },
      {
          firstName: 'Sarah',
          lastName: 'Kim',
          email: 'sarahkim@gmail.com',
          gpa: 2.5
      },
      {
          firstName: 'Seren',
          lastName: 'Ryuu',
          email: 'serenryuu@gmail.com',
          gpa: 2.6
      },
      {
          firstName: "Patrice",
          lastName: "Dibbin",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 50,
          imageUrl: "http://dummyimage.com/227x231.png/cc0000/ffffff"
      }, {
          firstName: "Latashia",
          lastName: "Geydon",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: null,
          imageUrl: "http://dummyimage.com/214x212.png/dddddd/000000"
      }, {
          firstName: "Sawyer",
          lastName: "Acutt",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 61,
          imageUrl: "http://dummyimage.com/230x232.png/ff4444/ffffff"
      }, {
          firstName: "Tailor",
          lastName: "Donson",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: null,
          imageUrl: "http://dummyimage.com/239x235.png/cc0000/ffffff"
      }, {
          firstName: "Aluino",
          lastName: "Calcott",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 74,
          imageUrl: "http://dummyimage.com/231x235.png/ff4444/ffffff"
      }, {
          firstName: "Milena",
          lastName: "Wolstencroft",
          email: "mwolstencroft5@biblegateway.com",
          gpa: 2.86,
          campusId: null,
          imageUrl: "http://dummyimage.com/214x247.png/dddddd/000000"
      }, {
          firstName: "Nyssa",
          lastName: "Scarlan",
          email: "nscarlan6@usatoday.com",
          gpa: 2.06,
          campusId: 81,
          imageUrl: "http://dummyimage.com/240x204.png/ff4444/ffffff"
      }, {
          firstName: "Othella",
          lastName: "O'Gavin",
          email: "oogavin7@vistaprint.com",
          gpa: 0.71,
          campusId: 94,
          imageUrl: "http://dummyimage.com/206x233.png/cc0000/ffffff"
      }, {
          firstName: "Regan",
          lastName: "Hazel",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 54,
          imageUrl: "http://dummyimage.com/243x235.png/cc0000/ffffff"
      }, {
          firstName: "Clio",
          lastName: "Doblin",
          email: "cdoblin9@weather.com",
          gpa: 0.59,
          campusId: 25,
          imageUrl: "http://dummyimage.com/228x201.png/ff4444/ffffff"
      }, {
          firstName: "Afton",
          lastName: "Elsmor",
          email: "aelsmora@patch.com",
          gpa: 0.9,
          campusId: null,
          imageUrl: "http://dummyimage.com/203x207.png/dddddd/000000"
      }, {
          firstName: "Cosmo",
          lastName: "Wyldbore",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: null,
          imageUrl: "http://dummyimage.com/216x213.png/5fa2dd/ffffff"
      }, {
          firstName: "Kurt",
          lastName: "Gaythor",
          email: "kgaythorc@baidu.com",
          gpa: 2.67,
          campusId: 68,
          imageUrl: "http://dummyimage.com/229x219.png/dddddd/000000"
      }, {
          firstName: "Janot",
          lastName: "McMillam",
          email: "jmcmillamd@dailymotion.com",
          gpa: 1.52,
          campusId: null,
          imageUrl: "http://dummyimage.com/224x211.png/cc0000/ffffff"
      }, {
          firstName: "Brear",
          lastName: "Wilstead",
          email: "bwilsteade@unesco.org",
          gpa: 3.11,
          campusId: 55,
          imageUrl: "http://dummyimage.com/207x211.png/cc0000/ffffff"
      }, {
          firstName: "Dennison",
          lastName: "Tidball",
          email: "dtidballf@tripadvisor.com",
          gpa: 0.53,
          campusId: 43,
          imageUrl: "http://dummyimage.com/233x206.png/ff4444/ffffff"
      }, {
          firstName: "Dietrich",
          lastName: "Gruszka",
          email: "dgruszkag@adobe.com",
          gpa: 0.78,
          campusId: null,
          imageUrl: null
      }, {
          firstName: "Fred",
          lastName: "Berthe",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 84,
          imageUrl: "http://dummyimage.com/236x205.png/cc0000/ffffff"
      }, {
          firstName: "Sonnie",
          lastName: "Tite",
          email: "stitei@ihg.com",
          gpa: 3.81,
          campusId: null,
          imageUrl: "http://dummyimage.com/211x240.png/cc0000/ffffff"
      }, {
          firstName: "Joyann",
          lastName: "Voules",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: null,
          imageUrl: "http://dummyimage.com/210x200.png/dddddd/000000"
      }, {
          firstName: "Twila",
          lastName: "Duding",
          email: "tdudingk@yahoo.com",
          gpa: 0.02,
          campusId: 35,
          imageUrl: "http://dummyimage.com/232x241.png/dddddd/000000"
      }, {
          firstName: "Carlee",
          lastName: "Kayne",
          email: "ckaynel@mtv.com",
          gpa: 2.33,
          campusId: null,
          imageUrl: "http://dummyimage.com/200x240.png/ff4444/ffffff"
      }, {
          firstName: "Fred",
          lastName: "Simonini",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 77,
          imageUrl: "http://dummyimage.com/242x238.png/cc0000/ffffff"
      }, {
          firstName: "Daveta",
          lastName: "Pressnell",
          email: "dpressnelln@myspace.com",
          gpa: 3.51,
          campusId: 99,
          imageUrl: "http://dummyimage.com/240x237.png/dddddd/000000"
      }, {
          firstName: "Lorenzo",
          lastName: "Saltmarsh",
          email: "lsaltmarsho@imdb.com",
          gpa: 1.74,
          campusId: 3,
          imageUrl: "http://dummyimage.com/232x249.png/ff4444/ffffff"
      }, {
          firstName: "Ginnifer",
          lastName: "Saward",
          email: "gsawardp@facebook.com",
          gpa: 0.28,
          campusId: 42,
          imageUrl: "http://dummyimage.com/247x250.png/dddddd/000000"
      }, {
          firstName: "Gwenette",
          lastName: "Petriello",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: null,
          imageUrl: "http://dummyimage.com/235x211.png/ff4444/ffffff"
      }, {
          firstName: "Shelby",
          lastName: "Hercules",
          email: "sherculesr@hatena.ne.jp",
          gpa: 0.96,
          campusId: null,
          imageUrl: null
      }, {
          firstName: "Devora",
          lastName: "Leonida",
          email: "dleonidas@hhs.gov",
          gpa: 0.68,
          campusId: 21,
          imageUrl: "http://dummyimage.com/227x232.png/dddddd/000000"
      }, {
          firstName: "Travers",
          lastName: "Weatherdon",
          email: "tweatherdont@blog.com",
          gpa: 2.48,
          campusId: 53,
          imageUrl: "http://dummyimage.com/201x212.png/dddddd/000000"
      }, {
          firstName: "Tova",
          lastName: "Tuite",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 83,
          imageUrl: "http://dummyimage.com/244x215.png/cc0000/ffffff"
      }, {
          firstName: "Kippar",
          lastName: "Geator",
          email: "kgeatorv@aol.com",
          gpa: 3.95,
          campusId: 59,
          imageUrl: "http://dummyimage.com/231x219.png/dddddd/000000"
      }, {
          firstName: "Tarra",
          lastName: "Sketchley",
          email: "tsketchleyw@wisc.edu",
          gpa: 2.75,
          campusId: 52,
          imageUrl: null
      }, {
          firstName: "Nonna",
          lastName: "Kelloway",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 51,
          imageUrl: "http://dummyimage.com/250x218.png/5fa2dd/ffffff"
      }, {
          firstName: "Ashia",
          lastName: "Casine",
          email: "acasiney@amazon.co.uk",
          gpa: 0.83,
          campusId: 41,
          imageUrl: "http://dummyimage.com/236x213.png/dddddd/000000"
      }, {
          firstName: "Tawnya",
          lastName: "Permain",
          email: "tpermainz@wikispaces.com",
          gpa: 3.58,
          campusId: null,
          imageUrl: "http://dummyimage.com/209x217.png/ff4444/ffffff"
      }, {
          firstName: "Carey",
          lastName: "Loache",
          email: "cloache10@t-online.de",
          gpa: 3.74,
          campusId: 84,
          imageUrl: "http://dummyimage.com/216x224.png/5fa2dd/ffffff"
      }, {
          firstName: "Ira",
          lastName: "Gladtbach",
          email: "igladtbach11@archive.org",
          gpa: 2.36,
          campusId: 79,
          imageUrl: "http://dummyimage.com/210x203.png/5fa2dd/ffffff"
      }, {
          firstName: "Drud",
          lastName: "Dimitrie",
          email: "ddimitrie12@buzzfeed.com",
          gpa: 0.56,
          campusId: 78,
          imageUrl: null
      }, {
          firstName: "Lyndsey",
          lastName: "Elflain",
          email: "lelflain13@bandcamp.com",
          gpa: 3.66,
          campusId: 65,
          imageUrl: "http://dummyimage.com/221x216.png/5fa2dd/ffffff"
      }, {
          firstName: "Ginelle",
          lastName: "Macias",
          email: "gmacias14@thetimes.co.uk",
          gpa: 0.12,
          campusId: 36,
          imageUrl: "http://dummyimage.com/221x221.png/cc0000/ffffff"
        }, {
          firstName: "Leanora",
          lastName: "Candy",
          email: "lcandy15@posterous.com",
          gpa: 3.41,
          campusId: 58,
          imageUrl: "http://dummyimage.com/238x212.png/dddddd/000000"
      }, {
          firstName: "Claire",
          lastName: "Aronsohn",
          email: "caronsohn16@odnoklassniki.ru",
          gpa: 0.21,
          campusId: 38,
          imageUrl: "http://dummyimage.com/230x237.png/cc0000/ffffff"
      }, {
          firstName: "Galven",
          lastName: "Alessandrini",
          email: "galessandrini17@princeton.edu",
          gpa: 3.49,
          campusId: 98,
          imageUrl: null
      }, {
          firstName: "Killy",
          lastName: "Newing",
          email: "knewing18@sakura.ne.jp",
          gpa: 3.78,
          campusId: 45,
          imageUrl: "http://dummyimage.com/244x245.png/ff4444/ffffff"
      }, {
          firstName: "Jen",
          lastName: "Quakley",
          email: "jquakley19@altervista.org",
          gpa: 1.16,
          campusId: 39,
          imageUrl: "http://dummyimage.com/205x213.png/cc0000/ffffff"
      }, {
          firstName: "Margit",
          lastName: "Verling",
          email: "mverling1a@yelp.com",
          gpa: 0.52,
          campusId: 22,
          imageUrl: "http://dummyimage.com/238x213.png/dddddd/000000"
      }, {
          firstName: "Malvina",
          lastName: "Ibell",
          email: "mibell1b@jugem.jp",
          gpa: 2.39,
          campusId: 17,
          imageUrl: "http://dummyimage.com/250x250.png/dddddd/000000"
      }, {
          firstName: "Suzette",
          lastName: "Pearmine",
          email: "spearmine1c@google.ca",
          gpa: 1.9,
          campusId: 10,
          imageUrl: "http://dummyimage.com/243x244.png/5fa2dd/ffffff"
      }, {
          firstName: "Gilberto",
          lastName: "Surguine",
          email: "gsurguine1d@slashdot.org",
          gpa: 1.17,
          campusId: 89,
          imageUrl: "http://dummyimage.com/238x250.png/ff4444/ffffff"
      }, {
          firstName: "Billye",
          lastName: "Sorley",
          email: "bsorley1e@merriam-webster.com",
          gpa: 0.29,
          campusId: 59,
          imageUrl: "http://dummyimage.com/217x232.png/dddddd/000000"
      }, {
          firstName: "Isac",
          lastName: "Lowery",
          email: "ilowery1f@ustream.tv",
          gpa: 3.42,
          campusId: 7,
          imageUrl: "http://dummyimage.com/220x231.png/dddddd/000000"
      }, {
          firstName: "Derward",
          lastName: "Albany",
          email: "dalbany1g@webmd.com",
          gpa: 0.63,
          campusId: 21,
          imageUrl: "http://dummyimage.com/221x239.png/cc0000/ffffff"
      }, {
          firstName: "Laural",
          lastName: "Bricklebank",
          email: "lbricklebank1h@scientificamerican.com",
          gpa: 0.48,
          campusId: 41,
          imageUrl: null
      }, {
          firstName: "Susannah",
          lastName: "Eite",
          email: "seite1i@tamu.edu",
          gpa: 1.12,
          campusId: 80,
          imageUrl: "http://dummyimage.com/222x250.png/dddddd/000000"
      }, {
          firstName: "Daniel",
          lastName: "Dobsons",
          email: "ddobsons1j@utexas.edu",
          gpa: 1.18,
          campusId: 93,
          imageUrl: "http://dummyimage.com/246x209.png/cc0000/ffffff"
      }, {
          firstName: "Carney",
          lastName: "Gerrey",
          email: "cgerrey1k@wp.com",
          gpa: 1.07,
          campusId: 21,
          imageUrl: "http://dummyimage.com/214x233.png/ff4444/ffffff"
      }, {
          firstName: "Julissa",
          lastName: "Fursland",
          email: "jfursland1l@amazon.co.uk",
          gpa: 3.89,
          campusId: 74,
          imageUrl: "http://dummyimage.com/229x247.png/5fa2dd/ffffff"
      }, {
          firstName: "Eyde",
          lastName: "Sallarie",
          email: "esallarie1m@psu.edu",
          gpa: 2.61,
          campusId: null,
          imageUrl: "http://dummyimage.com/219x219.png/5fa2dd/ffffff"
      }, {
          firstName: "Brittaney",
          lastName: "Malin",
          email: "bmalin1n@mapquest.com",
          gpa: 1.65,
          campusId: null,
          imageUrl: "http://dummyimage.com/234x242.png/dddddd/000000"
      }, {
          firstName: "Rosita",
          lastName: "Faichnie",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 29,
          imageUrl: "http://dummyimage.com/222x240.png/dddddd/000000"
      }, {
          firstName: "Elvis",
          lastName: "Nuschke",
          email: "enuschke1p@facebook.com",
          gpa: 0.73,
          campusId: 29,
          imageUrl: "http://dummyimage.com/217x246.png/ff4444/ffffff"
      }, {
          firstName: "Feliza",
          lastName: "Woloschin",
          email: "fwoloschin1q@craigslist.org",
          gpa: 1.03,
          campusId: 60,
          imageUrl: "http://dummyimage.com/205x210.png/5fa2dd/ffffff"
      }, {
          firstName: "Shanna",
          lastName: "Murrigans",
          email: "smurrigans1r@netlog.com",
          gpa: 3.06,
          campusId: 98,
          imageUrl: null
      }, {
          firstName: "Therese",
          lastName: "Scothorn",
          email: "tscothorn1s@huffingtonpost.com",
          gpa: 3.72,
          campusId: null,
          imageUrl: null
      }, {
          firstName: "Vanny",
          lastName: "Preator",
          email: "vpreator1t@berkeley.edu",
          gpa: 2.55,
          campusId: 4,
          imageUrl: "http://dummyimage.com/230x222.png/cc0000/ffffff"
      }, {
          firstName: "Jordan",
          lastName: "Lockhart",
          email: "jlockhart1u@va.gov",
          gpa: 2.08,
          campusId: 56,
          imageUrl: "http://dummyimage.com/203x218.png/ff4444/ffffff"
      }, {
          firstName: "Dorolice",
          lastName: "Readhead",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 70,
          imageUrl: "http://dummyimage.com/211x240.png/cc0000/ffffff"
      }, {
          firstName: "Reg",
          lastName: "Binnall",
          email: "rbinnall1w@netscape.com",
          gpa: 1.46,
          campusId: 9,
          imageUrl: "http://dummyimage.com/231x243.png/ff4444/ffffff"
      }, {
          firstName: "Griffin",
          lastName: "Fletham",
          email: "gfletham1x@1688.com",
          gpa: 2.75,
          campusId: 64,
          imageUrl: "http://dummyimage.com/200x247.png/ff4444/ffffff"
      }, {
          firstName: "Horacio",
          lastName: "Rennicks",
          email: "hrennicks1y@pagesperso-orange.fr",
          gpa: 1.14,
          campusId: 69,
          imageUrl: null
      }, {
          firstName: "Liv",
          lastName: "Duding",
          email: "lduding1z@china.com.cn",
          gpa: 2.84,
          campusId: 8,
          imageUrl: "http://dummyimage.com/225x220.png/5fa2dd/ffffff"
      }, {
          firstName: "Cristiano",
          lastName: "Halesworth",
          email: "chalesworth20@skype.com",
          gpa: 3.05,
          campusId: 1,
          imageUrl: "http://dummyimage.com/244x221.png/ff4444/ffffff"
      }, {
          firstName: "Ysabel",
          lastName: "Champion",
          email: "ychampion21@discovery.com",
          gpa: 0.93,
          campusId: null,
          imageUrl: "http://dummyimage.com/232x214.png/5fa2dd/ffffff"
      }, {
          firstName: "Thomasine",
          lastName: "Knappett",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 84,
          imageUrl: null
      }, {
          firstName: "Xenos",
          lastName: "Curado",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 20,
          imageUrl: null
      }, {
          firstName: "Dyan",
          lastName: "Gillson",
          email: "dgillson24@springer.com",
          gpa: 0.44,
          campusId: 51,
          imageUrl: "http://dummyimage.com/238x250.png/ff4444/ffffff"
      }, {
          firstName: "Genia",
          lastName: "Stebbing",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 64,
          imageUrl: "http://dummyimage.com/226x209.png/dddddd/000000"
      }, {
          firstName: "Zacherie",
          lastName: "de Voiels",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 37,
          imageUrl: "http://dummyimage.com/230x215.png/ff4444/ffffff"
      }, {
          firstName: "Cornell",
          lastName: "Kemetz",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 97,
          imageUrl: "http://dummyimage.com/241x231.png/5fa2dd/ffffff"
      }, {
          firstName: "Catherine",
          lastName: "Saphin",
          email: "csaphin28@yahoo.co.jp",
          gpa: 2.14,
          campusId: 89,
          imageUrl: "http://dummyimage.com/227x220.png/cc0000/ffffff"
      }, {
          firstName: "Viviana",
          lastName: "Richardin",
          email: "vrichardin29@businesswire.com",
          gpa: 1.15,
          campusId: null,
          imageUrl: "http://dummyimage.com/211x249.png/ff4444/ffffff"
      }, {
          firstName: "Ashbey",
          lastName: "Laity",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 51,
          imageUrl: null
      }, {
          firstName: "Nissy",
          lastName: "Guest",
          email: "nguest2b@mediafire.com",
          gpa: 3.39,
          campusId: null,
          imageUrl: null
      }, {
          firstName: "Chauncey",
          lastName: "Filipiak",
          email: "cfilipiak2c@pcworld.com",
          gpa: 1.52,
          campusId: 30,
          imageUrl: "http://dummyimage.com/236x204.png/cc0000/ffffff"
      }, {
          firstName: "Darrelle",
          lastName: "Krauze",
          email: "dkrauze2d@indiatimes.com",
          gpa: 2.86,
          campusId: 74,
          imageUrl: "http://dummyimage.com/230x220.png/5fa2dd/ffffff"
      }, {
          firstName: "Austine",
          lastName: "Burbridge",
          email: "aburbridge2e@flavors.me",
          gpa: 2.21,
          campusId: null,
          imageUrl: "http://dummyimage.com/219x205.png/cc0000/ffffff"
      }, {
          firstName: "Marijo",
          lastName: "Rape",
          email: "mrape2f@java.com",
          gpa: 1.98,
          campusId: 94,
          imageUrl: "http://dummyimage.com/240x239.png/5fa2dd/ffffff"
      }, {
          firstName: "Anna-maria",
          lastName: "Teasdale-Markie",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 65,
          imageUrl: "http://dummyimage.com/218x228.png/5fa2dd/ffffff"
      }, {
          firstName: "Tedd",
          lastName: "Tuxill",
          email: "ttuxill2h@ustream.tv",
          gpa: 2.82,
          campusId: null,
          imageUrl: "http://dummyimage.com/250x220.png/dddddd/000000"
      }, {
          firstName: "Willey",
          lastName: "De Witt",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 63,
          imageUrl: "http://dummyimage.com/211x246.png/dddddd/000000"
      }, {
          firstName: "Robinette",
          lastName: "Enochsson",
          email: "renochsson2j@microsoft.com",
          gpa: 3.06,
          campusId: 22,
          imageUrl: "http://dummyimage.com/227x202.png/ff4444/ffffff"
      }, {
          firstName: "Ivy",
          lastName: "Ackenson",
          email: "gdi@imessedup.com",
          gpa: null,
          campusId: 1,
          imageUrl: "http://dummyimage.com/206x227.png/5fa2dd/ffffff"
      }, {
          firstName: "Normie",
          lastName: "Monkleigh",
          email: "nmonkleigh2l@ifeng.com",
          gpa: 1.78,
          campusId: 38,
          imageUrl: "http://dummyimage.com/229x249.png/5fa2dd/ffffff"
      }, {
          firstName: "Bert",
          lastName: "Follos",
          email: "bfollos2m@nsw.gov.au",
          gpa: 3.63,
          campusId: null,
          imageUrl: "http://dummyimage.com/250x231.png/dddddd/000000"
      }, {
          firstName: "Genovera",
          lastName: "Haldenby",
          email: "ghaldenby2n@sciencedaily.com",
          gpa: 0.96,
          campusId: null,
          imageUrl: "http://dummyimage.com/242x212.png/cc0000/ffffff"
      }, {
          firstName: "Gerri",
          lastName: "McMichan",
          email: "gmcmichan2o@histats.com",
          gpa: 0.79,
          campusId: 101,
          imageUrl: "http://dummyimage.com/239x203.png/ff4444/ffffff"
      }, {
          firstName: "Ingeborg",
          lastName: "Urling",
          email: "iurling2p@va.gov",
          gpa: 2.21,
          campusId: 13,
          imageUrl: null
      }, {
          firstName: "Bond",
          lastName: "Capeloff",
          email: "bcapeloff2q@state.gov",
          gpa: 3.68,
          campusId: null,
          imageUrl: "http://dummyimage.com/238x200.png/dddddd/000000"
      }, {
          firstName: "Kaylee",
          lastName: "Barbey",
          email: "kbarbey2r@utexas.edu",
          gpa: 3.82,
          campusId: null,
          imageUrl: "http://dummyimage.com/219x246.png/5fa2dd/ffffff"
      }
    ];
    // dummy data of campuses; close this code block in your IDE
    const campuses = [
        {
            name: 'FSA - NYC',
            address: '5 Hanover Square, Floor 6, New York, NY 10004',
            description: `A trailblazer in bootcamp education, Fullstack Academy prepares students for fulfilling careers in tech throughour NYC campus`,
        },
        {
            name: 'FSA - ONLINE',
            address: 'Online Instruction',
            description: `Our online courses offer the same benefits as our award-winning in-person programs. From the curriculum to the instructors and community, you can be confident that you'll feel prepared and supported throughout your Fullstack experience`,
        },
        {
            name: "Friedrich-Alexander Universität Erlangen-Nürnberg",
            address: "6 Summerview Way",
            description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
        }, {
            name: "Hogere Zeevaartschool - Maritime Academy",
            address: "830 Pine View Terrace",
            description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
        }, {
            name: "The New College",
            address: "68 Summerview Trail",
            description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
        }, {
            name: "Missouri Western State College",
            address: "629 Novick Lane",
            description: null
        }, {
            name: "Haramaya University",
            address: "961 Hallows Junction",
            description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
        }, {
            name: "Zanjan Institute for Advanced Studies in Basic Sciences",
            address: "611 Welch Pass",
            description: null
        }, {
            name: "Tusculum College",
            address: "6080 Eastwood Road",
            description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
        }, {
            name: "Fine Arts Academy \"Jan Matejko\" in Cracow",
            address: "4552 Gulseth Terrace",
            description: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
        }, {
            name: "Higher School o Business/National Louis University(WSB/NLU) in Nowy Sacz",
            address: "9188 Dapin Junction",
            description: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
        }, {
            name: "Jerusalem University College",
            address: "4 Coleman Way",
            description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
            name: "Kwame Nkrumah University of Science and Technology",
            address: "010 Bowman Road",
            description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
        }, {
            name: "Brescia University",
            address: "89 1st Park",
            description: null
        }, {
            name: "Fachhochschule Bonn-Rhein-Sieg",
            address: "54091 Eastlawn Center",
            description: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
        }, {
            name: "Centro Universitario Villanueva",
            address: "091 Carioca Point",
            description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
        }, {
            name: "Roanoke College",
            address: "81996 Dahle Circle",
            description: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
        }, {
            name: "University of Gujrat",
            address: "576 Haas Road",
            description: null
        }, {
            name: "Nova Scotia College of Art and Design",
            address: "125 Vernon Avenue",
            description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
        }, {
            name: "Ohio College of Podiatric Medicine",
            address: "05773 Mcbride Point",
            description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
            name: "Physical Education Academy \"Jozef Pilsudski\" in Warsaw",
            address: "0 Darwin Avenue",
            description: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
        }, {
            name: "International Business School Kelajak ILMI",
            address: "336 Forster Drive",
            description: null
        }, {
            name: "Fundacion Escuela Colombiana de Rehabiliación",
            address: "9 Hallows Way",
            description: "Phasellus in felis. Donec semper sapien a libero. Nam dui."
        }, {
            name: "Kirkwood Community College",
            address: "76 Maple Wood Crossing",
            description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
        }, {
            name: "Panjab University",
            address: "5 Pawling Alley",
            description: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
        }, {
            name: "Fachhochschule Jena",
            address: "38737 Schmedeman Way",
            description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
        }, {
            name: "Universidad Nacional de Salta",
            address: "6 Arrowood Crossing",
            description: "Phasellus in felis. Donec semper sapien a libero. Nam dui."
        }, {
            name: "Shizuoka Sangyo University",
            address: "5 Luster Drive",
            description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
        }, {
            name: "Tamil Nadu Veterinary and Animal Sciences University",
            address: "0 Rutledge Junction",
            description: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        }, {
            name: "University of St. Andrews",
            address: "710 Holmberg Pass",
            description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
        }, {
            name: "Midwestern State University",
            address: "2 Mendota Lane",
            description: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
        }, {
            name: "Limestone College",
            address: "454 Emmet Circle",
            description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
        }, {
            name: "University of Resita",
            address: "86 Starling Crossing",
            description: null
        }, {
            name: "University of Southern Mindanao",
            address: "27 Riverside Parkway",
            description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
            name: "University Vitez In Travnik",
            address: "9 Shelley Crossing",
            description: null
        }, {
            name: "Fachhochschule der Wirtschaft",
            address: "56612 Forest Pass",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
        }, {
            name: "University of Montana Western",
            address: "75400 Basil Circle",
            description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
        }, {
            name: "Universidad Nacional de Guinea Ecuatorial",
            address: "4 Kennedy Way",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
        }, {
            name: "Université de Nice-Sophia Antipolis",
            address: "2 Dayton Terrace",
            description: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
        }, {
            name: "Instituto Politécnico de Setúbal",
            address: "92 Union Terrace",
            description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
        }, {
            name: "Academy of Economics in Cracow",
            address: "677 Dahle Street",
            description: null
        }, {
            name: "West University of Timisoara",
            address: "11522 Spohn Trail",
            description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
        }, {
            name: "Centro Universitario Ixtlahuaca",
            address: "1618 Eastlawn Avenue",
            description: null
        }, {
            name: "Islamic Azad University, Ahar",
            address: "31473 Florence Pass",
            description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
        }, {
            name: "Universidad de Guanajuato",
            address: "5 Ludington Lane",
            description: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
        }, {
            name: "Université de Skikda",
            address: "75796 Boyd Terrace",
            description: null
        }, {
            name: "Free Will Baptist Bible College",
            address: "73 Novick Pass",
            description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
        }, {
            name: "Universidade Estadual de Feira de Santana",
            address: "6940 Nova Street",
            description: null
        }, {
            name: "St. Luke' s College of Nursing",
            address: "2 Lakewood Center",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
        }, {
            name: "Morehead State University",
            address: "6 Victoria Alley",
            description: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
        }, {
            name: "Islamic Azad University, Sowmesara",
            address: "08 Oak Park",
            description: null
        }, {
            name: "Institut Catholique d'Arts et Métiers Nantes",
            address: "90 Namekagon Center",
            description: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui."
        }, {
            name: "State University of New York Downstate Medical Center",
            address: "969 Del Mar Alley",
            description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        }, {
            name: "Nicolaus Copernicus University of Torun",
            address: "9 Prairieview Lane",
            description: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl."
        }, {
            name: "University of Wales",
            address: "45 Ridge Oak Lane",
            description: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
        }, {
            name: "Chongqing Education College",
            address: "9 Melby Plaza",
            description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
        }, {
            name: "Ulyanovsk State Pedagogical University",
            address: "8075 Northland Terrace",
            description: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
        }, {
            name: "Ross University Caribbean School of Veterinary Medicine",
            address: "0 Westend Lane",
            description: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo."
        }, {
            name: "Wabash College",
            address: "90 Macpherson Avenue",
            description: null
        }, {
            name: "Ecole Supérieure d'Ingénieurs en Génie Electrique",
            address: "189 Bowman Place",
            description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
        }, {
            name: "The World Islamic Sciences & Education University",
            address: "21 Lunder Pass",
            description: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
        }, {
            name: "Jahrom University of Medical Sciences",
            address: "9 Upham Court",
            description: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
        }, {
            name: "St. Petersburg Repin State Academic Institute of Painting Sculpture and Achitecture",
            address: "756 Lawn Circle",
            description: null
        }, {
            name: "University of Islamic Studies",
            address: "251 Darwin Center",
            description: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
        }, {
            name: "University of Miskolc",
            address: "216 John Wall Junction",
            description: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui."
        }, {
            name: "Universitas Islam Jakarta",
            address: "8934 Hallows Junction",
            description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
        }, {
            name: "Belhaven College",
            address: "75310 Lyons Court",
            description: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
        }, {
            name: "Hacettepe University",
            address: "8 Di Loreto Street",
            description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
        }, {
            name: "West Coast University (WCU) ",
            address: "8783 Duke Circle",
            description: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
            name: "Kokushikan University",
            address: "54601 Scoville Circle",
            description: null
        }, {
            name: "Federal University of Technology, Yola",
            address: "3 Forster Plaza",
            description: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
            name: "Mahatma Gandhi University Meghalaya ",
            address: "6644 Northland Place",
            description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
        }, {
            name: "Universitas Pendidikan Indonesia",
            address: "903 Fairfield Hill",
            description: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
        }, {
            name: "Anhui University",
            address: "91452 Pennsylvania Junction",
            description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
        }, {
            name: "Hongik University",
            address: "24 Randy Drive",
            description: null
        }, {
            name: "Universidad Nacional Hermilio Valdizan",
            address: "1552 Troy Junction",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
        }, {
            name: "Sage Graduate School",
            address: "6935 Thackeray Plaza",
            description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
        }, {
            name: "University of South Carolina - Beaufort",
            address: "5 Hoard Crossing",
            description: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
        }, {
            name: "Universität des Saarlandes",
            address: "5629 Susan Street",
            description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
        }, {
            name: "Hillsdale College",
            address: "6413 Lunder Plaza",
            description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
        }, {
            name: "University Of Hawaii - System",
            address: "5774 Porter Court",
            description: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
            name: "Beijing New Asia University",
            address: "957 Hoard Parkway",
            description: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
        }, {
            name: "Western Kentucky University",
            address: "029 Anderson Circle",
            description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
            name: "Katholische Fachhochschule Nordrhein-Westfalen",
            address: "56 Hollow Ridge Plaza",
            description: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
        }, {
            name: "University of Glamorgan",
            address: "8669 Bluejay Way",
            description: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
        }, {
            name: "Creighton University",
            address: "39004 Roth Parkway",
            description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
        }, {
            name: "Université des Sciences Sociales (Toulouse I)",
            address: "87 Sunnyside Crossing",
            description: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
        }, {
            name: "University of Divinity",
            address: "0327 Hansons Pass",
            description: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
        }, {
            name: "Kobe Pharmaceutical University",
            address: "8135 Northport Road",
            description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
        }, {
            name: "Eötvös Lorand University",
            address: "66739 Rieder Center",
            description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
        }, {
            name: "Winona State University",
            address: "181 Dayton Street",
            description: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui."
        }, {
            name: "Islamic Azad University, Tehran South",
            address: "39449 Menomonie Crossing",
            description: null
        }, {
            name: "Seisen University",
            address: "273 Marcy Court",
            description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
        }, {
            name: "Universidad Autónoma de Occidente",
            address: "1 Spohn Point",
            description: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
        }, {
            name: "Institut Prima Bestari - Pine Academy ",
            address: "903 Sauthoff Lane",
            description: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
        }, {
            name: "International University for Science & Technology ",
            address: "3717 Schlimgen Park",
            description: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
        }, {
            name: "Indira Gandhi Institute of Development and Research",
            address: "41544 Bartillon Hill",
            description: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
        }, {
            name: "Université Rennes II - Haute-Bretagne",
            address: "45 Barby Way",
            description: null
        }, {
            name: "Frostburg State University",
            address: "417 Mifflin Crossing",
            description: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
        }, {
            name: "University of Abuja",
            address: "33500 Roth Parkway",
            description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
        }, {
            name: "Mendel University of Agriculture and Forestry",
            address: "291 Hazelcrest Pass",
            description: null
        }, {
            name: "Yangtze University",
            address: "34762 Farwell Junction",
            description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
        }
    ];

    await Promise.all(
      // campuses need to be made first so students can be associated with a campus via campusId
      campuses.map(campus => Campus.create(campus))),
      students.map(student => Student.create(student));

    console.log(`Seeding successful!`);
  } catch(err) {
    console.error(err);
  }
};



module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed
}