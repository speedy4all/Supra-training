import { NAVIGATE } from "./constants";

export function navigateTo(path, state) {
    return {
        type: NAVIGATE,
        payload: path,
        meta: state,
    }
}