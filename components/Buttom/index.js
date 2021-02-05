
import styles from "./styles";

export default function Button({ children, onClick }) {

  const handleLogin = () => {
    
  }

  return (
    <>
      <button onClick={handleLogin}>
        {children}
      </button>
      <style jsx>{styles}</style>
    </>
  )
}
