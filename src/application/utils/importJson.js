import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export async function importJson(filePath) {
    const dirname__ = dirname(fileURLToPath(import.meta.url));

    return (await import(resolve(dirname__, filePath), { with: { type: "json" } })).default;
}

