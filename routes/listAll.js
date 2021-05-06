var router = express.Router()

router.get('/listAll', (req, res) =>{
  res.send('List all assignments')
})

router.get('/listAll/:assign', (req, res) => {
  res.send(`You have requested to list all assignments using params: ${req.params.assign}`);
});

module.exports = router;