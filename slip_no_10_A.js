var download = require('image-downloader')

var options = {
  url: 'https://i.ytimg.com/vi/6QcuNl1yXrw/maxresdefault.jpg',
  dest: 'download/'                // will be saved to /path/to/dest/image.jpg
}

download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
  })
