import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getTitleTask(
  taskId: string
): Promise<{ title: string; description: string }> {
  try {  
    const response = await axios.get(`${API_URL}/api/tasks/tasksByUser/${taskId}`);

    return {
      title: response.data.titulo,
      description: response.data.descripcion,
    };
  } catch (error) {
    console.error("Error fetching task data:", error);
    throw new Error("Failed to fetch task data");
  }
}
