import User from '../models/user.js';

export const getAll = async (req, res) => {
  try { res.json(await User.find({}, '-password')); }
  catch (e) { res.status(500).json({ message: e.message }); }
};

export const getById = async (req, res) => {
  try {
    const doc = await User.findById(req.params.id, '-password');
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (e) { res.status(500).json({ message: e.message }); }
};

export const createOne = async (req, res) => {
  try {
    const doc = await User.create(req.body);
    res.status(201).json({ _id: doc._id, name: doc.name, email: doc.email });
  } catch (e) { res.status(400).json({ message: e.message }); }
};

export const updateById = async (req, res) => {
  try {
    const doc = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, select: '-password' });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (e) { res.status(400).json({ message: e.message }); }
};

export const removeById = async (req, res) => {
  try {
    const doc = await User.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (e) { res.status(500).json({ message: e.message }); }
};

export const removeAll = async (req, res) => {
  try {
    await User.deleteMany({});
    res.json({ message: 'All users removed' });
  } catch (e) { res.status(500).json({ message: e.message }); }
};
