export default function injectProvider(Component, Provider) {
  return function ProviderInjector(props) {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
}
