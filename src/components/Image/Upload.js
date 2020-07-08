import React, { useState } from 'react';
import firebase, { storage } from '../../Firebase';

const Upload = () => {
    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleImage = e => {
        const image = e.target.files[0];
        setImage(image);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (image === '') {
            console.log('ファイルが選択されていません');            
        }
        const uploadTask = storage.ref(`/images/${image.name}`).put(image);
        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            next,
            error,
            complete
        );
    }

    const next = snapshot => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + '% done');
        console.log(snapshot);
    }

    const error = error => {
        console.log(error);
    }
    
    const complete = () => {
        storage
        .ref('images')
        .child(image.name)
        .getDownloadURL()
        .then(fireBaseUrl => {
            setImageUrl(fireBaseUrl);
        });
    }

    return (
        <>
            <h2>Upload</h2>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={handleImage} />
                <button>Upload</button>
            </form>
            {imageUrl && (
                <img src={imageUrl} id="imgSample" alt="uploaded" />
            )}
        </>
    );
}

export default Upload;