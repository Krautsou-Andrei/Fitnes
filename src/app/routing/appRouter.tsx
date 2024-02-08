import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import { HomePage } from '@pages/home-page';

export const appRouter = () =>
    createHashRouter(createRoutesFromElements(<Route path='/' element={<HomePage />} />));
