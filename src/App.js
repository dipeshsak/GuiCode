import { Grommet, Header, Page, PageContent, PageHeader, Text } from 'grommet';


const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);

function App() {

  return (
    <Grommet theme={theme} full>
      <Page>
        <AppBar>
          <Text size="large">My App</Text>
        </AppBar>
        <PageContent>
          <PageHeader title="Check Weigher" />
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
