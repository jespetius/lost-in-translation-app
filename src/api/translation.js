import { createHeaders } from "./index";

const url = process.env.REACT_APP_API_URL;

// this handles translations requests

//PATCH FUNCTION > PATCH
export const addTranslation = async (user, translation) => {
  try {
    const response = await fetch(`${url}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation]
      })
    });
    if (!response.ok) {
      throw new Error("TRANSLATION API: problems with patching the translations check id and options");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, []];
  }
};

export const ClearTranslationHistory = async userId => {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: []
      })
    });
    if (!response.ok) {
      throw new Error("Clear Translation: Couldnt clear history check id");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
