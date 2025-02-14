export class TemplateApi {
    static async getAllTemplates() {
        const result = await fetch("http://localhost:8080/api/template/all")
        if (result.ok) {
            return result.json()
        } else {
            throw new Error("Failed to fetch templates")
        }
    }
}