import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getPost } from '../../actions/posts';
import useStyles from './styles';

const Post = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();
    // const { counter } = dispatch(countPost(id));
  
    useEffect(() => {
      dispatch(getPost(id));
    }, [id]);
  
  
   
  
    if (!post) return null;
  
    const openPost = (_id) => history.push(`/posts/${_id}`);
  

  

  
    return (
      <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>

            <Typography variant="h3" component="h2">{post.Fname+' '+post.Mname+' '+post.Lname}</Typography>
            <Divider style={{ margin: '10px 0' }} />
            <Typography gutterBottom variant="body1" component="p">{post.email}</Typography>
            <Divider style={{ margin: '10px 0' }} />
            <Typography gutterBottom variant="body1" component="p">{post.mobnum}</Typography>
            <Divider style={{ margin: '10px 0' }} />
            <Typography gutterBottom variant="body1" component="p">{post.lannum}</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography gutterBottom variant="body1" component="p" color="text-secondary">{post.Notes}</Typography>
            <Divider style={{ margin: '10px 0' }} />
            <Typography variant="body2">Created At: {moment(post.createdAt).format('DD MMMM YYYY')}</Typography>
            <Divider style={{ margin: '10px 0' }} />
            <Typography variant="body2">Number of visitors: {post.likeCount}</Typography>
          </div>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile } alt={post.title} />
          </div>
        </div>
      </Paper>
    );
  };
  
  export default Post;