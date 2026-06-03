'use client';

import { useEffect, useState } from 'react';

export default function Members() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ id: '', name: '', type: 'journal', hn: '', society: '', city: '', date: '' });

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    const res = await fetch('/api/members');
    const data = await res.json();
    setMembers(data);
  }

  const filteredMembers = members.filter(m => {
    const matchFilter = filter === 'all' || m.status === filter;
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || String(m.id).includes(search);
    return matchFilter && matchSearch;
  });

  async function addMember(e) {
    e.preventDefault();
    await fetch('/api/members', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setShowModal(false);
    fetchMembers();
  }

  return (
    <>
      <div className="section-bar">
        <div className="section-bar-inner">
          <div>
            <p className="section-eyebrow">ADMINISTRATION</p>
            <h2 className="section-title">Members</h2>
          </div>
          <button className="btn-cta" onClick={() => setShowModal(true)}>+ Register Member</button>
        </div>
      </div>

      <main className="main">
        <div className="stats-strip">
          <div className="stat-cell">
            <span className="stat-num">{members.length}</span>
            <span className="stat-lbl">Total Members</span>
          </div>
          <div className="stat-cell accent-cell">
            <span className="stat-num">{members.filter(m => m.status === 'executive').length}</span>
            <span className="stat-lbl">Executive</span>
          </div>
          <div className="stat-cell amber-cell">
            <span className="stat-num">{members.filter(m => m.status === 'journal').length}</span>
            <span className="stat-lbl">Journal</span>
          </div>
        </div>

        <div className="card">
          <div className="card-head" style={{flexWrap:'wrap', gap:'.8rem'}}>
            <div className="filter-bar">
              <button className={`filter-chip ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
              <button className={`filter-chip ${filter === 'executive' ? 'active' : ''}`} onClick={() => setFilter('executive')}>Executive</button>
              <button className={`filter-chip ${filter === 'journal' ? 'active' : ''}`} onClick={() => setFilter('journal')}>Journal</button>
            </div>
            <div style={{marginLeft:'auto'}}>
              <input className="search-inp" placeholder="Search member…" value={search} onChange={e => setSearch(e.target.value)}/>
            </div>
          </div>

          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Since</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map(m => (
                  <tr key={m.id}>
                    <td>#{m.id}</td>
                    <td style={{fontWeight:500, color:'var(--t1)'}}>{m.name}</td>
                    <td>
                      <span className={`badge ${m.status === 'executive' ? 'badge-exec' : 'badge-jour'}`}>
                        {m.status}
                      </span>
                    </td>
                    <td>{m.hn ? `#${m.hn}` : ''} {m.society}</td>
                    <td>{m.city}</td>
                    <td>{m.year}-{m.month}-{m.day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="overlay open" onClick={(e) => { if (e.target.className.includes('overlay')) setShowModal(false) }}>
          <div className="drawer">
            <div className="drawer-head">
              <h2 className="drawer-title">Register New Member</h2>
              <button className="drawer-x" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <form onSubmit={addMember}>
              <div className="drawer-body">
                <div className="two-field">
                  <div className="field">
                    <label className="flbl">Member ID *</label>
                    <input required type="number" className="finp" value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})}/>
                  </div>
                  <div className="field">
                    <label className="flbl">Type *</label>
                    <select required className="finp" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                      <option value="executive">Executive</option>
                      <option value="journal">Journal</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="flbl">Full Name *</label>
                  <input required type="text" className="finp" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}/>
                </div>
                <div className="three-field">
                  <div className="field">
                    <label className="flbl">House No.</label>
                    <input type="number" className="finp" value={formData.hn} onChange={e => setFormData({...formData, hn: e.target.value})}/>
                  </div>
                  <div className="field">
                    <label className="flbl">Society</label>
                    <input type="text" className="finp" value={formData.society} onChange={e => setFormData({...formData, society: e.target.value})}/>
                  </div>
                  <div className="field">
                    <label className="flbl">City</label>
                    <input type="text" className="finp" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})}/>
                  </div>
                </div>
                <div className="field">
                  <label className="flbl">Subscription Date * (YYYY-MM-DD)</label>
                  <input required type="date" className="finp" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}/>
                </div>
              </div>
              <div className="drawer-foot">
                <button type="button" className="btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-cta">Register</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
