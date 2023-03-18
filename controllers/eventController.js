const { render } = require('ejs');
const { fileUpload } = require('../middleware/fileUpload');
const model = require('../models/event');

exports.index = (req, res)=>{
    let events = model.find();
    let uniqueCategories = model.categories();
    res.render('./event/index', {events, uniqueCategories});
}

exports.new = (req, res,)=>{
    res.render('./event/new');
}

exports.create = (fileUpload, function(req, res, next){
        let event = req.body;
        model.save(event);
        res.redirect('/events');
});

exports.show = (req, res, next)=>{
    let id = req.params.id;
    let event = model.findById(id);
    if(event) {
        res.render('./event/show', {event});
    } else {
        let error = "Cannot find event with id " + id
        res.render('./main/error', {error});
    }
}

exports.edit = (req, res)=>{
    let id = req.params.id;
    let event = model.findById(id);
    if(event) {
        res.render('./event/edit', {event});
    } else {
        let error = "Cannot find event with id " + id
        res.render('./main/error', {error});
    }
}

exports.update = (req, res)=>{
    let event = req.body;
    let id = req.params.id;
    if(model.updateById(id, event)){
        res.redirect('/events/' + id);
    }else{
        let error = "Cannot find event with id " + id
        res.render('./main/error', {error});
    }
}

exports.delete = (req, res)=>{
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/events');
    }else{
        let error = "Cannot find event with id " + id
        res.render('./main/error', {error});
    }
}