import { HapinessModule, OnStart, HttpServerService } from '@hapiness/core';
import { UploadRoute } from './upload.route';
import { ImageRoute } from './image.route';

@HapinessModule({
    version: '1.0.0',
    providers: [ HttpServerService ],
    declarations: [ UploadRoute, ImageRoute ]
})
export class UploadServer implements OnStart {

    constructor(private server: HttpServerService) {}

    onStart(): void {
        console.log(`Server started: ${this.server.instance().info.uri}`)
    }

}
