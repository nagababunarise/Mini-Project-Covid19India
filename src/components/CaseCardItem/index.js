import './index.css'

const CaseCardItem = props => {
  const {
    stateTotal,
    showActiveCases,
    showDeceasedCases,
    showRecoveredCases,
    showConfirmedCases,
  } = props

  const {confirmed, deceased, recovered, active} = stateTotal

  const activeConfirmedClass = showConfirmedCases
    ? 'confirmed-active-class'
    : ''
  const activeActiveClass = showActiveCases ? 'active-active-class' : ''

  const activeRecoveredClass = showRecoveredCases
    ? `recovered-active-class`
    : ''

  const activeDeceasedClass = showDeceasedCases ? `deceased-active-class` : ''

  return (
    <>
      <div className="main-card">
        <div
          data-testid="countryWideConfirmedCases"
          className={`country-wide confirmed ${activeConfirmedClass}`}
        >
          <p className="case-card-heading">Confirmed</p>
          <img
            src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/check-mark_1_e83qpy.png"
            alt="country wide confirmed cases pic"
          />
          <p className="case-count confirmed">{confirmed}</p>
        </div>
        <div
          data-testid="countryWideActiveCases"
          className={`country-wide active ${activeActiveClass}`}
        >
          <p className="case-card-heading">Active</p>
          <img
            src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/protection_1_roaazd.png"
            alt="country wide active cases pic"
          />
          <p className="case-count">{active}</p>
        </div>
        <div
          data-testid="countryWideRecoveredCases"
          className={`country-wide recovered ${activeRecoveredClass}`}
        >
          <p className="case-card-heading">Recovered</p>
          <img
            src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/recovered_1_pz28bz.png"
            alt="country wide recovered cases pic"
          />
          <p className="case-count">{recovered}</p>
        </div>

        <div
          data-testid="countryWideDeceasedCases"
          className={`country-wide deceased ${activeDeceasedClass}`}
        >
          <p className="case-card-heading">Deceased</p>
          <img
            src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/breathing_1_uxmvq9.png"
            alt="country wide deceased cases pic"
          />
          <p className="case-count">{deceased}</p>
        </div>
      </div>
    </>
  )
}
export default CaseCardItem
