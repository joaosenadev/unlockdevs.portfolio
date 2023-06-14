import RoutesApp from './routes'
import { Theme } from './components/Theme';
import { ScrollTop } from "./components/layout/ScrollTop";

export default function App() {
  return (
    <Theme>
      <ScrollTop/>
      <RoutesApp />
    </Theme>
  )
}
