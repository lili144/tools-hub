import './globals.css'

export const metadata = {
  title: '工具中心 — 免费在线工具集合',
  description: '一站式工具平台：写作工具、SEO工具、图像处理、开发者工具、文件转换。免费使用，无需注册。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5265207250332541" crossOrigin="anonymous"></script>
      </head>
      <body style={{ background: '#f8f7f4' }}>
        <header style={{
          background: '#ffffff',
          borderBottom: '1px solid #e0ddd8',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}>
          <div className="container-hub" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}>
            <a href="/" style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#2d5a27',
              letterSpacing: '-0.02em',
            }}>
              🛠️ 工具中心
            </a>
            <nav style={{ display: 'flex', gap: 32, fontSize: 14 }}>
              <a href="#writing" style={{ color: '#2d5a27' }}>写作</a>
              <a href="#seo" style={{ color: '#2d5a27' }}>SEO</a>
              <a href="#image" style={{ color: '#2d5a27' }}>图像</a>
              <a href="#dev" style={{ color: '#2d5a27' }}>开发</a>
              <a href="#file" style={{ color: '#2d5a27' }}>文件</a>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer style={{
          background: '#ffffff',
          borderTop: '1px solid #e0ddd8',
          padding: '40px 0',
          marginTop: 80,
        }}>
          <div className="container-hub" style={{
            textAlign: 'center',
            fontSize: 13,
            color: '#aaa',
          }}>
            <p style={{ marginBottom: 8 }}>工具中心 · 免费在线工具集合</p>
            <p>数据不上传服务器 · 无需注册 · 随时可用</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
