import fs from 'node:fs';import path from 'node:path';
const forbidden=/Rehearsal|Synthetic information only|Staff workspace|r[eé]sumé|résume|<form(?:\s|>)|<input(?:\s|>)/i;
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(/\.(html|txt|js)$/.test(p)&&forbidden.test(fs.readFileSync(p,'utf8')))throw Error('Non-public or inconsistent UX copy in '+p);}}
if(fs.existsSync('out/api'))throw Error('The informational export must not contain API routes');walk('out');console.log('PASS public source/environment/copy boundary');
