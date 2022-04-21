/*

* 커피 원두 : 20000
* 우유 : 30000
* 물 : 100
* 설탕 : 3000
* 시럽 : 15000
* 시나몬 : 500
* 빨대 : 1000
* 머그컵 : 300000
* 종이컵 : 1000000
* 얼음 : 20000

*/

const itemObj = {
  coffee: 20000,
  milk: 30000,
  water: 100,
  suger: 3000,
  syrup: 15000,
  sinamon: 500,
  strrow: 1000,
  mug: 300000,
  takeout: 1000000,
  ice: 20000
}

const americano = {
  one: itemObj.coffee,
  two: itemObj.water,
  three: itemObj.takeout
}

let americanoPrice = americano.one + americano.two + americano.three;
console.log(americanoPrice);
console.log(americanoPrice+itemObj.ice);


let coffeeJin = americanoPrice + itemObj.strrow;
// console.log(coffeeJin);

let menu = ["아메리카노", "오늘의 커피", "카페라떼", "카푸치노"]

let today = `오늘 ${menu[0]}의 가격은 ${americanoPrice}원입니다.`;
console.log(today);


if(coffeeJin > 100000){
  console.log(`오늘의 커피 가격은 ${coffeeJin}원 입니다. 진심임?`);
} else {
  console.log(`${coffeeJin}원 입니다. 최고~`)
}