const puppteer = require('puppeteer')

async function scrapProduct(url){
const browser = await puppteer.launch()
const page = await browser.newPage()
await page.goto(url)

// const [el] = await page.$x('/html/body/div[2]/div/div[5]/div/div/div/div/div[1]/div/div/div/div[3]/div/div/div/div/div/div[2]/span/span[1]/font/font')
// const src = await el.getProperty('innerText')
// const srctxt = await src.jsonValue()
// console.log({srctxt})
//await page.waitFor(4000);
//await page.click('a[title="Ingles"]')
await page.evaluate(() => {
    doGTranslate('pt|en')
  });
await page.waitFor(6000)

const text1 = await page.evaluate(() => document.querySelectorAll("span.lbl-licitacao")[0].textContent.trim())
const text2 = await page.evaluate(() => document.querySelectorAll("p")[0].textContent.trim())
const text6 = await page.evaluate(() => document.querySelectorAll("span.lbl-licitacao")[5].textContent.trim())


console.log( text1);
console.log(text2);
console.log(text6);

const [elements ]= await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[3]/div/table/tbody/tr/td[2]/div/div/div/a')
const link = await elements.getProperty('href')
const imp_link = link._remoteObject.value
console.log(`Related Links: ${imp_link}`)

}





 


scrapProduct("https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020")