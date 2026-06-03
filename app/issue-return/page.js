'use client';

import { useState } from 'react';

export default function IssueReturn() {
  const [memberId, setMemberId] = useState('');
  const [bookId, setBookId] = useState('');
  const [date, setDate] = useState('');
  const [msg, setMsg] = useState('');

  async function issueBook(e) {
    e.preventDefault();
    setMsg('Issuing...');
    try {
      const res = await fetch('/api/issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberId, bookId, date })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setMsg('Book issued successfully!');
        setBookId('');
      } else {
        setMsg(data.message || 'Error issuing book.');
      }
    } catch (err) {
      setMsg('Failed to issue book.');
    }
  }

  return (
    <>
      <div className="section-bar">
        <div className="section-bar-inner">
          <div>
            <p className="section-eyebrow">ISSUE / RETURN</p>
            <h2 className="section-title">Issue Books</h2>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="two-panel">
          <div className="card">
            <div className="card-head"><span className="card-cap">Issue a Book</span></div>
            <div className="card-body">
              <form onSubmit={issueBook}>
                <div className="field">
                  <label className="flbl">Member ID</label>
                  <input required type="number" className="finp" value={memberId} onChange={e => setMemberId(e.target.value)}/>
                </div>
                <div className="field">
                  <label className="flbl">Book ID</label>
                  <input required type="number" className="finp" value={bookId} onChange={e => setBookId(e.target.value)}/>
                </div>
                <div className="field">
                  <label className="flbl">Issue Date</label>
                  <input required type="date" className="finp" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <button type="submit" className="btn-cta w100">Issue Book</button>
              </form>
              {msg && <div className="notice" style={{marginTop: '1rem'}}>{msg}</div>}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
