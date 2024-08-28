
import { test, expect } from "@playwright/experimental-ct-react";
import App2517 from "./App2517.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2517 />);
  await expect(component).toContainText("Learn React");
});
