import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Calendar, User, Trash2, Edit } from 'lucide-react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        setPosts(posts.filter(post => post._id !== id));
      } catch (err) {
        console.error('Error deleting post:', err);
      }
    }
  };

  if (loading) return <div className="loading">Loading universe...</div>;

  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <h2>No posts found</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '2rem' }}>
          The universe is empty. Start by creating your first post!
        </p>
        <Link to="/create" className="btn btn-primary">Create Post</Link>
      </div>
    );
  }

  return (
    <div className="post-grid">
      {posts.map(post => (
        <div key={post._id} className="post-card">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <User size={14} /> {post.author || 'Anonymous'}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} /> {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="post-excerpt">
            {post.content}
          </p>
          <div className="post-actions">
            <Link to={`/post/${post._id}`} className="btn btn-ghost" style={{ padding: '0.4rem 0' }}>
              Read More &rarr;
            </Link>
            <div className="action-buttons">
              <Link to={`/edit/${post._id}`} className="btn btn-icon btn-ghost" title="Edit">
                <Edit size={18} />
              </Link>
              <button onClick={() => handleDelete(post._id)} className="btn btn-icon btn-danger" title="Delete">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
