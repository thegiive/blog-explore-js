import { useState } from 'react';
import './index.css';

function App() {
  const [activeStage, setActiveStage] = useState(null); // 'pre-writing', 'structuring', 'writing'
  const [activePattern, setActivePattern] = useState(null); // 'react', 'plan-exec', etc.

  const closeModal = () => setActiveStage(null);

  // ReAct Interactive Diagram - Simple Loop
  const ReactDiagram = () => {
    const [activeReactNode, setActiveReactNode] = useState(null);
    const [demoStep, setDemoStep] = useState(0);
    const [isDemoMode, setIsDemoMode] = useState(false);

    const demoSequence = ['question', 'llm', 'action', 'llm', 'action', 'llm', 'answer'];

    const startDemo = () => {
      setIsDemoMode(true);
      setDemoStep(0);
      setActiveReactNode('question');
    };

    const nextDemoStep = () => {
      const nextStep = demoStep + 1;
      if (nextStep < demoSequence.length) {
        setDemoStep(nextStep);
        setActiveReactNode(demoSequence[nextStep]);
      } else {
        setIsDemoMode(false);
        setActiveReactNode(null);
        setDemoStep(0);
      }
    };

    const closeDemoModal = () => {
      if (isDemoMode) {
        nextDemoStep();
      } else {
        setActiveReactNode(null);
      }
    };

    const reactNodeContent = {
      question: {
        title: "用戶問題",
        description: "ReAct 循環的起點，用戶提出需要解決的問題或任務。",
        details: [
          "用戶輸入一個問題或請求",
          "系統接收並開始 ReAct 循環",
          "問題可能需要外部資訊或工具協助"
        ],
        example: "範例：「台北市明天的天氣如何？」"
      },
      llm: {
        title: "💭 LLM 推理 (Thought)",
        description: "LLM 分析當前狀況，決定下一步行動。",
        details: [
          "分析問題和已有資訊",
          "決定是否需要調用工具",
          "或者直接給出答案",
          "生成推理過程的思考鏈"
        ],
        example: "範例思考：\n第一次推理：「我需要查詢即時天氣資料，應該調用天氣 API 工具。」\n\n第二次推理（收到錯誤）：「API 回傳錯誤：城市名稱格式不正確。我需要使用正確的城市代碼重新查詢。」\n\n第三次推理（收到正確結果）：「這次獲得完整資料：晴天、18-25°C、降雨 10%。資訊充足，可以給出答案了。」"
      },
      action: {
        title: "⚡ Action & 👁️ Observe",
        description: "執行工具調用並觀察結果，獲取新資訊。",
        details: [
          "Action: 調用外部工具或 API",
          "執行具體的操作（搜尋、計算等）",
          "Observe: 接收工具返回的結果",
          "將觀察結果回饋給 LLM"
        ],
        example: "範例：調用 WeatherAPI(\"台北市\", \"明天\") → 觀察結果：「晴天，溫度 18-25°C，降雨機率 10%」"
      },
      answer: {
        title: "✅ 最終答案",
        description: "基於推理和觀察，LLM 給出最終答案。",
        details: [
          "整合所有推理和觀察結果",
          "生成完整的答案",
          "結束 ReAct 循環"
        ],
        example: "範例答案：「根據氣象資料，台北市明天將是晴天，溫度介於 18-25°C 之間，降雨機率僅 10%，適合外出活動。」"
      }
    };

    return (
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '3rem 2rem',
        borderRadius: '15px',
        border: '1px solid rgba(0, 212, 255, 0.3)',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        <h4 style={{ color: 'var(--primary)', textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem' }}>
          ReAct 循環流程圖
        </h4>

        {/* Demo Button */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button
            onClick={startDemo}
            style={{
              padding: '0.8rem 2rem',
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              color: '#0a0a0f',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(0, 212, 255, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 212, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.4)';
            }}
          >
            🎬 開始步驟演示
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>

          {/* 用戶問題 */}
          <div
            onClick={() => setActiveReactNode('question')}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '1.2rem 2.5rem',
              borderRadius: '10px',
              color: '#fff',
              fontWeight: 'bold',
              boxShadow: '0 4px 20px rgba(102, 126, 234, 0.5)',
              fontSize: '1.1rem',
              textAlign: 'center',
              width: '200px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            用戶問題
          </div>

          {/* Arrow down */}
          <div style={{ color: '#00d4ff', fontSize: '2rem' }}>↓</div>

          {/* Bidirectional Loop Container */}
          <div style={{
            border: '2px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '15px',
            padding: '2rem',
            background: 'rgba(0, 212, 255, 0.05)',
            width: '100%',
            maxWidth: '600px'
          }}>

            {/* Loop label */}
            <div style={{
              textAlign: 'center',
              color: '#00d4ff',
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
              fontWeight: 'bold'
            }}>
              ⟲ 循環執行直到獲得答案
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '2rem' }}>

              {/* LLM 推理 */}
              <div
                onClick={() => setActiveReactNode('llm')}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  padding: '1.5rem 2rem',
                  borderRadius: '10px',
                  color: '#fff',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 20px rgba(102, 126, 234, 0.5)',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  minWidth: '180px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                💭 LLM 推理
                <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>
                  (Thought)
                </div>
              </div>

              {/* Bidirectional arrows */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ color: '#ff6b9d', fontSize: '1.5rem' }}>→</div>
                <div style={{ color: '#ffa500', fontSize: '1.5rem' }}>←</div>
              </div>

              {/* Action 執行 */}
              <div
                onClick={() => setActiveReactNode('action')}
                style={{
                  background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
                  padding: '1.5rem 2rem',
                  borderRadius: '10px',
                  color: '#fff',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 20px rgba(255, 107, 157, 0.5)',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  minWidth: '180px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div>⚡ Action 執行</div>
                <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.9 }}>
                  調用工具執行
                </div>
                <div style={{
                  borderTop: '1px solid rgba(255,255,255,0.3)',
                  marginTop: '0.8rem',
                  paddingTop: '0.8rem',
                  fontSize: '1rem'
                }}>
                  <div>👁️ 觀察 (Observe)</div>
                  <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.9 }}>
                    回傳結果
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow down */}
          <div style={{ color: '#c3f73a', fontSize: '2rem' }}>↓</div>

          {/* 最終答案 */}
          <div
            onClick={() => setActiveReactNode('answer')}
            style={{
              background: 'linear-gradient(135deg, #c3f73a 0%, #7ed56f 100%)',
              padding: '1.2rem 2.5rem',
              borderRadius: '10px',
              color: '#1a1a2e',
              fontWeight: 'bold',
              boxShadow: '0 4px 20px rgba(195, 247, 58, 0.5)',
              fontSize: '1.1rem',
              textAlign: 'center',
              width: '200px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            ✅ 最終答案
          </div>
        </div>

        {/* Legend */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          fontSize: '0.85rem',
          color: '#aaa',
          flexWrap: 'wrap'
        }}>
          <div>💭 思考 (Reason)</div>
          <div>⚡ 行動 (Act)</div>
          <div>👁️ 觀察 (Observe)</div>
          <div style={{ color: '#00d4ff' }}>⟲ 循環</div>
        </div>

        {/* Modal for ReAct Node Details */}
        {activeReactNode && (
          <div
            onClick={closeDemoModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                padding: '2.5rem',
                borderRadius: '15px',
                maxWidth: '600px',
                width: '100%',
                border: '2px solid var(--primary)',
                boxShadow: '0 10px 50px rgba(0, 212, 255, 0.3)'
              }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>
                {reactNodeContent[activeReactNode].title}
              </h3>
              <p style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                {reactNodeContent[activeReactNode].description}
              </p>
              <ul style={{ color: '#aaa', lineHeight: '2', paddingLeft: '1.5rem' }}>
                {reactNodeContent[activeReactNode].details.map((detail, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                ))}
              </ul>

              {/* Example section */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(0, 212, 255, 0.1)',
                borderLeft: '3px solid var(--primary)',
                borderRadius: '5px'
              }}>
                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  💡 實際範例
                </div>
                <div style={{ color: '#fff', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic' }}>
                  {reactNodeContent[activeReactNode].example}
                </div>
              </div>

              <button
                onClick={closeDemoModal}
                style={{
                  marginTop: '2rem',
                  padding: '0.8rem 2rem',
                  background: 'var(--primary)',
                  color: '#0a0a0f',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  width: '100%'
                }}
              >
                {isDemoMode ? `下一步 (${demoStep + 1}/${demoSequence.length})` : '關閉'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

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

      {/* ReAct Pattern Visualization */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ color: 'var(--primary)', textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.5rem' }}>AI Agent Pattern : ReAct</h2>
        <div style={{ textAlign: 'center', color: '#aaa', fontSize: '1.2rem', marginBottom: '2rem' }}>邊想邊做的智能循環</div>
        <ReactDiagram />
      </div>

      {/* Comparison Table */}


    </div>
  );
}

export default App;
