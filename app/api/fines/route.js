import { NextResponse } from 'next/server';
import { executeCommand } from '../../../lib/cppBackend';

export async function POST(req) {
  try {
    const body = await req.json();
    const { memberId, date } = body;
    
    const [year, month, day] = date.split('-');
    
    const cmd = `CALCULATE_FINE ${day} ${month} ${year} ${memberId}`;
    const result = await executeCommand(cmd);
    
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to calculate fine' }, { status: 500 });
  }
}
