const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
require("dotenv").config();
const app = express()
app.use(express.static('public'))

mongoose.connect(process.env.URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log("Connection Succesful"))
.catch((err)=>console.log(err));

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  shortUrls.reverse();
  res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ full: req.body.fullUrl })
  if (shortUrl == null) await ShortUrl.create({ full: req.body.fullUrl, notes: req.body.notes })
  else {
    await ShortUrl.deleteOne(shortUrl)
    await ShortUrl.create({full: req.body.fullUrl, short: shortUrl.short, notes: req.body.notes})
  }
  res.redirect('/')
})

app.post('/search', async (req, res) => {
  const querySearch=await ShortUrl.aggregate([
    {
      $search: {
        index: process.env.SearchIndex,
        text: {
          query: req.body.query,
          path: {
            wildcard: "*"
          }
        }
      }
    }
  ]);
  const ids=querySearch.map((url)=>url._id);
  await ShortUrl.deleteMany({ _id: { $in:ids } });
  for (let i = querySearch.length - 1; i >= 0; i--) {
    const element = querySearch[i];
    await ShortUrl.create(element);
  }
  
  res.redirect('/')
})

app.post('/deleteUrl', async (req, res) => {
  await ShortUrl.deleteOne({ short: req.body.fUrl })
  res.redirect('/')
})

// app.get('/newform', async(req, res)=>{
//   try {
//     const result=await ShortUrl.aggregate([
//       {
//         "$search": {
//           "autocomplete": {
//             "query": `${req.query.term}`,
//             "path": "notes",
//             "fuzzy": {
//               "maxEdits": 2
//             }
//           }
//         }
//       }
//     ]);
//     res.send(result);
//   } catch (e) {
//     console.log(e);
//   }
// })

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.save()

  res.redirect(shortUrl.full)
})


app.listen(process.env.PORT || 5000);