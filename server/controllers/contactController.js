import Contact from '../models/contact.js';

export const getAll = async (req, res) => {
  try {
    const docs = await Contact.find();
    res.json(docs);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getById = async (req, res) => {
  try {
    const doc = await Contact.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const createOne = async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;
    const doc = await Contact.create({ firstname, lastname, email });
    res.status(201).json(doc);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

export const updateById = async (req, res) => {
  try {
    const doc = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

export const removeById = async (req, res) => {
  try {
    const doc = await Contact.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const removeAll = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: 'All contacts removed' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
