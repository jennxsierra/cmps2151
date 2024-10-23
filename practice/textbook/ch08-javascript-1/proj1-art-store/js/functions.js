/* define your functions here */
const calculateTotal = (quantity, price) => {
  return quantity * price;
};

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
