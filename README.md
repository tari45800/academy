<img src="https://github.com/EveryDayMathCompany/ssedu_fe/assets/100933263/1d6ba382-9c06-4160-a268-41f2f5241eb9" width='300'></img>

## 개요

**대치 투에스에듀 아카데미 | SSEDU ACADEMY**

https://www.sseduacademy.com/

>"대치 투에스에듀 아카데미의 공식 홈페이지입니다.
투에스에듀는 수학과 국어를 전문으로 하는 입시학원으로, 대한민국의 최고 교육 전문가들과 함께 하고 있습니다.
투에스에듀 아카데미의 공식 홈페이지를 통해 자세한 정보를 확인하시고, 언제든지 문의 및 상담 신청이 가능합니다."

<br/>

**주요 기능**:
- 학원, 강사, 시설 등의 정보 제공
- 진행중인 수업의 커리큘럼 제공
- 원서접수 및 상담 신청

<br/>
<br/>

## 개발환경

**프론트엔드 (Frontend):**

|**프레임워크**|**언어**|**UI 라이브러리**|
|---|---|---|
|<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">|<img src="https://img.shields.io/badge/javascript-ffc700?style=for-the-badge&logo=Javascript&logoColor=white">|<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">|

**백엔드 및 데이터베이스 (Backend & Database):**
- firebase

**node 버전:**
- v18.18.0

<br/>
<br/>

## 프로젝트 설치 및 실행 방법

**1. 소스코드 클론 (Clone the repository)**
``` bash
$ git clone https://github.com/EveryDayMathCompany/ssedu_fe.git
```

**2. '.env.local' 파일 생성 (Create '.env.local' file)**
- 프로젝트 루트 디렉토리에 .env.local 파일을 생성하고 다음과 같이 설정합니다:
```
NEXT_PUBLIC_PLUGIN_KEY=66a022fb-016c-473a-81b7-f2e2b9356e2f
NEXT_PUBLIC_BASIC_URL=http://localhost:3000
NEXT_PUBLIC_JAVASCRIPT_KEY=0a7f4448b60796c2a8b6fb80496f9d98
NEXT_PUBLIC_KAKAO_REST_API_KEY=b58b98f32f97d8104a4e8e9a8a1b1b59
NEXT_PUBLIC_GA_ID=G-JTLY41W18H
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBTExaz5y7HZSyj2QYFTl23Ky3lE6gAqtM
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=ssedu-ab831.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=ssedu-ab831
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=ssedu-ab831.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=290640075318
NEXT_PUBLIC_FIREBASE_APP_ID=1:290640075318:web:5a3daebfd5658b7319d697
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-JTLY41W18H
```

**3. 프론트엔드 의존성 설치 (Install Frontend Dependencies)**
```
$ npm install
```

**4. 프론트엔드 실행 (Run Frontend)**
```
$ npm run dev
```
- 프로젝트의 프론트엔드를 실행하려면 위의 명령어를 사용하세요. 
- 개발 서버가 시작되면 브라우저에서 http://localhost:3000 로 이동하여 프로젝트를 확인할 수 있습니다.


**5. 프론트엔드 배포 (Frontend Deployment)**
- 프론트엔드의 배포는 Vercel을 통해 이루어집니다. 배포를 위한 설정은 Vercel에서 진행됩니다.
- 이제 프로젝트를 성공적으로 설치하고 실행할 수 있습니다.

<br/>
<br/>

## 시스템 구성도
<img src="https://github.com/EveryDayMathCompany/ssedu_fe/assets/100933263/1c824700-3800-4b32-a219-764ab10dc10a" width='800'></img>

<br/>
<br/>

```
추후 백엔드 작업 진행하여 업데이트(결제기능) 예정에 있습니다.
db명세서와 api명세서 백엔드 작업 진행 시 readme 추가 필요.
*추후: edm 리뉴얼 사이트 작업 완료 후 진행
```
