const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8000
const mongoose = require('mongoose');
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const cors = require('cors');
const link='https://www.buddy4study.com';

const scholarships = []

app.use(cors());

// newspapers.forEach(newspaper => {
    axios.get('https://www.buddy4study.com/scholarships')
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            $('.scholarshipslistcard_scholarshipName__1JExQ', html).each(function () {
                const scholarshipTitle = $(this).find('h4 a span').text().trim();
          
                // Extract eligibility text
                const eligibilitySection = $(this).siblings('.scholarshipslistcard_awardEligibilityWrapper__W-r3m');
                const eligibilityText = eligibilitySection.find('.scholarshipslistcard_box__S_Oby').text().toLowerCase();
          
                // Check if either title or eligibility contains the word "transgender"
                if (scholarshipTitle.toLowerCase().includes('transgender') || eligibilityText.includes('transgender')) {
                  const scholarshipLink = $(this).find('h4 a').attr('href');
                  scholarships.push({
                    title: scholarshipTitle,
                    link: link+scholarshipLink
                  });
                }
              });

        })

app.get('/scholarships', (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.json(scholarships)
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
