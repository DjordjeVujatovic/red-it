import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PostToolbar from '../../components/PostToolbar';
import Post from './../../components/Post';
import { postsSortNewest, postsSortPopular, voteUp, voteDown } from './actions';
import styles from './styles.css';

class PostList extends Component {
  componentWillMount() {
    // this.props.fetchPosts(this.props.searchText);
  }

  renderPosts() {
    return this.props.posts.map(e => (
      <Post
        id={e.post_id}
        title={e.title}
        link={e.link}
        key={e.post_id}
        description={e.description}
        votes={e.votes}
        onUpVoteClick={this.props.updateVoteUp}
        onDownVoteClick={this.props.updateVoteDown}
        tags={e.tags}
      />
    ));
  }

  render() {
    const { loading } = this.props;

    return (
      <div className={styles['post-list']}>
        <PostToolbar
          onNewestClick={this.props.onSortNewestClick}
          onPopularClick={this.props.onSortPopularClick}
        />
        <ul>
          {
          loading ? <div><p>Loading posts...</p></div> : this.renderPosts()
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // const { searchText } = state.appData.posts;

  return {
    // userLoggedIn: state.appData.processLogin.login,
    loading: state.appData.posts.loadingResource,
    // searchText: state.appData.posts.searchText,
    posts: state.appData.posts.posts,
    // posts: searchText === '' ? state.appData.posts.posts : state.appData.posts.posts.filter(item => item.categories.some(c => c === searchText)),
    // posts: searchText === '' ? state.appData.posts.posts : state.appData.posts.posts.filter(item => item.category_id === parseInt(searchText, 10)),
  };
};

const mapDispatchToProps = dispatch => ({
  onSortNewestClick: () => {
    dispatch(postsSortNewest());
  },
  onSortPopularClick: () => {
    dispatch(postsSortPopular());
  },
  updateVoteUp: (id) => {
    dispatch(voteUp(id));
  },
  updateVoteDown: (id) => {
    dispatch(voteDown(id));
  },
  /* fetchPosts: (id) => {
    dispatch(fetchPosts(id));
  },*/
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  onSortNewestClick: PropTypes.func.isRequired,
  onSortPopularClick: PropTypes.func.isRequired,
  updateVoteUp: PropTypes.func.isRequired,
  updateVoteDown: PropTypes.func.isRequired,
  // fetchPosts: PropTypes.func.isRequired,
  // searchText: PropTypes.string.isRequired,
  // userLoggedIn: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
