import { Route, OnPost, Request, ReplyNoContinue } from '@hapiness/core';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';
import { baseUrl } from './index';

@Route({
    path: '/upload',
    method: 'post'
})
export class UploadRoute implements OnPost {

    onPost(request: Request, reply: ReplyNoContinue) {

        if (!request.payload.image) {
            reply().code(204);
            return;
        }

        const filename = uuid.v1();
        const p = path.resolve(__dirname, '../', 'images', filename);
        console.log(p);
        const img = new Buffer(request.payload.image, 'base64');
        fs.writeFile(p, img, err => {
            reply({ url: `${baseUrl}/image/${filename}` })
        });

    }

}
