
export const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkTY79xn2AbpPQkGhwl6LnKb7UAXX7InrwkNqZ01wIBx1WAw7H-TkT834-6qyC_p9Neg/exec";

export async function getEvents() {
    let params = new URLSearchParams();
    params.append("a", "getEvents");

    const res = await fetch(`${SCRIPT_URL}?${params}`, {
        method: "GET"
    });

    if (!res.ok) {
        throw Error("Could not load events.")
    }

    const json = await res.json();

    return json;
}

export async function getDesksObliterated() {
    let params = new URLSearchParams();
    params.append("a", "getStatistic");
    params.append("s", "desks_obliterated");

    const res = await fetch(`${SCRIPT_URL}?${params}`, {
        method: "GET"
    });

    if (!res.ok) {
        throw Error("Could not load statistics.");
    }

    const json = await res.json();
    return json;
}