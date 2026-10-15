type CaseStudyShellProps = {
  title: string
  description: string
  location: string
  date?: string
}

export function CaseStudyShell({
  title,
  description,
  location,
  date,
}: CaseStudyShellProps) {
  return (
    <div className="projectContent">
      <div className="overviewCard">
        <div className="heading">
          <div className="headingText">
            <h1 className="title">{title}</h1>
            <h2 className="description">{description}</h2>
          </div>
          {date ? <p className="date eyebrow">{date}</p> : null}
        </div>
        <p className="caseStudyMeta eyebrow">{location}</p>
      </div>
      <div className="contentBody">
        <div className="bodyTextWrapper overview" id="overview">
          <h2>Project Overview</h2>
          <p>
            A project summary will go here, along with a few images or other
            assets from the work.
          </p>
        </div>
      </div>
    </div>
  )
}
