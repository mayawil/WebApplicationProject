const { render } = require('ejs');

exports.contact = (req, res)=>{
    res.render('./main/contact');
}

exports.about = (req, res)=>{
    res.render('./main/about');
}

exports.error = (req, res)=>{
    res.render('./main/error');
}