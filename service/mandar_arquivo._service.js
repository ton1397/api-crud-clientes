const { getStorage, uploadBytesResumable, getDownloadURL, ref } = require('firebase/storage');
const firebaseApp = require('../firebase/firebase_config');
const firebase_storage = getStorage(firebaseApp);

const mandar_arquivo = async (arquivo) => {
    return new Promise((resolve, reject) => {
        
        try {
            let filename = `${Date.now()}-${arquivo.originalname}`;
            const storageRef = ref(firebase_storage, filename);
            const metadata = {
                contentType: arquivo.mimetype,
            };
    
            const uploadTask = uploadBytesResumable(storageRef, arquivo.buffer, metadata);
    
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    switch (snapshot.state) {
                        case 'paused':
                            break;
                        case 'running':
                            break;
                    }
                },
                (error) => {
                    console.error('Erro durante o upload:', error);
                    reject('Erro durante o upload do arquivo.');
                }, 
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);    
                        resolve(downloadURL);
                    } catch (error) {
                        console.error('Erro ao obter URL de download:', error);
                        reject('Erro ao obter URL de download do arquivo.');
                    }
                }
            );
        } catch (error) {
            console.error('Erro ao fazer upload:', error);
            reject('Erro ao fazer upload do arquivo.');
        }
    })
}

module.exports = mandar_arquivo

