import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchPerson } from '../../store/actions/peopleActions';
import {
  Wrapper,
  Title,
  TertiaryTitle,
} from '../../components/styledComponents/styledComponents';
import Loader from '../../components/Loader/Loader';

const ImgContainer = styled.div`
  margin: 0 auto;
  width: 18rem;
  height: 25rem;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  /* background-color: orangered; */
`;

const Img = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const PersonDetails = styled.div`
  padding: 0 2rem;
  margin: 4rem 0;
  color: var(--clr-primary-light);

  .birthday,
  .from {
    margin-bottom: 0.5rem;
  }
  .from {
    margin-bottom: 4rem;
  }
  .biography {
    line-height: 1.8;
  }
`;

const PersonTitle = styled(Title)`
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  &::before {
    display: none;
  }
`;

class Person extends Component {
  componentDidMount() {
    this.props.fetchPerson(this.props.match.params.personId);
  }
  render() {
    const { loading, image, people } = this.props;
    if (loading) {
      return <Loader />;
    }

    const imageUrl = `${image.url}${image.sizes.profile_sizes[2]}${people.profile_path}`;
    return (
      <Wrapper sidebarOpen={this.props.sidebarOpen}>
        <ImgContainer>
          <Img src={imageUrl} alt={people.name} />
        </ImgContainer>
        <PersonDetails>
          <PersonTitle>{people.name}</PersonTitle>
          <div className="birthday">{`${people.birthday}${
            people.deathday ? '  -  ' + people.deathday : ''
          }`}</div>
          <div className="from">{people.place_of_birth}</div>
          <TertiaryTitle>Biography</TertiaryTitle>
          <div className="biography">{people.biography}</div>
        </PersonDetails>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ app, people }) => ({
  sidebarOpen: app.sidebarOpen,
  image: app.image,
  people: people.data,
  loading: people.loading,
});

export default connect(mapStateToProps, { fetchPerson })(Person);
