// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'https://yourdomain.com/api'

export const submitApplication = async (formData) => {
  try {
    // Convert FormData to regular object for JSON submission
    const data = {}
    for (let [key, value] of Object.entries(formData)) {
      // Skip file uploads for now (handle separately if needed)
      if (value instanceof File || value instanceof FileList) {
        data[key] = value.name || 'File uploaded'
      } else {
        data[key] = value
      }
    }

    const response = await fetch(`${API_URL}/submit-application.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    
    if (!response.ok) {
      throw new Error(result.message || 'Submission failed')
    }

    return result
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export default {
  submitApplication,
}