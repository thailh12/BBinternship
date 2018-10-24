// const app = document.querySelector('.app');

// app.addEventListener('click', e => {
//   if (e.target.matches('input[type="button"]')) {
//     const value = e.target.value;
//     if (value === '=') {
//       console.log('calculate');
//     } else {
//       console.log(value);
//     }
//   }
// });

class Calculator {
  constructor(selector) {
    this.el = document.querySelector(selector);
    this.el.innerHTML = this.constructor.template;
    this.el.classList.add('calculator');
  }
}
Calculator.template = `
<table class="table table-bordered">
    <tr>
        <td colspan="4">
            <input id="result" type="text" name="display" id="display" disabled>
            <input type="button" value="c">
        </td>
    </tr>
    <tr>
        <td>
            <input type="button" value="1">
        </td>
        <td>
            <input type="button" value="2">
        </td>
        <td>
            <input type="button" value="3">
        </td>
        <td>
            <input type="button" value="+">
        </td>
    </tr>
    <tr>
        <td>
            <input type="button" value="4">
        </td>
        <td>
            <input type="button" value="5">
        </td>
        <td>
            <input type="button" value="6">
        </td>
        <td>
            <input type="button" value="-">
        </td>
    </tr>
    <tr>
        <td>
            <input type="button" value="7">
        </td>
        <td>
            <input type="button" value="8">
        </td>
        <td>
            <input type="button" value="9">
        </td>
        <td><input type="button" value="x"></td>
    </tr>
    <tr>
        <td>
            <input type="button" value=".">
        </td>
        <td>
            <input type="button" value="0">
        </td>
        <td><input type="button" value="="></td>
        <td>
            <input type="button" value="/">
        </td>
    </tr>
</table>
`;

new Calculator('.app');
