import axios from 'axios'

export function useEnv<T = any>(key: string): T | null {
  return window.configs[key] ?? import.meta.env[key] ?? null
}

export const useDownload = (blob: BlobPart, fileName?: string) => {
  const _url = window.URL.createObjectURL(new Blob([blob]))
  const link = document.createElement('a')
  link.href = _url
  link.setAttribute('download', fileName ?? '')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const useDownloadUrl = async (url: string, fileName?: string) => {
  try {
    const res = await axios.get(url, {
      responseType: 'blob'
    })
    useDownload(res.data, fileName)
  } catch (error) {
    console.log(error)
  }
}
