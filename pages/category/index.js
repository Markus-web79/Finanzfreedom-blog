export default function CategoryPlaceholder() {
  return <div />;
}

export async function getStaticProps() {
  return {
    props: {}
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false
  };
}
