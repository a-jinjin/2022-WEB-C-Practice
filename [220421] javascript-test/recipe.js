// 토마토 달걀볶음
// 토마토 / 달걀 / 올리브오일 / 대파 / 진간장

let tomatoObj = [
  "토마토",
  "달걀",
  "올리브오일",
  "대파",
  "진간장",
  "굴소스", 
  "초콜릿"
]

// console.log(tomatoObj);
console.log(`토마토 달걀볶음의 재료는 ${tomatoObj}`);

// console.log(`토마토 달걀볶음의 재료는 ${tomatoObj}-${tomatoObj[6]}`);
// tomatoObj의 요소 중 마지막 요소인 '초콜릿'을 제외하고 표시해주고 싶었다. ==> 작동하지 않음

console.log(`${tomatoObj[tomatoObj.length-1]}은 빼주세요.`)