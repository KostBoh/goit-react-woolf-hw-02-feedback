import CreateFeedbackForm from './Forms/CreateFeedbackForm';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '20vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <CreateFeedbackForm />
    </>
  );
};
