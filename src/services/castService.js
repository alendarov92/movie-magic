import Cast from '../models/Cast.js'

const getAll = () => Cast.find();
// const getAllWithout = (castIds) => Cast.find({_id: {$nin: castIds}})
const getAllWithout = (castIds) => Cast.find().nin('_id', castIds)
const create = (cast) => Cast.create(cast)

export default {
    create,
    getAll,
    getAllWithout
}