const router = require('express').Router();
const { Campus, Student } = require('../db/models');

// reminder that all of these routes start with api/campuses
router.get('/', (req,res,next) => {
  Campus.findAll({
    include: [ { model: Student} ]
  })
    .then(campuses => res.send(campuses))
    .catch(next)
});

router.post('/', (req,res,next)=>{
  Campus.create(req.body)
    .then(campus => res.send(campus))
    .catch(next)
});

router.put('/:id', (req,res,next) => {
  Campus.findById(req.params.id)
    .then(campus => campus.update(req.body))
    .then(campus => res.send(campus))
    .catch(next)
});

router.delete('/:id', (req,res,next)=>{
  Campus.findById(req.params.id)
    .then(campus => campus.destroy())
    .then(() => res.sendStatus(204))
    .catch(next)
});

module.exports = router;