import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, User, Calendar, Edit, Trash2 } from 'lucide-react';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        navigate('/');
      } catch (err) {
        console.error('Error deleting post:', err);
      }
    }
  };

  if (loading) return <div className="loading">Loading universe...</div>;
  if (!post) return <div className="loading">Post not found.</div>;

  return (
    <div className="post-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back to Posts
      </Link>
      
      <div className="post-detail-header">
        <h1 className="post-detail-title">{post.title}</h1>
        <div className="post-detail-meta">
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <User size={16} /> {post.author || 'Anonymous'}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={16} /> {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="post-detail-content">
        {post.content}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
        <Link to={`/edit/${post._id}`} className="btn btn-ghost">
          <Edit size={18} /> Edit Post
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          <Trash2 size={18} /> Delete Post
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
