// import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar'
// import MessageContainer from '../../components/messages/MessageContainer'

// const Home = () => {
//   return (
//     <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <Sidebar/>
//         <MessageContainer/>
//     </div>
//   )
// }

// export default Home


import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
	const { selectedConversation } = useConversation();

	return (
		<div className="flex h-screen w-full overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
			{/* Sidebar - show always on md+, hide on mobile when chat is selected */}
			<div
				className={`${
					selectedConversation ? "hidden" : "flex"
				} md:flex h-full w-full md:w-[30%] max-w-[350px] border-r border-gray-600`}
			>
				<Sidebar />
			</div>

			{/* Message Box - show always on md+, hide on mobile if no chat */}
			<div
				className={`${
					selectedConversation ? "flex" : "hidden"
				} md:flex h-full flex-1`}
			>
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;

