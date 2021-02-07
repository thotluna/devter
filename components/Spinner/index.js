import { colors } from "styles/theme"

export default function index({ size }) {
  return (
    <>
      <div className="spinner-root">
        <div className="par">
          <div className="eye">
            <div className="cornea">
              <div className="iris"></div>
            </div>
          </div>
        </div>
        <div className="par">
          <div className="eye">
            <div className="cornea">
              <div className="iris"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .spinner-root {
          display: flex;
          align-items: center;
        }
        .eye {
          position: relative;
          width: 1em;
          height: 1.5em;
          background-color: ${colors.white};
          border-radius: 1em;
          border: 2px solid ${colors.secondary};
        }
        .cornea {
          width: 0.5em;
          height: 0.5em;
          background-color: ${colors.primary};
          border-radius: 1em;
          position: relative;
          top: 0.6875em;
          left: 0.0625em;
          animation-duration: 3s;
          animation-name: moveEyes;
        }

        .iris {
          width: 0.2em;
          height: 0.2em;
          background-color: ${colors.white};
          border-radius: 1em;
          position: relative;
          top: 0;
          left: 0;
        }

        @keyframe moveEyes {
          0% {
            top: 0.06875em;
          }
          50% {
            top: 0.25em;
          }
          100% {
            top: 0.06875em;
          }
        }
      `}</style>
    </>
  )
}
