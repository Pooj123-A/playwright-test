
import { test, expect } from "@playwright/experimental-ct-react";
import App2711 from "./App2711.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2711 />);
  await expect(component).toContainText("Learn React");
});
