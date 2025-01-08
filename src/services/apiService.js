

import axios from 'axios';

const BASE_API_URL = "/api"; // Use the proxy path
const LANGFLOW_ID = "a98fd801-76d1-41ed-8e76-52c93479eef3";
const FLOW_ID = "3986bd05-f7d3-43d4-aadb-322e1ee7fb50";
const APPLICATION_TOKEN = 'AstraCS:QUruREhCptCezfhalHQcgutK:ebfbdd63250bd1452177ddbdc0b13169a4f5d95094a5979142cf6de02184f218';
const ENDPOINT = "admin";

export const runFlow = async (message) => {
  const api_url = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${ENDPOINT}`;
  const payload = {
    input_value: message,
    output_type: "chat",
    input_type: "chat",
  };
  const headers = {
    Authorization: `Bearer ${APPLICATION_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(api_url, payload, { headers });
    return response.data;
  } catch (error) {
    console.error("Error running flow:", error);
    throw error;
  }
};