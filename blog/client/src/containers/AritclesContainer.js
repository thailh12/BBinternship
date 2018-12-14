import { Container } from 'unstated';
import { API } from '../../config';
import axios from 'axios';

class AritcleContainer extends Container {
  state = {
    articles: []
  };
  loadPost = async () => {
    await axios
      .get(`${API}/articles`)
      .then(res => this.setState({ articles: res.data.articles }));
  };
  newPost = async data => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;
    await axios.post(`${API}/articles`, {
      title: data.title,
      body: data.body
    });
    window.location.href = '/';
  };
  deletePost = async id => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;
    axios.delete(`${API}/articles/${id}`);
    //this.loadPost();
    let res = state.articles.filter(article => article._id !== id);
    this.setState({
      articles: res
    });
  };
}

let Article = new AritcleContainer();
export default Article;
