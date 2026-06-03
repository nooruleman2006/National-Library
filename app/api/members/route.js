import { NextResponse } from 'next/server';
import { executeCommand } from '../../../lib/cppBackend';

export async function GET() {
  try {
    const data = await executeCommand('GET_MEMBERS');
    // Revert underscores to spaces for display
    const formattedData = data.map(m => ({
      ...m,
      name: m.name.replace(/_/g, ' '),
      city: m.city.replace(/_/g, ' '),
      society: m.society.replace(/_/g, ' ')
    }));
    return NextResponse.json(formattedData);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, name, type, hn, society, city, date } = body;
    
    // Parse date (YYYY-MM-DD)
    const [year, month, day] = date.split('-');
    
    // Replace spaces with underscores for C++ cin
    const safeName = name.trim().replace(/ /g, '_') || 'Unknown';
    const safeCity = city.trim().replace(/ /g, '_') || 'Unknown';
    const safeSociety = society.trim().replace(/ /g, '_') || 'Unknown';
    const safeStatus = type.trim() || 'journal';
    const safeHn = hn || 0;
    
    const cmd = `ADD_MEMBER ${id} ${safeName} ${safeHn} ${safeCity} ${safeSociety} ${safeStatus} ${day} ${month} ${year}`;
    const result = await executeCommand(cmd);
    
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to add member' }, { status: 500 });
  }
}
