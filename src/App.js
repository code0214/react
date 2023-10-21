import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePageHiFi } from "./screens/HomePageHiFi";
import { AboutUsPage } from './screens/AboutUsPage';
import { OurWorkPage } from './screens/OurWorkPage/OurWorkPage';
import { InsightsPage } from './screens/InsightsPage/InsightsPage';
import { InsightsContent } from './screens/InsightsContent/InsightsContent';
import { PageNotFound } from './screens/PageNotFound/PageNotFound';
import { WorkOverlay } from './screens/WorkOverlay';
// import { ContactUsOverlay } from './screens/ContactUsOverlay/ContactUsOverlay';

export const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageHiFi />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/ourwork" element={<OurWorkPage />} />
                <Route path="/insight" element={<InsightsPage />} />
                <Route path="/insightContent" element={<InsightsContent />} />
                <Route path="/pagenotfound" element={<PageNotFound />} />
                <Route path="/workoverlay" element={<WorkOverlay />} />
                {/* <Route path="/contactus" element={<ContactUsOverlay/>}/> */}
            </Routes>
        </BrowserRouter>
      
    )
}

export default App;