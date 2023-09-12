import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxW={'Container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            placeholder={'Name'}
            type={'Text'}
            required
            focusBorderColor={'purple.500'}
          ></Input>

          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          ></Input>

          <Input
            placeholder={'Password'}
            type={'Password'}
            required
            focusBorderColor={'purple.500'}
          ></Input>

          <Button colorScheme={'purple'} type={'submit'}>
            SignUp
          </Button>

          <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/Login'}>Login In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
