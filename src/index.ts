import { Hapiness, HttpServerExt } from '@hapiness/core';
import { UploadServer } from './server';

const port = parseInt(process.env.PORT, 10) || 5555;
const host = process.env.HOST || 'localhost';
export const baseUrl = `http://${host}:${port}`;

Hapiness.bootstrap(UploadServer, [ HttpServerExt.setConfig({ host: '0.0.0.0', port }) ])
    .catch(_ => console.log(_));
