var moment = require('moment');

exports.parse = function (karekod) {
  if (!karekod) {
    return null
  }
  var karekodExp = /010(\d{13})21([^\W_]{1,20})-?17(\d{2})(0[1-9]|1[012])(00|0[1-9]|[12][0-9]|3[01])10([^\W_]{1,20})$/g;
  var kk = karekod.match(karekodExp);
  if (!kk) {
    return null;
  } else {
    var bugun = moment();
    var sktf = kk[5] === '00' ? moment(kk[3] + kk[4], 'YYMM').format('MM/YYYY') : moment(kk[3] + kk[4] + kk[5], 'YYMMDD').format('DD/MM/YYYY');
    var skt = kk[5] === '00' ? moment(kk[3] + kk[4], 'YYMM') : moment(kk[3] + kk[4] + kk[5], 'YYMMDD');
    return {
      barkod: kk[1],
      gtin: '0'+kk[1],
      sn: kk[2],
      bn: kk[6],
      xd: sktf,
      skt: skt,
      miad: skt.diff(bugun, 'days')
    }
  }
}