import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Language from './components/Language';
import Publication from './components/Publication';
import Hobby from './components/Hobby';
import Quote from './components/Quote';
import './styles/Resume.css';
import data from './assets/payload.json';

function Resume() {
  return (
    <div>
        <Header payload={data} />

        <div class='container'>

        {/*Feel IT Services*/}
        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <h3>Experience</h3>
          <p />

          <Experience payload={{
          image: require('./assets/experience_feel_it_services.jpg'),
          position: data.experience.fell_it.position,
          company: data.experience.fell_it.company,
          date: data.experience.fell_it.date,
          experience: data.experience.fell_it.experience
          }} />
        </div>

        {/*Mobiblocks*/}
        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <Experience payload={{
          image: require('./assets/experience_mobiblocks.jpg'),
          position: data.experience.mobiblocks.position,
          company: data.experience.mobiblocks.company,
          date: data.experience.mobiblocks.date,
          experience: data.experience.mobiblocks.experience
          }} />
        </div>

        {/*IT FedCo*/}
        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <Experience payload={{
          image: require('./assets/experience_fed_co.jpg'),
          position: data.experience.fed_co.position,
          company: data.experience.fed_co.company,
          date: data.experience.fed_co.date,
          experience: data.experience.fed_co.experience
          }} />
        </div>

        {/*IT Pro Lab*/}
        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <Experience payload={{
          image: require('./assets/experience_it_pro_lab.jpg'),
          position: data.experience.it_pro_lab.position,
          company: data.experience.it_pro_lab.company,
          date: data.experience.it_pro_lab.date,
          experience: data.experience.it_pro_lab.experience
          }} />
        </div>

        {/*FinComBank*/}
        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <Experience payload={{
          image: require('./assets/experience_fincombank.jpg'),
          position: data.experience.fincombank.position,
          company: data.experience.fincombank.company,
          date: data.experience.fincombank.date,
          experience: data.experience.fincombank.experience
          }} />
        </div>

        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <h3>Education</h3>

          <Education payload={{
          primary: 'College of Informatics in Chisinau',
          secondary: 'Specialized education and Bachelor\'s, Information Technology',
          years: '2003 – 2007'
          }} />

          <Education payload={{
          primary: 'Lyceum B. P. Hasdeu',
          secondary: 'Secondary education, Maths',
          years: '1994 – 2003'
          }} />
        </div>

        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <Language payload={{
          value: data.languages
          }} />
        </div>

        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <h3>Publications</h3>

          <Publication payload={{
          primary: data.publication.first.primary,
          secondary: data.publication.first.secondary,
          date: data.publication.first.date,
          link: data.publication.first.link
          }} />

          <Publication payload={{
          primary: data.publication.second.primary,
          secondary: data.publication.second.secondary,
          date: data.publication.second.date,
          link: data.publication.second.link
          }} />
        </div>

        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <Hobby payload={{
          value: data.hobbies
          }} />
        </div>

        <p />

        <div class='shadow-lg p-3 mb-5 bg-body rounded'>
          <Quote payload={{
          person1: require('./assets/quote_elon_musk.jpg'),
          quote1: data.quotes.musk.quote,
          name1: data.quotes.musk.name,

          person2: require('./assets/quote_irina_shayk.jpg'),
          quote2: data.quotes.shayk.quote,
          name2: data.quotes.shayk.name,

          person3: require('./assets/quote_kim_jong_un.jpg'),
          quote3: data.quotes.jong_un.quote,
          name3: data.quotes.jong_un.name,
          }} />
        </div>
        <p />

      </div>
    </div>
  );
}

export default Resume;