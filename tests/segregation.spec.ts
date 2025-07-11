const { test, expect } = require('@playwright/test');

test('Login and Create Segregation', async ({ page }) => {

    await page.goto('https://test.satmace.com/');

    page.setDefaultTimeout(30000);

    // Login
    await page.fill('#v-field-1', 'Prashant@satmace.com');
    await page.fill('#v-field-2', 'Satma@201');
    await Promise.all([
      page.waitForNavigation(),
      page.click('text=Log in')
    ]);

    // Navigate to segregation
    await page.click('text=Segregation');
    await page.click('text= Create New ');

    // Select performed by (dropdown)
    await page.waitForSelector('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/form/div[1]/div[2]/div/div/div/div[2]');
    await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/form/div[1]/div[2]/div/div/div/div[2]');
    await page.keyboard.press('Space');
    await page.waitForSelector('text=Prashant@satmace.com');
    await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/form/div[1]/div[2]/div/div/div/div[3]/ul/li[1]/span/div/span');

    // Enter male/female count
    await page.fill('#male_count', '10');
    await page.fill('#female_count', '11');

    // Select warehouse
    await page.waitForSelector('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/form/div[1]/div[5]/div/div/div/div[2]/span');
    await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/form/div[1]/div[5]/div/div/div/div[2]/span');
    await page.keyboard.press('Space');
    await page.waitForSelector('text=Mumbai Warehouse');
    await page.click('text=Mumbai Warehouse');

    // Start Date
    await page.click('input[name="start_date"]');
    await page.waitForTimeout(500);
    await page.click('text="12"');
    await page.keyboard.press('Space');

    // End Date
    await page.click('input[name="end_date"]');
    await page.waitForTimeout(500);
    await page.click('text="12"');
    await page.keyboard.press('Space');

    // Submit main form
    await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/form/div[2]/button');

    // Add segregation item
    await page.waitForSelector('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div[1]/div/div[2]/button[1]');
    await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div[1]/div/div[2]/button[1]');

    // GRN selection
    await page.waitForSelector('xpath=/html/body/div[5]/div[2]/div/div[1]/div/div/div[1]/div/div/div[2]');
    await page.click('xpath=/html/body/div[5]/div[2]/div/div[1]/div/div/div[1]/div/div/div[2]');
    await page.fill('#grn_line_item', '182');
    await page.click('text=182 :: 2025-06-12 :: Prashant :: Mix Plastic :: KGS :: QC not required');

    await page.pause();

    //1 Item type
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/form/div[2]/div[1]/div/div/div/div[2]/span');
    await page.fill('#item', 'red');
    await page.click('text=Red Plastic');

    // Fill quantity and packaging
    await page.fill('#v-field-24', '50');
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/form/div[2]/div[3]/div/div/div/div[2]/span');
    await page.fill('#packaging', 'bale');
    await page.click('text=bale');

    // Submit item
    await page.click('xpath=/html/body/div[2]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/form/button', { timeout: 30000 });

    //2 Item type
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div[3]/div[2]/div/div/form/div[2]/div[1]/div/div/div/div[2]/span', { timeout: 30000 });
    await page.fill('#item', 'blue');
    await page.click('text=blue Plastic');

    await page.pause();

    // Fill quantity and packaging
    await page.fill('#v-field-31', '60');
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div[3]/div[2]/div/div/form/div[2]/div[3]/div/div/div/div[2]/span');
    await page.fill('#packaging', 'bale');
    await page.click('text=Bale');
 
    // Submit item
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div[3]/div[2]/div/div/form/button', { timeout: 30000 });


    // Privew Button 
    await page.click('xpath=//*[@id="app"]/div/div/div[6]/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[2]/a');

    // Approve Button 
    await page.click('xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/button[1]');

    await page.pause();
  }
);
