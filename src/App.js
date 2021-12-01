import Footer from "./components/Footer";
import PageContent from "./components/PageContent";
import TopBox from "./components/TopBox";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => (
        <>
            <GlobalStyles />
            <TopBox restaurantsName = "BigJunk" slogan = "All your junk food in one place"/>
            <PageContent />
            <Footer numberOfItems = "3"/>
        </>
)

export default App