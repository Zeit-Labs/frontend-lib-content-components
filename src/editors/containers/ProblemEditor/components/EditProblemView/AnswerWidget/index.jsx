import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import messages from './messages';
import { ProblemTypes } from '../../../../../data/constants/problem';
import AnswersContainer from './AnswersContainer';
import './index.scss';

// This widget should be connected, grab all answers from store, update them as needed.
const AnswerWidget = ({
  // Redux
  problemType,
  // injected
  intl,
}) => {
  const problemStaticData = ProblemTypes[problemType];
  return (
    <div>
      <div className="mt-4 mb-3 text-primary-500">
        <div className="h4">
          <FormattedMessage {...messages.answerWidgetTitle} />
        </div>
        <div className="small">
          {intl.formatMessage(messages.answerHelperText, { helperText: problemStaticData.description })}
        </div>
      </div>
      <AnswersContainer problemType={problemType} />
    </div>
  );
};

AnswerWidget.propTypes = {
  problemType: PropTypes.string.isRequired,
  // injected
  intl: intlShape.isRequired,
};
export default injectIntl(AnswerWidget);
