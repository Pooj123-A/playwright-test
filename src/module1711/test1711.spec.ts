
import { test, expect } from "@playwright/experimental-ct-react";
import App1711 from "./App1711.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1711 />);
  await expect(component).toContainText("Learn React");
});
