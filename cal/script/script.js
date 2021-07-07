var checked = false;
let str = ' ';
var p;
p = document.getElementById('text_change');

function sqrt() {
    document.form.textview.value = '\u221A' + document.form.textview.value + '=' + Math.sqrt(document.form.textview.value);
    str = document.form.textview.value + '<br>' + str;
}

function insert(num) {
    if (checked) {
        document.form.textview.value = "";
        p.innerHTML = str;
    }
    document.form.textview.value = document.form.textview.value + num;
    checked = false
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
    checked = true;
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value += '=' + eval(exp);
        str = document.form.textview.value + '<br>' + str;
    }

}