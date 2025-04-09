    
    document.addEventListener("DOMContentLoaded", function () {
      let index = 0;
      const slides = document.querySelectorAll(".slide");
      const totalSlides = slides.length;
      const slider = document.querySelector(".slider");

      function moveSlide(n) {
        index = (index + n + totalSlides) % totalSlides;
        slider.style.transform = `translateX(${-index * 100}%)`;
      }

      document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
      document.querySelector(".next").addEventListener("click", () => moveSlide(1));

      setInterval(() => moveSlide(1), 3000);
      
    });




    //리뷰 슬라이더

    let currentIndex = 0; // 현재 활성화된 인덱스
    const totalSlides = document.querySelectorAll(".review-slide").length;

    function moveReview(index) {
      currentIndex = index;
      updateReview();
    }

    function updateReview() {
      // 이미지 슬라이더 이동
      const slider = document.querySelector(".review-slider");
      slider.style.transform = `translateX(-${currentIndex * 33.3333}%)`;

      // 리뷰 변경
      document.querySelectorAll(".review-item").forEach((item, idx) => {
        item.style.display = idx === currentIndex ? "block" : "none";
      });


      document.querySelectorAll(".review-hashtag").forEach((tag, idx) => {
        tag.style.display = idx === currentIndex ? "inline-block" : "none";
      });

      // 버튼 활성화 표시
      document.querySelectorAll(".review-buttons button").forEach((btn, idx) => {
        btn.classList.toggle("active", idx === currentIndex);
      });
    }

    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateReview();
    }, 3000);


    updateReview();


// cusor_effect선택
    const curserEffect = document.querySelector(".cursor_effect")

    //문서내에서 마우스무브 이벤트 생성
    document.documentElement.addEventListener("mousemove", (e) => {
      //각 변수에 스크롤 이동값을 제외한 마우스 x,y축 위치값 할당
      let posX = e.clientX;
      let posY = e.clientY;

      //cursorEffect요소의 transform:translate속성값으로 마우스 위치값 대입
      curserEffect.style.transform = `translate(${posX}px, ${posY}px)`;
    })

    //a요소에 마우스를 올리면 커서 이펙트가 커지는 효과
    //모든 a요소를 선택
    const anchors = document.querySelectorAll("a");

    //a요소에 마우스를 올리면 cursorEffect요소에 on클래스를 추가
    anchors.forEach(anchors => anchors.addEventListener("mouseover",() => {
      curserEffect.classList.add("on")
    }))

    //a요소에 마우스가 떠나면 cursorEffect요소에 on클래스를 제거
    anchors.forEach(anchors => anchors.addEventListener("mouseout",() => {
      curserEffect.classList.remove("on")
    }))
  
    //마우스를 클릭했을때 커서 이펙트에 적용할 효과(클릭하면 커서이펙트가 작아지는 효과)
    const cursorIcon = document.querySelector(".cursor_icon")
    
    //마우스 버튼을 누르고 있을떄 cursor_icon에 active클래스 추가
    document.documentElement.addEventListener("mousedown",() => {
      cursorIcon.classList.add("active");//커서의 크기가 작아짐
    })

    //마우스 버튼을 누르고 땟을때 cursor_icon에 active클래스 추가
    document.documentElement.addEventListener("mouseup",() => {
      cursorIcon.classList.remove("active");//커서의 크기를 원래대로
    })