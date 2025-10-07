export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
 
  return (
    <div>
      <h1>{(await params).slug}</h1>
    </div>
  )
}