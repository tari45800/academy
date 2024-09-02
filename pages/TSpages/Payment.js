import React, { useState, useEffect } from 'react';

function Payment() {
  const Mid = 't_2311103m'; // 발급받은 테스트 Mid 설정(Real 전환 시 운영 Mid 설정)
  const MerchantKey = '0/4GFsSd7ERVRGX9WHOzJ96GyeMTwvIaKSWUCKmN3fDklNRGw3CualCFoMPZaS99YiFGOuwtzTkrLo4bR4V+Ow=='; // 발급받은 테스트 상점키 설정(Real 전환 시 운영 상점키 설정)
  const [amt, setAmt] = useState('1004'); // 가격
  const EdiDate = getyyyyMMddHHmmss(); // 날짜 (초까지)
  const EncryptData = encodeSHA256Base64(EdiDate + Mid + amt + MerchantKey);
  const today = getyyyyMMddHHmm(); // 날짜 (분까지)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://tpay.smartropay.co.kr/asset/js/SmartroPAY-1.0.min.js?version=${today}`;
    script.async = true;

    script.onload = () => {
      EncryptData;
    };

    document.body.appendChild(script);

    return () => {
      // 컴포넌트가 언마운트되면 스마트로페이 라이브러리 제거
      document.body.removeChild(script);
    };
  }, [Mid, MerchantKey, EdiDate, amt]);

  // SHA256 암호화
  async function encodeSHA256Base64(strPW) {
    let passACL = null;
    try {
      const encoder = new TextEncoder();
      const md = await crypto.subtle.digest('SHA-256', encoder.encode(strPW));
      const raw = new Uint8Array(md);
      const encodedBytes = btoa(String.fromCharCode.apply(null, raw));
      passACL = new String(encodedBytes);
    } catch (e) {
      console.error(e);
    }
    return passACL;
  }

  // 현재일자 / 초까지
  function getyyyyMMddHHmmss() {
    const now = new Date();
    const yyyyMMddHHmmss = `${now.getFullYear()}${padZero(now.getMonth() + 1)}${padZero(now.getDate())}${padZero(
      now.getHours(),
    )}${padZero(now.getMinutes())}${padZero(now.getSeconds())}`;
    return yyyyMMddHHmmss;
  }

  // 현재일자 / 분까지
  function getyyyyMMddHHmm() {
    const now = new Date();
    const yyyyMMddHHmm = `${now.getFullYear()}${padZero(now.getMonth() + 1)}${padZero(now.getDate())}${padZero(
      now.getHours(),
    )}${padZero(now.getMinutes())}`;
    return yyyyMMddHHmm;
  }

  // 앞에 0을 붙이는 함수
  function padZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  // 사용자가 필요에 따라 mid, merchantKey를 설정할 수 있도록 하는 함수
  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === 'Amt') {
      setAmt(value);
    }
  }

  // 스마트로페이 초기화
  function initSmartroPay() {
    smartropay.init({
      mode: 'STG', // STG: 테스트, REAL: 운영(운영서버 전환 시 변경 필수!)
    });
  }

  // 결제 요청 함수
  function goPay() {
    initSmartroPay();
    smartropay.payment({
      FormId: 'tranMgr', // 폼ID
      Callback: function (res) {
        var approvalForm = document.approvalForm;
        approvalForm.Tid.value = res.Tid;
        approvalForm.TrAuthKey.value = res.TrAuthKey;
        approvalForm.action = 'http://localhost:3000/TSpages/Payment';
        approvalForm.submit();
      },
    });
  }

  return (
    <div>
      <form id="tranMgr" name="tranMgr" method="post">
        <input type="text" name="PayMethod" value="CARD" placeholder="" readOnly />
        <input type="text" name="GoodsCnt" maxLength="2" value="1" placeholder="" readOnly />
        <input type="text" name="GoodsName" maxLength="40" value="거래 상품명" placeholder="" readOnly />
        <input type="text" name="Amt" value={amt} onChange={handleInputChange} placeholder="결제할 가격" />
        <input
          type="text"
          name="Moid"
          maxLength="40"
          value="Moid_20210118154643"
          placeholder="특수문자 포함 불가"
          readOnly
        />
        <input type="text" name="Mid" maxLength="10" value={Mid} placeholder="" readOnly />
        <input
          type="text"
          name="ReturnUrl"
          size="100"
          className="input"
          value="http://localhost:3000/TSpages/Payment"
          readOnly
        />
        <input
          type="text"
          name="StopUrl"
          size="100"
          className="input"
          value="http://localhost:3000/TSpages/Payment" //결제중단 URL
          placeholder="Mobile 연동 시 필수"
          readOnly
        />
        <input type="text" name="BuyerName" maxLength="30" value="구매자명" placeholder="" readOnly />
        <input type="text" name="BuyerTel" maxLength="30" value="01099991111" placeholder="" readOnly />
        <input type="text" name="BuyerEmail" maxLength="30" value="noname@smartro.co.kr" placeholder="" readOnly />
        <input type="text" name="MallIp" maxLength="20" value="10.0.0.1" placeholder="" readOnly />
        <input
          type="text"
          name="VbankExpDate"
          maxLength="8"
          value="20210824"
          placeholder="가상계좌 이용 시 필수"
          readOnly
        />
        <input type="text" name="EncryptData" value={EncryptData} placeholder="위/변조방지 HASH 데이터" readOnly />
        <input
          type="text"
          name="GoodsCl"
          value="0"
          placeholder="가맹점 설정에 따라 0 또는 1, 핸드폰결제 시 필수"
          readOnly
        />
        <input type="text" name="EdiDate" maxLength="14" value="설정한 EdiDate" placeholder="" readOnly />
        {/* <!-- MID 기본 세팅시 부가세 직접계산으로 설정됩니다. --> */}
        <input
          type="text"
          name="TaxAmt"
          maxLength="12"
          value=""
          placeholder="부가세 직접계산 가맹점 필수, 숫자만 가능, 문장부호 제외"
          readOnly
        />
        <input
          type="text"
          name="TaxFreeAmt"
          maxLength="12"
          value=""
          placeholder="부가세 직접계산 가맹점 필수, 숫자만 가능, 문장부호 제외"
          readOnly
        />
        <input
          type="text"
          name="VatAmt"
          maxLength="12"
          value=""
          placeholder="부가세 직접계산 가맹점 필수, 숫자만 가능, 문장부호 제외"
          readOnly
        />
        <button type="button" onClick={goPay}>
          결제하기
        </button>
      </form>
      {/* PC 연동의 경우에만 아래 승인폼이 필요합니다. (Mobile은 제외) */}
      <form id="approvalForm" name="approvalForm" method="post">
        <input type="hidden" id="Tid" name="Tid" />
        <input type="hidden" id="TrAuthKey" name="TrAuthKey" />
      </form>
    </div>
  );
}

export default Payment;
