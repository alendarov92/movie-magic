import Cast from '../models/Cast.js'

const getAll = () => Cast.find();
const create = (cast) => Cast.create(cast)

export default {
    create,
    getAll
}