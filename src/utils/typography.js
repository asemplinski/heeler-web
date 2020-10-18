import Typography from "typography"
import lincoln from "typography-theme-lincoln"

lincoln.bodyColor="white"
lincoln.headerColor="white"



  lincoln.overrideThemeStyles = ({ rhythm }, options) => ({
    
    'ul': {
        padding: '0 0 0 0',
        margin: '0 0 0 0'
        },
    'li': {
        padding: '0 0 0 0',
        margin: '0 0 0 0',
        marker: 'none'
        },

  })



const typography = new Typography(lincoln)



export const { scale, rhythm, options } = typography

export default typography