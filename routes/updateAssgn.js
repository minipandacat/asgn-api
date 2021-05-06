var router = express.Router()

router.get('/updateAssgn', (req, res) =>{
  res.send('Update all assignments')
})

router.get('/updateAssgn/:upAssign', (req, res) => {
  res.send(`You have requested to update all assignments using params: ${req.params.upAssign}`);
});

module.exports = router;