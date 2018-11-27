const karekodParser = require('../index.js');
const kk = {
  tireliUygunKarekod: '01086999999999992118319008343733-171907311017G054711',
  tiresizUygunKarekod: '01086999999999992118319008343733171907311017G054711',
  gunBilgisiSifirKarekod: '01086999999999992118319008343733171907001017G054711',
  snCokKarakterKarekod: '010869999999999921xxxxxxxxxxxxxxxxxxxxxx171907001017G054711',
  bnCokKarakterKarekod: '0108699999999999211831900834373317190731xxxxxxxxxxxxxxxxxxxxx',
  ayFormatiHataliKarekod: '01086999999999992118319008343733171913311017G054711',
  gunFormatiHataliKarekod: '01086999999999992118319008343733-171907321017G054711',
  snHataliKarakterKarekod: '0108699999999999211&%8319008343733171907311017G054711',
  bnHataliKarakterKarekod: '01086999999999992118319008343733171907311017G054%%711',
}
const barkod = '8699999999999';
const xd = '31/07/2019';
const xdGunSifir = '07/2019';

test('tireliKarekod testi', () => {
  expect(karekodParser.parse(kk.tireliUygunKarekod).barkod).toBe(barkod);
})
test('tiresizKarekod testi', () => {
  expect(karekodParser.parse(kk.tiresizUygunKarekod).barkod).toBe(barkod);
  expect(karekodParser.parse(kk.tiresizUygunKarekod).xd).toBe(xd);
})
test('gunBilgisiSifirKarekod testi', () => {
  expect(karekodParser.parse(kk.gunBilgisiSifirKarekod).xd).toBe(xdGunSifir);
})
test('snCokKarakterKarekod testi', () => {
  expect(karekodParser.parse(kk.snCokKarakterKarekod)).toBe(null);
})
test('bnCokKarakterKarekod testi', () => {
  expect(karekodParser.parse(kk.bnCokKarakterKarekod)).toBe(null);
})
test('ayFormatiHataliKarekod testi', () => {
  expect(karekodParser.parse(kk.ayFormatiHataliKarekod)).toBe(null);
})
test('gunFormatiHataliKarekod testi', () => {
  expect(karekodParser.parse(kk.gunFormatiHataliKarekod)).toBe(null);
})
test('snHataliKarakterKarekod testi', () => {
  expect(karekodParser.parse(kk.snHataliKarakterKarekod)).toBe(null);
})
test('bnHataliKarakterKarekod testi', () => {
  expect(karekodParser.parse(kk.bnHataliKarakterKarekod)).toBe(null);
})
test('nullKarekod testi', () => {
  expect(karekodParser.parse(null)).toBe(null);
})
test('bosStringKarekod testi', () => {
  expect(karekodParser.parse('')).toBe(null);
})