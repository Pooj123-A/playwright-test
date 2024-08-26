
import { test, expect } from "@playwright/experimental-ct-react";
import App2145 from "../example/App2145.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2145 />);
  await expect(component).toContainText("Learn React");
});
