"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function page() {
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:5000/spotify')
            console.log("response: ", response);
            if (response.ok) {
                const data = await response.json();
                console.log("data: ", data.authorization);
                window.open(data.authorization,'_blank')
              } else {
                const errorData = await response.json();
                console.log("Error response:", response.status, errorData);
              }
        } catch (error) {
            
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <button type="submit" className="bg-red-500">Spotify</button>
            </form>
        </div>
    )
}