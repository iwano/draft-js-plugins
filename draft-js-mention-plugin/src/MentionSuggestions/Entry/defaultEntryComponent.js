import React from 'react';
import Avatar from './Avatar';

const defaultEntryComponent = (props) => {
  const {
    mention,
    theme,
    searchValue, // eslint-disable-line no-unused-vars
    ...parentProps
    } = props;

  return (
    <div {...parentProps}>
      <Avatar mention={mention} theme={theme} />
      <div className={theme.mentionSuggestionsEntryTextWrapper}>
        <span className={theme.mentionSuggestionsEntryText}>{mention.get('fullName')}</span>
        <span className={theme.mentionSuggestionsEntryText}>{mention.get('name')}</span>
      </div>
    </div>
  );
};

export default defaultEntryComponent;
