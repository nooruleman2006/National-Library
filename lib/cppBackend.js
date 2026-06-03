import { spawn } from 'child_process';
import path from 'path';

let cppProcess = global.cppProcess || null;
let requestQueue = global.requestQueue || [];
let currentRequest = global.currentRequest || null;
let stdoutBuffer = global.stdoutBuffer || '';

function startProcess() {
  if (cppProcess && !cppProcess.killed) return;
  const exePath = path.join(process.cwd(), 'code_new.exe');
  cppProcess = spawn(exePath, ['--automated']);
  global.cppProcess = cppProcess;

  cppProcess.stdout.on('data', (data) => {
    stdoutBuffer += data.toString();
    global.stdoutBuffer = stdoutBuffer;
    
    while (stdoutBuffer.includes('END_OF_RESPONSE')) {
      const parts = stdoutBuffer.split('END_OF_RESPONSE');
      const responseText = parts[0].trim();
      stdoutBuffer = parts.slice(1).join('END_OF_RESPONSE');
      global.stdoutBuffer = stdoutBuffer;
      
      if (currentRequest) {
        try {
          const json = JSON.parse(responseText);
          currentRequest.resolve(json);
        } catch (e) {
          console.error("JSON parse error from C++:", responseText);
          currentRequest.reject(e);
        }
        currentRequest = null;
        global.currentRequest = null;
        processNext();
      }
    }
  });

  cppProcess.stderr.on('data', (data) => {
    console.error(`C++ Error: ${data}`);
  });

  cppProcess.on('close', (code) => {
    console.log(`C++ process exited with code ${code}`);
    cppProcess = null;
    global.cppProcess = null;
  });
}

function processNext() {
  if (currentRequest || requestQueue.length === 0) return;
  
  if (!cppProcess || cppProcess.killed) {
    startProcess();
  }

  currentRequest = requestQueue.shift();
  global.currentRequest = currentRequest;
  global.requestQueue = requestQueue;
  
  cppProcess.stdin.write(currentRequest.command + '\n');
}

export function executeCommand(command) {
  return new Promise((resolve, reject) => {
    requestQueue.push({ command, resolve, reject });
    global.requestQueue = requestQueue;
    processNext();
  });
}
