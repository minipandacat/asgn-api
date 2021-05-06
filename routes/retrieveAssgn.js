var router = express.Router()

router.get('/retrieveAssgn', (req, res) =>{
  res.send('Retrieve all assignments')
})

router.get('/retrieveAssgn/:rAssign', (req, res) => {
  res.send(`You have requested to retrieve all assignments using params: ${req.params.rAssgn}`);
});

module.exports = router;