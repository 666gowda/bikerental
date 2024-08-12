import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/common/home/Home'
import LoginPage from '../components/common/login/LoginPage'
import BookingPage from '../components/common/booking/BookingPage'
import PageNotFound from '../components/common/page-not-found/PageNotFound'
import TermsCondition from '../components/common/terms-condition/TermsCondition'
import CompanyPolicy from '../components/common/policy/CompanyPolicy'
import RefundCancellation from '../components/common/refund-cancellation/RefundCancellation'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<PageNotFound />} /> {/* 404Page */}
                <Route path='/' element={<Home />} /> {/* HomePage */}
                <Route path='/home' element={<Home />} />
                <Route path='' element={<Home />} /> {/* RandomLinks */}
                <Route path='/login' element={<LoginPage />} />
                <Route path='/bike-booking' element={<BookingPage />} />
                <Route path='/terms-and-condition' element={<TermsCondition />} />
                <Route path='/company-policy' element={<CompanyPolicy />} />
                <Route path='/company-refund-cancelletion' element={<RefundCancellation />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
