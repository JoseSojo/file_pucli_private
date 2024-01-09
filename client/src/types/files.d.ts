
export interface DataFile {
    originalname: string,
    save_name: string,
    size: string,
    type: string
}

export interface ResponseUploadFile {
    response: string,
    file_data: DataFile
}
