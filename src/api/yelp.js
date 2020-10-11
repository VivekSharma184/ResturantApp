
  
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer IHbZ2SxEQLHSt8q369sRoo5Fr9vzTCbdZxEQTS2QkDlfo-pfZxxFBNOEE9_vYaAdbbjyJMss1hZsrLVNft5vY5mtxntOenr3skxNjiJkNUBM_xLXzlezVllDL4uCX3Yx'
  }
});
