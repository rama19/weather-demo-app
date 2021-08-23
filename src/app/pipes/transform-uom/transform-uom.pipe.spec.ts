import { StorageService } from 'src/app/services/storage/storage.service';
import { TransformUomPipe } from './transform-uom.pipe';

describe('TransformUomPipe', () => {
    let service: StorageService;
    it('create an instance', () => {
        const pipe = new TransformUomPipe(service);
        expect(pipe).toBeTruthy();
    });
});
