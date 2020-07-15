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
import Acting from '../../components/Acting/Acting';

const PersonContainer = styled.div`
  @media only screen and (min-width: 40em) {
    margin: 3rem auto 4rem;
    max-width: 700px;
  }

  @media only screen and (min-width: 62.5em) {
    margin-top: 0;
  }

  @media only screen and (min-width: 81.25em) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  margin: 0 auto;
  width: 20rem;
  min-height: 25rem;
  height: 50vw;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 40em) {
    max-height: 35rem;
    width: 25rem;
  }

  @media only screen and (min-width: 81.25em) {
    margin-right: 3rem;
    max-height: 40rem;
    width: 30rem;
  }
`;

const Img = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;

  @media only screen and (min-width: 81.25em) {
    width: 30rem;
  }
`;

const PersonDetails = styled.div`
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
        <PersonContainer>
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
        </PersonContainer>
        <Acting castId={people.id} />
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
