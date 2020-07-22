const products = [{
  name: "רוטשילד",
  img: [require("@/assets/IMG_1208.jpg"), require("@/assets/IMG_1209.jpg"), require("@/assets/IMG_1210.jpg"), require("@/assets/IMG_1230.jpg"), require("@/assets/IMG_1240.jpg"), require("@/assets/IMG_1263.jpg")],
  drow: require("@/assets/drow2.png"),
  description: `אדנית מוצקה ואלגנטית עם נוכחות מרשימה. ניצבת על ארבעה עמודים מרכזיים ומסגרת. כמו כל המוצרים שלנו, רוטשילד עשויה בקפדנות ובדיוק רב. מושלמת גם למרפסת האורבנית שלכם בבניין, וגם לפטיו הכפרי במושב.`,
  description1: `
  <p>אדניות רוטשילד עשויות עץ אורן פיני מלא שעבר הקצעה וחיטוי. ניתן להזמין את האדניות במגוון גדלים ובמגוון צבעים. האדניות מיוצרות בישראל, עוברות בקרת איכות קפדנית, ונשלחות כשהן מורכבות ומוכנות לשימוש.</p>
  `,
  description2: `
  <p class="font-weight-bold">מידות חיצוניות בס"מ (אורךXרוחבXגובה):</p>
  <p>דגם גדול: 80X50X32</p>
  <p>דגם בינוני (מופיע בתמונות): 65X35X32</p>
  <p>דגם קטן: 50X30X32</p>
  <p>מעוניינים בהזמנה מיוחדת? שלחו לנו <a href="https://api.whatsapp.com/send?phone=972537234223">וואטספ!</a></p>
  `,
  description3: `
  <p>בשמריהו אנחנו משתמשים בצבעים הטובים ביותר! לבחירתך <a href="https://www.realmilkpaint.com/real-milk-paint-colors/">10 צבעים</a> של חברת <span class="font-weight-bold">THE REAL MILK PAINT</span>, מטנסי, ארה"ב.</p>
  <p>אבל אנחנו לא מסתפקים בזה! את שטח האדנית הפנימי שבא במגע עם האדמה והצמחים, אנחנו צובעים בשמן טאנג טבעי, שחודר לתוך העץ ומקנה לו עמידות מושלמת לתנאי חוץ. השמן מאושר על ידי ה-FDA למגע עם אוכל ומזון.</p>
  `,
  color: true,
  size: 2,
  addCart: false,
  price: 10,
  previousPrice: 0,
  amount: 1,
  category: "1",
  id: 1
},
{
  name: "אחד העם",
  img: [require("@/assets/IMG_1188.jpg"), require("@/assets/IMG_1220.jpg"), require("@/assets/IMG_1195.jpg")],
  drow: require("@/assets/drow3.png"),
  description: `אדנית כפרית צרה ועמוקה, מושלמת לשתילת ירקות, צמחי תבלין ופרחים מעמיקי שורשים. עשויה לוחות מוקצעים מעץ טבעי מלא, ועל פתחה מסגרת עליונה יפה שבולטת החוצה. אחד העם תיתן למרפסת שלכם מראה כפרי מרענן.`,
  description1: `אדניות אחד העם עשויות עץ אורן פיני מלא שעבר הקצעה וחיטוי.
  ניתן להזמין את האדניות במגוון גדלים ובמגוון צבעים.
  אחד העם מיוצרות בישראל, עוברות בקרת איכות קפדנית, ונשלחות כשהן מורכבות ומוכנות לשימוש (אלא אם כן הזמנתם ערכה להרכבה עצמית).`,
  description2: `מידות חיצוניות בס"מ (אורך*רוחב*גובה): <br>
  דגם גדול: 100*50*30 <br>
  דגם בינוני (מופיע בתמונות): 75*40*30 <br>
  דגם קטן: 50*30*30 <br>
  מעוניינים בהזמנה מיוחדת? שלחו לנו וואטספ!`,
  description3: `תוספת צבע+שמן לאדניות אחד העם: 100 ₪
  בשמריהו אנחנו משתמשים בצבעים הטובים ביותר!
  לבחירתך <a href="https://www.realmilkpaint.com/real-milk-paint-colors/">10 צבעים</a> של חברת THE REAL MILK PAINT, מטנסי, ארה"ב.
  אבל אנחנו לא מסתפקים בזה! את שטח האדנית הפנימי, זה שבא במגע עם האדמה והצמחים,
  אנחנו צובעים בשמן טאנג טבעי, שחודר לתוך העץ ומקנה לו עמידות מושלמת לתנאי חוץ, גם מעובש ופטריות.
  שמן טאנג מאושר על ידי ה-FDA למגע עם אוכל ומזון.`,
  color: true,
  size: 2,
  addCart: false,
  price: 10,
  previousPrice: 0,
  amount: 1,
  category: "1",
  id: 2
},
{
  name: "ביאליק",
  img: [require("@/assets/IMG_1329.jpg"), require("@/assets/IMG_1355.jpg"), require("@/assets/IMG_1311.jpg"), require("@/assets/IMG_1358.jpg")],
  drow: require("@/assets/drow1.png"),
  description: `האדנית הבסיסית של שמריהו. עשויה לוחות מוקצעים מעץ טבעי מלא, אבל עם טוויסט קטן משלה: מסגרת עליונה מרשימה. אז קדימה, אין כמו לפתוח את היום עם קפה ריחני וקרואסון טוב, מול אדניות הפרחים הססגוניות שלכם.`,
  description1: `אדניות ביאליק עשויות עץ אורן פיני מלא שעבר הקצעה וחיטוי.
  ניתן להזמין את האדניות במגוון גדלים ובמגוון צבעים.
  ביאליק מיוצרות בישראל, עוברות בקרת איכות קפדנית, ונשלחות כשהן מורכבות ומוכנות לשימוש (אלא אם כן הזמנתם ערכה להרכבה עצמית).`,
  description2: `מידות חיצוניות בס"מ (אורך*רוחב*גובה): <br>
  דגם גדול: 80*40*32 <br>
  דגם בינוני (מופיע בתמונות): 65*30*32 <br>
  דגם קטן: 50*25*22 <br>
  מעוניינים בהזמנה מיוחדת? שלחו לנו וואטספ!`,
  description3: `תוספת צבע+שמן לאדניות ביאליק: 100 ₪
  בשמריהו אנחנו משתמשים בצבעים הטובים ביותר!
  לבחירתך <a href="https://www.realmilkpaint.com/real-milk-paint-colors/">10 צבעים</a> של חברת THE REAL MILK PAINT, מטנסי, ארה"ב.
  אבל אנחנו לא מסתפקים בזה! את שטח האדנית הפנימי, זה שבא במגע עם האדמה והצמחים,
  אנחנו צובעים בשמן טאנג טבעי, שחודר לתוך העץ ומקנה לו עמידות מושלמת לתנאי חוץ, גם מעובש ופטריות.
  שמן טאנג מאושר על ידי ה-FDA למגע עם אוכל ומזון.`,
  color: true,
  size: 2,
  addCart: false,
  price: 1490,
  previousPrice: 0,
  amount: 1,
  category: "1",
  id: 3
},
{
  name: "ארלוזרוב",
  img: [require("@/assets/IMG_1298.jpg"), require("@/assets/IMG_1275.jpg"), require("@/assets/IMG_1272.jpg"), require("@/assets/IMG_1277.jpg"), require("@/assets/IMG_1301.jpg"), require("@/assets/IMG_1269.jpg")],
  drow: require("@/assets/drow6.png"),
  description: `סט אדניות קטנות ושובבות, מושלמות לסוקולנטים ולצמחי צל. את האדניות תוכלו להציב על השולחן במשרד, במטבח, או סתם על המדרגות בכניסה לבית. ארלוזרוב עשויות בפרופורציות מושלמות, מעץ מלא משובח.`,
  description1: `אדניות ארלוזרוב עשויות עץ אורן פיני מלא שעבר הקצעה וחיטוי.
  ניתן להזמין את האדניות במגוון גדלים ובמגוון צבעים.
  ארלוזרוב מיוצרות בישראל, עוברות בקרת איכות קפדנית, ונשלחות כשהן מורכבות ומוכנות לשימוש (אלא אם כן הזמנתם ערכה להרכבה עצמית).`,
  description2: `מידות חיצוניות בס"מ (אורך*רוחב*גובה): <br>
  האדנית הגדולה: 20*20*20 <br>
  האדנית הבינונית: 15*15*15 <br>
  האדנית הקטנה: 10*10*10 <br>
  מעוניינים בהזמנה מיוחדת? שלחו לנו וואטספ!`,
  description3: `תוספת צבע+שמן לאדניות ארלוזרוב: 50 ₪
  בשמריהו אנחנו משתמשים בצבעים הטובים ביותר!
  לבחירתך <a href="https://www.realmilkpaint.com/real-milk-paint-colors/">10 צבעים</a> של חברת THE REAL MILK PAINT, מטנסי, ארה"ב.
  אבל אנחנו לא מסתפקים בזה! את שטח האדנית הפנימי, זה שבא במגע עם האדמה והצמחים,
  אנחנו צובעים בשמן טאנג טבעי, שחודר לתוך העץ ומקנה לו עמידות מושלמת לתנאי חוץ, גם מעובש ופטריות.
  שמן טאנג מאושר על ידי ה-FDA למגע עם אוכל ומזון.`,
  color: true,
  size: 2,
  addCart: false,
  price: 1490,
  previousPrice: 0,
  amount: 1,
  category: "1",
  id: 4
},
{
  name: "שינקין",
  img: [require("@/assets/IMG_1332.jpg"), require("@/assets/IMG_1254.jpg"), require("@/assets/IMG_1258.jpg"), require("@/assets/IMG_1260.jpg"), require("@/assets/IMG_1283.jpg")],
  drow: require("@/assets/drow5.png"),
  description: `המריצה של שמריהו היא יצירת אמנות. מושלמת לשתילת פרחים עונתיים שופעים כמו פטוניה, וינקה או בשמת. בכל מקום שתציבו את שינקין שלנו היא תהפוך את המרחב סביבה לכפר אירופי קטן וקסום. `,
  description1: `אדניות שינקין עשויות עץ אורן פיני מלא שעבר הקצעה וחיטוי.
  ניתן להזמין את האדניות במגוון גדלים ובמגוון צבעים.
  שינקין מיוצרות בישראל, עוברות בקרת איכות קפדנית, ונשלחות כשהן מורכבות ומוכנות לשימוש (אלא אם כן הזמנתם ערכה להרכבה עצמית).`,
  description2: `מידות חיצוניות מקסימליות בס"מ (אורך*רוחב*גובה): <br>
  127 ס"מ אורך (מקצה הידיות ועד קצה הגלגל) * 44 ס"מ רוחב * 70 ס"מ גובה (מהרצפה ועד קצה הידיות)
  שינקין היא פריט נוי בלבד, ואין להשתמש בה להובלת מטען.
  מעוניינים בהזמנה מיוחדת? שלחו לנו וואטספ!`,
  description3: `תוספת צבע+שמן לאדניות שינקין: 100 ₪
  בשמריהו אנחנו משתמשים בצבעים הטובים ביותר!
  לבחירתך <a href="https://www.realmilkpaint.com/real-milk-paint-colors/">10 צבעים</a> של חברת THE REAL MILK PAINT, מטנסי, ארה"ב.
  אבל אנחנו לא מסתפקים בזה! את שטח האדנית הפנימי, זה שבא במגע עם האדמה והצמחים,
  אנחנו צובעים בשמן טאנג טבעי, שחודר לתוך העץ ומקנה לו עמידות מושלמת לתנאי חוץ, גם מעובש ופטריות.
  שמן טאנג מאושר על ידי ה-FDA למגע עם אוכל ומזון.`,
  color: true,
  size: 2,
  addCart: false,
  price: 1490,
  previousPrice: 0,
  amount: 1,
  category: "1",
  id: 5
},
{
  name: "דיזינגוף",
  img: [require("@/assets/IMG_1348.jpg"), require("@/assets/IMG_1349.jpg")],
  drow: require("@/assets/drow4.png"),
  description: `אדנית קונוס עמוקה. מושלמת לשיחים או עצים קטנים. שבו בחוץ, תנו לרוח ללטף לכם את הפנים, והתמסרו לניחוחות היסמין המשכרים ששתלתם בדיזינגוף. מומלץ לשלב עם פרחים משתפלים כמו סלסלי כסף או מפלית. `,
  description1: `אדניות דיזינגוף עשויות עץ אורן פיני מלא שעבר הקצעה וחיטוי.
  ניתן להזמין את האדניות במגוון גדלים ובמגוון צבעים.
  דיזינגוף מיוצרות בישראל, עוברות בקרת איכות קפדנית, ונשלחות כשהן מורכבות ומוכנות לשימוש (אלא אם כן הזמנתם ערכה להרכבה עצמית).`,
  description2: `מידות חיצוניות בס"מ (אורך*רוחב*גובה): <br>
  דגם גדול: 80*55*36 <br>
  דגם בינוני (מופיע בתמונות): 54*45*36 <br>
  [המידות בדיזינגוף מתייחסות לחלק העליון הגדול יותר של האדנית]
  מעוניינים בהזמנה מיוחדת? שלחו לנו וואטספ!`,
  description3: `תוספת צבע+שמן לאדניות דיזינגוף: 100 ₪
  בשמריהו אנחנו משתמשים בצבעים הטובים ביותר!
  לבחירתך <a href="https://www.realmilkpaint.com/real-milk-paint-colors/">10 צבעים</a> של חברת THE REAL MILK PAINT, מטנסי, ארה"ב.
  אבל אנחנו לא מסתפקים בזה! את שטח האדנית הפנימי, זה שבא במגע עם האדמה והצמחים,
  אנחנו צובעים בשמן טאנג טבעי, שחודר לתוך העץ ומקנה לו עמידות מושלמת לתנאי חוץ, גם מעובש ופטריות.
  שמן טאנג מאושר על ידי ה-FDA למגע עם אוכל ומזון.`,
  color: true,
  size: 2,
  addCart: false,
  price: 1490,
  previousPrice: 0,
  amount: 1,
  category: "1",
  id: 6
},
{
  name: "שקי אדמה",
  img: [require("@/assets/IMG_1323.jpg"), require("@/assets/IMG_1242.jpg")],
  drow: false,
  description: `את שקי השתילה של שמריהו אנחנו ממלאים לכם בידיים. הם מכילים קומפוסט (1/3) ותערובת שתילה (2/3), והם מושלמים להזנת השתילים שלכם בכל מה שנדרש להם. את התחושה הממכרת של ריקון השק לתוך האדנית, עם כל ניחוחות האדמה שהוא מעלה – אי אפשר להחליף!!!`,
  description1: false,
  description2: false,
  description3: false,
  color: false,
  size: false,
  addCart: false,
  price: 1490,
  previousPrice: 0,
  amount: 1,
  category: "2",
  id: 7
},
{
  name: "שלטים",
  img: [require("@/assets/IMG_1284.jpg"), require("@/assets/IMG_1351.jpg"), require("@/assets/IMG_1354.jpg")],
  drow: false,
  description: `שלטי העץ הקטנים והממותגים של שמריהו הם האביזר הכי חמוד שיש לנו כאן. בצדם האחד מתנוססת דמות דיוקנו הנאה של שמריהו, ובצדם השני תוכלו לרשום את שמות שתילי האדנית – נענע? בזיליקום? רקפת? גרניום? מה שתרצו!`,
  description1: false,
  description2: false,
  description3: false,
  color: false,
  size: false,
  addCart: false,
  price: 1490,
  previousPrice: 0,
  amount: 1,
  category: "2",
  id: 8
},
]

  export default products