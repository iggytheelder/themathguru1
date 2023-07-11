import LatexRenderer from '@components/LatexRenderer'

export default function M({ children }) {
  return (
    <LatexRenderer latex = {children}></LatexRenderer>
  )
}
