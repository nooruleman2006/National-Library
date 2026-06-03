'use client';

import { useState } from 'react';

export default function Fines() {
  const [memberId, setMemberId] = useState('');
  const [date, setDate] = useState('');
  const [fineResult, setFineResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function calculateFine(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/fines', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberId, date })
      });
      const data = await res.json();
      setFineResult(data.fine);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="section-bar">
        <div className="section-bar-inner">
          <div>
            <p className="section-eyebrow">FINES</p>
            <h2 className="section-title">Fine Calculator</h2>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="two-panel">
          <div className="card">
            <div className="card-head"><span className="card-cap">Calculate Fine</span></div>
            <div className="card-body">
              <p className="helper">Enter a date and member ID to compute outstanding fines.</p>
              <form onSubmit={calculateFine}>
                <div className="field">
                  <label className="flbl">Date</label>
                  <input required type="date" className="finp" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <div className="field">
                  <label className="flbl">Member ID</label>
                  <input required type="number" className="finp" value={memberId} onChange={e => setMemberId(e.target.value)}/>
                </div>
                <button type="submit" className="btn-cta w100" disabled={loading}>
                  {loading ? 'Calculating...' : 'Calculate Fine'}
                </button>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-head"><span className="card-cap">Fine Result</span></div>
            <div className="card-body">
              {fineResult === null ? (
                <div className="empty-state"><span className="es-icon">◎</span><p>Enter details to see the fine breakdown.</p></div>
              ) : (
                <div style={{textAlign: 'center', padding: '2rem'}}>
                  <h3 style={{color:'var(--t3)', fontSize:'0.9rem', textTransform:'uppercase', letterSpacing:'0.1em'}}>Total Outstanding Fine</h3>
                  <div style={{fontSize: '3rem', fontWeight: 800, color: 'var(--red)', marginTop: '1rem'}}>
                    PKR {fineResult}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
