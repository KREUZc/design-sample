---
title: Next 夥伴｜Master Execution Brief（整併執行版）
version: v1.0
updated: 2026-05-01
sources:
  - file_38---79f13819-7469-4204-ae1d-ab143c8a05ac.md
  - file_39---4c8556ef-c187-40f1-a2d1-d9ddcb93ddfa.md
  - file_40---33e7601c-9998-4e0f-9376-18a25edfa9b1.md
  - file_41---e7949cf2-978e-4171-ac1d-e6e7fc4675c3.md
  - file_42---440bd779-8584-4660-bae0-4aba90bb7526.md
---

# 0) 執行目標（唯一北極星）
把 Next 夥伴從「AI 對話工具」落地成「公司級 Sprint 推進 OS」：
- 核心價值：**主動推進 + Mentor 思想框架 + 可查詢記憶**
- 品牌承諾：**你不必一個人 sprint。Mentor 來看你跑。**
- 客戶體感：**兩天一個 sprint（可改 1 週），一棒接一棒（接力）**

# 1) 不可更動的共識（Frozen Decisions）
1. `streak` 對外統一改為：**接力（棒）**。
2. 核心術語策略：
   - 保留：sprint / launch / mentor（首次附中文解釋）
   - 翻譯：retro→覆盤、pre-brief→預讀、final-call→收線提醒
3. 品牌原型：**Sage 70% + Hero 30%**。
4. 語氣：中間偏正式 / 嚴肅 80% / 有立場；禁用油膩語。
5. 視覺主軸：**成熟知識工作者書桌感**，拒絕 SaaS 模板感與廉價賽博感。
6. Theme #7 指定色：
   - Primary `#E85D2A`
   - Secondary `#1B2A3A`
   - Tertiary `#FAF7F2`
   - Accent `#3FBF87`

# 2) 最高優先實作（今晚可動工）
## P0-1 名詞與文案統一
- 全站字典：接力/棒、預讀、收線提醒、覆盤、風格與推播。
- 更新範圍：商品頁、LINE、Email、後台、agent prompt、FAQ、DB 欄位顯示名。

## P0-2 Onboarding 問卷修正
- Step 2：改「主任務 + 最多 2 個支線」。
- Step 3：增加「持續型 launch」範例。
- Step 4：增加 4 種 Money Model 範本（電商/服務/內容/諮詢）。
- Step 6：2 天/1 週切換同等顯眼。

## P0-3 商品頁 FAQ 補齊（必上 5 題）
1) 不熟 sprint 怎麼辦
2) 公司資料隱私如何處理
3) 中文回應品質如何
4) 接案/教學型是否適合
5) LINE 會不會吵、可否關閉

## P0-4 Email 模板改版（5 種）
- 預讀信、收線提醒、月度導師信、接力里程碑信、系統通知。
- 要求：截圖友善、A4 列印友善、無油膩銷售語。

## P0-5 留存機制補洞
- 連續 2 sprint 未完成 → mentor 語氣降階（降低壓迫）。
- 連續 2 sprint 空白 → 主動暫停 1 個月詢問（無扣款）。

## P0-6 後台 UX 必備
- 記憶面板可看可編（v1 必上）。
- `風格與推播` 頁面上，LINE push 開關顯眼。

## P0-7 品牌 / 視覺套用
- 7 個 theme 已有探索版，後續選 1 主 2 備。
- 主站優先採「書桌感」語義，不做誇張動效。

# 3) 實作對照（檔案級）
## 文案/規格
- `docs/success-agent-service-spec.md`
- `docs/customer-personas.md`
- `docs/customer-journeys.md`
- `docs/customer-communication-plan.md`
- `docs/website-style-guide.md`

## Agent / Skills
- `agents/csm-agent.md`
- `agents/mentors/*.md`
- `skills/sprint-plan.md`
- `skills/retro.md`

## 前端/模板
- 商品頁 Hero/FAQ/Pricing
- LINE Welcome Flex Message
- Resend templates (5 類)

## 資料層
- `sprint_streak` -> `relay_count`（顯示層先改，DB 欄位可分期）

# 4) 驗收標準（DoD）
1. 任一頁面看不到 `streak` 字樣（對外）。
2. FAQ 五題齊備且可展開閱讀。
3. Onboarding Step2/3/4/6 完成新規則。
4. 收線提醒可輸出「最小可完成版本」。
5. 後台可一鍵關閉 LINE push。
6. 月度導師信截圖與列印皆可讀。
7. Theme #7 完整套色到 hero + section。

# 5) 風險與邊界
- Mentor 視角必附真實性聲明（頻率依規則，不可遺漏）。
- 不做成功學話術、不做過度承諾。
- 不把「取消流程」設計成黑暗模式（dark pattern）。

# 6) 明早可檢視成果清單
- GitHub Pages：
  - `.../success-agent-oc/themes/`（7 theme）
- 文件：
  - 本檔 `MASTER_EXECUTION_BRIEF.md`
- 後續開發任務可直接按「P0-1 ~ P0-7」拆 issue。
