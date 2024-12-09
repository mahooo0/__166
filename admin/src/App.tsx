import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Login from './Pages/Login';
import DashBord from './Pages/DashBord';
import Home_Hero from './Pages/Home/Hero';
import useLayout from './components/Hock'; // Custom hook for layout
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Statistics from './Pages/Home/Statistics';
import Partners from './Pages/Home/Partners';
import ServicesCategory from './Pages/Home/ServicesCategory';
import Services from './Pages/Home/Services';
import { RecoilRoot } from 'recoil';
// import Dashboard from './Pages/DashBord';
import Dashboard from './Pages/admin/dashboard';

// Create a client for React Query
const queryClient = new QueryClient();

const App: React.FC = () => {
    // Custom layout component using the hook
    const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        return useLayout(children);
    };

    return (
        <RecoilRoot>
            <Router>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route
                            path="/dashbord"
                            element={
                                <Layout>
                                    <Dashboard />
                                </Layout>
                            }
                        />
                        <Route
                            path="/home/hero"
                            element={
                                <Layout>
                                    <Home_Hero />
                                </Layout>
                            }
                        />
                        <Route
                            path="/home/statistics"
                            element={
                                <Layout>
                                    <Statistics />
                                </Layout>
                            }
                        />
                        <Route
                            path="/home/partners"
                            element={
                                <Layout>
                                    <Partners />
                                </Layout>
                            }
                        />
                        <Route
                            path="/ServicesCategory"
                            element={
                                <Layout>
                                    <ServicesCategory />
                                </Layout>
                            }
                        />
                        <Route
                            path="/Services"
                            element={
                                <Layout>
                                    <Services />
                                </Layout>
                            }
                        />
                    </Routes>
                </QueryClientProvider>
                <ToastContainer />
            </Router>
        </RecoilRoot>
    );
};

export default App;
