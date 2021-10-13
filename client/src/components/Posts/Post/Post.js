import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase  } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {  deletePost,likePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const openPost = (e) => {
    dispatch(likePost(post._id));
    history.push(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
     <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        // onClick={() => dispatch(likePost(post._id))}
        onClick={openPost}
 
 
      >
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.Fname + ' ' + post.Mname + ' ' + post.Lname }</Typography>
        <Typography variant="body2" color="white">{post.email}</Typography>
        <Typography variant="body2" color="white">{post.mobnum}</Typography>
        <Typography variant="body2" color="white" >{post.lannum}</Typography>

        
      </div>


      <Typography className={classes.details} gutterBottom variant="h7" component="h3">{post.Notes}</Typography>
      <CardContent>
      <Typography variant="body2">{moment(post.createdAt).format('DD MMMM YYYY')} </Typography>
      </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button  color="primary" size="small" onClick={() => setCurrentId(post._id)}>Edit</Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;