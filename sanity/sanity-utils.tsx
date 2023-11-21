import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "ms9b5jl7",
    dataset: "production",
    apiVersion: "2023-03-04",
    });

    return await client.fetch(
        groq`*[_type=
            "project"]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                date,
                content
            
        }`
    )
}