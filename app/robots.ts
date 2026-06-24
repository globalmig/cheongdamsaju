import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.cheongdamsaju.co.kr'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── 일반 검색엔진 (허용) ─────────────────────────────────────
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Googlebot-Video'],
        allow: ['/'],
        disallow: ['/api/'],
      },
      {
        userAgent: ['Bingbot', 'Slurp'],
        allow: ['/'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'Yeti', // Naver
        allow: ['/'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'Daum', // Kakao / Daum
        allow: ['/'],
        disallow: ['/api/'],
      },

      // ── AI 학습 크롤러 (차단) ────────────────────────────────────
      // OpenAI GPT 학습용 크롤러
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      // OpenAI ChatGPT 브라우징 플러그인
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/'],
      },
      // OpenAI 일반 크롤러
      {
        userAgent: 'OAI-SearchBot',
        disallow: ['/'],
      },
      // Anthropic Claude 학습용 크롤러
      {
        userAgent: 'ClaudeBot',
        disallow: ['/'],
      },
      // Google Gemini / Bard 학습용 크롤러
      {
        userAgent: 'Google-Extended',
        disallow: ['/'],
      },
      // Meta AI 학습용 크롤러
      {
        userAgent: 'FacebookBot',
        disallow: ['/'],
      },
      // Apple AI 학습용 크롤러
      {
        userAgent: 'Applebot-Extended',
        disallow: ['/'],
      },
      // Common Crawl (AI 학습 데이터셋 원천)
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      // Cohere AI 학습용 크롤러
      {
        userAgent: 'cohere-ai',
        disallow: ['/'],
      },
      // Amazon AI 크롤러 (Alexa AI)
      {
        userAgent: 'Amazonbot',
        disallow: ['/'],
      },
      // Bytedance / TikTok AI 크롤러
      {
        userAgent: 'Bytespider',
        disallow: ['/'],
      },
      // Perplexity AI 크롤러
      {
        userAgent: 'PerplexityBot',
        disallow: ['/'],
      },
      // You.com AI 검색 크롤러
      {
        userAgent: 'YouBot',
        disallow: ['/'],
      },
      // Diffbot (AI 데이터 수집)
      {
        userAgent: 'Diffbot',
        disallow: ['/'],
      },
      // Omgili / Webz.io (AI 학습 데이터 제공)
      {
        userAgent: 'omgili',
        disallow: ['/'],
      },
      // ImagesiftBot (이미지 AI 학습)
      {
        userAgent: 'ImagesiftBot',
        disallow: ['/'],
      },
      // Magpie-Crawler (AI 데이터셋)
      {
        userAgent: 'Magpie-Crawler',
        disallow: ['/'],
      },
      // iaskspider (AI 기반 검색)
      {
        userAgent: 'iaskspider/2.0',
        disallow: ['/'],
      },
      // Scrapy 기반 일괄 수집기 (무단 스크래핑 방지)
      {
        userAgent: 'Scrapy',
        disallow: ['/'],
      },

      // ── 기타 모든 봇 (기본 규칙) ─────────────────────────────────
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/'],
        crawlDelay: 1,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
