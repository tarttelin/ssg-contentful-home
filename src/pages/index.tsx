import * as React from "react"
import { graphql } from 'gatsby'
import Section from '../components/section'
import Logo from "../components/logo"
import "../app.css"


const IndexPage:React.FC<any> = ({data}) => {
  const sections = data.allContentfulSection.nodes
  return (
    <main>
      <title>Home Page</title>
      <Logo/>
      {sections.map( (section: { title: any; body: { childMarkdownRemark: { html: any } } }) => (
        <Section title={section.title} body={section.body.childMarkdownRemark.html} />)) }
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulSection(sort: { fields: [ordering], order: ASC }) {
      nodes {
        title
        body {
          childMarkdownRemark {
            html
          }
        }
        slug
    }
  }
}
`
