const fs = require("fs");
const rs = fs.createReadStream("https://www.youtube.com/watch?v=QCnpi9YDeA0&list=PLhDf3-oR4mYjfRkT2r6LpC3UDW6NM05Qg&ab_channel=MarkKulek");
const ws = fs.createWriteStream("./new2.mp4");

fs.stat("./video.mp4", (err, data) => {
  const total = data.size;
  let prograss = 0;

  rs.on("data", (chunk) => {
    console.log("read...");
    prograss += chunk.length;
    console.log(Math.round((100 * prograss) / total) + "%");
  });

  rs.pipe(ws);
  ws.on("finish", () => {
    console.log("New video created!");
  });
});