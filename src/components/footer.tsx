import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <span>
        {'© '}
        <ExtLink href="https://www.rs.tus.ac.jp/vml">谷口研究室</ExtLink>{' '}
        {'2015 - '}
        {new Date().getFullYear()}
      </span>
    </footer>
  </>
)
