const { API_HOST, A, E, UB } = window.CONFIG

export async function getServices(servicio) {
  try {
    const url = `${API_HOST}/servicios/?a=${A}&e=${E}&ub=${UB}&c=${servicio}`
    console.log(url)
    const res = await fetch(url)
    const result = await res.json()
    return result
  } catch (error) {
    console.log(error)
  }
}
