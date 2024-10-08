// gnb menu
const menuItems = [
  {
    title: '청소기',
    subMenu: ['물청소기', '진공 + 물청소기', '진공청소기', '로봇청소기', '나에게 맞는 제품 선택하기', '무선 청소기 툴', '무선 청소기 배터리'],
  },
  {
    title: '헤어케어',
    subMenu: ['웻앤드라이 스트레이트너', '스타일러', '스타일러 커스텀', '드라이어', '스트레이트너'],
  },
  {
    title: '공기청정기 및 선풍기',
    subMenu: ['공기청정기', '가습 공기청정기', '공기청정기 필터', '나에게 맞는 제품 선택하기'],
  },
  {
    title: '헤드폰',
    subMenu: ['헤드폰 모두보기', '다이슨 존 노이즈 캔슬링 헤드폰'],
  },
  {
    title: '액세서리 및 부품',
    subMenu: ['무선청소기 툴', '무선청소기 배터리', '헤어케어 케이스, 브러시, 거치대 및 툴', '공기청정기 필터'],
  },
  {
    title: '비즈니스 재품',
    subMenu: ['헤어케어', '핸드 드라이어', '무선 청소기', '공기청정기', '조명'],
  },
  {
    title: '매장안내',
    subMenu: ['다이슨 데모 스토어', '다이슨 뷰티 스토어', '다이슨 서비스 센터', '다이슨 백화점 매장'],
  }
];
const keyword = ['2024 다이슨 블랙프라이데이', '리뷰이벤트', '다이슨 헤어 에센셜 케어', '주문조회'];

// main product
const pdList = [
  {
    id : 'hairCare',
    title : '헤어케어',
    content : '과도한 열 손상으로부터 모발을 보호 적은 열로 효과적인 스타일링',
    mainImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/home-page/homepage-category-tiles-hair-care-2.jpg',
    data: [
      {
        id: 0,
        title: '다이슨 에어스트레이트 스트레이트너(블루/코퍼)',
        content: '젖은 모발에 바람으로 드라이와 스트레이트를 동시에 과도한 열 손상 없이',
        price : 599000,
        pdImg: ['https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/dynamic-media/personal-care/553/primary/553-Primary-DKBLBCO_800x1200.png?scl=1&fmt=png-alpha'],
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/personal-care/q4-gifting/pdp/corrale-pdp/Personalcare-556-VariantPDP-Specs-DKBLCO.png?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '젖은 모발에서부터 스타일링',
            content: '하나의 제품으로 모발을 건조하는 동시에 스트레이트하세요. 3가지 온도 설정(80°C, 110°C, 140°C)으로 젖은 모발을 스타일링할 수 있습니다.'
          },{
            tit: '건조된 모발 재스타일링',
            content: '마른 모발에 간단히 스타일링을 수정하거나 다시 스타일링할 수 있습니다. 120°C, 140°C로 설정하여 스타일링하거나 부스트 모드를 선택해 스타일링 효과를 극대화하세요.'
          },{
            tit: '공기 흐름 조절',
            content: '상황에 따라 바람이 조절됩니다. 에어스트레이트는 기기 사이에 모발이 있는지 감지하며, 모발이 없는 경우 자동으로 바람의 속도를 낮춥니다.'
          },{
            tit: 'LCD 스크린',
            content: '고해상도 컬러 디스플레이로 바람 및 온도 설정을 표시하여 스타일링 중에도 쉽게 확인할 수 있습니다.'
          },{
            tit: '잠금 기능',
            content: '버튼을 밀어 기기를 잠그거나 잠금을 해제할 수 있습니다. 기기를 잠근 상태에서 사용하면 모발을 가볍게 1차 건조하거나 뿌리 부분에 볼륨을 만들 수 있습니다.'
          },{
            tit: '자동 일시 정지',
            content: '제품을 작동하지 않으면 3초 후 자동으로 바람이 일시 중지되어 사용하지 않는 동안 에너지를 절약합니다. 제품 움직임이 감지되면 바람이 다시 작동합니다.'
          }
        ]
      },{
        id: 1,
        title: '다이슨 슈퍼소닉 뉴럴 헤어드라이어(빈카블루/토파즈)',
        content: '뉴럴 센서 네트워크가 자동으로 바람 속도와 온도를 조절하여 모발 본연의 자연스러운 윤기를 유지하고 두피 건강을 보호하는 데 도움을 줍니다.',
        price : 599000,
        pdImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/dynamic-media/personal-care/605g/primary/605GM-Primary-VIBLTRTPOR-Tampo.png?scl=1&fmt=png-alpha',
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/hair-care/supersonic-nural/pdp/blue-orange/605GM-Specifications-Image-VIBLTRTPOR-Tampo.png?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '콜드 샷',
            content: '28°C 콜드 샷 - 스타일링한 머리를 고정하기 위한 콜드 샷'
          },{
            tit: '두피 보호 모드 버튼',
            content: '호환되는 스타일링 노즐이 제품에 연결된 경우, 두피 보호 모드가 꺼져 있다면 캡슐 조명은 비활성화 됩니다.'
          },{
            tit: '3단계 바람 속도 설정',
            content: '3단계 - 빠른 건조 및 스타일링 2단계 - 일반 건조 1단계 - 스타일링'
          }
        ]
      }
    ]
  },{
    id : 'cleaner',
    title : '청소기',
    content :'진공청소에서 물청소, 로봇 청소기까지 일상 속 다양한 청소 문제를 다이슨으로 해결하세요.',
    mainImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/home-page/homepage-category-tiles-floorcare.jpg',
    data: [
      {
        id: 2,
        title: '다이슨 V15 디텍트 (옐로/니켈)',
        content: '일루미네이션 기술이 적용되어 미세한 크기의 먼지를 보여줍니다.',
        price : 1090000,
        pdImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/floorcare/sticks/v15-detect/pdp/dynamic-media/primary/SV22-CORE-LB.png?fmt=png-alpha&scl=1&fmt=png-alpha',
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/vacuum-cleaners-category/offering-refresh/pdp/Specification-range-SV22_IRSYEIRNK_SB.png?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '일루미네이션 기술이 눈으로 보이지 않던 먼지 입자를 보여줍니다.',
            content: '정교한 각도로 작동되는 일루미네이션 기술은 마룻바닥의 보이지 않는 먼지를 보여주어 더 꼼꼼하게 청소할 수 있습니다.'
          },{
            tit: '미세한 크기의 먼지 입자2를 측정합니다.',
            content: '피조 센서가 먼지 입자의 크기와 양을 지속적으로 측정해 자동으로 흡입력을 조절합니다.'
          },{
            tit: '강력한 청소 성능의 과학적 근거',
            content: 'LCD 스크린에 흡입된 먼지의 크기와 양이 표시되어 강력한 청소의 결과를 실시간으로 확인할 수 있습니다.'
          }
        ]
      },{
        id: 3,
        title: '다이슨 디지털 슬림',
        content: '청소 성능은 그대로 어디서나 강력한 청소 / 1.9kg 가벼운 무게 / 지능적인 실시간 LCD 디스플레이 / 3가지 툴 제공',
        price : 599000,
        pdImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/floorcare/sticks/dyson-digital-slim/variants/nickel/hero.png?fmt=png-alpha&scl=1&fmt=png-alpha',
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/floorcare/sticks/dyson-digital-slim/variants/nickel/sv18-variant-nickel-iron-specs.jpg?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '다이슨 Hyperdimium™(하이퍼디미엄) 모터',
            content: '작고 가볍고 강력한 다이슨 하이퍼디미엄 모터는 최대 120,000rpm4으로 회전하여 100에어와트의 강력한 흡입력3을 만들어 냅니다.'
          },{
            tit: '고효율 소용돌이 형태 싸이클론',
            content: '소용돌이 형태의 11개 싸이클론은 100,000G의 원심력4을 생성시키는 경량의 싸이클론 팩에 위치하여 공기의 흐름 과정에서 먼지가 분리되도록 설계되었습니다.'
          },{
            tit: '제품 전체에 적용된 고성능 필터레이션',
            content: '완전 밀봉된 5단계 필터레이션 시스템으로 먼지와 알레르기 유발물질을 잡아내고 먼지통에 가둡니다.5 따라서 더 깨끗한 공기를 밖으로 내보냅니다.'
          }
        ]
      },{
        id: 4,
        title: '다이슨 360 vis nav™ 로봇 청소기',
        content: '지능형 청소를 지원하는 360° 비주얼 내비게이션',
        price :  1699000,
        pdImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/dynamic-media/vacuums/robots/primary/277_Primary_SUBLNK.png?scl=1&fmt=png-alpha',
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/floorcare/robot-vacuums/277-robot-vacuum/pdp/sublnk/SUBLINK-specification_1200x800.png?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '다이슨의 강력한 흡입력이 로봇 청소기 속으로',
            content: '다이슨 하이퍼디미엄 모터가 최대 110,000rpm의 속도로 회전하며 다이슨 무선 청소기의 강력한 흡입력3을 만들어 냅니다.'
          },{
            tit: '시작부터 끝까지 변함 없는 흡입력',
            content: '다이슨의 싸이클론이 100,000g의 원심력으로4 공기 흐름에서 먼지를 분리하기 때문에 로봇 청소기가 집 안을 청소하는 동안 흡입력이 저하되지 않습니다.'
          },{
            tit: '공간에 따른 개별 모드 설정',
            content: '고성능 프로세서가 로봇의 매핑과 학습을 지원합니다. MyDyson™ 앱으로 각 구역에 맞는 청소 모드를 선택하세요.'
          }
        ]
      }
    ]
  },{
    id : 'airPurifier',
    title : '공기청정기 및 선풍기',
    content : '가습 공기청정기, 공기청정기, 공기청정 온풍기 및 선풍기로 주변 환경을 쾌적하게 관리하세요.',
    mainImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/home-page/homepage-category-tiles-air-treatment-2.jpg',
    data: [
      {
        id: 5,
        title: '다이슨 쿨 공기청정기 (화이트/실버)',
        content: '공기 정화와 냉풍 기능을 하나로 0.1마이크론 크기의 작은 미세먼지를 99.95% 제거합니다.',
        price : 599000,
        pdImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/dynamic-media/ec/438e/primary-images/438E_WHSIL_Primary_%20800x1200_template.png?fmt=png-alpha&scl=1&fmt=png-alpha',
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/ec/438e/variants/non-sco/TP07_variant-spec-WHSIL.jpg?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '자동으로 감지 및 보고합니다',
            content: '통합 센서는 지속적으로 공기를 분석하고 다이슨의 고유한 알고리즘으로 매초 데이터를 교차 검사합니다. 분자 수준에서 오염물질을 진단하여 LCD에 실시간 결과를 표시합니다.'
          },{
            tit: '가스와 초미세먼지 제거',
            content: '헤파 H13 필터는 0.1 마이크론 크기의 초미세먼지를 99.95% 제거합니다. 활성 탄소층은 또한 VOC를 포함한 악취와 가스를 제거합니다.'
          },{
            tit: '방 안 전체를 정화합니다',
            content: '에어 멀티플라이어™ 기술이 탑재되어 있는 것은 다이슨 공기청정기 뿐입니다. 이는 강력한 순환을 만들어 멀리 떨어진 오염 물질도 제품으로 흡입시킨 후 방안 전체에 정화된 공기를 분사합니다.'
          },{
            tit: 'HEPA H13등급에 충족하도록 봉인',
            content: '다이슨의 최신 공기청정기는 필터뿐만 아니라 제품 전체가 헤파 H13 표준을 충족합니다. 즉, 내부에 들어간 물질은 다시 외부로 빠져 나올 수 없습니다.'
          }
        ]
      },{
        id: 6,
        title: '다이슨 쿨 선풍기 타워형 (화이트/ 실버)',
        content: '다이슨 쿨 선풍기 타워형 날개 없는 선풍기의 강력한 바람',
        price : 398000,
        pdImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/ec/am07/AM07-PPP-hero-1.png?fmt=png-alpha&scl=1&fmt=png-alpha',
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/ec/438e/variants/non-sco/TP07_variant-spec-WHSIL.jpg?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '에어 멀티플라이어 ™ 기술',
            content: '날개 없이 고르게 분사되는 바람. 에어 멀티플라이어™ 기술은 주변 공기를 증폭시켜 끊김없이 원활한 공기 흐름을 제공합니다.'
          },{
            tit: '안전성',
            content: '빠르게 회전하는 날개가 없습니다.'
          },{
            tit: '슬립 타이머',
            content: '15분에서 9시간까지 미리 설정된 시간이 지나면 꺼지도록 설정할 수 있습니다.'
          },{
            tit: '편리한 청소',
            content: '안전을 위한 덮개의 창살이나 날개가 없기 때문에 건조한 천으로 닦아내기만 하면 됩니다.'
          },{
            tit: '리모콘',
            content: '10단계로 정밀하게 풍량 설정 가능. 곡선 모양으로 자석화 되어있어 기기 위에 깔끔하게 보관이 가능합니다.'
          },{
            tit: '부드러운 회전',
            content: '방 안에서 직접적인 바람을 쐴 수 있습니다.'
          }
        ]
      }
    ]
  },{
    id : 'headphones',
    title : '헤드폰',
    content : '몰입감 넘치는 편안한 청취. 액티브 노이즈 캔슬링으로 최대 50시간 오디오 재생',
    mainImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/headphones/ontrac/banners/571h_homepage-category-picker.jpg',
    data: [
      {
        id: 7,
        title: '다이슨 존 앱솔루트 플러스 노이즈 캔슬링 헤드폰 (블루/코퍼)',
        content: '깨끗한 다이슨 오디오 음질과 우수한 노이즈 캔슬링. 사운드 왜곡을 최소화 하기위한 설계.',
        price : 990000,
        pdImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/hero/wearables/Hero-Zone-Blue-Copper.png',
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/headphones/dyson-zone/pdp/specifications/571-specification-INKBCOBNKTR.png?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '편안함을 위한 설계',
            content: '탈부착형 비접촉식 바이저와 편안한 착용감을 위해 조절되는 쿠션 헤드밴드를 사용하고 인체공학적으로 설계되었습니다.'
          },{
            tit: '터치 & 음성 제어',
            content: '블루투스 연결과 원터치 컨트롤로 핸즈프리 통화를 하고, 음성 비서를 호출하고, 이동 중에도 사운드와 풍량을 조절할 수 있습니다.'
          },{
            tit: '탈부착식 휴대용 바이저',
            content: '출퇴근길이나 이동할 때 바이저를 부착하면 정화된 공기가 바이저를 통해 코와 입으로 직접 전달됩니다.'
          },{
            tit: '활동량에 따라 자동 조절',
            content: '내장된 가속도계가 활동량 변화에 맞춰 공기 흐름을 조정합니다.'
          },{
            tit: '대화 모드',
            content: '바이저를 내리면 대화 모드가 활성화되면서 오디오와 공기 흐름을 일시 정지합니다.'
          }
        ]
      }
    ]
  },{
    id : 'lighting',
    title : '조명',
    content : '자연광 시간을 추적해 최적의 빛을 제공합니다.',
    mainImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/home-page/homepage-category-tiles-lighting.jpg',
    data: [
      {
        id: 8,
        title: '다이슨 솔라사이클 모프 조명 플로어스탠드형(화이트/실버)',
        content: '다이슨 솔라사이클 모프로 나에게 딱 맞는 분위기를 연출해 보세요.',
        price : 960000,
        pdImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/dynamic-media/lighting/lightcycle-morph/primary/white-silver-floor-primary.png?fmt=png-alpha&scl=1&fmt=png-alpha',
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/lighting/lightcycle-morph/variants/floor-white-silver/white-silver-floor-specs.jpg?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '태스크 조명',
            content: '태스크 조명 시각적 정밀성 향상에 도움을 주는 강력한 집중 조명.'
          },{
            tit: '간접 조명',
            content: '광학 헤드를 전환하여 공간 감각을 강조하거나 부드러운 배경 조명으로 사용.'
          },{
            tit: '전시 조명',
            content: '그림과 장식품의 아름다움을 강조하는 고품질 조명.'
          },{
            tit: '무드 조명',
            content: '적은 블루 라이트로 안정감을 주는 빛을 제공하여 편안한 환경을 조성.'
          },{
            tit: '다이슨 MyDyson™ 앱으로 조절',
            content: '사용자의 나이, 업무, 기분, 하루 시간대 등에 따라 빛을 조절할 수 있습니다.'
          },{
            tit: '마그네틱 터치-글라이드 도킹',
            content: '조명 본체에 광학 헤드가 도킹되면서 아늑한 오랜지색 빛을 생성합니다.'
          }
        ]
      },{
        id: 9,
        title: '다이슨 솔라사이클 모프 조명 데스크형(화이트/실버)',
        content: '지능적으로 사용자 위치의 자연광 추적 / 사용자와 주변 환경에 따라 맞춤 변환, 조절 / 4가지 조명을 하나로',
        price : 720000,
        pdImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/dynamic-media/lighting/lightcycle-morph/primary/white-silver-desk-primary.png?fmt=png-alpha&scl=1&fmt=png-alpha',
        hoImg: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/lighting/lightcycle-morph/variants/desk-white-silver/white-silver-desk-specs.jpg?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960',
        pdChar: [
          {
            tit: '태스크 조명',
            content: '시각적 정밀성 향상에 도움을 주는 강력한 집중 조명.'
          },{
            tit: '간접 조명',
            content: '광학 헤드를 전환하여 공간 감각을 강조하거나 부드러운 배경 조명으로 사용.'
          },{
            tit: '전시 조명',
            content: '그림과 장식품의 아름다움을 강조하는 고품질 조명.'
          }
        ]
      }
    ]
  }
];

// sub page
const benefit = [
  {
    num: 0,
    title: '무료배송',
    content: '다이슨 제품과 부품을 구매하실 때, 배송비는 무료입니다.'
  },{
    num: 1,
    title: '보상 기간 무상 A/S',
    content: '다이슨의 조명 및 유선 청소기는 5년, 무선 청소기(배터리 포함), 공기 청소기 및 가습기, 헤어 케어, 헤드폰 제품은 2년, 액세서리 제품은 1년 간 품질보증 대상입니다. V7 및 V8 라인 전 제품 배터리의 경우, 1년 보증 정책을 운영하고 있습니다.'
  },{
    num: 2,
    title: '가장 빠른 혜택 알림',
    content: '신제품과 한정판 제품 출시 소식은 물론, 공식몰에서 매월 진행되는 다양한 이벤트와 혜택을 가장 먼저 만나보실 수 있습니다.'
  },{
    num: 3,
    title: '카드사혜택',
    content: '즉시 할인, 캐시백, 무이자 할부를 비롯한 다양한 카드사 혜택을 확인해 보세요.'
  }
];

//sub tab(store)
const tabMenu = [
  {
    tit: '다이슨 데모 스토어 서울 IFC',
    address: '서울시 영등포구 국제금융로 10, IFC몰 L2',
    content: '월요일 – 일요일, 오전 10시 – 오후 10시'
  },{
    tit: '다이슨 뷰티랩 사운즈한남',
    address: '서울시 용산구 대사관로 35, B1',
    content: '월요일 – 일요일, 오전 11시 – 오후 8시'
  },{
    tit: '다이슨 데모 스토어 스타필드 하남',
    address: '경기도 하남시 미사대로 750, 스타필드 하남 쇼핑몰 L2',
    content: '월요일 – 일요일, 오전 10시 – 오후 10시'
  }
];

export { menuItems, keyword, pdList, benefit, tabMenu };