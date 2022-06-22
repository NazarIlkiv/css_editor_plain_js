function fun1() {
    const rtl = document.getElementById('rtl').value;
    const rtr = document.getElementById('rtr').value;
    const rbr = document.getElementById('rbr').value;
    const rbl = document.getElementById('rbl').value;

    document.getElementById('ttl').value = rtl;
    document.getElementById('ttr').value = rtr;
    document.getElementById('tbr').value = rbr;
    document.getElementById('tbl').value = rbl;

    let block = document.getElementById('block');

    block.style.borderRadius = rtl+'px ' +rtr + 'px ' + rbr + 'px ' + rbl + 'px ' ;
}