'use client';

import { useEffect, useState } from 'react';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ id: '', name: '' });

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const res = await fetch('/api/books');
    const data = await res.json();
    setBooks(data);
  }

  async function addBook(e) {
    e.preventDefault();
    await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setShowModal(false);
    fetchBooks();
  }

  return (
    <>
      <div className="section-bar">
        <div className="section-bar-inner">
          <div>
            <p className="section-eyebrow">CATALOG</p>
            <h2 className="section-title">Book Catalog</h2>
          </div>
          <button className="btn-cta" onClick={() => setShowModal(true)}>+ Add Book</button>
        </div>
      </div>

      <main className="main">
        <div className="card">
          <table className="tbl">
            <thead><tr><th>Book ID</th><th>Title</th></tr></thead>
            <tbody>
              {books.map(b => (
                <tr key={b.id}>
                  <td>#{b.id}</td>
                  <td style={{fontWeight:500}}>{b.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {showModal && (
        <div className="overlay open" onClick={(e) => { if (e.target.className.includes('overlay')) setShowModal(false) }}>
          <div className="drawer drawer-sm">
            <div className="drawer-head">
              <h2 className="drawer-title">Add to Catalog</h2>
              <button className="drawer-x" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <form onSubmit={addBook}>
              <div className="drawer-body">
                <div className="field">
                  <label className="flbl">Book ID *</label>
                  <input required type="number" className="finp" value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})}/>
                </div>
                <div className="field">
                  <label className="flbl">Title *</label>
                  <input required type="text" className="finp" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}/>
                </div>
              </div>
              <div className="drawer-foot">
                <button type="button" className="btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-cta">Add Book</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
