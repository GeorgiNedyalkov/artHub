const Art = require("../models/Art");

exports.getAll = (query) => Art.find(query);

exports.create = (artData) => Art.create(artData);

exports.getOne = (id) => Art.findById(id);

exports.put = (id, artData) => Art.findByIdAndUpdate(id, artData);

exports.delete = (id) => Art.findByIdAndDelete(id);
