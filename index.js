var moment = require('moment');

exports.parse = function (karekod) {
  var karekodExp = /^010(\d{13})21(.*)17(\d{2})(\d{2})(\d{2})10(.*)/g;
  var kk = karekodExp.exec(karekod);
  if (!kk) {
    return null;
  } else {
    var bugun = moment();
    var sktf = kk[5] === '00' ? moment(kk[3] + kk[4], 'YYMM').format('MM/YYYY') : moment(kk[3] + kk[4] + kk[5], 'YYMMDD').format('DD/MM/YYYY');
    var skt = kk[5] === '00' ? moment(kk[3] + kk[4], 'YYMM') : moment(kk[3] + kk[4] + kk[5], 'YYMMDD');
    return {
      barkod: kk[1],
      sn: kk[2],
      pn: kk[6],
      sktf: sktf,
      skt: skt,
      miad: skt.diff(bugun, 'days')
    }
  }
}