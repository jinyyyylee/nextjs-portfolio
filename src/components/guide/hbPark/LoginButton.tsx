'use client';
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import "@/assets/scss/guide/hbPark/index.scss";
export default function LoginButton() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
        console.log('로그인 성공!')
        console.log('Access Token:', session.accessToken)
        console.log('로그인된 사용자:', session)
    }
  }, [status, session])


  if (session) {
    return (
      <div className='login-container'>
        <p className='login-welcome'>환영합니다, <span className='login-welcome-name'>{session.user?.name}</span>님</p>
        <button className='login-button' onClick={() => signOut()}>로그아웃</button>
      </div>
    )
  }

  return <button className='login-button' onClick={() => signIn('google')}>Google 로그인</button>
}