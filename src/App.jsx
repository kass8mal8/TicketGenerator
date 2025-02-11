import Registration from "./components/Registration";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import { Route, Routes } from "react-router-dom";
import TicketEvent from "./components/TicketEvent";
import Patterns from "./components/Patterns";

function App() {
	const [user, setUser] = useState(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<div className="py-2 md:container mx-auto relative">
				<Routes>
					<Route path="/" element={<Registration />} />
					<Route path="/ticket" element={<TicketEvent />} />
				</Routes>
				<Patterns />
			</div>
		</UserContext.Provider>
	);
}

export default App;
