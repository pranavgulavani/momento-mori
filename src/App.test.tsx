import {screen ,render} from "@testing-library/react"
import App from "./App"

it("Should have hello world", () =>{
    render(<App />)
    const message = screen.queryByText(/Momento mori/i)
    expect(message).toBeVisible()
})