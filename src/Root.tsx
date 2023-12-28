import {Composition} from 'remotion';
import {MyComposition, myCompSchema} from './Composition';
import './style.css';

import Main from './main';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={Main}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/>
		</>
	);
};
