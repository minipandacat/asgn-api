var router = express.Router()

router.get('/createNew', (req, res) =>{
  res.send('Create new assignments')
})
router.get('/createNew/:newAssign', (req, res) => {
    res.send(`You have requested to create a new assignment using params: ${req.query.newAssign}`);
  });
router.get('/createNew/:newAssign', (req, res) => {
  res.send(`You have requested to create a new assignment using params: ${req.params.newAssign}`);
});

module.exports = router;