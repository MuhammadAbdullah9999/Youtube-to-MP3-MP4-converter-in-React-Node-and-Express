const express = require('express');
const cors = require('cors');
const fs = require('fs');
const {YoutubeToMp3,downloadOption}=require('./Mp3-tool/Mp3-tool')

const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post('/convert',async (req, res) => {
  try {
    const link = req.body.link;
    const option=req.body.options;
     YoutubeToMp3(link,option, res);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: 'Error downloading file!'
    });
  }
});

app.get('/download', async (req, res) => {

  // console.log(req.query.filename);
  let name=req.query.filename;
  console.log(name)
  try {
    const filePath = `./${name}`;//outputFilePath
    console.log(filePath);
    const stat = await fs.promises.stat(filePath);
    res.setHeader('Content-Disposition', `attachment; filename="${name}"`);
    res.setHeader('Content-Type', downloadOption==='mp3'?'audio/mpeg':'video/mp4');
    res.setHeader('Content-Length', stat.size);

    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    await new Promise((resolve, reject) => {
      fileStream.pipe(res);
      fileStream.on('end', resolve);
      fileStream.on('error', reject);
    });

    console.log('file downloaded successfully');
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
