import React from 'react'
import GPTSearch from './GPTSearch'
import GPTSuggestion from './GPTSuggestion'

const GPTSearchPage = () => {
  return (
    <div>
        <div className=" absolute h-full w-full">
            <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background"
            className=" h-full w-full"
            />
        </div>
        <GPTSearch/>
        <GPTSuggestion/>
    </div>
  )
}

export default GPTSearchPage