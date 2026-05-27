import Navbar from './Navbar'
import styles from './index.module.css'
import Footer from './Footer'
 
 function PhoneScreen() {
   return (
     <div className={styles.main}>
      <Navbar/>
      <Footer />
     </div>
   )
 }
 
 export default PhoneScreen