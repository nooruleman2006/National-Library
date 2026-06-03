// ── DATA (mirroring C++ preloaded data) ─────────────────────────────────────

const members = [
  { id:101, name:"Ali Khan",       hn:28, city:"Lahore",      society:"Bahria Town",        day:15, month:5,  year:2025, status:"journal",   books:[] },
  { id:102, name:"Sara Ahmed",     hn:45, city:"Karachi",     society:"DHA",                day:21, month:4,  year:2024, status:"executive",  books:[] },
  { id:103, name:"Ahmed Raza",     hn:34, city:"Islamabad",   society:"G-11",               day:10, month:3,  year:2025, status:"journal",   books:[] },
  { id:104, name:"Fatima Noor",    hn:29, city:"Lahore",      society:"Model Town",         day:8,  month:2,  year:2024, status:"executive",  books:[] },
  { id:105, name:"Zainab Malik",   hn:33, city:"Rawalpindi",  society:"Saddar",             day:11, month:6,  year:2024, status:"journal",   books:[] },
  { id:106, name:"Hamza Tariq",    hn:31, city:"Karachi",     society:"Gulshan",            day:23, month:5,  year:2025, status:"executive",  books:[] },
  { id:107, name:"Ayesha Khan",    hn:26, city:"Multan",      society:"Cantt",              day:3,  month:1,  year:2025, status:"journal",   books:[] },
  { id:108, name:"Usman Ali",      hn:38, city:"Quetta",      society:"Satellite Town",     day:17, month:3,  year:2024, status:"executive",  books:[] },
  { id:109, name:"Laiba Qureshi",  hn:30, city:"Peshawar",    society:"University Town",    day:1,  month:4,  year:2025, status:"journal",   books:[] },
  { id:110, name:"Bilal Aslam",    hn:32, city:"Faisalabad",  society:"Peoples Colony",     day:19, month:2,  year:2025, status:"executive",  books:[] },
  { id:111, name:"Mariam Shah",    hn:27, city:"Lahore",      society:"Johar Town",         day:25, month:6,  year:2024, status:"journal",   books:[] },
  { id:112, name:"Danish Iqbal",   hn:35, city:"Sialkot",     society:"Cantt",              day:7,  month:7,  year:2025, status:"executive",  books:[] },
  { id:113, name:"Hina Yousuf",    hn:40, city:"Karachi",     society:"Nazimabad",          day:6,  month:3,  year:2024, status:"journal",   books:[] },
  { id:114, name:"Tariq Jameel",   hn:42, city:"Lahore",      society:"Township",           day:12, month:9,  year:2025, status:"executive",  books:[] },
  { id:115, name:"Kiran Nawaz",    hn:28, city:"Rawalpindi",  society:"Peshawar Road",      day:30, month:1,  year:2025, status:"journal",   books:[] },
  { id:116, name:"Fahad Mirza",    hn:36, city:"Islamabad",   society:"F-6",                day:2,  month:2,  year:2024, status:"executive",  books:[] },
  { id:117, name:"Noor Fatima",    hn:31, city:"Hyderabad",   society:"Latifabad",          day:20, month:5,  year:2024, status:"journal",   books:[] },
  { id:118, name:"Zeeshan Arif",   hn:39, city:"Karachi",     society:"Clifton",            day:22, month:4,  year:2025, status:"executive",  books:[] },
  { id:119, name:"Sana Shabbir",   hn:25, city:"Lahore",      society:"Gulberg",            day:14, month:6,  year:2024, status:"journal",   books:[] },
  { id:120, name:"Imran Abbas",    hn:44, city:"Multan",      society:"New Multan",         day:9,  month:10, year:2024, status:"executive",  books:[] },
  { id:121, name:"Mehwish Ali",    hn:37, city:"Peshawar",    society:"Hayatabad",          day:26, month:12, year:2024, status:"journal",   books:[] },
  { id:122, name:"Waqar Younis",   hn:43, city:"Faisalabad",  society:"Jinnah Colony",      day:4,  month:6,  year:2025, status:"executive",  books:[] },
  { id:123, name:"Hira Saeed",     hn:29, city:"Islamabad",   society:"I-8",                day:18, month:2,  year:2025, status:"journal",   books:[] },
  { id:124, name:"Rashid Minhas",  hn:35, city:"Lahore",      society:"Defense",            day:13, month:5,  year:2024, status:"executive",  books:[] },
  { id:125, name:"Areeba Jan",     hn:30, city:"Rawalpindi",  society:"Westridge",          day:16, month:3,  year:2025, status:"journal",   books:[] },
  { id:126, name:"Junaid Akram",   hn:41, city:"Karachi",     society:"North Nazimabad",    day:5,  month:11, year:2024, status:"executive",  books:[] },
  { id:127, name:"Asma Rehman",    hn:33, city:"Lahore",      society:"Askari",             day:28, month:7,  year:2025, status:"journal",   books:[] },
  { id:128, name:"Nabeel Khan",    hn:34, city:"Islamabad",   society:"G-10",               day:27, month:6,  year:2024, status:"executive",  books:[] },
  { id:129, name:"Iqra Aziz",      hn:26, city:"Sialkot",     society:"Sadar Bazar",        day:24, month:8,  year:2024, status:"journal",   books:[] },
  { id:130, name:"Saad Rafique",   hn:38, city:"Faisalabad",  society:"Satiana Road",       day:6,  month:4,  year:2025, status:"executive",  books:[] },
  { id:131, name:"Anum Shahid",    hn:31, city:"Karachi",     society:"Malir",              day:29, month:3,  year:2024, status:"journal",   books:[] },
  { id:132, name:"Haroon Shah",    hn:32, city:"Lahore",      society:"Iqbal Town",         day:10, month:5,  year:2025, status:"executive",  books:[] },
  { id:133, name:"Zara Sheikh",    hn:27, city:"Multan",      society:"Shah Rukn-e-Alam",   day:13, month:7,  year:2024, status:"journal",   books:[] },
  { id:134, name:"Rameez Raja",    hn:39, city:"Rawalpindi",  society:"Committee Chowk",    day:7,  month:9,  year:2024, status:"executive",  books:[] },
  { id:135, name:"Nimra Khan",     hn:28, city:"Karachi",     society:"Korangi",            day:1,  month:10, year:2025, status:"journal",   books:[] },
  { id:136, name:"Taimoor Bhatti", hn:44, city:"Islamabad",   society:"E-11",               day:30, month:11, year:2024, status:"executive",  books:[] },
  { id:137, name:"Fiza Ali",       hn:25, city:"Lahore",      society:"Green Town",         day:2,  month:6,  year:2025, status:"journal",   books:[] },
  { id:138, name:"Adnan Sami",     hn:42, city:"Quetta",      society:"Jinnah Town",        day:15, month:4,  year:2024, status:"executive",  books:[] },
  { id:139, name:"Bushra Ansari",  hn:36, city:"Karachi",     society:"Lyari",              day:17, month:1,  year:2025, status:"journal",   books:[] },
  { id:140, name:"Noman Ijaz",     hn:40, city:"Peshawar",    society:"Cantt",              day:19, month:8,  year:2024, status:"executive",  books:[] },
];

const books = [
  {id:1,  name:"Harry Potter"},         {id:2,  name:"The Hobbit"},
  {id:3,  name:"Pride and Prejudice"},  {id:4,  name:"1984"},
  {id:5,  name:"To Kill a Mockingbird"},{id:6,  name:"The Great Gatsby"},
  {id:7,  name:"Moby Dick"},            {id:8,  name:"Jane Eyre"},
  {id:9,  name:"The Catcher in the Rye"},{id:10, name:"War and Peace"},
  {id:11, name:"Crime and Punishment"}, {id:12, name:"Brave New World"},
  {id:13, name:"The Alchemist"},        {id:14, name:"Animal Farm"},
  {id:15, name:"The Da Vinci Code"},    {id:16, name:"The Lord of the Rings"},
  {id:17, name:"The Book Thief"},       {id:18, name:"Little Women"},
  {id:19, name:"Wuthering Heights"},    {id:20, name:"Frankenstein"},
  {id:21, name:"The Chronicles of Narnia"},{id:22, name:"The monk who sold his Ferrari"},
  {id:23, name:"The Kite Runner"},      {id:24, name:"Gone with the Wind"},
  {id:25, name:"Dracula"},              {id:26, name:"Life of Pi"},
  {id:27, name:"The Shining"},          {id:28, name:"Twilight"},
  {id:29, name:"The Hunger Games"},     {id:30, name:"The Maze Runner"},
];

// Pre-load book records (mirroring C++ setRecord calls)
function setRecord(memberIdx, bookId, bookName, day, month, year) {
  if (members[memberIdx].books.length < 5)
    members[memberIdx].books.push({ bookId, bookName, day, month, year });
}

setRecord(0,1,"Harry Potter",1,6,2025); setRecord(0,2,"The Hobbit",2,6,2025);
setRecord(1,3,"Pride and Prejudice",3,6,2025); setRecord(1,4,"1984",3,6,2025); setRecord(1,5,"To Kill a Mockingbird",4,6,2025);
setRecord(2,6,"The Great Gatsby",5,6,2025);
setRecord(3,7,"Moby Dick",5,6,2025); setRecord(3,8,"Jane Eyre",6,6,2025); setRecord(3,9,"The Catcher in the Rye",6,6,2025); setRecord(3,10,"War and Peace",6,6,2025);
setRecord(4,11,"Crime and Punishment",7,6,2025); setRecord(4,12,"Brave New World",7,6,2025); setRecord(4,13,"The Alchemist",8,6,2025); setRecord(4,14,"Animal Farm",8,6,2025); setRecord(4,15,"The Da Vinci Code",9,6,2025);
setRecord(5,16,"The Lord of the Rings",9,6,2025);
setRecord(6,17,"The Book Thief",10,6,2025); setRecord(6,18,"Little Women",10,6,2025);
setRecord(7,19,"Wuthering Heights",11,6,2025);
setRecord(8,20,"Frankenstein",11,6,2025); setRecord(8,21,"The Chronicles of Narnia",12,6,2025); setRecord(8,22,"The monk who sold his Ferrari",12,6,2025);
setRecord(9,23,"The Kite Runner",13,6,2025); setRecord(9,24,"Gone with the Wind",13,6,2025); setRecord(9,25,"Dracula",13,6,2025);
setRecord(10,26,"Life of Pi",14,6,2025); setRecord(10,27,"The Shining",14,6,2025); setRecord(10,28,"Twilight",15,6,2025); setRecord(10,29,"The Hunger Games",15,6,2025);
setRecord(11,30,"The Maze Runner",16,6,2025);
setRecord(12,1,"Harry Potter",16,6,2025); setRecord(12,2,"The Hobbit",17,6,2025); setRecord(12,3,"Pride and Prejudice",17,6,2025); setRecord(12,4,"1984",18,6,2025); setRecord(12,5,"To Kill a Mockingbird",18,6,2025);
setRecord(13,6,"The Great Gatsby",19,6,2025);
setRecord(14,7,"Moby Dick",19,6,2025); setRecord(14,8,"Jane Eyre",19,6,2025); setRecord(14,9,"The Catcher in the Rye",20,6,2025);
setRecord(15,10,"War and Peace",20,6,2025);
setRecord(16,11,"Crime and Punishment",21,6,2025); setRecord(16,12,"Brave New World",21,6,2025);
setRecord(17,13,"The Alchemist",22,6,2025); setRecord(17,14,"Animal Farm",22,6,2025);
setRecord(18,15,"The Da Vinci Code",23,6,2025); setRecord(18,16,"The Lord of the Rings",23,6,2025); setRecord(18,17,"The Book Thief",24,6,2025);
setRecord(19,18,"Little Women",24,6,2025);
setRecord(20,19,"Wuthering Heights",25,6,2025); setRecord(20,20,"Frankenstein",25,6,2025);
setRecord(21,21,"The Chronicles of Narnia",25,6,2025);
setRecord(22,22,"The monk who sold his Ferrari",26,6,2025); setRecord(22,23,"The Kite Runner",26,6,2025);
setRecord(23,24,"Gone with the Wind",26,6,2025);
setRecord(24,25,"Dracula",27,6,2025); setRecord(24,26,"Life of Pi",27,6,2025); setRecord(24,27,"The Shining",27,6,2025);
setRecord(25,28,"Twilight",28,6,2025);
setRecord(26,29,"The Hunger Games",28,6,2025);
setRecord(27,30,"The Maze Runner",29,6,2025);
setRecord(28,1,"Harry Potter",29,6,2025); setRecord(28,2,"The Hobbit",29,6,2025);
setRecord(29,3,"Pride and Prejudice",30,6,2025); setRecord(29,4,"1984",30,6,2025); setRecord(29,5,"To Kill a Mockingbird",30,6,2025); setRecord(29,6,"The Great Gatsby",30,6,2025); setRecord(29,7,"Moby Dick",30,6,2025);
setRecord(30,8,"Jane Eyre",1,7,2025);
setRecord(31,9,"The Catcher in the Rye",1,7,2025);
setRecord(32,10,"War and Peace",2,7,2025);
setRecord(33,11,"Crime and Punishment",2,7,2025);
setRecord(34,12,"Brave New World",2,7,2025);
setRecord(35,13,"The Alchemist",3,7,2025);
setRecord(36,14,"Animal Farm",3,7,2025);
setRecord(37,15,"The Da Vinci Code",3,7,2025);
setRecord(38,16,"The Lord of the Rings",4,7,2025);
setRecord(39,17,"The Book Thief",4,7,2025);

// ── HELPERS ──────────────────────────────────────────────────────────────────

function totalDays(day, month, year) {
  return day + month * 30 + year * 365;
}

function fmtDate(day, month, year) {
  return `${String(day).padStart(2,'0')}/${String(month).padStart(2,'0')}/${year}`;
}

function statusBadge(status) {
  return `<span class="badge badge-${status}">${status}</span>`;
}

function findMember(id) {
  return members.find(m => m.id === parseInt(id));
}

function findBook(id) {
  return books.find(b => b.id === parseInt(id));
}

// ── NAV ───────────────────────────────────────────────────────────────────────

const titles = {
  dashboard: ['Dashboard', 'System overview and quick access'],
  members:   ['Administration', 'Manage library members'],
  books:     ['Books', 'Manage the book catalog'],
  issue:     ['Issue / Return', 'Issue and return books'],
  fines:     ['Fine Calculator', 'Calculate overdue fines'],
};

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  document.querySelector(`[data-section="${id}"]`).classList.add('active');
  const [title, sub] = titles[id];
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-sub').textContent = sub;

  if (id === 'members')   renderMembers(members);
  if (id === 'books')     renderBooks(books);
  if (id === 'issue')     renderIssueRecords();
  if (id === 'dashboard') renderDashboard();
}

// ── MODAL ─────────────────────────────────────────────────────────────────────

function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function closeModalOutside(e, id) {
  if (e.target.id === id) closeModal(id);
}

// ── DASHBOARD ────────────────────────────────────────────────────────────────

function renderDashboard() {
  document.getElementById('stat-members').textContent = members.length;
  document.getElementById('stat-books').textContent   = books.length;
  document.getElementById('badge-members').textContent = members.length;
  document.getElementById('badge-books').textContent   = books.length;

  const issued = members.filter(m => m.books.length > 0).length;
  document.getElementById('stat-issued').textContent = issued;

  // Recent members (last 6)
  const tbody = document.getElementById('recent-members-body');
  const recent = members.slice(-6).reverse();
  tbody.innerHTML = recent.map(m => `
    <tr>
      <td>${m.id}</td>
      <td>${m.name}</td>
      <td>${statusBadge(m.status)}</td>
      <td>${m.city}</td>
      <td>${fmtDate(m.day, m.month, m.year)}</td>
    </tr>
  `).join('');
}

// ── MEMBERS ───────────────────────────────────────────────────────────────────

function renderMembers(list) {
  const tbody = document.getElementById('members-body');
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:2rem;">No members found.</td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(m => `
    <tr>
      <td>${m.id}</td>
      <td style="color:var(--text);font-weight:500;">${m.name}</td>
      <td>${statusBadge(m.status)}</td>
      <td style="color:var(--text-muted);font-size:0.78rem;">${m.hn}, ${m.society}, ${m.city}</td>
      <td style="font-family:var(--font-mono);font-size:0.75rem;">${fmtDate(m.day, m.month, m.year)}</td>
      <td>
        <button class="tbl-btn" onclick="viewMember(${m.id})">View</button>
        <button class="tbl-btn" onclick="editMember(${m.id})">Edit</button>
        <button class="tbl-btn del" onclick="deleteMember(${m.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function filterMembers() {
  const q = document.getElementById('member-search').value.toLowerCase();
  renderMembers(members.filter(m =>
    m.name.toLowerCase().includes(q) || String(m.id).includes(q)
  ));
}

function addMember() {
  const id      = parseInt(document.getElementById('new-member-id').value);
  const name    = document.getElementById('new-member-name').value.trim();
  const status  = document.getElementById('new-member-status').value;
  const hn      = parseInt(document.getElementById('new-member-hn').value) || 0;
  const society = document.getElementById('new-member-society').value.trim();
  const city    = document.getElementById('new-member-city').value.trim();
  const dateStr = document.getElementById('new-member-date').value;
  const msg     = document.getElementById('add-member-msg');

  if (!id || !name || !status || !dateStr) {
    showMsg(msg, 'Please fill all required fields.', 'error'); return;
  }
  if (members.find(m => m.id === id)) {
    showMsg(msg, `Member ID ${id} already exists.`, 'error'); return;
  }

  const d = new Date(dateStr);
  members.push({ id, name, hn, city, society, day: d.getDate(), month: d.getMonth()+1, year: d.getFullYear(), status, books: [] });
  showMsg(msg, `Member "${name}" added successfully.`, 'success');
  renderDashboard();
  setTimeout(() => { closeModal('modal-add-member'); renderMembers(members); clearAddMemberForm(); }, 1200);
}

function clearAddMemberForm() {
  ['new-member-id','new-member-name','new-member-hn','new-member-society','new-member-city','new-member-date'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('new-member-status').value = '';
  document.getElementById('add-member-msg').style.display = 'none';
}

function editMember(id) {
  const m = findMember(id);
  if (!m) return;
  const idx = members.indexOf(m);
  document.getElementById('edit-member-name').value    = m.name;
  document.getElementById('edit-member-hn').value      = m.hn;
  document.getElementById('edit-member-society').value = m.society;
  document.getElementById('edit-member-city').value    = m.city;
  document.getElementById('edit-member-index').value   = idx;
  openModal('modal-edit-member');
}

function saveEditMember() {
  const idx     = parseInt(document.getElementById('edit-member-index').value);
  const name    = document.getElementById('edit-member-name').value.trim();
  const hn      = parseInt(document.getElementById('edit-member-hn').value) || members[idx].hn;
  const society = document.getElementById('edit-member-society').value.trim();
  const city    = document.getElementById('edit-member-city').value.trim();
  if (name) members[idx].name = name;
  if (hn)   members[idx].hn   = hn;
  if (society) members[idx].society = society;
  if (city)    members[idx].city    = city;
  closeModal('modal-edit-member');
  renderMembers(members);
}

function deleteMember(id) {
  const idx = members.findIndex(m => m.id === id);
  if (idx === -1) return;
  if (confirm(`Delete member ${members[idx].name}? This cannot be undone.`)) {
    members.splice(idx, 1);
    renderMembers(members);
    renderDashboard();
  }
}

function viewMember(id) {
  const m = findMember(id);
  if (!m) return;
  const body = document.getElementById('view-member-body');
  body.innerHTML = `
    <div class="profile-grid">
      <div class="profile-field">
        <div class="profile-field-label">Member ID</div>
        <div class="profile-field-val">${m.id}</div>
      </div>
      <div class="profile-field">
        <div class="profile-field-label">Status</div>
        <div class="profile-field-val">${statusBadge(m.status)}</div>
      </div>
      <div class="profile-field" style="grid-column:1/-1">
        <div class="profile-field-label">Full Name</div>
        <div class="profile-field-val" style="font-size:1.1rem;font-weight:500;">${m.name}</div>
      </div>
      <div class="profile-field">
        <div class="profile-field-label">Address</div>
        <div class="profile-field-val">${m.hn}, ${m.society}, ${m.city}</div>
      </div>
      <div class="profile-field">
        <div class="profile-field-label">Subscription Date</div>
        <div class="profile-field-val">${fmtDate(m.day, m.month, m.year)}</div>
      </div>
    </div>
    <div class="profile-books-section">
      <div class="profile-books-title">Issued Books (${m.books.length}/5)</div>
      ${m.books.length === 0
        ? `<p style="color:var(--text-muted);font-size:0.82rem;">No books currently issued.</p>`
        : m.books.map(b => `
            <div class="profile-book-row">
              <span class="profile-book-id">#${b.bookId}</span>
              <span class="profile-book-name">${b.bookName}</span>
              <span class="profile-book-date">${fmtDate(b.day, b.month, b.year)}</span>
            </div>
          `).join('')
      }
    </div>
  `;
  openModal('modal-view-member');
}

// ── BOOKS ────────────────────────────────────────────────────────────────────

function renderBooks(list) {
  const tbody = document.getElementById('books-body');
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--text-muted);padding:2rem;">No books found.</td></tr>`;
    return;
  }
  tbody.innerHTML = list.map((b, i) => `
    <tr>
      <td style="color:var(--text-muted);">${i+1}</td>
      <td>${b.id}</td>
      <td style="color:var(--text);font-weight:500;">${b.name}</td>
      <td>
        <button class="tbl-btn" onclick="editBookPrompt(${b.id})">Edit</button>
        <button class="tbl-btn del" onclick="deleteBook(${b.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function filterBooks() {
  const q = document.getElementById('book-search').value.toLowerCase();
  renderBooks(books.filter(b => b.name.toLowerCase().includes(q) || String(b.id).includes(q)));
}

function addBook() {
  const id   = parseInt(document.getElementById('new-book-id').value);
  const name = document.getElementById('new-book-name').value.trim();
  const msg  = document.getElementById('add-book-msg');
  if (!id || !name) { showMsg(msg, 'Book ID and title are required.', 'error'); return; }
  if (books.find(b => b.id === id)) { showMsg(msg, `Book ID ${id} already exists.`, 'error'); return; }
  books.push({ id, name });
  showMsg(msg, `"${name}" added to catalog.`, 'success');
  renderDashboard();
  setTimeout(() => { closeModal('modal-add-book'); renderBooks(books); document.getElementById('new-book-id').value=''; document.getElementById('new-book-name').value=''; document.getElementById('add-book-msg').style.display='none'; }, 1100);
}

function editBookPrompt(id) {
  const b = findBook(id);
  if (!b) return;
  const newName = prompt(`Edit title for Book #${id}:\n\nCurrent: ${b.name}`, b.name);
  if (newName && newName.trim()) {
    b.name = newName.trim();
    renderBooks(books);
  }
}

function deleteBook(id) {
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return;
  if (confirm(`Delete "${books[idx].name}"? This cannot be undone.`)) {
    books.splice(idx, 1);
    renderBooks(books);
    renderDashboard();
  }
}

// ── ISSUE / RETURN ────────────────────────────────────────────────────────────

function renderIssueRecords() {
  const tbody = document.getElementById('issue-records-body');
  const active = members.filter(m => m.books.length > 0);
  if (active.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--text-muted);padding:2rem;">No active issuances.</td></tr>`;
    return;
  }
  tbody.innerHTML = active.map(m => `
    <tr>
      <td>${m.id}</td>
      <td style="color:var(--text);font-weight:500;">${m.name}</td>
      <td>${statusBadge(m.status)}</td>
      <td>
        <div class="books-list-cell">
          ${m.books.map(b => `<span>◫ ${b.bookName} <span style="color:var(--text-muted)">(${fmtDate(b.day,b.month,b.year)})</span></span>`).join('')}
        </div>
      </td>
    </tr>
  `).join('');

  document.getElementById('stat-issued').textContent = active.length;
}

function issueBook() {
  const memberId = document.getElementById('issue-member-id').value;
  const bookId   = document.getElementById('issue-book-id').value;
  const dateStr  = document.getElementById('issue-date').value;
  const msg      = document.getElementById('issue-msg');

  const m = findMember(memberId);
  const b = findBook(bookId);

  if (!m) { showMsg(msg, `Member ID ${memberId} not found.`, 'error'); return; }
  if (!b) { showMsg(msg, `Book ID ${bookId} not found.`, 'error'); return; }
  if (!dateStr) { showMsg(msg, 'Please select an issue date.', 'error'); return; }
  if (m.books.length >= 5) { showMsg(msg, `${m.name} already has 5 books. Return some first.`, 'error'); return; }
  if (m.books.find(bk => bk.bookId === parseInt(bookId))) { showMsg(msg, `This member already has Book #${bookId}.`, 'error'); return; }

  const d = new Date(dateStr);
  m.books.push({ bookId: b.id, bookName: b.name, day: d.getDate(), month: d.getMonth()+1, year: d.getFullYear() });
  showMsg(msg, `"${b.name}" issued to ${m.name} successfully.`, 'success');
  renderIssueRecords();
  document.getElementById('issue-member-id').value = '';
  document.getElementById('issue-book-id').value   = '';
  document.getElementById('issue-date').value      = '';
}

let returnTarget = null;

function previewReturn() {
  const memberId = document.getElementById('return-member-id').value;
  const msg = document.getElementById('return-msg');
  const preview = document.getElementById('return-preview');
  const confirmBtn = document.getElementById('confirm-return-btn');
  const m = findMember(memberId);

  if (!m) { showMsg(msg, `Member ID ${memberId} not found.`, 'error'); preview.style.display='none'; confirmBtn.style.display='none'; return; }
  if (m.books.length === 0) { showMsg(msg, `${m.name} has no issued books.`, 'error'); preview.style.display='none'; confirmBtn.style.display='none'; return; }

  msg.style.display = 'none';
  returnTarget = m;
  preview.style.display = 'block';
  confirmBtn.style.display = 'block';
  preview.innerHTML = `
    <div class="rp-title">Books to return for ${m.name}</div>
    ${m.books.map(b => `<div class="rp-book">◫ ${b.bookName} — issued ${fmtDate(b.day,b.month,b.year)}</div>`).join('')}
  `;
}

function confirmReturn() {
  if (!returnTarget) return;
  returnTarget.books = [];
  returnTarget = null;
  document.getElementById('return-member-id').value = '';
  document.getElementById('return-preview').style.display = 'none';
  document.getElementById('confirm-return-btn').style.display = 'none';
  showMsg(document.getElementById('return-msg'), 'Books returned successfully.', 'success');
  renderIssueRecords();
}

// ── FINES ────────────────────────────────────────────────────────────────────

function calculateFine() {
  const memberId = document.getElementById('fine-member-id').value;
  const dateStr  = document.getElementById('fine-date').value;
  const resultBody = document.getElementById('fine-result-body');

  const m = findMember(memberId);
  if (!m) {
    resultBody.innerHTML = `<div class="msg-box error" style="display:block;">Member ID ${memberId} not found.</div>`;
    return;
  }
  if (!dateStr) {
    resultBody.innerHTML = `<div class="msg-box error" style="display:block;">Please select today's date.</div>`;
    return;
  }
  if (m.books.length === 0) {
    resultBody.innerHTML = `<div class="msg-box success" style="display:block;">${m.name} has no issued books. Fine: PKR 0.</div>`;
    return;
  }

  const today = new Date(dateStr);
  const todayTotal = totalDays(today.getDate(), today.getMonth()+1, today.getFullYear());
  let totalFine = 0;

  const bookRows = m.books.map(b => {
    const issuedTotal = totalDays(b.day, b.month, b.year);
    const diff = todayTotal - issuedTotal;
    let bookFine = 0;
    if (diff > 15 && m.status === 'executive') bookFine = 50;
    if (diff > 15 && m.status === 'journal')   bookFine = 100;
    totalFine += bookFine;
    const overdue = diff > 15;
    return `
      <tr>
        <td>#${b.bookId}</td>
        <td>${b.bookName}</td>
        <td>${fmtDate(b.day, b.month, b.year)}</td>
        <td style="font-family:var(--font-mono);">${diff} days</td>
        <td style="color:${overdue ? 'var(--red)' : 'var(--green)'}; font-family:var(--font-mono);">
          ${overdue ? 'Overdue' : 'On Time'}
        </td>
        <td style="font-family:var(--font-mono);color:${bookFine > 0 ? 'var(--red)' : 'var(--green)'};">
          PKR ${bookFine}
        </td>
      </tr>
    `;
  }).join('');

  resultBody.innerHTML = `
    <div class="fine-summary">
      <div class="fine-member-info">
        <div style="flex:1">
          <div class="fine-name">${m.name}</div>
          <div style="color:var(--text-dim);font-size:0.82rem;margin-top:4px;">ID: ${m.id} · ${statusBadge(m.status)}</div>
          <div style="color:var(--text-muted);font-size:0.78rem;margin-top:6px;font-family:var(--font-mono);">
            ${m.hn}, ${m.society}, ${m.city}
          </div>
        </div>
        <div class="fine-amount-card">
          <div class="fine-amount-label">Total Fine</div>
          <div class="fine-amount-value">
            <span class="fine-amount-currency">PKR </span>${totalFine}
          </div>
        </div>
      </div>

      <table class="fine-books-table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Issued On</th>
            <th>Days Held</th>
            <th>Status</th>
            <th>Fine</th>
          </tr>
        </thead>
        <tbody>${bookRows}</tbody>
      </table>

      ${totalFine > 0
        ? `<div class="msg-box error" style="display:block;">Dear ${m.name}, a fine of PKR ${totalFine} has been applied to your account. Please clear it at the desk.</div>`
        : `<div class="msg-box success" style="display:block;">${m.name} has no outstanding fines. All books are within the 15-day limit.</div>`
      }
    </div>
  `;
}

// ── MSG BOX HELPER ────────────────────────────────────────────────────────────

function showMsg(el, text, type) {
  el.textContent = text;
  el.className = `msg-box ${type}`;
  el.style.display = 'block';
}

// ── INIT ──────────────────────────────────────────────────────────────────────

function updateDate() {
  const now = new Date();
  document.getElementById('date-display').textContent = now.toLocaleDateString('en-PK', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateDate();
  renderDashboard();
  document.getElementById('issue-date').valueAsDate = new Date();
  document.getElementById('fine-date').valueAsDate  = new Date();
});
