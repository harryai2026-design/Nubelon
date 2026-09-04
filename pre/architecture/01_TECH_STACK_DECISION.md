# 技术栈候选方案

| 项目 | 候选 | 状态 |
|---|---|---|
| Framework | Astro | ASSUMED |
| Language | TypeScript | ASSUMED |
| Rendering | Static/ISR-like rebuild for catalog and resources | ASSUMED |
| Content source | Git-managed structured content first; headless CMS later if catalog updates require it | RECOMMENDED |
| i18n | English first with `/en/`, `/ar/`, `/zh/` locale routes; Arabic RTL | IMPLEMENTED DRAFT |
| Hosting/CDN | Cloudflare Pages + Cloudflare CDN | CANDIDATE |
| Forms | Cloudflare Worker + Turnstile + email/CRM destination | CANDIDATE |
| Analytics | GA4/GTM with consent mode | CANDIDATE |
| Repository/CI | GitHub + GitHub Actions | CANDIDATE |

## 说明

当前仓库为空，因此 Astro 是适合 SEO、静态性能和多语言扩展的候选方案，但版本、Node、包管理器、CMS、域名、托管和表单服务尚未冻结。架构批准前不得视为最终决定。
