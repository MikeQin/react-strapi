import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url)
        const json = await res.json()

        setData(json)
        setLoading(false)

        console.log(json)

      } catch (err) {

        setError(err)
        setLoading(false)

        console.err(err)
      }
    }

    fetchData();
  }, [url])


  return { loading, error, data }
}


export default useFetch