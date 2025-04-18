import { render } from '@testing-library/react-native';

import CustomText from '@/components/CustomText';

describe('<CustomText />', () => {
//   test('Text renders correctly on CustomText component', () => {
//     const { getByText } = render(<CustomText>Test</CustomText>);

//     getByText('Welcome!');
//   });
  test('Text renders correctly on CustomText component', () => {
    const { getByText } = render(<CustomText>Welcome!</CustomText>);

    getByText('Welcome!');
  });
});