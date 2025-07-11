const { test, expect } = require('@playwright/test');


test ('Login',async({page})=>{

   await page.goto('https://test.satmace.com/');

   
   await page.fill('#v-field-1', 'Prashant@satmace.com'); 
   await page.fill('#v-field-2', 'Satma@201'); 


   await page.click('text=Log in'); 

//    await page.pause(); 

await page.click('a[href="/manufacturing/production/"]');

await page.click('text= Create New ');

await page.waitForTimeout(5000);

// 1. Click the Output Item field
await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/form/div[3]/div[1]/div/div/div/div[2]'); // This targets the input field directly

// 2. Type "Final" into the input
await page.fill('#output_item', 'Final');

// 3. Wait for the dropdown list to appear
await page.waitForSelector('.multiselect__element', { state: 'visible' });

// 4. Click the "Final plastic" option from dropdown
await page.click('li:has-text("Final plastic")');


await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/form/div[3]/div[2]/div/div/div/div[2]');

await page.fill('#work_order','37');

await page.click('text=37');

// Planned Start Date 
    await page.click('input[name="planned_start_date"]');
    await page.waitForTimeout(500);
    await page.click('text="24"');
    await page.keyboard.press('Space');

    // Planned End Date *
    await page.click('input[name="planned_end_date"]');
    await page.waitForTimeout(500);
    await page.click('text="24"');
    await page.keyboard.press('Space');


    await page.fill('#supervisor','Prashant');

    await page.click('button:has-text(" Save ")');

    await page.pause();

    // click Lot 
    await page.click('#create-new-lot');

    // General Details//

    // Process 

    await page.click('xpath=/html/body/div[5]/div[2]/div/div[1]/div/div/form/div[3]/div[1]/div/div/div/div[2]');
    await page.fill('#process','process');
    await page.click('text=T1 Process');

    // Start Date
    await page.click('input[name="start_date"]');
    await page.waitForTimeout(500);
    await page.click('text="24"');
    await page.keyboard.press('Space');

    // End Date
    await page.click('input[name="end_date"]');
    await page.waitForTimeout(500);
    // await page.click('text=25"');
    await page.click('xpath=//*[@id="2025-06-24"]/div');
    await page.keyboard.press('Space');

    // Number Of males & Females 
    await page.fill('#number_of_males','10');

    await page.fill('#number_of_females','5');

    // Supervisor name 
    await page.fill('#supervisor','Prashant');

    await page.click('xpath=/html/body/div[5]/div[2]/div/div[1]/div/div/form/div[3]/div[4]/div/div/div/div[2]');
    await page.fill('#machine','Collection');
    await page.click('text=Collection T1 Machine');

    // Shift Dropdown 
    await page.click('xpath=//*[@id="shift"]');
    await page.fill('#shift','night');
    await page.click('text=Night');

    // Save Button 
    await page.click('#batch-save-btn');

    await page.pause();

    // Selecete Batch 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div/div/div[2]/div/div/div[1]/div');

    // click another Lot 
    await page.click('text=Add Another Lot');

    // Manufactured By *
    await page.click('xpath=/html/body/div[5]/div[2]/div/div[1]/div/div/div/form/div[2]/div[1]/div/div/div/div[2]');
    await page.fill('#manufactured_by','Prashant');
    await page.click('text=Prashant@satmace.com');

    // Manufactured Date & Time *
    await page.click('input[name="manufactured_date"]');
    await page.waitForTimeout(500);
    await page.click('text="24"');
    await page.keyboard.press('Space');

    await page.click('xpath=/html/body/div[5]/div[2]/div/div[1]/div/div/div/form/div[2]/div[4]/div/div/div');

    // Save Button 
    await page.click('#lot-save-btn');


    // Selecete 1st  item 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/form/div/div/div[2]/div[1]/div/div/div/div[2]');
    await page.fill('#item','Red');
    await page.click('text=Red Plastic');

    // 1st time add (Batch In)
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/form/div[2]/div/div[2]/div[2]/div/div/div/div[2]');
    await page.fill('#packaging','bag');
    await page.click('text=Bag');

    // Consumed Quantity & UOM *
    await page.fill('#v-field-38','500');

    // Packaging Quantity & UOM *
    await page.fill('#v-field-37','10');

    // Add Button 
    await page.click('#save-input');

    // Selecete 2st  item 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/form/div[2]/div/div[2]/div[1]/div/div/div/div[2]');
    await page.fill('#item','Green');
    await page.click('text=Green Plastic');

    // 2st time add (Batch In)
    // await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/form/div[2]/div/div[2]/div[2]/div/div/div/div[2]');
    // await page.fill('#packaging','bag');
    // await page.click('text=Bag');

    // Consumed Quantity & UOM *
    await page.fill('#v-field-38','500');

    // Packaging Quantity & UOM *
    await page.fill('#v-field-37','10');
  

    // Add Button 
    await page.click('#save-input');

    // await page.pause();

    // OUTPUT
    await page.click('text=Outputs');


    await page.pause();

    // Step 1: Add first output item (with dropdown selections)
await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/form/div/div[1]/div[1]/div/div/div/div[2]', { timeout: 30000 }); 
await page.fill('#item', 'Final');
await page.click('div.multiselect__content-wrapper >> text=Final Plastic');

// Packaging dropdown
await page.click('#packaging');
await page.fill('#packaging', 'Bag');
await page.click('text=Bag');

// Now loop 5 times to enter values and click Add button
for (let i = 1; i <= 5; i++) {
  await page.fill('#v-field-45', '220'); // Gross Weight Quantity
  await page.fill('#v-field-47', '20');  // Packaging Weight Quantity

  // Click Save/Add button
  await page.click('#save-output');

  // Wait a bit to ensure processing finishes before next round
  await page.waitForTimeout(1000);
}

await page.pause();

  //   // 1 //

  //   // Add OutPut Item 
  //   await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/form/div/div[1]/div[1]/div/div/div/div[2]', { timeout: 30000 }); 
  //   await page.fill('#item', 'Final');
  //   await page.click('div.multiselect__content-wrapper >> text=Final Plastic');

  //   // packaging
  //   await page.click('xpath=//*[@id="packaging"]');
  //   await page.fill('#packaging','Bag');
  //   await page.click('text=Bag');


  //   // Gross Weight Quantity & Packaging Weight Quantity *
  //   await page.fill('#v-field-45','220');
  //   await page.fill('#v-field-47','20');
  //   await page.click('#save-output');

  //    await page.pause();

  //   // 2 //

  //   // Gross Weight Quantity & Packaging Weight Quantity *
  //   await page.fill('#v-field-45','220');
  //   await page.fill('#v-field-47','20');
  //   await page.click('#save-output');
    
  //   // 3 //

  //   // Gross Weight Quantity & Packaging Weight Quantity *
  //   await page.fill('#v-field-45','220');
  //   await page.fill('#v-field-47','20');
  //   await page.click('#save-output');

  //   await page.pause();


  //   // 4 //

  //   // Gross Weight Quantity & Packaging Weight Quantity *
  //   await page.fill('#v-field-45','220');
  //   await page.fill('#v-field-47','20');
  //   await page.click('#save-output');

  //   // 5 //

  //  // Gross Weight Quantity & Packaging Weight Quantity *
  //   await page.fill('#v-field-45','220');
  //   await page.fill('#v-field-47','20');
  //   await page.click('#save-output');

  //   await page.pause();

    // Preview  Button //
    await page.click('a:has-text("Preview")');


    // Lock Button //
    await page.click('button:has(svg[data-icon="material-symbols:lock"])');

    await page.pause();


    // Approve Button //
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/div/div[2]/div/div[1]/div[2]/div/div/div[2]/div[2]/button[1]');

    // Approve Button //
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div/div/div[1]/div[2]/button');

    await page.pause();
  }
);
