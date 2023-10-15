const ytdl = require("@distube/ytdl-core");
const sanitize = require('sanitize-filename');
const fs = require('fs');

let outputFilePath=''
let fileName='';
let downloadOption=''

function YoutubeToMp3(link,options, res) {

    downloadOption=options;
    return new Promise(async (resolve, reject) => {
      try {
        const videoUrl = link;
        const info = await ytdl.getInfo(link);
        const title = info.videoDetails.title;
        const sanitizedTitle = sanitize(title);
        fileName = `${sanitizedTitle}.${options}`;
        outputFilePath = `./${fileName}`;
  
        await new Promise((resolve, reject) => {
          ytdl(videoUrl, { filter: options==='mp3'?'audioonly':'audioandvideo' })
            .pipe(fs.createWriteStream(outputFilePath))
            .on('finish',  () => {
  
              // console.log('Video downloaded successfully!');
              setTimeout(() => {
             
                  fs.unlink(fileName, (err) => {
                    if (err) throw err;
                    // console.log(`File ${fileName} has been deleted.`);
                  });
              
               
              }, 600000);
              
              // console.log('Video downloaded successfully!');
  
              
              resolve();
            })
            .on('error', (err) => {
              console.error('Error downloading video:', err);
              reject(err);
            });
        });
  
        res.status(200).send({
          fileName: fileName,
          message: 'File downloaded successfully!',
          Title:title,
        });
        resolve();
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  }

  module.exports={YoutubeToMp3, downloadOption,fileName};