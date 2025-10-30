import Project from '../models/project.js';

export const getAll = async (req, res) => {
  try { res.json(await Project.find()); }
  catch (e) { res.status(500).json({ message: e.message }); }
};

export const getById = async (req, res) => {
  try {
    const doc = await Project.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (e) { res.status(500).json({ message: e.message }); }
};

export const createOne = async (req, res) => {
  try {
    const doc = await Project.create(req.body);
    res.status(201).json(doc);
  } catch (e) { res.status(400).json({ message: e.message }); }
};

export const updateById = async (req, res) => {
  try {
    const doc = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (e) { res.status(400).json({ message: e.message }); }
};

export const removeById = async (req, res) => {
  try {
    const doc = await Project.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (e) { res.status(500).json({ message: e.message }); }
};

export const removeAll = async (req, res) => {
  try {
    await Project.deleteMany({});
    res.json({ message: 'All projects removed' });
  } catch (e) { res.status(500).json({ message: e.message }); }
};
