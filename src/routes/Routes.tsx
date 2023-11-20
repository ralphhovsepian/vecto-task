import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
export const RoutesComponent = () => {
	return (
		<Routes>
			<Route path='/home' element={<Home />} />
		</Routes>
	)
}
