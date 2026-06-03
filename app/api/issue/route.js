import { NextResponse } from 'next/server';
import { executeCommand } from '../../../lib/cppBackend';

export async function POST(req) {
  try {
    const body = await req.json();
    const { memberId, bookId, date } = body;
    
    const [year, month, day] = date.split('-');
    
    const cmd = `ISSUE_BOOK ${memberId} ${bookId} ${day} ${month} ${year}`;
    const result = await executeCommand(cmd);
    
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to issue book' }, { status: 500 });
  }
}
