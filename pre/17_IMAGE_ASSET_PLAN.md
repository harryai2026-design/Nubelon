# 图片资产规划

## 资产分层

| 页面/模块 | 资产 | 用途 | 来源策略 |
|---|---|---|---|
| 首页 Hero | 工业控制室/控制柜宽幅图 | 建立专业感与中东工程语境 | AI 概念图，可用于视觉，不作为真实项目证据 |
| 产品总览 | 工业电控设备组合图 | 产品卡片统一视觉 | AI 概念图；后续替换为真实产品图 |
| 产品分类卡片 | PLC/HMI、驱动、开关保护、仪表测量 | 快速品类识别 | AI 分别生成，禁止型号/Logo/可读铭牌 |
| 服务卡片 | 系统设计、安装、调试 | 展示服务流程 | AI 场景图或真实工程照片 |
| 行业页 | 制造、油气、能源、水处理、基础设施 | 场景化理解业务 | 优先真实案例；AI 只能做无品牌氛围图 |
| 案例页 | 项目现场、柜体、调试、交付 | 信任证据 | 必须真实并取得客户公开许可 |
| 联系页 | 工程师/控制柜背景 | 提升询价专业感 | AI 氛围图，不能暗示真实客户或实际现场 |
| 品牌页 | 品牌 Logo | 品牌关系展示 | 用户提供/授权文件；AI 不生成 Logo |
| 公司页 | Nubelon 自有 Logo、办公室/团队 | 公司识别与可信度 | 用户真实资产优先；AI 不冒充真实办公室 |
| 全站导航/品牌触点 | Nubelon 自有 Logo lockup | 统一品牌识别 | AI 生成的第一方设计稿；后续可替换为正式商标文件 |

## 已生成并复制到项目

- `public/images/generated/nubelon-hero-control-room.png`
- `public/images/generated/nubelon-control-products.png`
- `public/images/generated/nubelon-plc-hmi.png`
- `public/images/generated/nubelon-engineering-commissioning.png`
- `public/images/generated/nubelon-middle-east-industry.png`
- `public/images/nubelon-business-scope-brands.png`（用户提供的品牌 Logo 合成图）
- `public/images/nubelon-business-scope-brands-v2.png`（用户提供的第二版合作商 Logo 合成图，首页使用）
- `public/images/nubelon-logo-generated.png`（AI 生成的 Nubelon 自有 Logo 初稿，当前用于全站导航）

## 生成约束

禁止虚构产品型号、接口布局、认证标志、客户 Logo、项目结果、库存、交期和授权关系。所有 AI 图片在内容系统中标记 `AI_CONCEPT`，真实图片标记 `FIRST_PARTY_PHOTO`，案例图片必须有公开许可。

## 接入标准

页面只引用 `src/data/assets.ts` 中的资产键，不直接散落文件路径。替换真实资产时保持键名和 alt text 语义不变，并同步更新状态、来源和许可记录。
