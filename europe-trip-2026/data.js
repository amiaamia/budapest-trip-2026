const B=(he,en)=>({he,en});

const TRIP={
  sourceUrl:"https://docs.google.com/document/d/1bfg9lQeV5S4eo-RvxmK7jV3rI1oYYAqU0KzGtCAJ3WI/edit",
  sourceUpdated:"2026-10-01",
  cities:{
    berlin:{name:B("ברלין","Berlin"),tz:"Europe/Berlin",lat:52.52,lon:13.405,address:"Zimmerstraße 88, Mitte, Berlin",dates:B("1–5 באוקטובר","October 1–5")},
    prague:{name:B("פראג","Prague"),tz:"Europe/Prague",lat:50.0755,lon:14.4378,address:"Legerova 39, Prague",dates:B("5–9 באוקטובר","October 5–9")},
    vienna:{name:B("וינה","Vienna"),tz:"Europe/Vienna",lat:48.2082,lon:16.3738,address:"Nordbahnstraße 47, Vienna",dates:B("9–11 באוקטובר","October 9–11")}
  },
  places:[
    {id:0,city:"berlin",name:B("לינה בברלין","Berlin accommodation"),category:B("לינה","Accommodation"),query:"Zimmerstraße 88, Berlin",url:""},
    {id:1,city:"berlin",name:B("Alternative Berlin Experience","Alternative Berlin Experience"),category:B("סיורים","Tours"),query:"Kreuzberg Berlin",url:"https://www.getyourguide.com/berlin-l17/alternative-berlin-experience-t11288/"},
    {id:2,city:"berlin",name:B("Cirque du Soleil — ALIZÉ","Cirque du Soleil — ALIZÉ"),category:B("מופעים","Shows"),query:"Theater am Potsdamer Platz Berlin",url:"https://www.cirquedusoleil.com/germany/berlin/alize"},
    {id:3,city:"berlin",name:B("High Swing Berlin","High Swing Berlin"),category:B("אדרנלין","Adrenaline"),query:"High Swing Park Inn Alexanderplatz Berlin",url:"https://high-swing.de/hs-berlin/"},
    {id:4,city:"berlin",name:B("Topography of Terror","Topography of Terror"),category:B("היסטוריה","History"),query:"Topography of Terror Berlin",url:"https://www.topographie.de/en/"},
    {id:5,city:"berlin",name:B("אנדרטת השואה","Holocaust Memorial"),category:B("היסטוריה","History"),query:"Memorial to the Murdered Jews of Europe Berlin",url:""},
    {id:6,city:"berlin",name:B("שער ברנדנבורג","Brandenburg Gate"),category:B("היסטוריה","History"),query:"Brandenburg Gate Berlin",url:""},
    {id:7,city:"berlin",name:B("Berlin Wall Memorial","Berlin Wall Memorial"),category:B("היסטוריה","History"),query:"Berlin Wall Memorial Bernauer Straße",url:"https://www.stiftung-berliner-mauer.de/en/berlin-wall-memorial"},
    {id:8,city:"berlin",name:B("Berlin Hauptbahnhof","Berlin Hauptbahnhof"),category:B("תחבורה","Transport"),query:"Berlin Hauptbahnhof",url:"https://www.bahn.de/"},
    {id:9,city:"prague",name:B("לינה בפראג","Prague accommodation"),category:B("לינה","Accommodation"),query:"Legerova 39 Prague",url:""},
    {id:10,city:"prague",name:B("LEVELS Prague","LEVELS Prague"),category:B("חוויות","Experiences"),query:"LEVELS Prague",url:"https://levelsprague.com/en/"},
    {id:11,city:"prague",name:B("Vyšehrad","Vyšehrad"),category:B("היסטוריה","History"),query:"Vyšehrad Prague",url:"https://www.praha-vysehrad.cz/en"},
    {id:12,city:"prague",name:B("Náplavka","Náplavka"),category:B("שיטוט","Explore"),query:"Náplavka Prague",url:""},
    {id:13,city:"prague",name:B("Dancing House","Dancing House"),category:B("שיטוט","Explore"),query:"Dancing House Prague",url:""},
    {id:14,city:"prague",name:B("Prague Castle","Prague Castle"),category:B("היסטוריה","History"),query:"Prague Castle",url:"https://www.hrad.cz/en/prague-castle-for-visitors"},
    {id:15,city:"prague",name:B("Malá Strana","Malá Strana"),category:B("שיטוט","Explore"),query:"Malá Strana Prague",url:""},
    {id:16,city:"prague",name:B("Charles Bridge","Charles Bridge"),category:B("היסטוריה","History"),query:"Charles Bridge Prague",url:""},
    {id:17,city:"prague",name:B("Old Town","Old Town"),category:B("שיטוט","Explore"),query:"Old Town Square Prague",url:""},
    {id:18,city:"prague",name:B("הרובע היהודי","Jewish Quarter"),category:B("היסטוריה","History"),query:"Josefov Prague",url:""},
    {id:19,city:"prague",name:B("La Scène Dinner & Show","La Scène Dinner & Show"),category:B("מופעים","Shows"),query:"La Scène Václavské náměstí 16 Prague",url:"https://lascene.cz/"},
    {id:20,city:"prague",name:B("Praha hlavní nádraží","Praha hlavní nádraží"),category:B("תחבורה","Transport"),query:"Praha hlavní nádraží",url:"https://www.cd.cz/en/"},
    {id:21,city:"vienna",name:B("Wien Hauptbahnhof","Wien Hauptbahnhof"),category:B("תחבורה","Transport"),query:"Wien Hauptbahnhof",url:"https://www.oebb.at/en/"},
    {id:22,city:"vienna",name:B("לינה בווינה","Vienna accommodation"),category:B("לינה","Accommodation"),query:"Nordbahnstraße 47 Vienna",url:""},
    {id:23,city:"vienna",name:B("Prater","Prater"),category:B("אדרנלין","Adrenaline"),query:"Prater Vienna",url:"https://www.praterwien.com/en/home"},
    {id:24,city:"vienna",name:B("Kaiser Wiesn","Kaiser Wiesn"),category:B("אירועים","Events"),query:"Kaiser Wiesn Vienna",url:"https://kaiserwiesn.at/en/"},
    {id:25,city:"vienna",name:B("Wiener Staatsoper","Vienna State Opera"),category:B("מופעים","Shows"),query:"Wiener Staatsoper Vienna",url:"https://www.wiener-staatsoper.at/en/calendar/detail/il-barbiere-di-siviglia/2026-10-09/"},
    {id:26,city:"vienna",name:B("Haus des Meeres","Haus des Meeres"),category:B("חוויות","Experiences"),query:"Haus des Meeres Vienna",url:"https://www.haus-des-meeres.at/en/zoo/visitor-information"},
    {id:27,city:"vienna",name:B("Classic Chocolate Workshop","Classic Chocolate Workshop"),category:B("חוויות","Experiences"),query:"Chocolate Museum Vienna",url:"https://www.chocolate-museum.wien/ticket/classic-workshop"},
    {id:28,city:"vienna",name:B("Vivaldi · Karlskirche","Vivaldi · Karlskirche"),category:B("מופעים","Shows"),query:"Karlskirche Vienna",url:"https://vivaldi-vienna.com/de/konzert/8839-vivaldi-vier-jahreszeiten/",active:false},
    {id:29,city:"vienna",name:B("Schönbrunn","Schönbrunn"),category:B("היסטוריה","History"),query:"Schönbrunn Palace Vienna",url:"https://www.schoenbrunn.at/en/"},
    {id:30,city:"vienna",name:B("Stephansplatz","Stephansplatz"),category:B("שיטוט","Explore"),query:"Stephansplatz Vienna",url:"",active:false},
    {id:31,city:"vienna",name:B("Hofburg","Hofburg"),category:B("היסטוריה","History"),query:"Hofburg Vienna",url:"",active:false},
    {id:32,city:"vienna",name:B("Wien Museum","Wien Museum"),category:B("היסטוריה","History"),query:"Wien Museum Karlsplatz Vienna",url:"https://www.wienmuseum.at/"},
    {id:33,city:"vienna",name:B("Praterstern · אוטובוס לשדה","Praterstern · airport bus"),category:B("תחבורה","Transport"),query:"Praterstern Vienna",url:"https://www.viennaairportbus.com/en/informationen/unser-streckennetz"},
    {id:34,city:"vienna",name:B("Vienna Airport","Vienna Airport"),category:B("תחבורה","Transport"),query:"Vienna International Airport",url:""},
    {id:35,city:"prague",name:B("Nový Svět","Nový Svět"),category:B("שיטוט","Explore"),query:"Nový Svět Prague",url:"https://prague.eu/en/objevujte/novy-svet-new-world/"},
    {id:36,city:"berlin",name:B("Mauerpark Flea Market","Mauerpark Flea Market"),category:B("שווקים","Markets"),query:"Mauerpark Flea Market Berlin",url:"https://share.google/r5MQpo9Rm9ERi39L5",urlLabel:B("מידע","Info")},
    {id:37,city:"berlin",name:B("GRETCHEN · ארוחה וג׳אז","GRETCHEN · dinner and jazz"),category:B("מופעים","Shows"),query:"GRETCHEN Berlin",url:"https://tagderclubkultur.berlin/en/15-years-gretchen/",urlLabel:B("מידע","Info")},
    {id:38,city:"prague",name:B("Farmers’ Market at Jiřák","Farmers’ Market at Jiřák"),category:B("שווקים","Markets"),query:"Jiřího z Poděbrad Farmers Market Prague",url:"https://share.google/8jizwckUWbITqkByM",urlLabel:B("מידע","Info")},
    {id:39,city:"vienna",name:B("Flohmarkt am Naschmarkt","Flohmarkt am Naschmarkt"),category:B("שווקים","Markets"),query:"Flohmarkt am Naschmarkt Vienna",url:"https://share.google/qdErJ8BVNiIlBJQQJ",urlLabel:B("מידע","Info")},
    {id:40,city:"prague",name:B("Designblok Prague","Designblok Prague"),category:B("אירועים","Events"),query:"Designblok Prague 2026",url:"https://www.designblok.cz/en/designblok-2026/"},
    {id:41,city:"vienna",name:B("The Chapel","The Chapel"),category:B("בילוי","Nightlife"),query:"The Chapel Vienna",url:""},
    {id:42,city:"vienna",name:B("Let’s be Frank","Let’s be Frank"),category:B("אוכל","Food"),query:"Let's be Frank Vienna",url:""},
    {id:43,city:"vienna",name:B("Design District Vienna","Design District Vienna"),category:B("אירועים","Events"),query:"Design District Hofburg Vienna",url:"https://www.design-district.at/"},
    {id:44,city:"prague",name:B("Aquapalace Prague","Aquapalace Prague"),category:B("חוויות","Experiences"),query:"Aquapalace Prague Čestlice",url:"https://www.aquapalace.cz/en"}
  ],
  days:[
    {date:"2026-10-01",city:"berlin",title:B("נחיתה והתאקלמות","Arrival and settling in"),stops:[0],blocks:[
      {level:"free",places:[0],text:[B("צ׳ק־אין, ארוחת ערב קלה והליכה קצרה.","Check in, have a light dinner and take a short walk.")]}
    ],options:[
      {title:B("Checkpoint Charlie / Gendarmenmarkt","Checkpoint Charlie / Gendarmenmarkt"),text:[B("אם נשאר כוח: הליכה לכיוון Checkpoint Charlie או Gendarmenmarkt וחזרה.","If there is energy left, walk toward Checkpoint Charlie or Gendarmenmarkt and back.")]}
    ],plan:B("ערב קל בלבד; אין צורך להתחיל להספיק כבר ביום הנחיתה.","Keep the first evening easy; there is no need to start checking off sights on arrival day.")},
    {date:"2026-10-02",city:"berlin",title:B("ברלין האלטרנטיבית ו־ALIZÉ","Alternative Berlin and ALIZÉ"),stops:[1,2],blocks:[
      {level:"urgent",places:[1],text:[B("12:00–16:00: Alternative Berlin Experience.","12:00–16:00: Alternative Berlin Experience.")]},
      {level:"free",places:[],title:B("מנוחה ב־Kreuzberg / Friedrichshain","Rest in Kreuzberg / Friedrichshain"),text:[B("אוכל ומנוחה אחר הצהריים; לא מוסיפים אתר גדול אחרי הסיור.","Food and rest in the afternoon; do not add another major sight after the tour.")]},
      {level:"urgent",places:[2],text:[B("20:00: Cirque du Soleil — ALIZÉ.","20:00: Cirque du Soleil — ALIZÉ.")]}
    ],options:[],plan:B("משאירים זמן מנוחה בין הסיור למופע.","Leave enough rest time between the tour and the show.")},
    {date:"2026-10-03",city:"berlin",title:B("High Swing, ברלין פתוחה וחברים","High Swing, open Berlin and friends"),stops:[3],blocks:[
      {level:"urgent",places:[3],text:[B("הנדנדה בגובה 120 מטר. להקצות 60–90 דקות להגעה, רישום, תדריך וצילום.","The swing is 120 metres high. Allow 60–90 minutes for arrival, registration, briefing and photos."),B("לקבוע קודם את שעת המפגש עם החברים ורק אחר כך להזמין סלוט. חבילת Standard פחות גמישה לשינויים מ־Premium.","Set the time with friends before booking a slot. The Standard package is less flexible for changes than Premium.")]},
      {level:"free",places:[],title:B("פגישה עם החברים","Meeting friends"),text:[B("שאר היום וערב מוקדשים לפגישה עם החברים.","Keep the rest of the day and evening for meeting friends.")]}
    ],options:[
      {title:B("Tag der Clubkultur","Tag der Clubkultur"),text:[B("ב־3/10 מתחיל שבוע תרבות המועדונים. בוחרים אירוע אחד קונקרטי סמוך למועד; לא בונים על פסטיבל רחוב לאומי בברלין.","Club Culture Week starts on October 3. Choose one specific event closer to the date; do not expect a national street festival in Berlin.")],url:"https://www.berlin.de/en/events/6296831-2842498-tag-der-clubkultur.en.html"}
    ],plan:B("High Swing ומפגש חברים הם העוגנים; אירוע מועדונים הוא תוספת.","High Swing and meeting friends are the anchors; a club event is optional.")},
    {date:"2026-10-04",city:"berlin",title:B("ברלין ההיסטורית וערב ג׳אז","Historic Berlin and a jazz evening"),stops:[4,5,6,7,37],blocks:[
      {level:"free",places:[4],text:[B("Topography of Terror — חינם וקרוב ללינה.","Topography of Terror — free and close to the accommodation.")]},
      {places:[5,6],text:[B("ממשיכים ברגל דרך אנדרטת השואה ושער ברנדנבורג, עם ארוחת צהריים בדרך.","Continue on foot via the Holocaust Memorial and Brandenburg Gate, with lunch along the way.")]},
      {level:"flex",places:[7],text:[B("Berlin Wall Memorial ב־Bernauer Straße. לקחת בחשבון מעבר בתחבורה מהמרכז.","Berlin Wall Memorial on Bernauer Straße. Allow for a public transport transfer from the centre.")]},
      {level:"urgent",places:[37],text:[B("19:30–23:00: ארוחה וקוורטט ג׳אז כחלק מאירועי הפסטיבל.","19:30–23:00: dinner and a jazz quartet as part of the festival events.")]}
    ],options:[
      {title:B("Mauerpark Flea Market","Mauerpark Flea Market"),places:[36],text:[B("פתוח ביום ראשון 10:00–18:00 עם יד שנייה, תקליטים, בגדים, עיצוב ו־street food. בעונה מתקיים בדרך כלל קריוקי סביב 15:00.","Open Sunday 10:00–18:00 with second-hand goods, records, clothes, design and street food. Seasonal karaoke usually starts around 15:00.")]}
    ],plan:B("אם מוסיפים את שוק הפשפשים או קניות, מקצרים את הביקור ב־Bernauer Straße.","If adding the flea market or shopping, shorten the Bernauer Straße visit.")},
    {date:"2026-10-05",city:"prague",title:B("הרכבת לפראג ו־LEVELS","Train to Prague and LEVELS"),stops:[8,20,9,10],blocks:[
      {level:"urgent",places:[8,20],text:[B("11:30–17:30: רכבת מברלין לפראג.","11:30–17:30: train from Berlin to Prague.")]},
      {level:"free",places:[9],text:[B("אחרי הצ׳ק־אין: ארוחה והליכה קלה דרך Wenceslas Square ומרכז העיר.","After check-in: dinner and an easy walk through Wenceslas Square and the city centre.")]},
      {level:"flex",places:[10],text:[B("בערב: ארקייד, משחקים ופעילות קלילה לאחר יום המעבר.","In the evening: arcade games and a light activity after the travel day.")]}
    ],options:[],plan:B("אם הרכבת מתעכבת או עייפים, מוותרים על LEVELS.","Skip LEVELS if the train is delayed or everyone is tired.")},
    {date:"2026-10-06",city:"prague",title:B("Prague Castle ויום פתוח","Prague Castle and a flexible day"),stops:[14],blocks:[
      {level:"urgent",places:[14],text:[B("09:00–17:00: Prague Castle. המבנים ההיסטוריים נפתחים ב־09:00.","09:00–17:00: Prague Castle. The historic buildings open at 09:00.")]}
    ],options:[
      {title:B("Malá Strana · Charles Bridge · Old Town","Malá Strana · Charles Bridge · Old Town"),places:[15,16,17],text:[B("המשך טבעי מהמצודה לכיוון העיר העתיקה.","A natural continuation from the castle toward the Old Town.")]},
      {title:B("Nový Svět","Nový Svět"),places:[35],text:[B("אזור קטן ושקט ליד המצודה, למי שרוצה פחות עומס תיירותי.","A small, quiet area near the castle for a break from the crowds.")]},
      {title:B("Vyšehrad","Vyšehrad"),places:[11],text:[B("מצודה היסטורית, תצפיות ופארק מעל הוולטאבה; אינה דורשת יום שלם.","A historic fort, viewpoints and a park above the Vltava; it does not require a full day.")]},
      {title:B("Náplavka · Dancing House","Náplavka · Dancing House"),places:[12,13],text:[B("ירידה לנהר, העיר החדשה ועצירה חופשית לקפה או אוכל.","Walk down to the river and New Town, with an unplanned coffee or food stop.")]},
      {title:B("חלופה נוספת — Aquapalace Prague","Another alternative — Aquapalace Prague"),places:[44],text:[B("פארק מים גדול ב־Čestlice עם 24 מגלשות, 3 מתחמי מים והטובוגן הגדול בצ׳כיה. מתאים אם רוצים להחליף חלק מיום האתרים ביום כיף או רגיעה.","A large water park in Čestlice with 24 slides, three water zones and the largest toboggan in Czechia. It is a good choice when replacing part of the sightseeing day with fun or relaxation."),B("לוגיסטיקה: מטרו C ל־Opatov ומשם אוטובוס 328 או 385 במשך כ־7–10 דקות. המקום מחוץ לגבולות פראג ולכן צריך כרטיס תחבורה שתקף גם ל־zone 1.","Logistics: take Metro C to Opatov, then bus 328 or 385 for about 7–10 minutes. The park is outside Prague city limits, so the transport ticket must also be valid for zone 1."),B("עדיף לראות בו חלופה לחלק מהיום, ולא משהו שמוסיפים אחרי 09:00–17:00 במצודה.","Treat it as an alternative for part of the day, not as something to add after 09:00–17:00 at Prague Castle.")],url:"https://www.getyourguide.com/prague-l10/prague-aquapalace-water-world-entrance-ticket-t486697/"},
      {title:B("קניות, מנוחה או השלמות","Shopping, rest or catch-up"),text:[B("משאירים את יתרת היום פתוחה לפי האנרגיה והזמן.","Leave the rest of the day open according to time and energy.")]}
    ],plan:B("המצודה היא העוגן; בוחרים רק את ההמשך שמתאים בפועל.","The castle is the anchor; choose only the continuation that fits on the day.")},
    {date:"2026-10-07",city:"prague",title:B("פגישה עם חבר ושיטוט גמיש","Meeting a friend and a flexible day"),stops:[],blocks:[
      {level:"free",places:[],title:B("פגישה והשלמות","Meeting and catch-up"),text:[B("פגישה עם חבר, השלמות מהיום הקודם ושיטוט ללא לוח זמנים צפוף.","Meet a friend, catch up on anything left from the previous day and explore without a tight schedule.")]}
    ],options:[
      {title:B("Designblok Prague","Designblok Prague"),places:[40],text:[B("הפסטיבל מתחיל היום. אם הוא מעניין, משלבים מוקד אחד בלבד באזור המצודה או בקרבת המסלול.","The festival starts today. If it is appealing, include only one venue near the castle or the day's route."),B("האירוע כולל עיצוב, תאורה, אמנות שימושית, אופנה ומיצבים.","The event covers design, lighting, applied art, fashion and installations.")]}
    ],plan:B("היום נשאר גמיש סביב הפגישה; Designblok הוא תוספת.","Keep the day flexible around the meeting; Designblok is an add-on.")},
    {date:"2026-10-08",city:"prague",title:B("יום בחירה ו־La Scène","Choice day and La Scène"),stops:[17,18,38,19],blocks:[
      {level:"free",places:[17,18],text:[B("ברירת המחדל: Old Town, הרובע היהודי, קפה, שיטוט וקניות.","Default plan: Old Town, the Jewish Quarter, coffee, wandering and shopping.")]},
      {level:"flex",places:[38],text:[B("Farmers’ Market at Jiřák פתוח 08:00–18:00 עם אוכל מקומי, קפה, גבינות, ירקות ומוצרים קטנים בעבודת יד.","Farmers’ Market at Jiřák is open 08:00–18:00 with local food, coffee, cheese, vegetables and small handmade goods.")]},
      {level:"urgent",places:[19],text:[B("19:30–22:30: La Scène Dinner & Show. לארוז לפני היציאה לקברט.","19:30–22:30: La Scène Dinner & Show. Pack before leaving for the cabaret."),B("לצורך רפואי ללא גלוטן, יש לקבל מהמקום אישור מפורש לגבי ההכנה וזיהום משני.","For a medical gluten-free requirement, obtain explicit confirmation about preparation and cross-contamination.")]}
    ],options:[
      {title:B("Designblok Prague","Designblok Prague"),places:[40],text:[B("חלופה של כמה שעות רק אם הפסטיבל באמת מעניין; לא משלבים ביקור משמעותי גם ברובע היהודי וגם בפסטיבל.","An alternative for a few hours only if the festival is genuinely interesting; do not combine a substantial Jewish Quarter visit with a substantial festival visit.")]}
    ],plan:B("בוחרים בין ביקור משמעותי ברובע היהודי לבין Designblok ומתארגנים בנחת לערב.","Choose between a substantial Jewish Quarter visit and Designblok, and leave time to prepare for the evening.")},
    {date:"2026-10-09",city:"vienna",title:B("רכבת לווינה, פראטר ואופרה","Train to Vienna, Prater and the opera"),stops:[20,21,22,23,24,25],blocks:[
      {level:"urgent",places:[20,21],text:[B("07:40–13:00: רכבת מפראג לווינה.","07:40–13:00: train from Prague to Vienna.")]},
      {level:"urgent",places:[22],text:[B("הגעה לדירה והפקדת מזוודות. בגלל עבודות ה־S-Bahn, מתכננים U1 או תחבורה עירונית מ־Hauptbahnhof.","Reach the apartment and leave the luggage. Because of S-Bahn works, plan on U1 or other city transport from Hauptbahnhof.")]},
      {level:"flex",places:[23,24],text:[B("כ־2–2.5 שעות ב־Prater, כולל מתקן או שניים, וטעימה קצרה מ־Kaiser Wiesn.","About 2–2.5 hours at Prater, including one or two rides and a short visit to Kaiser Wiesn.")]},
      {level:"urgent",places:[25],text:[B("16:00: איסוף כרטיסי האופרה, שיטוט ואוכל באזור.","16:00: collect the opera tickets, walk around and eat nearby."),B("19:00: Il Barbiere di Siviglia — ״הספר מסביליה״.","19:00: Il Barbiere di Siviglia — The Barber of Seville.")]}
    ],options:[],plan:B("יום מעבר: פראטר מצומצם ושומרים מרווח לאיסוף הכרטיסים ולהתארגנות.","This is a travel day: keep Prater short and leave margin for ticket collection and getting ready.")},
    {date:"2026-10-10",city:"vienna",title:B("שוקולד, Schönbrunn וערב סודי","Chocolate, Schönbrunn and a hidden-bar evening"),stops:[27,29,41,42],blocks:[
      {level:"urgent",places:[27],text:[B("10:30–11:30: Classic Chocolate Workshop.","10:30–11:30: Classic Chocolate Workshop."),B("לצורך רפואי ללא גלוטן יש לאשר מראש קישוטים, כלים וזיהום משני.","For a medical gluten-free requirement, confirm decorations, utensils and cross-contamination in advance.")]},
      {level:"urgent",places:[29],text:[B("13:40–14:00: כניסה ל־Schönbrunn.","13:40–14:00: entry to Schönbrunn.")]},
      {level:"free",places:[],title:B("קניות או מנוחה","Shopping or rest"),text:[B("16:00–18:00: לבחור בין קניות לבין חזרה ללינה ומנוחה. בשבת החנויות פתוחות יותר מאשר ביום ראשון.","16:00–18:00: choose between shopping and returning to the accommodation to rest. Saturday is better for shopping than Sunday.")]},
      {level:"flex",places:[41,42],text:[B("בערב: The Chapel ו־Let’s be Frank — מסעדה ובר סודי.","Evening: The Chapel and Let’s be Frank — restaurant and hidden bar.")]}
    ],options:[
      {title:B("Flohmarkt am Naschmarkt","Flohmarkt am Naschmarkt"),places:[39],text:[B("שוק הפשפשים פתוח בשבת 06:30–15:00, עם עתיקות, ספרים, תקליטים, כלי בית ואמנות.","The flea market is open Saturday 06:30–15:00, with antiques, books, records, household goods and art.")]}
    ],plan:B("הסדנה ו־Schönbrunn הם העוגנים; השוק, הקניות והמנוחה נבחרים לפי הזמן.","The workshop and Schönbrunn are the anchors; choose the market, shopping or rest according to time.")},
    {date:"2026-10-11",city:"vienna",title:B("Haus des Meeres, וינה אחרונה והביתה","Haus des Meeres, final Vienna hours and home"),stops:[26,33,34],blocks:[
      {level:"flex",places:[26],text:[B("09:00: Haus des Meeres נפתח.","09:00: Haus des Meeres opens.")]},
      {level:"urgent",places:[33,34],text:[B("16:30–17:00: מסיימים את הבילוי, אוספים מזוודות ומתארגנים ליציאה.","16:30–17:00: finish sightseeing, collect the luggage and prepare to leave."),B("היעד הוא הגעה לטרמינל סביב 18:30 לטיסה ב־21:30. אין להסתמך על S7 ישיר מ־Praterstern; VAB5 הוא הקו הישיר לשדה.","Aim to reach the terminal around 18:30 for the 21:30 flight. Do not rely on a direct S7 from Praterstern; VAB5 is the direct airport service.")]}
    ],options:[
      {title:B("Wien Museum","Wien Museum"),places:[32],text:[B("חלופה ליום גשום: תערוכת הקבע על תולדות וינה חינמית ופתוחה ביום ראשון.","Rainy-day alternative: the permanent exhibition on Vienna's history is free and open on Sunday.")]},
      {title:B("Design District Vienna","Design District Vienna"),places:[43],text:[B("אפשרות לחובבי עיצוב בלבד; לא מוסיפים אותה אוטומטית אחרי יום עמוס.","An option for design enthusiasts; do not add it automatically after a busy day.")]}
    ],plan:B("משאירים מרווח גדול לאיסוף המזוודות ולנסיעה לשדה.","Leave a generous margin for collecting the luggage and travelling to the airport.")}
  ],
  bookings:[
    B("רכבת ברלין → פראג · 5/10, 11:30–17:30 · כרטיסים ומקומות ישיבה","Berlin → Prague train · Oct 5, 11:30–17:30 · tickets and seats"),
    B("רכבת פראג → וינה · 9/10, 07:40–13:00 · כרטיסים ומקומות ישיבה","Prague → Vienna train · Oct 9, 07:40–13:00 · tickets and seats"),
    B("שמירת מזוודות בדירת וינה ב־9/10 וב־11/10","Luggage storage at the Vienna apartment on Oct 9 and Oct 11"),
    B("ALIZÉ · ברלין · 2/10 בשעה 20:00","ALIZÉ · Berlin · Oct 2 at 20:00"),
    B("High Swing · 3/10 · לתאם לאחר קביעת המפגש עם החברים","High Swing · Oct 3 · coordinate after setting the meeting time with friends"),
    B("GRETCHEN · ארוחה וג׳אז · 4/10, 19:30–23:00","GRETCHEN · dinner and jazz · Oct 4, 19:30–23:00"),
    B("La Scène · פראג · 8/10, 19:30–22:30","La Scène · Prague · Oct 8, 19:30–22:30"),
    B("אופרה · 9/10 · איסוף כרטיסים ב־16:00, מופע ב־19:00","Opera · Oct 9 · ticket collection at 16:00, performance at 19:00"),
    B("סדנת שוקולד · 10/10, 10:30–11:30","Chocolate workshop · Oct 10, 10:30–11:30"),
    B("Schönbrunn · 10/10 · כניסה 13:40–14:00","Schönbrunn · Oct 10 · entry 13:40–14:00"),
    B("אישור צליאק וזיהום משני: La Scène וסדנת השוקולד","Celiac and cross-contamination confirmation: La Scène and the chocolate workshop"),
    B("בחירת יציאת VAB5 לשדה · 11/10 · יעד הגעה 18:30","Choose the VAB5 airport departure · Oct 11 · target arrival 18:30")
  ]
};
