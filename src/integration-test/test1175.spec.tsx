
import { test, expect } from "@playwright/experimental-ct-react";
import App1175 from "../example/App1175.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1175 />);
  await expect(component).toContainText("Learn React");
});