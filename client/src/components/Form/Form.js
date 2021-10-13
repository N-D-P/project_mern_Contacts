import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ Fname: '', Mname:'', selectedFile:'', Lname:'', email:'',mobnum:'',lannum:'',Notes:'' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.Fname}"` : 'Creating a Contact'}</Typography>
        <TextField name="Fname" variant="outlined" label="First Name" fullWidth value={postData.Fname} onChange={(e) => setPostData({ ...postData, Fname: e.target.value })} />
        <TextField name="Mname" variant="outlined" label="Middle Name" fullWidth value={postData.Mname} onChange={(e) => setPostData({ ...postData, Mname: e.target.value })} />
        <TextField name="Lname" variant="outlined" label="Last Name" fullWidth value={postData.Lname} onChange={(e) => setPostData({ ...postData, Lname: e.target.value })} />
        <TextField name="email" variant="outlined" label="Email" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
        <TextField name="mobnum" variant="outlined" label="Mobile Number" fullWidth value={postData.mobnum} onChange={(e) => setPostData({ ...postData, mobnum: e.target.value })} />
        <TextField name="lannum" variant="outlined" label="Landline Number" fullWidth value={postData.lannum} onChange={(e) => setPostData({ ...postData, lannum: e.target.value })} />
        <TextField name="Notes" variant="outlined" label="Notes" fullWidth value={postData.Notes} onChange={(e) => setPostData({ ...postData, Notes: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;