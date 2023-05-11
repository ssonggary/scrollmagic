/*
기본 동작 원리
1. ScrollMagic 컨트롤러 생성
2. animation object 생성
3. Scene object 생성
4. 2번을 3번에 추가
5. 1번(controller)을 3번에 추가
*/

$(function () {
  const controller = new ScrollMagic.Controller(); //1. ScrollMagin 컨트롤러 생성

  const tween1 = TweenMax.to("#animate1", 0.5, {
    //2. animate object 생성
    backgroundColor: "#333333",
    scale: 2.5,
    rotation: 360,
    x: 130,
  });

  //애니메이션을 반복 재생
  const tweenYoyo = TweenMax.fromTo(
    "#animate1",
    0.6,
    {
      backgroundColor: "#333333",
      scale: 1,
    },
    {
      scale: 2.5,
      backgroundColor: "#dc143c",
      x: 100,
      rotation: 360,
      repeat: -1,
      yoyo: true,
    }
  );

  //무한 반복재생
  const tweenStagger = TweenMax.staggerFromTo(
    ".icon",
    0.4,
    {
      scale: 0.85,
    },
    {
      backgroundColor: "#dc143c",
      scale: 1.2,
      rotation: 300,
    }
  );

  const scene = new ScrollMagic.Scene({
    //3. Scene object 생성
    triggerElement: "#trigger1", // 스크롤 애니메이션 시작지점 설정
    duration: "100%", //애니메이션 재생 시간 100%지정하면 화면 높이에 따라 유동적으로 end 위치가 정해짐
    // offset: -150, //실제 트리거보다 빠르게/느리게 애니메이션을 작동
  })
    .setTween(tweenYoyo) //4. 2번을 3번에 추가
    .addTo(controller) //5. 1번(controller)을 3번에 추가
    .addIndicators({
      name: "1",
    }); //인디케이터로 위치 파악하기 쉬움
});
