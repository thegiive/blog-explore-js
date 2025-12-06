import { useState } from 'react';
import './index.css';

function App() {
  const [activeStage, setActiveStage] = useState(null); // 'pre-writing', 'structuring', 'writing'

  const closeModal = () => setActiveStage(null);

  // Modal Content Components
  const PreWritingContent = () => (
    <div className="modal-content">
      <h2>🔍 Pre-writing: 知識獲取</h2>
      <p style={{ marginBottom: '2rem' }}>Storm 派出多位虛擬專家，進行多輪問答與外部搜尋。</p>

      <div className="personas">
        {['🤖 技術專家', '📊 市場分析師', '🏛️ 政策研究員'].map(p => (
          <span key={p} className="tag" style={{ margin: '0 10px', padding: '5px 10px', background: '#333', borderRadius: '5px' }}>{p}</span>
        ))}
      </div>

      <div className="chat-simulation" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
        <div className="chat-bubble chat-left">
          <span className="tech-tag">技術專家</span>: 全固態電池的正極材料目前還在實驗階段嗎？
        </div>
        <div className="chat-bubble chat-right">
          <span className="market-tag">搜尋引擎</span>: 根據最新的 Nature 論文，實驗室良率已達 80%，但量產產線尚未驗證。
        </div>
        <div className="chat-bubble chat-left">
          <span className="tech-tag">政策研究員</span>: 美國 IRA 法案對此有補貼嗎？
        </div>
        <div className="chat-bubble chat-right">
          <span className="market-tag">搜尋引擎</span>: 是的，針對先進電池製造有 30% 稅收抵免。
        </div>
      </div>
      <p style={{ marginTop: '1rem', color: '#aaa', fontSize: '0.9rem' }}>(系統正在持續進行多輪檢索與辯論...)</p>
    </div>
  );

  const StructuringContent = () => (
    <div className="modal-content">
      <h2>🗂️ Structuring: 大綱生成</h2>
      <p>將散亂的資訊點聚合，轉化為結構化的大綱樹。</p>

      <div className="outline-viz" style={{ textAlign: 'left', background: '#111', padding: '20px', borderRadius: '10px' }}>
        <h3 style={{ color: 'var(--primary)' }}>2025 固態電池產業報告</h3>
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          <li>
            1. 技術概況
            <ul style={{ paddingLeft: '20px', color: '#aaa' }}>
              <li>- 固態電解質種類</li>
              <li>- 正極材料挑戰</li>
            </ul>
          </li>
          <li>
            2. 市場分析
            <ul style={{ paddingLeft: '20px', color: '#aaa' }}>
              <li>- 2025-2030 CAGR 預測</li>
              <li>- 主要競爭者 (Toyota, CATL)</li>
            </ul>
          </li>
          <li>
            3. 政策影響 (IRA / 歐盟電池法)
          </li>
        </ul>
      </div>
    </div>
  );

  const WritingContent = () => (
    <div className="modal-content">
      <h2>📝 Writing: 文章生成</h2>
      <p>融合所有觀點，生成高品質、有引用的深度報告。</p>

      <div className="report-card" style={{ background: '#eee', color: '#333', padding: '20px', borderRadius: '5px', fontFamily: 'serif' }}>
        <h3 style={{ marginTop: 0 }}>結論</h3>
        <p>...綜上所述，雖然固態電池在能量密度上具有顯著優勢 [1]，但其製造成本仍高於傳統鋰電池 3 倍以上 [2]。預計商業化拐點將出現在 2027 年...</p>
        <hr />
        <small>References: [1] Nature Energy 2024, [2] BloombergNEF Report</small>
      </div>

      <div className="stats-grid" style={{ marginTop: '2rem', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <div className="stat">
          <div style={{ fontSize: '2rem', color: 'var(--accent-2)', fontWeight: 'bold' }}>8.7/10</div>
          <div>人工評分</div>
        </div>
        <div className="stat">
          <div style={{ fontSize: '2rem', color: 'var(--accent-2)', fontWeight: 'bold' }}>-78%</div>
          <div>錯誤率</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <header>
        <h1>STORM</h1>
        <div className="subtitle">從廣泛搜尋到精確報告的 AI 知識熔爐</div>
      </header>

      {/* The Funnel */}
      <div className="funnel-wrapper">

        {/* Top: Pre-writing */}
        <div
          className={`funnel-section funnel-top ${activeStage === 'pre-writing' ? 'active' : ''}`}
          onClick={() => setActiveStage('pre-writing')}
        >
          <div className="section-title">Pre-writing</div>
          <div className="section-desc">Knowledge Acquisition</div>
          <div className="icons" style={{ marginTop: '10px' }}>
            <span className="icon-float">🕵️</span>
            <span className="icon-float" style={{ animationDelay: '0.5s' }}>🔍</span>
            <span className="icon-float" style={{ animationDelay: '1s' }}>🤖</span>
          </div>
        </div>

        {/* Mid: Structuring */}
        <div
          className={`funnel-section funnel-mid ${activeStage === 'structuring' ? 'active' : ''}`}
          onClick={() => setActiveStage('structuring')}
        >
          <div className="section-title">Structuring</div>
          <div className="section-desc">Outline Generation</div>
          <div className="icons" style={{ marginTop: '10px' }}>
            <span className="icon-float">📄</span>
            <span className="icon-float" style={{ animationDelay: '0.2s' }}>🔗</span>
          </div>
        </div>

        {/* Bot: Writing */}
        <div
          className={`funnel-section funnel-bot ${activeStage === 'writing' ? 'active' : ''}`}
          onClick={() => setActiveStage('writing')}
        >
          <div className="section-title">Writing</div>
          <div className="section-desc">Article Generation</div>
          <div className="icons" style={{ marginTop: '10px' }}>
            <span className="icon-float">✍️</span>
          </div>
        </div>

      </div>

      {/* Modal Overlay */}
      {activeStage && (
        <>
          <div className="overlay" onClick={closeModal}></div>
          <div className="detail-panel">
            <button className="close-btn" onClick={closeModal}>&times;</button>
            {activeStage === 'pre-writing' && <PreWritingContent />}
            {activeStage === 'structuring' && <StructuringContent />}
            {activeStage === 'writing' && <WritingContent />}
          </div>
        </>
      )}

      {/* Comparison Table */}
      <div className="comparison-section">
        <h3 style={{ color: 'var(--primary)', textAlign: 'center' }}>工程選型黃金法則</h3>
        <table>
          <thead>
            <tr>
              <th>模式</th>
              <th>適用場景</th>
              <th>核心特點</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ReAct</td>
              <td>即時交互 (遊戲 NPC)</td>
              <td>反應快，行動導向</td>
            </tr>
            <tr>
              <td>Plan-and-Solve</td>
              <td>複雜流程 (電商大促)</td>
              <td>步驟規劃，執行力強</td>
            </tr>
            <tr className="highlight-row">
              <td>Storm</td>
              <td>深度研究報告</td>
              <td>多專家協作，引用精準</td>
            </tr>
            <tr>
              <td>Reflexion</td>
              <td>代碼/數學驗證</td>
              <td>自我反思，除錯能力強</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
