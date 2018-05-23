## Kurulum
```sh
$ npm install karekod-parser --save
```

## Örnek Kullanım
```sh
var karekodParser = require('karekod-parser');
var kk = '01086999999999992118319008343733171907311017G054711';
console.log(karekodParser.parse(kk));
```
### Sonuç
```sh
 { barkod: '8699999999999',
  sn: '18319008343733',
  pn: '17G054711',
  sktf: '31/07/2019',
  skt: moment("2019-07-31T00:00:00.000"),
  miad: 433 }
```

> Eğer karekod formatı uygun değil ise null döner.
