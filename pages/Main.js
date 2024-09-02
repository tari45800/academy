import { useState, useEffect } from 'react';
import Home from './TSpages/Home';
import MobileHome from './TSpages/MobileHome';
import { useRouter } from 'next/router';

const Main = () => {
  const router = useRouter();

  // 반응형 코드
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 920);
    }
  };

  // useEffect(() => {
  //   alert('준비중인 서비스입니다.');
  //   router.push('winterschool');
  // }, [router]);

  useEffect(() => {
    handleResize(); // 컴포넌트가 마운트될 때 초기 값 설정
    // resize 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

  return <>{isMobile ? <MobileHome></MobileHome> : <Home></Home>}</>;
};

export default Main;
