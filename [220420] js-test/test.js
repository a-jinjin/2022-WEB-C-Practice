// let weather = "sunny";
// 변수 weather에 string 타입 "sunny"를 대입하겠다.

// console.log(weather);
// wether에 뭐가 들어있나 확인하고싶다.

// console.log(typeof weather);
// weather의 데이터 타입을 확인하고싶다. ==> string

// if(typeof weather === "string") {
  // console.log("sunnysideUp");
  // weather의 데이터 타입이 string타입이 맞다면 console에 "sunnysideUp"이라고 보여줘.
// }
// else {
  // console.log("Meh");
  // weather의 데이터 타입이 string타입이 아니라면 console에 "Meh"라고 보여줘.
// }


const weather = ["sunny", "cloudy", "windy", "rainy"]
// weather라는 array를 만들었다.

console.log(typeof weather);
// weather의 데이터 타입을 확인하고싶다. ==> object

console.log(weather.indexOf("sunny"));
// "sunny"라는 string데이터의 순서(index)를 알고싶다.

console.log("today is " + weather[0] + " day");
// console에 "today is "와 weather의 0번째 index와 " day"를 더한 값을 보여줘.

if(weather[1] === "sunny"){
  console.log("today is sunny day");
  // weather의 1번째가 "sunny"라는 스트링타입이면 console에 "today is sunny day"라고 보여줘.
}else{
  console.log("not today...")
  // weather의 1번째가 "sunny"가 아니라면 console에 "not today..."라고 보여줘.
}