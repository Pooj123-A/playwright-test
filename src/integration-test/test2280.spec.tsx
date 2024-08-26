
import { test, expect } from "@playwright/experimental-ct-react";
import App2280 from "../example/App2280.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2280 />);
  await expect(component).toContainText("Learn React");
});
