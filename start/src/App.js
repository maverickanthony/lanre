import React, { useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'



import { Affiliates, Exchange, Navbarr, Sidebar, Footer, Products, Stats, ThemeSettings, SignIn, SignUp, Company, Hodler, Loans, Savings, Blog, PrivacyNotice, Livechat } from './components'
import { Homepage, Dashboard, Legal, Orders, Editor, Calendar, Customers, Crypto, Stocks, Stacked, Kanban, Employees, Bar, Pie, Help, Invest, Account, Financial, Line, Pyramid, ColorPicker, DashHistory, Area, Show, Withdraw, Deposit, Verify, Convert, Notifications, Savingshelp, Loyalty, Loanhelp, Accounthelp, Affiliatehelp, Faq, Hodlerhelp, Wallethelp, TwoFacAuthy, Delete } from './pages'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'
import Loanspage from './pages/Loanspage'
import Savingspage from './pages/Savingspage'
import Hodlerpage from './pages/Hodlerpage'
import NewHodler from './pages/Hodlerpage'
import NewSavings from './pages/Savingspage'
import { HodlerhelpOne, HodlerhelpTwo , HodlerhelpThree, HodlerhelpFour, HodlerhelpFive, HodlerhelpSix, HodlerhelpSeven, HodlerhelpEight, HodlerhelpNine } from './pages/Hodlerhelp'
import { LoanhelpOne, LoanhelpTwo, LoanhelpThree, LoanhelpFour, LoanhelpFive, LoanhelpSix, LoanhelpSeven, LoanhelpEight, LoanhelpNine, LoanhelpTen } from './pages/Loanhelp'
import { SavingshelpOne, SavingshelpTwo } from './pages/Savingshelp'
import { WallethelpOne, WallethelpTwo, WallethelpThree, WallethelpFour, WallethelpFive, WallethelpSix, WallethelpSeven, WallethelpEight, WallethelpNine, WallethelpTen, WallethelpEleven, WallethelpTwelve, WallethelpThirteen, WallethelpFourteen, WallethelpFifteen, WallethelpSixteen } from './pages/Wallethelp'
import { FaqhelpOne, FaqhelpTwo, FaqhelpThree, FaqhelpFour, FaqhelpFive, FaqhelpSix, FaqhelpSeven, FaqhelpEight } from './pages/Faq'
import { AccounthelpOne, AccounthelpTwo, AccounthelpThree, AccounthelpFour, AccounthelpFive, AccounthelpSix, AccounthelpSeven, AccounthelpEight, AccounthelpNine, AccounthelpTen, AccounthelpEleven, AccounthelpTwelve, AccounthelpThirteen, AccounthelpFourteen, AccounthelpFifteen, AccounthelpSixteen, AccounthelpSeventeen } from './pages/Accounthelp'
import { AffiliatehelpOne, AffiliatehelpTwo, AffiliatehelpThree, AffiliatehelpFour, AffiliatehelpFive, AffiliatehelpSix, AffiliatehelpSeven, AffiliatehelpEight, AffiliatehelpNine, AffiliatehelpTen } from './pages/Affiliatehelp'
import { LoyaltyOne, LoyaltyTwo } from './pages/Loyalty'
import ProtectedRoutes from './ProtectedRoutes'


const App = () => {
    
    const { activeMenu, loggedIn, setLoggedIn } = useStateContext()

  return (
    <div>
        <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
                <TooltipComponent content='Settings' position='Top'>
                    <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius: '50%'}}>
                        <FiSettings />
                    </button>
                </TooltipComponent>
            </div>
            <div className='fixed right-4 bottom-10' style={{zIndex: '10000'}}>
                <Livechat />
            </div>
            
            <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                {!loggedIn && (
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbarr /> 
                    </div>
                )}
                

                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path='/' element={<Homepage />} /> 
                        <Route path='/' element={<Homepage />} />
                        <Route path='*' element={<Homepage />} />


                        <Route element={<ProtectedRoutes />}>
                            <Route path='/dashboard' element={<Dashboard />} />
                                <Route path='/dashboard/loanspage' element={<Loanspage />} />
                                <Route path='/dashboard/savingspage' element={<Savingspage />} />
                                <Route path='/dashboard/hodlerpage' element={<Hodlerpage />} />
                                <Route path='/dashboard/accountsettings' element={<Account/>} />
                                <Route path='/dashboard/hodlerpage/newhodler' element={<NewHodler />} />
                                <Route path='/dashboard/savingspage/newsavings' element={<NewSavings />} />
                                <Route path='/dashboard/history' element={<DashHistory />} />
                                <Route path='/dashboard/deposit' element={<Deposit />} />
                                <Route path='/dashboard/withdraw' element={<Withdraw />} />
                                <Route path='/dashboard/verify' element={<Verify /> } />
                                <Route path='/dashboard/convert' element={<Convert /> } />
                                <Route path='/dashboard/notifications' element={<Notifications /> } />
                                <Route path='/dashboard/authentication' element={<TwoFacAuthy /> } />
                                <Route path='/dashboard/delete-account' element={<Delete /> } />
                            <Route path='/dashboard/:id' element={<Show />} />
                        </Route>



                        {/* Pages */} 
                        <Route path='/invest' element={<Invest />} /> 
                        <Route path='/help' element={<Help />} /> 
                            <Route path='/help/accounthelp' element={<Accounthelp />} /> 
                                <Route path='/help/accounthelp/accounthelpone' element={<AccounthelpOne />} /> 
                                <Route path='/help/accounthelp/accounthelptwo' element={<AccounthelpTwo />} /> 
                                <Route path='/help/accounthelp/accounthelpthree' element={<AccounthelpThree />} /> 
                                <Route path='/help/accounthelp/accounthelpfour' element={<AccounthelpFour />} /> 
                                <Route path='/help/accounthelp/accounthelpfive' element={<AccounthelpFive />} /> 
                                <Route path='/help/accounthelp/accounthelpsix' element={<AccounthelpSix />} /> 
                                <Route path='/help/accounthelp/accounthelpseven' element={<AccounthelpSeven />} /> 
                                <Route path='/help/accounthelp/accounthelpeight' element={<AccounthelpEight />} /> 
                                <Route path='/help/accounthelp/accounthelpnine' element={<AccounthelpNine />} /> 
                                <Route path='/help/accounthelp/accounthelpten' element={<AccounthelpTen />} /> 
                                <Route path='/help/accounthelp/accounthelpeleven' element={<AccounthelpEleven />} /> 
                                <Route path='/help/accounthelp/accounthelptwelve' element={<AccounthelpTwelve />} /> 
                                <Route path='/help/accounthelp/accounthelpthirteen' element={<AccounthelpThirteen />} /> 
                                <Route path='/help/accounthelp/accounthelpfourteen' element={<AccounthelpFourteen />} /> 
                                <Route path='/help/accounthelp/accounthelpfifteen' element={<AccounthelpFifteen />} /> 
                                <Route path='/help/accounthelp/accounthelpsixteen' element={<AccounthelpSixteen />} /> 
                                <Route path='/help/accounthelp/accounthelpseventeen' element={<AccounthelpSeventeen />} /> 
                            <Route path='/help/affiliatehelp' element={<Affiliatehelp />} />
                                <Route path='/help/affiliatehelp/affiliatehelpone' element={<AffiliatehelpOne />} />  
                                <Route path='/help/affiliatehelp/affiliatehelptwo' element={<AffiliatehelpTwo />} />  
                                <Route path='/help/affiliatehelp/affiliatehelpthree' element={<AffiliatehelpThree />} />  
                                <Route path='/help/affiliatehelp/affiliatehelpfour' element={<AffiliatehelpFour />} />  
                                <Route path='/help/affiliatehelp/affiliatehelpfive' element={<AffiliatehelpFive />} />  
                                <Route path='/help/affiliatehelp/affiliatehelpsix' element={<AffiliatehelpSix />} />  
                                <Route path='/help/affiliatehelp/affiliatehelpseven' element={<AffiliatehelpSeven />} />  
                                <Route path='/help/affiliatehelp/affiliatehelpeight' element={<AffiliatehelpEight />} />  
                                <Route path='/help/affiliatehelp/affiliatehelpnine' element={<AffiliatehelpNine />} />  
                                <Route path='/help/affiliatehelp/affiliatehelpten' element={<AffiliatehelpTen />} />  
                            <Route path='/help/hodlerhelp' element={<Hodlerhelp />} /> 
                                <Route path='/help/hodlerhelp/hodlerhelpone' element={<HodlerhelpOne />} /> 
                                <Route path='/help/hodlerhelp/hodlerhelptwo' element={<HodlerhelpTwo />} /> 
                                <Route path='/help/hodlerhelp/hodlerhelpthree' element={<HodlerhelpThree />} /> 
                                <Route path='/help/hodlerhelp/hodlerhelpfour' element={<HodlerhelpFour />} /> 
                                <Route path='/help/hodlerhelp/hodlerhelpfive' element={<HodlerhelpFive />} /> 
                                <Route path='/help/hodlerhelp/hodlerhelpsix' element={<HodlerhelpSix />} /> 
                                <Route path='/help/hodlerhelp/hodlerhelpseven' element={<HodlerhelpSeven />} /> 
                                <Route path='/help/hodlerhelp/hodlerhelpeight' element={<HodlerhelpEight />} /> 
                                <Route path='/help/hodlerhelp/hodlerhelpnine' element={<HodlerhelpNine />} /> 
                            <Route path='/help/loanhelp' element={<Loanhelp />} /> 
                                <Route path='/help/loanhelp/loanhelpone' element={<LoanhelpOne />} /> 
                                <Route path='/help/loanhelp/loanhelptwo' element={<LoanhelpTwo />} /> 
                                <Route path='/help/loanhelp/loanhelpthree' element={<LoanhelpThree />} /> 
                                <Route path='/help/loanhelp/loanhelpfour' element={<LoanhelpFour />} /> 
                                <Route path='/help/loanhelp/loanhelpfive' element={<LoanhelpFive />} /> 
                                <Route path='/help/loanhelp/loanhelpsix' element={<LoanhelpSix />} /> 
                                <Route path='/help/loanhelp/loanhelpseven' element={<LoanhelpSeven />} /> 
                                <Route path='/help/loanhelp/loanhelpeight' element={<LoanhelpEight />} /> 
                                <Route path='/help/loanhelp/loanhelpnine' element={<LoanhelpNine />} /> 
                                <Route path='/help/loanhelp/loanhelpten' element={<LoanhelpTen />} /> 
                            <Route path='/help/savingshelp' element={<Savingshelp />} /> 
                                <Route path='/help/savingshelp/savingshelpone' element={<SavingshelpOne />} /> 
                                <Route path='/help/savingshelp/savingshelptwo' element={<SavingshelpTwo />} /> 
                            <Route path='/help/faq' element={<Faq />} /> 
                                <Route path='/help/faq/faqhelpone' element={<FaqhelpOne />} /> 
                                <Route path='/help/faq/faqhelptwo' element={<FaqhelpTwo />} /> 
                                <Route path='/help/faq/faqhelpthree' element={<FaqhelpThree />} /> 
                                <Route path='/help/faq/faqhelpfour' element={<FaqhelpFour />} /> 
                                <Route path='/help/faq/faqhelpfive' element={<FaqhelpFive />} /> 
                                <Route path='/help/faq/faqhelpsix' element={<FaqhelpSix />} /> 
                                <Route path='/help/faq/faqhelpseven' element={<FaqhelpSeven />} /> 
                                <Route path='/help/faq/faqhelpeight' element={<FaqhelpEight />} /> 
                            <Route path='/help/wallethelp' element={<Wallethelp />} /> 
                                <Route path='/help/wallethelp/wallethelpone' element={<WallethelpOne />} /> 
                                <Route path='/help/wallethelp/wallethelptwo' element={<WallethelpTwo />} /> 
                                <Route path='/help/wallethelp/wallethelpthree' element={<WallethelpThree />} /> 
                                <Route path='/help/wallethelp/wallethelpfour' element={<WallethelpFour />} /> 
                                <Route path='/help/wallethelp/wallethelpfive' element={<WallethelpFive />} /> 
                                <Route path='/help/wallethelp/wallethelpsix' element={<WallethelpSix />} /> 
                                <Route path='/help/wallethelp/wallethelpseven' element={<WallethelpSeven />} /> 
                                <Route path='/help/wallethelp/wallethelpeight' element={<WallethelpEight />} /> 
                                <Route path='/help/wallethelp/wallethelpnine' element={<WallethelpNine />} /> 
                                <Route path='/help/wallethelp/wallethelpten' element={<WallethelpTen />} /> 
                                <Route path='/help/wallethelp/wallethelpeleven' element={<WallethelpEleven />} /> 
                                <Route path='/help/wallethelp/wallethelptwelve' element={<WallethelpTwelve />} /> 
                                <Route path='/help/wallethelp/wallethelpthirteen' element={<WallethelpThirteen />} /> 
                                <Route path='/help/wallethelp/wallethelpfourteen' element={<WallethelpFourteen />} /> 
                                <Route path='/help/wallethelp/wallethelpfifteen' element={<WallethelpFifteen />} /> 
                                <Route path='/help/wallethelp/wallethelpsixteen' element={<WallethelpSixteen />} /> 
                            <Route path='/help/loyalty' element={<Loyalty />} /> 
                                <Route path='/help/loyalty/loyaltyone' element={<LoyaltyOne />} /> 
                                <Route path='/help/loyalty/loyaltytwo' element={<LoyaltyTwo />} /> 
                        <Route path='/signin' element={<SignIn />} /> 
                        <Route path='/company' element={<Company />} /> 
                            <Route path='/company/stats' element={<Stats />} />
                            <Route path='/company/affiliates' element={<Affiliates />} />
                        <Route path='#' element={<Products />} />
                        <Route path='/loans' element={<Loans />} />
                        <Route path='/hodler' element={<Hodler />} />
                        <Route path='/savings' element={<Savings />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/exchange' element={<Exchange />} />
                        <Route path='/help' element={<Help />} />
                        <Route path='/legal' element={<Legal />} />

                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/privacy-notice' element={<PrivacyNotice />} />



                        {/* Apps */}
                        <Route path='/kanban' element={<Kanban />} /> 
                        <Route path='/editor' element={<Editor />} /> 
                        <Route path='/calendar' element={<Calendar />} /> 
                        <Route path='/color-picker' element={<ColorPicker />} /> 
                        

                        {/* Charts */}
                        <Route path='/line' element={<Line />} /> 
                        <Route path='/bar' element={<Bar />} /> 
                        <Route path='/pie' element={<Pie />} /> 
                        <Route path='/financial' element={<Financial />} /> 
                        <Route path='/area' element={<Area />} /> 
                        <Route path='/stacked' element={<Stacked />} /> 
                        <Route path='/stocks' element={<Stocks />} /> 
                        <Route path='/crypto' element={<Crypto />} /> 
                    </Routes>
                </div>

            
            </div>
        </div>
    </div>
  )
}

export default App