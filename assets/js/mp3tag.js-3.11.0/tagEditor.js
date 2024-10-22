const MP3Tag = require("./mp3tag.js");
const fs = require("fs");
let buffer, mp3tag;

fs.readdir("./assets/mp3/", (error, fileNames) => {
  fileNames.forEach((fileName) => {
    buffer = fs.readFileSync(`./assets/mp3/${fileName}`);
    mp3tag = new MP3Tag(buffer, true);
    mp3tag.read();
    if (mp3tag.error) throw new Error(mp3tag.error);
    console.log(`
${fileName}

          Title: ${mp3tag.tags.title}
         Artist: ${mp3tag.tags.artist}
          Album: ${mp3tag.tags.album}
          Genre: ${mp3tag.tags.genre}
   Track number: ${mp3tag.tags.track}
   Release year: ${mp3tag.tags.year}
`);
  });
});
