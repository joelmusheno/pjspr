docker run -it --rm -v $PWD:/opt/ -w /opt  servebox/phantomjs phantomjs cap2pdf.js 'http://qa-survey.facs.org/Accreditation?accreditationApplicationId=1402&masterStandardId=23&masterStandardDetailId=229&personId=-1&companyId=15647' 'test.pdf'
