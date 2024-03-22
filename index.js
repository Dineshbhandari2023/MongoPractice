const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Mongodb Connected:)'))
    .catch(err => console.error('Couldnot connect to DB!', err));

const schema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Courses = mongoose.model('course:', schema);

// async function Db() {
//     const courses = new Courses();
//     const result = await courses.save();
//     console.log(result);
// };

async function getDb() {
    return await Courses
        .find( {isPublished: true, tags: 'backend'})
        .sort({name: 1})
        .select( { name: 1, author: 1 } )
}

async function run() {
    const show = await getDb();
    console.log(show);
}

run();
