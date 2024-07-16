import { useForm } from '@mantine/form';
import { Button, NumberInput, TextInput } from '@mantine/core';
import { useContext } from 'react';
import { FooterContext } from '@/App';

export function DemoForm() {
  const [showFooter, setShowFooter] = useContext(FooterContext);
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      name: '',
      email: '',
      age: 0,
    },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  setShowFooter(form.values.age > 0);
  // console.dir(showFooter);
  // console.dir(setShowFooter);

  // console.dir(form);
  // console.dir(form.values.age);
  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
      {form.values.age > 0 && <span>test</span>}
      {/*<span>test</span>*/}
    </form>
  );
}
