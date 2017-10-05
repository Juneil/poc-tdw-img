import { Route, OnGet, Request, ReplyNoContinue } from '@hapiness/core';
import * as fs from 'fs';
import * as path from 'path';

@Route({
    path: '/image/{id}',
    method: 'get'
})
export class ImageRoute implements OnGet {

    onGet(request: Request, reply: ReplyNoContinue) {

        if (!request.params.id) {
            reply().code(204);
            return;
        }
        const filename = request.params.id;
        const p = path.resolve(__dirname, '../', 'images', filename);
        fs.readFile(p, (err, data) => {
            if (err) {
                reply().code(204);
                console.log(err);
                return;
            }
            reply(data)
                .header('Content-Type', 'image/png')
                .header('Content-Length', data.byteLength.toString());
        });

    }

}
