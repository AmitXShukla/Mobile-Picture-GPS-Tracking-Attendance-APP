import { Component, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BackendService } from '../../services/backend.service';

@Component({
    selector: 'app-fileupload',
    templateUrl: './fileupload.component.html',
    styleUrls: ['./fileupload.component.css']
})
export class FileUploadComponent {
    @Input() fileUrl: string;
    @Input() docId: string;
    task: AngularFireUploadTask;
    percentage: Observable<number>;
    snapshot: Observable<any>;
    downloadURL: Observable<string>;
    isHovering: boolean;
    error: boolean = false;

    constructor(private _storage: AngularFireStorage, private _backendService: BackendService) { }

    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    startUpload(event) {
        const file = event.item(0);
        const filePath = this.fileUrl + '/' + new Date().getTime();
        const fileRef = this._storage.ref(filePath);
        const task = this._storage.upload(filePath, file);

        // observe percentage changes
        this.percentage = task.percentageChanges();
        // update attendance doc
        task.snapshotChanges().pipe(
            finalize(() => this.downloadURL = fileRef.getDownloadURL()))
            .subscribe((res) => {
                if (res.bytesTransferred === res.totalBytes) {
                    res.ref.getDownloadURL().then((val) => {
                        return this._backendService.updateAttendance(val, this.docId);
                    });
                }
            });
    }

    isActive(snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    }
}