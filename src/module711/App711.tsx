
import { test, expect } from "@playwright/experimental-ct-react";
import App711 from "./App711.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App711 />);
  await expect(component).toContainText("Learn React");
});
