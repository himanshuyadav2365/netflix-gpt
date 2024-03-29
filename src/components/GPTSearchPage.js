import React from 'react'
import GPTSearch from './GPTSearch'
import GPTSuggestion from './GPTSuggestion'

const GPTSearchPage = () => {
  return (
    <div>
        <div className=" fixed h-full w-full -z-10">
            <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background"
            className=" h-full w-full object-cover"
            />
        </div>
        <div className='pt-[0%]'>
          <GPTSearch/>
          <GPTSuggestion/>
        </div>
        
    </div>
  )
}

export default GPTSearchPage