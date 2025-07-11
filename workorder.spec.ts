const { test, expect } = require('@playwright/test');


test ('Login',async({page})=>{

   await page.goto('https://test.satmace.com/');

   
   await page.fill('#v-field-1', 'Prashant@satmace.com'); 
   await page.fill('#v-field-2', 'Satma@201'); 

   
   await page.click('text=Log in'); 

//    await page.pause(); 

await page.click('text=Work Order');

await page.click('text= Create New ');

await page.waitForTimeout(5000);

// Work Order Date
    await page.click('input[name="work_order_date"]');
    await page.waitForTimeout(500);
    await page.click('text="19"');
    await page.keyboard.press('Space');


    // await page.pause();

    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/div/form/div/div[1]/div[3]/div/div/div/div[2]');
    await page.fill('#warehouse','Mumbai');
    await page.click('text=Mumbai Warehouse');

    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/div/form/div/div[1]/div[6]/div/div/div/div[2]');
    await page.fill('#item','Final');
    await page.click('text=Final Plastic');
    
    // Item quantity & UOM 
    await page.fill('#v-field-8','1000');


    // Start Date
    await page.click('input[name="estimated_start"]');
    await page.waitForTimeout(500);
    await page.click('text="21"');
    await page.keyboard.press('Space');


    // Start Date
    await page.click('input[name="estimated_end"]');
    await page.waitForTimeout(500);
    await page.click('text="21"');
    await page.keyboard.press('Space');

//     await page.waitForSelector('#submit-button', { state: 'visible' });
// await page.click('#submit-button');

await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/div/form/div/div[1]/div[8]/div/div/div/div[2]/span');
await page.keyboard.press('Space');

await page.click('text=Auto BOM 30');

await page.click('xpath=//*[@id="button"]');

await page.pause();

await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/div[2]/div[1]/div/form/div[2]/div/div[3]/div/div/div/div[2]/span', { timeout: 30000 });
await page.keyboard.press('Space');

await page.click('text=Collection T1 Machine');

// await page.pause();

// Machine Save Button 
await page.click('button:has-text("Save")');


// Save & Preview Button 
 await page.click('button:has-text("Save & Preview")');

//  Approve Button 

await page.click('button:has-text(" Approve ")');

await page.pause();
  }
);
