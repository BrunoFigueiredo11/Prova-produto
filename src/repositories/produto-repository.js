const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');


exports.getProduto = async () => {
    const result = await Produto.find({}, 'title _id price');

    return result;
}

exports.create = async (data) => {
    let produto = Produto(data);
    await produto.save();
}

exports.put = async (id, data) => {
    await Produto.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            active: data.active
        }
    });
}

exports.delete = async (id) => {
    await Produto.findByIdAndDelete(id);
}