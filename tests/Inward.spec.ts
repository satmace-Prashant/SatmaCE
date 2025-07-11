const { test, expect } = require('@playwright/test');


test ('Login',async({page})=>{

   await page.goto('https://test.satmace.com/');

   
   await page.fill('#v-field-1', 'Prashant@satmace.com'); 
   await page.fill('#v-field-2', 'Satma@201'); 

   
   await page.click('text=Log in'); 

//    await page.pause(); //

await page.click('text=Material Inward');

await page.click('text= Create New ');

await page.waitForTimeout(5000);

// await page.pause();

await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/form/div[3]/div[2]/div/div/div/div[2]/span');

await page.fill('#trade_partner', 'Pra');

await page.click('xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[3]/ul[1]/li[1]/span[1]/div[1]/span[1]');

await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/form/div[3]/div[7]/div/div/div/div[2]');

await page.fill('#warehouse','Mumbai');

await page.click('text=Mumbai warehouse');

await page.click('text=save');

// ITEM 1 //
await page.fill('id=item_search' ,'Red');

await page.click('xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]')

await page.fill('#v-field-13','1000');

await page.fill('#rate-undefined','20');

await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/form/div[3]/div[2]/div/div/div/div[2]/span');         // Focus the element

await page.fill('#packaging', 'Loose');

await page.click('text=Loose'); // select the option

await page.fill('xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/div[4]/div[1]/div[1]/input[1]','bandra');

await page.keyboard.press('ArrowDown');

await page.keyboard.press('Enter');

// await page.click('button:has-text("Add")');

await page.pause();

// ITEM 2 //
await page.fill('id=item_search' ,'Green');

await page.click('xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]')

await page.fill('#v-field-27','1000');

await page.fill('#rate-undefined','20');

await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/form/div[3]/div[2]/div/div/div/div[2]/span');         // Focus the element

await page.fill('#packaging', 'Loose');

await page.click('text=Loose'); // select the option

// await page.fill('xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/div[4]/div[1]/div[1]/input[1]','bandra');

await page.fill('input[placeholder="Enter a location"]', 'bandra');

await page.keyboard.press('ArrowDown');

await page.keyboard.press('Enter');

// await page.click('button:has-text("Add")');

// await page.pause();

await page.click('text=Save & Preview');

await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/div/div/div[1]/div[2]/button/span');

await page.pause();

   } )