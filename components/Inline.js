import LatexRenderer from '@components/LatexRenderer'

export default function I({ children }) {
  return (
    <LatexRenderer latex = {children} inline = {true}></LatexRenderer>
  )
}
