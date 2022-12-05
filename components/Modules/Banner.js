import React from 'react';

const Banner = ({ img, title, subtitle }) => {
	return (
		<div
			style={{
				backgroundImage: `url(../../Banner/${img}.jpeg)`,
				backgroundPosition: 'center',
				backgroundSize: 'cover'
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 25,
					fontWeight: 'bold',
					color: '#fff',
					backgroundColor: '#33333399',
					width: '100%',
					height: 200
				}}
			>
				{title}
				{subtitle && <div style={{ marginTop: 15, fontSize: 16, fontWeight: 'normal' }}>{subtitle}</div>}
			</div>
		</div>
	);
};
export default Banner;
