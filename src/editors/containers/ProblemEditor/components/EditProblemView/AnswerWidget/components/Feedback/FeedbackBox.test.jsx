import { shallow } from 'enzyme';
import { FeedbackBox } from './FeedbackBox';

const answerWithFeedback = {
  id: 'A',
  title: 'Answer 1',
  correct: true,
  selectedFeedback: 'some feedback',
  unselectedFeedback: 'unselectedFeedback',
  problemType: 'sOMepRObleM',
};

const props = {
  answer: answerWithFeedback,
  intl: {},
};

describe('FeedbackBox component', () => {
  test('renders as expected with default props', () => {
    expect(shallow(<FeedbackBox {...props} />)).toMatchSnapshot();
  });
  test('renders as expected with a numeric input problem', () => {
    expect(shallow(<FeedbackBox {...props} problemType="numericalresponse" />)).toMatchSnapshot();
  });
  test('renders as expected with a text input problem', () => {
    expect(shallow(<FeedbackBox {...props} problemType="stringresponse" />)).toMatchSnapshot();
  });
});
