/*
Jennessa Sierra
CMPS2151 - WEB DEV LAB#04
Script Source File
Filename: functions.js
*/

/* Define your functions here for Question #6 */

/* Q#6.1
Name: outputCartRow()
@param: item, total
Description: Function uses document.write to create <tr> and <td> to create the table structure for items, quantity and price
*/

const outputCartRow = (item, total) => {
  document.write(`
    <tr>
        <td style="width: 150px;"><img src="images/${
          item.product.filename
        }" style="width: 100%; height: auto;"></td>
        <td>${item.product.title}</td>
        <td style="text-align: center;">${item.quantity}</td>
        <td style="text-align: right;">$${item.product.price.toFixed(2)}</td>
        <td style="text-align: right;">$${total.toFixed(2)}</td>
    </tr>
    `);
};

for (let item of cart) {
  for (i = 0; i < 3; i++) {
    console.log("Data is linked: " + item.product.title);
  }
}

/* Q#6.4
Name: calculateTotal()
@param: quantity, price
Description: Calcluates the total cost and return value should be the product of quantity and price
*/
const calculateTotal = (quantity, price) => {
  return quantity * price;
};

const calculateSubtotal = (cart) => {
  var subtotal = 0;

  for (let item of cart) {
    subtotal += calculateTotal(item.quantity, item.product.price);
  }

  document.write(`
      <tr class="totals">
          <td colspan="4">Subtotal</td>
          <td>$${subtotal.toFixed(2)}</td>
      </tr>
      `);

  return subtotal;
};

/* Q#6.4
Name: calculateTax()
@param: subtotal, rate
Description: Calculates the tax cost and return value should be the product of subtotal and rate
*/

const calculateTax = (subtotal, tax_rate) => {
  const tax = subtotal * tax_rate;

  document.write(`
      <tr class="totals">
          <td colspan="4">Tax</td>
          <td>$${tax.toFixed(2)}</td>
      </tr>
      `);

  return tax;
};

/* Q#6.4
Name: calculateShipping()
@param: subtotal, threshold
Description: Calculates the shipping cost, returns: 0 if subtal is greater than the shipping threshold, 
otherwise shipping cost is $40
*/

const calculateShipping = (subtotal, threshold) => {
  const shipping = subtotal > threshold ? 0 : 40;

  document.write(`
      <tr class="totals">
          <td colspan="4">Shipping</td>
          <td>$${shipping.toFixed(2)}</td>
      </tr>
      `);

  return shipping;
};

/* Q#6.4
Name: calculateGrandTotal()
@param: subtotal, tax, shipping
Description: Calculates the Grand Total Cost and returns the value of the sum of subtotal, tax and shipping
*/

const calculateGrandTotal = (subtotal, tax, shipping) => {
  const grandTotal = subtotal + tax + shipping;

  document.write(`
      <tr class="totals">
          <td colspan="4" class="focus">Grand Total</td>
          <td class="focus">$${grandTotal.toFixed(2)}</td>
      </tr>
      `);

  return grandTotal;
};

/* Q#6.4
Name: outputCurrency()
@param: num 
Description: takes a number value as paramter, which is either tax, shipping, total grand total, 
It writes the formatted cost in currency, two decimal places in the cart rows of the table. 
num should be the const vairables you defined from cmps2151Lab05.js
*/

const outputCurrency = (num) => {
  return num.toFixed(2);
};
