import React from 'react'

import Layout from '../components/layout'

const TestPage = () => {
  const onPress = () => {
    fetch(
      'https://armoire-prod.s3-us-west-2.amazonaws.com/website/test-video/img.png',
      { method: 'GET' }
    )
      .then(function(response) {
        // alert('response')
        return response.blob()
      })
      .then(function(blob) {
        var file = new File([blob], 'year-in-review.jpg', {
          type: 'image/jpeg',
        })
        var filesArray = [file]
        console.log(file)
        // alert(JSON.stringify(filesArray))
        if (navigator.share) {
          navigator.share({
            // text: '',
            files: filesArray,
            title: 'Year in Review Test',
            // url: 'some_url'
          })
        }
      })
  }

  return (
    <Layout>
      <div style={{ padding: 84, textAlign: 'center', height: '95vh' }}>
        <h1>Test Page</h1>
        <p>Testing out this web share</p>
        <button onClick={onPress}>Test</button>
      </div>
    </Layout>
  )
}

export default TestPage
