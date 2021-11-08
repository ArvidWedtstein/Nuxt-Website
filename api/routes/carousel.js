const { Router } = require('express')
const glob = require('glob')

const router = Router()

router.get('/carousel/images', async function (req, res) {
  const options = {
    cwd: './static'
  }
  const filenames = glob.sync('*', options)
  console.log('reee')
  let items = [];
  filenames.forEach(filename =>
    items.push({
      'src': '/'+filename
    })
  );

  return res.json({ data: items })
})

module.exports = router