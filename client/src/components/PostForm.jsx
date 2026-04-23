import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Save, X } from 'lucide-react';

const PostForm = () => {
  const [formData, setFormData] = useState({ title: '', content: '', author: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      const fetchPost = async () => {
        try {
          const res = await axios.get(`/api/posts/${id}`);
          setFormData({
            title: res.data.title,
            content: res.data.content,
            author: res.data.author
          });
        } catch (err) {
          console.error('Error fetching post:', err);
        }
      };
      fetchPost();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing) {
        await axios.put(`/api/posts/${id}`, formData);
      } else {
        await axios.post('/api/posts', formData);
      }
      navigate('/');
    } catch (err) {
      console.error('Error saving post:', err);
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        {isEditing ? 'Edit Post' : 'Create New Post'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter an engaging title..."
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-input"
            value={formData.author}
            onChange={handleChange}
            placeholder="Who are you?"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            className="form-textarea"
            value={formData.content}
            onChange={handleChange}
            required
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button 
            type="button" 
            className="btn btn-ghost" 
            onClick={() => navigate('/')}
          >
            <X size={18} /> Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            <Save size={18} /> {loading ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
