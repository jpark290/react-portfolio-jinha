import Project from '../models/project.js';

export const getProjects = async (_req, res) => res.json(await Project.find().lean());

export const getProjectById = async (req, res) => {
  const doc = await Project.findById(req.params.id).lean();
  if (!doc) return res.status(404).json({ message: 'Project not found' });
  res.json(doc);
};

export const createProject = async (req, res) => {
  const { title, firstname, lastname, email, completion, description } = req.body;
  if (!title || !firstname || !lastname || !email || !completion || !description)
    return res.status(400).json({ message: 'All fields are required' });
  const created = await Project.create({
    title, firstname, lastname, email,
    completion: new Date(completion),
    description
  });
  res.status(201).json(created);
};

export const updateProject = async (req, res) => {
  const payload = { ...req.body };
  if (payload.completion) payload.completion = new Date(payload.completion);
  const updated = await Project.findByIdAndUpdate(req.params.id, payload, { new: true }).lean();
  if (!updated) return res.status(404).json({ message: 'Project not found' });
  res.json(updated);
};

export const deleteProject = async (req, res) => {
  const deleted = await Project.findByIdAndDelete(req.params.id).lean();
  if (!deleted) return res.status(404).json({ message: 'Project not found' });
  res.json({ message: 'Project removed', id: deleted._id });
};

export const deleteAllProjects = async (_req, res) => {
  const r = await Project.deleteMany({});
  res.json({ message: 'All projects removed', deletedCount: r.deletedCount });
};
