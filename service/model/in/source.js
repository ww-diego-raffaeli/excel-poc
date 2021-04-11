// source.js

class Source {
    constructor(fileName, origin) {
        this.fileName = fileName
        this.origin = origin
    }
}

const Origin = {
    S3: 'S3',
    LOCAL: 'local'
}