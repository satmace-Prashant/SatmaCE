const { test, expect } = require('@playwright/test');


test ('Login',async({page})=>{

   await page.goto('https://test.satmace.com/');

   
   await page.fill('#v-field-1', 'Prashant@satmace.com'); 
   await page.fill('#v-field-2', 'Satma@201'); 

   
   await page.click('text=Log in'); 

   await page.waitForTimeout(5000);

// Controls & Master
await page.click('xpath=//*[@id="app"]/div/div/div[3]/div[2]/ul[1]/li[2]', { timeout: 30000 });

await page.click('text= Bill Of Materials ', { timeout: 30000 });

// await page.pause();

await page.click('xpath=//*[@id="app"]/div/div/div[4]/div[2]/div[1]/div[2]/div/div/div/ul/li[2]/ul/li', { timeout: 30000 });


await page.click('text= Create New ');

await page.waitForTimeout(5000);

await page.fill('#name','Auto BOM 30');


await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/div/form/div[1]/div[2]/div/div/div/div[2]');
    await page.fill('#item','Final');
    await page.click('text=Final Plastic');

    await page.fill('#v-field-7','1000');

    await page.selectOption('#v-field-9', { label: 'KGS' });

    await page.pause();
    // Save Button 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/div/form/div[2]/button');

    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[1]/div/form/div[2]/div/div[2]/div/div/div/div[2]');
   await page.fill('#process','Process');
   await page.click('text=T1 Process');


//    Item Add Button 
   await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[1]/div/form/div[4]/button');

// 1st time Add 
   await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[1]/div/div/div/div[2]');
    await page.fill('#item','red');
    await page.click('text=Red Plastic');

    await page.fill('#v-field-13','500');
    await page.keyboard.press('Enter');

    // Add Button 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[3]/div/button');

    await page.pause();

    // 2nd time Add 
   await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[1]/div/div/div/div[2]');
    await page.fill('#item','Green', { timeout: 30000 });
    await page.click('text=Green Plastic', { timeout: 30000 });

    await page.fill('#v-field-16','500', { timeout: 30000 });
    await page.keyboard.press('Enter');

    // Add Button 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[3]/div/button');

    await page.click('text=Output');

    await page.pause();

    // // Output Item 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div/form/div[1]/div[1]/div/div/div/div[2]');    
    await page.fill('#item','Final', { timeout: 30000 });
    await page.click('xpath=//*[@id="item-0"]/span/div/span');
    // await page.click('text=Final Plastic', { timeout: 30000 });

    await page.fill('#v-field-19','1000');

    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div/form/div[1]/div[3]/div/div/div/div[2]');
    await page.fill('#packaging','Loose');
    await page.click('text=Loose');

    await page.click('xpath=//*[@id="output_type"]');
    await page.fill('#output_type','Planned');
    await page.click('xpath=//*[@id="output_type-multiselect-option-PLANNED"]');

    // await page.pause();

    // Out Add item Button 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div/form/div[2]/button');


    // Save & Privew Button 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div[3]/button');


    // Approve Button 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[1]/div[2]/button');

await page.pause();
  }
);
