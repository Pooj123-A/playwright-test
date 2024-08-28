
import { test, expect } from "@playwright/experimental-ct-react";
import App2509 from "./App2509.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2509 />);
  await expect(component).toContainText("Learn React");
});
