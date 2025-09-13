          export async function POST(request: Request): Promise<Response> {
            const { email, password } = await request.json();

            if(email === "salgado.cfk@gmail.com" && password === "123"){
                return new Response(
                JSON.stringify({
                email,
                name: "Clenylda Kennedy",
                }),
                {
                headers: { "Content-Type": "application/json" },
                })
            }
            return new Response ("Usuario e/ou senha Incorreta!" ,{
                status: 404,
                headers: {
                    "content-type" : "text/plain",
                }
            }

            )
            }