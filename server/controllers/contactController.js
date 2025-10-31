import Contact from '../models/contact.js';

// GET /api/contacts
export const getContacts = async (req, res) => {
  const list = await Contact.find().lean();
  res.json(list);
};

// GET /api/contacts/:id
export const getContactById = async (req, res) => {
  const doc = await Contact.findById(req.params.id).lean();
  if (!doc) return res.status(404).json({ message: 'Contact not found' });
  res.json(doc);
};

// POST /api/contacts
export const createContact = async (req, res) => {
  const { firstname, lastname, email } = req.body;
  if (!firstname || !lastname || !email)
    return res.status(400).json({ message: 'firstname, lastname, email are required' });
  const created = await Contact.create({ firstname, lastname, email });
  res.status(201).json(created);
};

// PUT /api/contacts/:id
export const updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
  if (!updated) return res.status(404).json({ message: 'Contact not found' });
  res.json(updated);
};

// DELETE /api/contacts/:id
export const deleteContact = async (req, res) => {
  const deleted = await Contact.findByIdAndDelete(req.params.id).lean();
  if (!deleted) return res.status(404).json({ message: 'Contact not found' });
  res.json({ message: 'Contact removed', id: deleted._id });
};

// DELETE /api/contacts
export const deleteAllContacts = async (_req, res) => {
  const r = await Contact.deleteMany({});
  res.json({ message: 'All contacts removed', deletedCount: r.deletedCount });
};
