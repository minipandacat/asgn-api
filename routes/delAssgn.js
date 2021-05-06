var router = express.Router()

router.get('/delAssgn', (req, res) =>{
  res.send('Delete all assignments')
})

router.get('/delAssgn/:dAssign', (req, res) => {
  res.send(`You have requested to delete all assignments using params: ${req.params.dAssign}`);
});

module.exports = router;