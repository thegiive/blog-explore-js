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
        <h1>AI Agent Pattern</h1>
      </header>

      {/* Comparison Table */}
      <div className="comparison-section">
        <h3 style={{ color: 'var(--primary)', textAlign: 'center' }}>AI Agent 工程選型黃金法則</h3>
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
              <td>
                <a href="https://ai-coding.wiselychen.com/agent-mo-shi-part-1-workflow-xing-he-react-xing-shui-geng-xiang-ni/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--primary)' }}>
                  ReAct
                </a>
              </td>
              <td style={{ textAlign: 'left' }}>適合高密度交互或動態資訊檢索的場景，如 Chatbot、遊戲 NPC。</td>
              <td style={{ textAlign: 'left' }}>具備極強的環境感知與即時應變能力，強調邊想邊做。但容易陷入局部最優解，且頻繁調用成本較高。</td>
            </tr>
            <tr>
              <td>
                <a href="https://ai-coding.wiselychen.com/mang-mu-jia-su-vs-du-zhu-lu-shu-pao-wei-shi-mo-ai-agent-xu-yao-plan-exec-mo-shi/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--primary)' }}>
                  Plan and Exec
                </a>
              </td>
              <td style={{ textAlign: 'left' }}>適合步驟繁瑣的長程任務，如旅遊規劃或自動化編碼。</td>
              <td style={{ textAlign: 'left' }}>強制先行全局規劃，避免迷失方向與局部最優。執行階段可用小模型降低成本，但對突發狀況應變力較弱。</td>
            </tr>
            <tr className="highlight-row">
              <td>Storm</td>
              <td>深度研究報告</td>
              <td>多專家協作，引用精準</td>
            </tr>
            <tr>
              <td>
                <a href="https://ai-coding.wiselychen.com/deep-research-linkedin-draft/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--primary)' }}>
                  Plan, Exec, Critic(Reflexion)
                </a>
              </td>
              <td style={{ textAlign: 'left' }}>適合高風險或零容錯的領域，如 Deep Research、醫療決策、法律諮詢或複雜邏輯驗證。</td>
              <td style={{ textAlign: 'left' }}>引入 System 2 慢思考機制，透過自我批判與反覆驗證來確保正確性。雖然響應較慢且成本高，但能產出最高品質的結果。</td>
            </tr>
            <tr>
              <td>
                <a href="https://ai-coding.wiselychen.com/agent-part-3-interleaved-thinking-cheng-xian-de-wen-ding-xing-shi-xian-zai-agentluo-di-de-zhong-yao-guan-jian/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--primary)' }}>
                  Interleaved Thinking
                </a>
              </td>
              <td style={{ textAlign: 'left' }}>適合需長期穩定運行的複雜任務，如大型專案代碼生成、全自動化工作流。</td>
              <td style={{ textAlign: 'left' }}>思考與執行交錯進行（Think-Act-Verify Loop），邊做邊修正。穩定性極高，適合無人值守任務，但成本與耗時顯著增加。</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* STORM Section */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ color: 'var(--primary)', textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.5rem' }}>AI Agent Pattern : STORM</h2>
        <div style={{ textAlign: 'center', color: '#aaa', fontSize: '1.2rem', marginBottom: '2rem' }}>從廣泛搜尋到精確報告的 AI 知識熔爐</div>
      </div>

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


    </div>
  );
}

export default App;
