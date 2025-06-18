import { MetadataRoute } from 'next'

//사이트맵 정적 생성 파일

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl ='http://localhost:3000'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      // always: 페이지가 항상 변경됨
      // hourly: 매시간 변경됨
      // daily: 매일 변경됨
      // weekly: 매주 변경됨
      // monthly: 매월 변경됨
      // yearly: 매년 변경됨
      // never: 거의 변경되지 않음
      priority: 0.8,
    },
    // 추가 페이지들...
  ]
} 