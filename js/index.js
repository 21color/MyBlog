window.onload = () => {
	const activate = () => {
		const mySections = document.querySelectorAll('.mysection');
		const myCircle = document.querySelectorAll('.thisshowitemss');
		const bigRestRoom = document.querySelector('.bigrestRoom');
		const windowH = window.innerHeight;

		myCircle.forEach((myCircles) => {
			if (myCircles.getBoundingClientRect().top < windowH) {
				myCircle[0].style.transform = 'translate(4rem, -15rem)';
				myCircle[1].style.transform = 'translate(-28rem, 35rem)';
				myCircle[2].style.transform = 'translate(20rem, 35rem)';
				myCircles.style.opacity = 1;
			} else {
				myCircles.style.opacity = 0;
				myCircle[0].style.transform = 'translate(10rem, -15rem)';
				myCircle[1].style.transform = 'translate(-28rem, 70rem)';
				myCircle[2].style.transform = 'translate(90rem, 35rem)';
			}
		});

		for (const element of mySections) {
			if (element.getBoundingClientRect().top < windowH) {
				element.style.opacity = 1;
			} else {
				element.style.opacity = 0;
			}
		}
		if (bigRestRoom.getBoundingClientRect().top < windowH) {
			bigRestRoom.style.opacity = 1;
		} else {
			bigRestRoom.style.opacity = 0;
		}
	};

	window.addEventListener('scroll', activate);

	setTimeout(() => {
		const hanatitle = document.querySelector('.hanatitle');
		hanatitle.style.opacity = '1';
	}, 800);

	const loadMyRoom = () => {
		const mydoorhandleBtn = document.querySelector('.key');
		const mydoor = document.querySelector('.mydoor');
		const color1 = document.querySelector('.stop3');
		const mysection = document.querySelectorAll('.mysection');
		const myinformation = document.querySelector('.myslame');
		mysection.forEach((mySections) => {
			mydoorhandleBtn.addEventListener('click', () => {
				mydoorhandleBtn.setAttribute('data-id', 'swichOn');
				mydoorhandleBtn.style.transform = 'translate(-1rem, 0rem) rotate(15deg)';
				const hanatitle = document.querySelector('.hanatitle');
				setTimeout(() => {
					mydoor.style.visibility = 'hidden';
					mydoor.style.opacity = 0;
					const selectMenubox = document.querySelector('.selectMenubox');
					selectMenubox.style.visibility = 'visible';
					selectMenubox.style.opacity = '1';
					// selectMenubox.style.transform = 'translate(40rem)';
				}, 1000);
				setTimeout(() => {
					color1.style.stopColor = '#ff7f43';
					myinformation.style.display = 'flex';
					mySections.style.display = 'flex';
				}, 1200);
			});
		});
	};
	loadMyRoom();

	//info

	circleClick = () => {};

	//스크롤 이벤트//

	//path

	const portFolio = document.querySelector('.portFolio');
	const svgpath = document.querySelector('.st0');
	const pathlenght = svgpath.getTotalLength();
	svgpath.style.strokeDasharray = pathlenght;
	svgpath.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, portFolio, pathlenght);

	const calcDashoffset = (scrollYY, element, length) => {
		const ratio = (scrollYY - element.offsetTop) / element.offsetHeight;
		const myvalue = length - length * ratio;
		return myvalue < 0 ? 0 : myvalue > length ? length : myvalue;
	};

	const scrollpath = () => {
		const scrollYY = window.scrollY + window.innerHeight * 0.8;
		svgpath.style.strokeDashoffset = calcDashoffset(scrollYY, portFolio, pathlenght);
	};
	window.addEventListener('scroll', scrollpath);
	//포폴책~

	//메인메뉴 클릭
	const selectMenu = () => {
		const mymenu = document.querySelectorAll('.menu');
		const doorwapper = document.querySelector('doorwapper');
		const intro = document.querySelector('.thisShowitems');
		const myskill = document.querySelector('.myskill');
		const protfolios = document.querySelector('.protfolios');
		const blogfooter = document.querySelector('.blogfooter');
		mymenu.forEach((menuvalue) => {
			menuvalue.addEventListener('click', (event) => {
				switch (event.currentTarget.id) {
					case 'aboutHana':
						intro.scrollIntoView({
							behavior: 'smooth',
						});
						break;

					case 'myskils':
						myskill.scrollIntoView({
							behavior: 'smooth',
						});
						break;

					case 'portfolio':
						protfolios.scrollIntoView({
							behaveir: 'smooth',
						});
						break;
					case 'contect':
						blogfooter.scrollIntoView({
							behaveir: 'smooth',
						});
						break;
				}
			});
		});
	};
	selectMenu();

	//about me

	//시계
	const clockTrolloge = () => {
		const deg = 6;
		const myhr = document.querySelector('.clockhour_hr');
		const mymn = document.querySelector('.clockmin_min');
		const mysc = document.querySelector('.clocksec_sec');
		setTimeout(() => {
			let day = new Date();
			let hh = day.getHours() * 30;
			let mm = day.getMinutes() * deg;
			let ss = day.getSeconds() * deg;
			myhr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
			mymn.style.transform = `rotateZ(${mm}deg)`;
			mysc.style.transform = `rotateZ(${ss}deg)`;
			clockTrolloge();
		}, 0);
	};
	clockTrolloge();

	const intro = document.querySelector('.intro');
	const clickKeyboardEvent = (e) => {
		const onclickviwer = document.querySelector('.onclickviwer');
		const hana_s_info = document.querySelector('.hana_s_info');
		const mouseChoseinformation = document.querySelector('.mouseChoseinformation');
		const BigRoom = document.querySelector('.BigRoom');

		switch (e.target.className) {
			case 'mouseup':
			case 'mousedown':
				onclickviwer.style.visibility = 'visible';
				hana_s_info.style.opacity = '1';
				hana_s_info.style.visibility = 'visible';
				mouseChoseinformation.style.visibility = 'hidden';
				BigRoom.style.width = '135rem';
				BigRoom.style.transform = 'translate(5rem)';
				break;
			case 'fa-solid fa-xmark closeHanamodal':
				onclickviwer.style.visibility = 'hidden';
				hana_s_info.style.opacity = '0';
				hana_s_info.style.visibility = 'hidden';
				mouseChoseinformation.style.visibility = 'visible';
				BigRoom.style.width = '120rem';
				BigRoom.style.transform = 'translate(12rem)';
				break;
		}
	};

	intro.addEventListener('click', (e) => clickKeyboardEvent(e));

	const hana_s_info = document.querySelector('.hana_s_info');
	const mouseOutEvent = (e) => {
		const books = document.querySelector('.books');
		const coffees = document.querySelector('.coffees');
		const newcakes = document.querySelector('.newcakes');
		const abouthanainfos = document.querySelector('.abouthanainfos');

		switch (e.target.className) {
			case 'bookstore fa-solid fa-star':
			case 'coffee fa-solid fa-solid fa-star':
			case 'newcake fa-solid fa-cake-candles':
			case 'abouthanainfo fa-solid fa-face-grin-stars':
				books.style.opacity = '0';
				books.style.visibility = 'hidden';
				coffees.style.opacity = '0';
				coffees.style.visibility = 'hidden';
				newcakes.style.opacity = '0';
				newcakes.style.visibility = 'hidden';
				abouthanainfos.style.opacity = '0';
				abouthanainfos.style.visibility = 'hidden';
				break;
		}
	};
	hana_s_info.addEventListener('mouseout', (e) => mouseOutEvent(e));

	//마우스오버이벤트
	const mouseOverEvent = (e) => {
		const books = document.querySelector('.books');
		const coffees = document.querySelector('.coffees');
		const newcakes = document.querySelector('.newcakes');
		const abouthanainfos = document.querySelector('.abouthanainfos');

		switch (e.target.className) {
			case 'bookstore fa-solid fa-star':
				books.style.opacity = '1';
				books.style.visibility = 'visible';
				coffees.style.opacity = '0';
				coffees.style.visibility = 'hidden';
				newcakes.style.opacity = '0';
				newcakes.style.visibility = 'hidden';
				abouthanainfos.style.opacity = '0';
				abouthanainfos.style.visibility = 'hidden';
				break;
			case 'coffee fa-solid fa-solid fa-star':
				books.style.opacity = '0';
				books.style.visibility = 'hidden';
				coffees.style.opacity = '1';
				coffees.style.visibility = 'visible';
				newcakes.style.opacity = '0';
				newcakes.style.visibility = 'hidden';
				abouthanainfos.style.opacity = '0';
				abouthanainfos.style.visibility = 'hidden';
				break;
			case 'newcake fa-solid fa-cake-candles':
				books.style.opacity = '0';
				books.style.visibility = 'hidden';
				coffees.style.opacity = '0';
				coffees.style.visibility = 'hidden';
				newcakes.style.opacity = '1';
				newcakes.style.visibility = 'visible';
				abouthanainfos.style.opacity = '0';
				abouthanainfos.style.visibility = 'hidden';
				break;
			case 'abouthanainfo fa-solid fa-face-grin-stars':
				books.style.opacity = '0';
				books.style.visibility = 'hidden';
				coffees.style.opacity = '0';
				coffees.style.visibility = 'hidden';
				newcakes.style.opacity = '0';
				newcakes.style.visibility = 'hidden';
				abouthanainfos.style.opacity = '1';
				abouthanainfos.style.visibility = 'visible';
				break;
		}
	};

	hana_s_info.addEventListener('mouseover', (e) => mouseOverEvent(e));
	// mouseOverEnd

	//스킬 이벤트

	const skillviewer = (skilltree, skillinfo) => {
		const mySkillKeybord = document.querySelector('.mySkillKeybord--outer--front');
		const desk = document.querySelector('.desk');

		mySkillKeybord.style.transform = 'translate(-20rem, -2.3rem) rotate(0deg)';
		desk.style = {
			width: '43rem',
			height: '43rem',
			transform: 'translate(44rem, -9rem)',
		};

		desk.innerHTML = `<div class="infoskill">
			<h1>${skilltree}</h1>
			<p>${skillinfo}</p>
		</div>`;
	};

	const keyboradBack = () => {
		const mySkillKeybord = document.querySelector('.mySkillKeybord--outer--front');
		const desk = document.querySelector('.desk');

		mySkillKeybord.style.transform = 'translate(0rem, -2.3rem) rotate(7deg)';
		desk.style = {
			width: '90rem',
			height: '60rem',
			transform: 'translate(-8rem, 0rem)',
		};
	};

	const aboutmyskill = () => {
		document.querySelectorAll('.skill').forEach((button, _, buttons) => {
			button.addEventListener('click', (e) => {
				buttons.forEach((btn) => btn.classList.remove('activeKey'));
				button.classList.add('activeKey');
				switch (button.id) {
					case 'html':
						skillviewer(`HTML`, `하이퍼 텍스트 마크업 언어를 이해하고 페이지를 위한 뼈대를 적절하게 만들 수 있습니다.`);
						break;

					case 'css':
						skillviewer(`CSS`, ` CSS를 이용하여 만들어진 뼈대위에 어울리는 피부와 옷을 입힐 수 있습니다.`);
						break;

					case 'pug':
						skillviewer(`PUG`, `PUG로 HTML을 더욱 더 간결하고 빠르게 작성하여 작업의 효율성을 높일 수 있습니다.`);
						break;

					case 'sass':
						skillviewer(
							`SASS`,
							`CSS 전처리기인 SASS의 장점인 네스팅, 내장함수, 변수를 활용하여 순수 CSS를 사용한 것보다 다양한 작업을 빠르게 구현할 수 있습니다.`
						);
						break;

					case 'javascript':
						skillviewer(
							`JAVASCRIPT`,
							`객체형과 함수형 프로그래밍에대해 이해하고 ES6 문법을 학습했습니다. 옷까지 모두 입은 웹에 생명을 불어넣어줄 수 있습니다.`
						);
						break;

					case 'jquery':
						skillviewer(`JQUERY`, `제이쿼리를 이용하여 조금 더 빠르고 쉽게 DOM 조작과 이벤트 제어를 할 수 있습니다.`);
						break;

					case 'react':
						skillviewer(
							`REACT`,
							`리액트에서 사용되는 JSX과 Virtual DOM에 대해서 이해하고있으며 props 와 state를 이용한 개발에대해 학습했습니다.`
						);
						break;

					case 'SQL':
						skillviewer(
							`SQL`,
							`SQL을 활용한 데이터베이스 생성과 활용을 할 수 있습니다. 스토어드 프로시저를 비롯한 고급개념으로 더욱 확장중입니다.`
						);
						break;

					case 'node':
						skillviewer(
							`NODEjs`,
							`자바스크립트 런타임인 NOde.js를 이용하여 웹 브라우저 외부에서 자바스크립트 개발을 할 수 있습니다. 포트폴리오 목록의 키오스크에 해당 언어를 활용했습니다.`
						);
						break;

					case 'php':
						skillviewer(`PHP`, `서버에서 동작하는 인터프리터방식 언어인 PHP로 데이터베이스 연결이 가능합니다.  `);
						break;

					case 'photoshop':
						skillviewer(`PHOTOSHOP`, `포토샵을 이용하여 이미지의 편집과 수정, 그림을 그리는것도 가능합니다.`);
						break;

					case 'illurst':
						skillviewer(
							`ILLUSTRATOR`,
							`벡터기반 프로그램인 일러스트레이터를 활용할 수 있습니다. 제 블로그의 배경에 그려지는 선 또한 일러스트레이터를 활용했습니다.`
						);
						break;

					case 'reset':
						keyboradBack();
						break;
				}
			});
		});
	};
	aboutmyskill();
	//	포폴영역

	//아이콘 누르면 보이는 포폴들

	const portfolioBook = document.querySelectorAll('.portfolioBook');
	const portfolioBookClickHandler = (e) => {
		const portfolioBookId = e.currentTarget.id;
		portfolioBook.forEach((book) => {
			if (book.id === portfolioBookId) {
				book.classList.remove('pickportfolio');
				book.style = {
					opacity: '1',
					visibility: 'visible',
				};
			} else {
				book.classList.add('pickportfolio');
				book.style = {
					opacity: '0',
					visibility: 'hidden',
				};
			}
		});
	};

	portfolioBook.forEach((book) => {
		book.addEventListener('click', (e) => portfolioBookClickHandler(e));
	});

	//포폴페이지 이동

	const portfolioPageEventHander = (e) => {
		switch (e.target.id) {
			case 'dogSleeppage':
				window.open('https://evnetpage.vercel.app/');
				break;
			case 'dogSleepPpt':
				window.open(
					'http://pager.kr/~c15st21/Portfolio/PDF/%eb%8c%95%eb%8c%95%ec%9d%b4%eb%82%ae%ec%9e%a0%eb%8c%80%ed%9a%8c.pdf'
				);
				break;
			case 'matrixPage':
				window.open('https://matrix-calculator-seven.vercel.app/html/matrix3.html');
				break;
			case 'kioskpdf':
				window.open(
					'http://pager.kr/~c15st21/Portfolio/PDF/4%ec%a1%b0%20%ed%82%a4%ec%98%a4%ec%8a%a4%ed%81%ac%20ppt.pdf'
				);
				break;
			case 'kioskPage':
				window.open('http://pager.kr:2000/force');
				break;
			case 'corailnecharacter':
				window.open('https://coraline-sigma.vercel.app/html');
				break;
			case 'ProductDetailpage':
				window.open('http://192.168.48.15:5500/Portfolio/product_detail/html/index.html');
				break;
		}
	};

	const eventButton = document.querySelectorAll('button');
	eventButton.forEach((button) => {
		button.addEventListener('click', (e) => portfolioPageEventHander(e));
	});

	//마지막 서서히등장!

	document.addEventListener('scroll', (e) => {
		const windowH = window.innerHeight;
		const bigRestRoom = document.querySelector('.bigRestRoom');
		const bigRestRoomRect = bigRestRoom.getBoundingClientRect().top;

		if (bigRestRoomRect < windowH) {
			bigRestRoom.style = {
				opacity: '1',
				transform: 'translateY(0rem)',
			};
		} else {
			bigRestRoom.style = {
				opacity: '0',
				transform: 'translateY(15rem)',
			};
		}
	});

	//ontop
	const ontop = document.querySelector('.ontop');
	const ontopClick = () => {
		scrollTo(0, 0);
	};
	ontop.addEventListener('click', ontopClick);
};
// 닫히는태그
