# AGENTS.md - 音樂推薦網站開發與維護規範

## 1. 專案願景與目標
本專案旨在建立一個精美、具現代感（Spotify 串流風格）的個人音樂推薦網站。使用者可以透過分類（如：讀書專用、放鬆療癒、熱血運動）快速篩選並聆聽/查看推薦的音樂。

## 2. 專案結構
```
├── index.html         # 網站主要入口與單頁應用程式 (SPA) 結構
├── style.css          # 核心視覺設計（深色主題、玻璃擬態 Glassmorphism、霓虹霓虹漸層）
├── app.js             # 負責讀取 music.json 並動態渲染畫面與篩選
├── music.json         # 音樂資料庫（所有音樂推薦皆定義於此，方便 AI 擴充）
└── AGENTS.md          # 本規範文件
```

## 3. 音樂資料格式規範 (music.json)
新增音樂時，AI **必須**遵守以下 JSON 欄位格式：
```json
{
  "id": "唯一識別碼 (例如: song-001)",
  "title": "歌曲名稱",
  "artist": "歌手/樂團名稱",
  "category": "分類 (Lofi / Rock / Pop / Chill)",
  "youtubeUrl": "YouTube 嵌入或播放連結",
  "description": "推薦原因或這首歌的簡短介紹",
  "coverUrl": "專輯封面圖片 URL (可使用 Unsplash 示意圖)"
}
```

## 4. 網頁視覺與 UI 規範
- **色彩計畫**：背景採用深色 `#0f0f12`，主色調採用 Spotify 綠 `#1DB954` 或霓虹紫 `#8a2be2`。
- **卡片設計**：使用 Glassmorphism 磨砂玻璃特效（`backdrop-filter: blur(10px)`）。
- **響應式設計**：必須在手機與電腦版皆能完美呈現（RWD）。

## 5. AI 協作與修改指南 (Rule for AI)
當使用者要求「新增一首音樂」或「新增一個音樂分類」時：
1. **不可修改 `index.html` 的結構**。
2. **只需修改或新增 `music.json` 中的資料項目**。
3. `app.js` 會自動偵測 `music.json` 的變更並重新渲染頁面。
4. 若要更新樣式，僅允許修改 `style.css`。
