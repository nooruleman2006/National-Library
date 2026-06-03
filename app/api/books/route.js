import { NextResponse } from 'next/server';
import { executeCommand } from '../../../lib/cppBackend';

export async function GET() {
  try {
    const data = await executeCommand('GET_BOOKS');
    const formattedData = data.map(b => ({
      ...b,
      name: b.name.replace(/_/g, ' ')
    }));
    return NextResponse.json(formattedData);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, name } = body;
    
    const safeName = name.trim().replace(/ /g, '_') || 'Unknown_Book';
    
    const cmd = `ADD_BOOK ${id} ${safeName}`;
    const result = await executeCommand(cmd);
    
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to add book' }, { status: 500 });
  }
}
