'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [memRes, bookRes] = await Promise.all([
          fetch('/api/members'),
          fetch('/api/books')
        ]);
        const memData = await memRes.json();
        const bookData = await bookRes.json();
        
        setMembers(memData);
        setBooks(bookData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const totalMembers = members.length || 0;
  const totalBooks = books.length || 0;

  return (
    <>
      <div className="hero" id="hero-section">
        <div className="hero-blob b1"></div>
        <div className="hero-blob b2"></div>
        <div className="hero-blob b3"></div>
        <div className="hero-content">
          <div className="hero-pill">
            <span className="pill-dot"></span> LIBRARY ADMINISTRATION PORTAL
          </div>
          <h1 className="hero-title">National Library <br/><span className="hero-highlight">Management</span> System</h1>
          <p className="hero-sub">Complete control over members, books, issuances and fines — all from one powerful dashboard.</p>
          <div className="hero-btns">
            <Link href="/members" className="btn-hero-primary">+ Register Member</Link>
            <Link href="/members" className="btn-hero-ghost">View All Members →</Link>
          </div>
        </div>
      </div>

      <main className="main">
        <section className="view active">
          <div className="kpi-row">
            <div className="kpi" style={{'--d':'.05s'}}>
              <div className="kpi-icon-wrap">👥</div>
              <div className="kpi-body">
                <span className="kpi-num">{loading ? '...' : totalMembers}</span>
                <span className="kpi-lbl">Total Members</span>
              </div>
              <div className="kpi-glow"></div>
            </div>
            <div className="kpi" style={{'--d':'.10s'}}>
              <div className="kpi-icon-wrap">📚</div>
              <div className="kpi-body">
                <span className="kpi-num">{loading ? '...' : totalBooks}</span>
                <span className="kpi-lbl">Catalog Titles</span>
              </div>
              <div className="kpi-glow"></div>
            </div>
            <div className="kpi" style={{'--d':'.15s'}}>
              <div className="kpi-icon-wrap">📋</div>
              <div className="kpi-body">
                <span className="kpi-num">—</span>
                <span className="kpi-lbl">Active Loans</span>
              </div>
              <div className="kpi-glow"></div>
            </div>
            <div className="kpi kpi-warn" style={{'--d':'.20s'}}>
              <div className="kpi-icon-wrap">⚠️</div>
              <div className="kpi-body">
                <span className="kpi-num">—</span>
                <span className="kpi-lbl">Overdue Items</span>
              </div>
              <div className="kpi-glow warn"></div>
            </div>
          </div>

          <div className="dash-layout">
            <div className="dash-main">
              <div className="card">
                <div className="card-head">
                  <span className="card-cap">Recent Members</span>
                  <Link href="/members" className="link-btn">View all →</Link>
                </div>
                <table className="tbl">
                  <thead><tr><th>ID</th><th>Name</th><th>Type</th><th>City</th><th>Since</th></tr></thead>
                  <tbody>
                    {members.slice(-5).reverse().map(m => (
                      <tr key={m.id}>
                        <td>#{m.id}</td>
                        <td>{m.name}</td>
                        <td style={{textTransform:'capitalize'}}>{m.status}</td>
                        <td>{m.city}</td>
                        <td>{m.year}-{m.month}-{m.day}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="dash-side">
              <div className="card">
                <div className="card-head"><span className="card-cap">Library Policy</span></div>
                <div className="policy">
                  <div className="policy-row"><span>Loan period</span><strong>15 days</strong></div>
                  <div className="policy-row"><span>Max books / member</span><strong>5</strong></div>
                  <div className="policy-row"><span>Fine — Executive</span><strong className="accent">PKR 50/day</strong></div>
                  <div className="policy-row"><span>Fine — Journal</span><strong className="accent">PKR 100/day</strong></div>
                  <div className="policy-row"><span>Member types</span><strong>Executive · Journal</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
