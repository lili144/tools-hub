'use client'
import { useState } from 'react'

const categories = [
  {
    id: 'writing',
    icon: '✍️',
    name: '写作工具',
    desc: '专业的写作辅助工具集',
    tools: [
      {
        name: '字数统计器',
        desc: '实时统计字数、单词、段落、阅读时间',
        href: 'https://writing-tools-station.vercel.app/word-count',
        icon: '📊',
      },
      {
        name: '可读性检测',
        desc: '分析句子长度和复杂度，提升可读性',
        href: 'https://writing-tools-station.vercel.app/readability',
        icon: '📖',
      },
      {
        name: '标题评分',
        desc: '从5个维度评估标题吸引力',
        href: 'https://writing-tools-station.vercel.app/title-score',
        icon: '🎯',
      },
      {
        name: '文章结构检测',
        desc: '检测段落分布和结构优化建议',
        href: 'https://writing-tools-station.vercel.app/structure-check',
        icon: '🏗️',
      },
      {
        name: '同义词替换',
        desc: '获取丰富的近义词，优化表达',
        href: 'https://writing-tools-station.vercel.app/synonym',
        icon: '🔄',
      },
    ],
  },
  {
    id: 'seo',
    icon: '🔍',
    name: 'SEO工具',
    desc: '网站诊断和SEO优化',
    tools: [
      {
        name: 'SEO诊断工具',
        desc: '完整的网站SEO检测和优化建议',
        href: 'https://seo-tools-station.vercel.app',
        icon: '🔧',
      },
    ],
  },
  {
    id: 'image',
    icon: '🖼️',
    name: '图像工具',
    desc: '图片处理和优化（开发中）',
    tools: [
      {
        name: '图片改尺寸',
        desc: '快速调整图片尺寸和格式',
        href: '#',
        icon: '📐',
        disabled: true,
      },
      {
        name: '图片压缩',
        desc: '智能压缩，保留质量',
        href: '#',
        icon: '🗜️',
        disabled: true,
      },
    ],
  },
  {
    id: 'dev',
    icon: '💻',
    name: '开发者工具',
    desc: '代码和数据处理（开发中）',
    tools: [
      {
        name: 'JSON编辑器',
        desc: '格式化、验证、美化JSON数据',
        href: '#',
        icon: '{ }',
        disabled: true,
      },
      {
        name: '正则表达式测试',
        desc: '在线测试和调试正则表达式',
        href: '#',
        icon: '🔍',
        disabled: true,
      },
    ],
  },
  {
    id: 'file',
    icon: '📁',
    name: '文件转换',
    desc: '文件格式转换（开发中）',
    tools: [
      {
        name: 'PDF转图片',
        desc: '快速将PDF转换为图片格式',
        href: '#',
        icon: '📄',
        disabled: true,
      },
    ],
  },
]

export default function Home() {
  const [hoveredTool, setHoveredTool] = useState(null)

  return (
    <div className="container-hub">
      <section style={{ paddingTop: 80, paddingBottom: 60, textAlign: 'center' }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: 16,
          color: '#1a1a1a',
        }}>
          免费在线工具中心
        </h1>
        <p style={{
          fontSize: 18,
          color: '#666',
          maxWidth: 600,
          margin: '0 auto 32px',
          lineHeight: 1.6,
        }}>
          一站式工具平台，涵盖写作、SEO、图像、开发等多个领域。
          无需注册，完全免费，数据不上传。
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="#writing" style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: '#2d5a27',
            color: '#fff',
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = '#1f3f1a'}
          onMouseLeave={e => e.target.style.background = '#2d5a27'}>
            开始使用
          </a>
          <a href="#" style={{
            display: 'inline-block',
            padding: '12px 32px',
            border: '1.5px solid #e0ddd8',
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.target.style.borderColor = '#2d5a27'
            e.target.style.color = '#2d5a27'
          }}
          onMouseLeave={e => {
            e.target.style.borderColor = '#e0ddd8'
            e.target.style.color = '#1a1a1a'
          }}>
            了解更多
          </a>
        </div>
      </section>

      {categories.map(category => (
        <section key={category.id} id={category.id} style={{ marginBottom: 80 }}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 8,
              color: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <span style={{ fontSize: 40 }}>{category.icon}</span>
              {category.name}
            </h2>
            <p style={{ color: '#666', fontSize: 15 }}>{category.desc}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {category.tools.map(tool => (
              <a
                key={tool.name}
                href={tool.disabled ? '#' : tool.href}
                style={{
                  display: 'block',
                  padding: 24,
                  background: tool.disabled ? '#f0ede8' : '#ffffff',
                  border: '1.5px solid #e0ddd8',
                  borderRadius: 12,
                  cursor: tool.disabled ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: tool.disabled ? 0.6 : 1,
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                onMouseEnter={e => {
                  if (!tool.disabled) {
                    e.currentTarget.style.borderColor = '#2d5a27'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(45,90,39,0.12)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e0ddd8'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{tool.icon}</div>
                <h3 style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: '#1a1a1a',
                }}>
                  {tool.name}
                </h3>
                <p style={{ fontSize: 13, color: '#888', lineHeight: 1.5 }}>
                  {tool.desc}
                </p>
                {tool.disabled && (
                  <div style={{
                    marginTop: 12,
                    padding: '6px 12px',
                    background: '#fff4e0',
                    borderRadius: 4,
                    fontSize: 12,
                    color: '#b07800',
                    fontWeight: 500,
                    width: 'fit-content',
                  }}>
                    开发中
                  </div>
                )}
              </a>
            ))}
          </div>
        </section>
      ))}

      <section style={{
        background: 'linear-gradient(135deg, #2d5a27 0%, #1f3f1a 100%)',
        borderRadius: 16,
        padding: 60,
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: 80,
      }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
          更多工具即将上线
        </h2>
        <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
          我们正在开发更多强大的工具来帮助你提高工作效率。
        </p>
        <button style={{
          padding: '12px 36px',
          background: '#e8a020',
          color: '#1a1a1a',
          border: 'none',
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.target.style.background = '#d4941a'}
        onMouseLeave={e => e.target.style.background = '#e8a020'}>
          关注更新
        </button>
      </section>
    </div>
  )
}
