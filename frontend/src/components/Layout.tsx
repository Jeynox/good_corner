import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
	return(
		<main className="main-content">
			<Outlet />
			<Header />
		</main>
	)
}

export default Layout