const data = useStaticQuery(graphql`
  query {
    techLearningImage: file(relativePath: { eq: "techlearning.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    solveImage: file(relativePath: { eq: "solveheader.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oddJobsImage: file(relativePath: { eq: "oddjobsmockup.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
