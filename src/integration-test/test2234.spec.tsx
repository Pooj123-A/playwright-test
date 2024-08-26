
import { test, expect } from "@playwright/experimental-ct-react";
import App2234 from "../example/App2234.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2234 />);
  await expect(component).toContainText("Learn React");
});
