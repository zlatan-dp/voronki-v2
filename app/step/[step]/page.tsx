export default async function StepPage({
                                         params,
                                       }: {
  params: Promise<{ step: string }>
}) {
  const step = (await params).step
  const stepsArr = step.split('.')
  const stepsCount = stepsArr.length
  console.log(typeof step)
  return (
      <>
        <h1>Step: {step}</h1>
        <div className="steps-count">
          You are on {stepsCount} step.
        </div>
      </>
  )
}