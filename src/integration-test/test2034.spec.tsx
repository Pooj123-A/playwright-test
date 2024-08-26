
import { test, expect } from "@playwright/experimental-ct-react";
import App2034 from "../example/App2034.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2034 />);
  await expect(component).toContainText("Learn React");
});
