const {DateTime} = require("luxon");
const {v4: uuidv4} = require('uuid');

const events = [
    {
        id: '1',
        category: 'Painting',
        title: 'Coffee and Paint',
        hostname: 'Blackwater Coffee Company',
        location: 'Charlotte, NC',
        startDate: '2023-05-01T15:00',
        endDate: '2023-05-01T17:00',
        details: 'This paint class is in collaboration with BlackWater Coffee Company. At the beginning of class, you will be able to choose your own coffee beverage to enjoy while you paint. In this guided class, everyone will paint the same spring-themed painting, getting to add their own unique style along the way! All levels of experience are welcome.',
        image: '/images/coffeeandpaint.png'
    },
    {
        id: '2',
        category: 'Painting',
        title: 'Ceramic Painting',
        hostname: 'Hopestudio',
        location: 'Charlotte, NC',
        startDate: '2023-06-20T10:00',
        endDate: '2023-06-20T12:00',
        details: 'HopeStudio is hosting an event where you will choose one from the following ceramic dishes (Mug, Plate, Jewelry Tray) and paint with others to create your own unique design. Your ceramics will be glazed and fired after the event. Pieces will be available for pickup a week after the event!',
        image: '/images/ceramics.png'
    },
    {
        id: '3',
        category: 'Painting',
        title: 'Watercolor Fun',
        hostname: 'Wanda Wooly',
        location: 'Colvard 5092 on UNC Charlotte Campus',
        startDate: '2023-07-13T11:00',
        endDate: '2023-07-13T13:00',
        details: 'Come to this beginner friendly workshop to discover the magic of watercolor painting. The class aims to guide you through eight different painting techniques that you can then incorporate into your own art at home.',
        image: '/images/watercolor.png'
    },
    {
        id: '4',
        category: 'Literature',
        title: 'Poetry Slam',
        hostname: 'Paul Pool',
        location: 'Fretwell 200 on UNC Charlotte Campus',
        startDate: '2023-09-10T15:00',
        endDate: '2023-09-10T17:00',
        details: 'Have you ever wanted to try your hand at poetry? Perhaps you have written poetry before and want to meet other individuals to share your interest! In “Poetry Slam,” Paul will teach you how to write effective and thoughtful poetry while allowing you to show off your creative freedom!',
        image: '/images/poetry.png'
    },
    {
        id: '5',
        category: 'Literature',
        title: 'Comic Book Clash!',
        hostname: 'Carl Cooper',
        location: 'Colvard 5091 on UNC Charlotte Campus',
        startDate: '2023-03-11T11:30',
        endDate: '2023-03-11T13:30',
        details: 'In this fun and unique event, you will get to learn and then create your own comic book strip! Get ready to put your creative thoughts into action!',
        image: '/images/comicbook.png'
    },
    {
        id: '6',
        category: 'Literature',
        title: 'Short Story Sessions',
        hostname: 'Sasha Samwell',
        location: 'Denny 205 on UNC Charlotte Campus',
        startDate: '2023-07-09T13:00',
        endDate: '2023-07-09T15:00',
        details: 'Create your own unique short story through this guided two hour session with author, Sasha Samwell. In this class, you will learn the basics of short story writing! All levels of experience are welcome to attend.',
        image: '/images/shortstory.png'
    }
    ];

// to find all events
exports.find = function() {
    return events;
}

// to change ISO dates to formatted string dates
exports.getFormattedDates = function(event) {
    formattedStartDate = DateTime.fromISO(event.startDate).toLocaleString(DateTime.DATETIME_MED);
    formattedEndDate = DateTime.fromISO(event.endDate).toLocaleString(DateTime.DATETIME_MED);
    return formattedStartDate, formattedEndDate;
}

// to change ISO dates to formatted string dates
exports.getISODates = function(event) {
    event.startDate = DateTime.fromLocaleString(event.startDate).toISO();
    event.endDate = DateTime.fromLocaleString(event.endDate).toISO();
}

// to extract unique event categories
exports.categories = function() {
    var uniqueCategories = [];
    events.forEach(event => {
        var category = events.find(event => event.category === category);
        if(!uniqueCategories.includes(event.category)){
            uniqueCategories.push(event.category);
        }
    });
    return uniqueCategories;
}

// to find an event by id
exports.findById = function(id) {
    events.forEach(event => {
        this.getFormattedDates(event);
    });
    var id = events.find(event => event.id === id);
    return id;
}

// to save a new event
exports.save = function(event) {
    event.id = uuidv4();
    events.push(event);
};

// to update an event after editing
exports.updateById = function(id, newEvent) {
    let event = events.find(event => event.id === id);
    if(event) {
        event.category = newEvent.category;
        event.title = newEvent.title;
        event.hostname = newEvent.hostname;
        event.location = newEvent.location;
        event.startDate = newEvent.startDate;
        event.endDate = newEvent.endDate;
        event.details = newEvent.details;
        event.image = newEvent.image;
        return true;
    }else{
        return false;
    }
}

// to delete an event
exports.deleteById = function(id) {
    let index = events.findIndex(event => event.id === id);
    if(index !== -1) {
        events.splice(index, 1);
        return true;
    } else {
        return false;
    }
};

