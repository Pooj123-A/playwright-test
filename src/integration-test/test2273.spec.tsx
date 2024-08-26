
import { test, expect } from "@playwright/experimental-ct-react";
import App2273 from "../example/App2273.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2273 />);
  await expect(component).toContainText("Learn React");
});
