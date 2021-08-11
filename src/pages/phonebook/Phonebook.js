import React, { Component } from 'react';
import SectionAddContacts from '../../components/section/SectionAddContacts';
import SectionList from '../../components/section/SectionList';
import AddContacts from '../../components/addContacts/AddContacts';
import ContactsList from '../../components/contactsList/ContactsList';
import { phoneBookOperations } from '../../redux/phoneBook';
import { connect } from 'react-redux';
import { getLoading, getError } from '../../redux/phoneBook/contacts-selectors';

export class Phonebook extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <SectionAddContacts title="Phonebook">
          <AddContacts />
        </SectionAddContacts>
        <SectionList title="Contacts">
          <ContactsList />
          {this.props.error && <h1>Error</h1>}
          {this.props.isLoadingContacts && <h1>Loading...</h1>}
        </SectionList>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
