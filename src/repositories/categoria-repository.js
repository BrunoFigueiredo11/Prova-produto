const mongoose = require('mongoose');
const Categ = mongoose.model('Categoria');


exports.getCateg = async () => {
    const result = await Categ.find({}, 'title _id ');

    return result;
}
exports.getByIdCateg = async (id) => {
    const result = await Categ.findOne({ _id: id }, '_id title description');
    return result;
}

exports.create = async (data) => {
    let categoria = Categ(data);
    await categoria.save();
}

exports.put = async (id, data) => {
    await Categ.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            active: data.active
        }
    });
}

exports.delete = async (id) => {
    await Categ.findByIdAndDelete(id);
}